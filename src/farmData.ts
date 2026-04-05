/**
 * US Wind Farm Data — loaded at runtime from GitHub Pages
 * Source: uswtdb_farm_level_5mw_min.csv
 */

export interface TurbineClass {
    manufacturer: string;
    model: string;
    count: number;
    capacityKW: number;
    totalCapacityKW: number;
    hubHeight: number | null;
    rotorDiameter: number | null;
}

export interface WindFarm {
    name: string;
    state: string;
    county: string;
    year: number | null;
    capacity: number;  // MW
    totalTurbines: number;
    lon: number;
    lat: number;
    interconnect: "Western" | "Eastern" | "ERCOT";
    turbineClasses: TurbineClass[];
}

// Populated by loadPluginData() in plugin.svelte
export let WIND_FARMS: WindFarm[] = [];

export function setWindFarms(data: WindFarm[]): void {
    WIND_FARMS = data;
}
