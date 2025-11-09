/**
 * Marker Component to reference a mesh
*/
export class AssetReferenceComponent {
  public meshID: string;

  constructor(meshID: string) {
    this.meshID = meshID;
  }
}
