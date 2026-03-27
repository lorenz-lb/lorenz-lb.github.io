import type { Component } from "../components/component";

/**
 * Handles the creation of entities and the adding of components.
 */
export class EntityManager {
    private nextEntity: number;
    private componentStore: Map<string, Map<number, any>>;

    constructor() {
        this.nextEntity = 0;
        this.componentStore = new Map();
    }

    /**
     * Returns a new, unused entity ID
     */
    createEntity(): number {
        return this.nextEntity++;
    }

    /**
     * Adds the component argument to the entity
     */
    addComponent<T extends Component>(entity: number, component: T): void {

        const typeName = component.constructor.name;

        if (!this.componentStore.has(typeName)) {
            this.componentStore.set(typeName, new Map());
        }

        this.componentStore.get(typeName)!.set(entity, component);
    }

    /**
     * Returns a map of all entitys with a given component
     */
    getComponents<T extends Component>(type: new (...args: any[]) => T): Map<number, T> {
        const typeName = type.name;
        return this.componentStore.get(typeName) || new Map<number, T>();
    }
}
