import { vec3, mat4, vec4 } from 'gl-matrix';
import { TransformComponent } from "../components/transformComponent";
import { AssetReferenceComponent } from "../components/assetReferenceComponent";
import { MeshManager } from "../control/meshManager";

export interface RaycastHitResult {
    entityID: number;
    distance: number;
}

function Deg2Rad(theta: number): number {
    return theta * Math.PI / 180;
}

/**
 * Raycaster to cast a ray in a direction
 * CURRENTLY ONLY USED IN DEBUG MODE
 */
export class Raycaster {

    /**
     * Casts a ray in a direction and returns the entity and distance of first hit
    */
    public cast(
        rayOrigin: vec3,
        rayDirection: vec3,
        transforms: Map<number, TransformComponent>,
        assetRefs: Map<number, AssetReferenceComponent>,
        meshManager: MeshManager
    ): RaycastHitResult {

        let nearestHitID: number = -1;
        let minDistance: number = Infinity;

        for (const [entityID, assetRef] of assetRefs.entries()) {
            const transform = transforms.get(entityID);

            const vertices = meshManager.getLocalVertices(assetRef.meshID);

            if (!transform || !vertices) continue;

            console.log("Check Mesh:\t", assetRef.meshID);
            const hit = this.findClosestHitOnMesh(rayOrigin, rayDirection, vertices, transform);

            if (hit && hit.distance < minDistance) {
                minDistance = hit.distance;
                nearestHitID = entityID;
            }
        }

        return { entityID: nearestHitID, distance: minDistance };
    }

    private findClosestHitOnMesh(
        rayOrigin: vec3,
        rayDirection: vec3,
        vertices: Float32Array,
        transform: TransformComponent
    ): { distance: number } | null {

        let closestHit: { distance: number } | null = null;
        let minDistance: number = Infinity;

        const modelMatrix = mat4.create();
        mat4.identity(modelMatrix);

        mat4.translate(modelMatrix, modelMatrix, transform.position);

        mat4.rotateX(modelMatrix, modelMatrix, Deg2Rad(transform.eulers[0]));
        mat4.rotateY(modelMatrix, modelMatrix, Deg2Rad(transform.eulers[1]));
        mat4.rotateZ(modelMatrix, modelMatrix, Deg2Rad(transform.eulers[2]));

        mat4.scale(modelMatrix, modelMatrix, transform.scale);


        const stride = 8;

        const localP = vec3.create();
        const p1 = vec3.create();
        const p2 = vec3.create();
        const p3 = vec3.create();
        const tempVec4 = vec4.create();

        for (let i = 0; i < vertices.length; i += stride * 3) {

            // P1
            vec3.set(localP, vertices[i + 0], vertices[i + 1], vertices[i + 2]);
            vec4.set(tempVec4, localP[0], localP[1], localP[2], 1.0);
            vec4.transformMat4(tempVec4, tempVec4, modelMatrix);
            vec3.set(p1, tempVec4[0], tempVec4[1], tempVec4[2]);

            // P2
            vec3.set(localP, vertices[i + stride + 0], vertices[i + stride + 1], vertices[i + stride + 2]);
            vec4.set(tempVec4, localP[0], localP[1], localP[2], 1.0);
            vec4.transformMat4(tempVec4, tempVec4, modelMatrix);
            vec3.set(p2, tempVec4[0], tempVec4[1], tempVec4[2]);

            // P3
            vec3.set(localP, vertices[i + stride * 2 + 0], vertices[i + stride * 2 + 1], vertices[i + stride * 2 + 2]);
            vec4.set(tempVec4, localP[0], localP[1], localP[2], 1.0);
            vec4.transformMat4(tempVec4, tempVec4, modelMatrix);
            vec3.set(p3, tempVec4[0], tempVec4[1], tempVec4[2]);


            const hitDistance = this.mollerTrumbore(rayOrigin, rayDirection, p1, p2, p3);

            if (hitDistance !== null && hitDistance > 0 && hitDistance < minDistance) {
                minDistance = hitDistance;
                closestHit = { distance: minDistance };
            }
        }

        return closestHit;
    }

    private mollerTrumbore(rayOrigin: vec3, rayDirection: vec3, v0: vec3, v1: vec3, v2: vec3): number | null {
        const EPSILON = 0.0000001;
        const edge1 = vec3.create();
        const edge2 = vec3.create();
        vec3.sub(edge1, v1, v0);
        vec3.sub(edge2, v2, v0);

        const pvec = vec3.create();
        vec3.cross(pvec, rayDirection, edge2);

        const det = vec3.dot(edge1, pvec);

        if (det < EPSILON) {
            return null;
        }

        const tvec = vec3.create();
        vec3.sub(tvec, rayOrigin, v0);

        const u = vec3.dot(tvec, pvec);
        if (u < 0 || u > det) {
            return null;
        }

        const qvec = vec3.create();
        vec3.cross(qvec, tvec, edge1);

        const v = vec3.dot(rayDirection, qvec);
        if (v < 0 || u + v > det) {
            return null;
        }

        const t = vec3.dot(edge2, qvec);

        const invDet = 1.0 / det;
        const final_t = t * invDet;

        if (final_t < 0) {
            return null;
        }

        return final_t;
    }
}
