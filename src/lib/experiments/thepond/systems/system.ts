/**
 * Base class for all systems
 */
export interface System {
    update(...componentMaps: any[]): any;
}
