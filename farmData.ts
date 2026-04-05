/**
 * US Wind Farm Data (Grouped by Farm)
 * Source: uswtdb_farm_level_5mw_min.csv
 * Contains wind farms with minimum 5MW capacity, grouped with turbine classes
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

export const WIND_FARMS: WindFarm[] = [
  {
    name: "25 Mile Creek",
    state: "OK",
    county: "Ellis County",
    year: 2022,
    capacity: 250.0,
    totalTurbines: 60,
    lon: -99.799377,
    lat: 36.440704,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 1, capacityKW: 2200.0, totalCapacityKW: 2200.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 59, capacityKW: 4200.0, totalCapacityKW: 247800.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "30 MW Iowa DG Portfolio",
    state: "IA",
    county: "Story County",
    year: 2017,
    capacity: 30.0,
    totalTurbines: 10,
    lon: -93.430367,
    lat: 42.028233,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3000", count: 10, capacityKW: 3000.0, totalCapacityKW: 30000.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "AG Land 1",
    state: "IA",
    county: "Story County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.325691,
    lat: 42.20639,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "AG Land 2",
    state: "IA",
    county: "Story County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.428093,
    lat: 42.146091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "AG Land 3",
    state: "IA",
    county: "Story County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.431992,
    lat: 42.145592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "AG Land 4",
    state: "IA",
    county: "Story County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.354897,
    lat: 41.904194,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "AG Land 5",
    state: "IA",
    county: "Hamilton County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.632095,
    lat: 42.335491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "AG Land 6",
    state: "IA",
    county: "Hamilton County",
    year: 2012,
    capacity: 9.6,
    totalTurbines: 1,
    lon: -93.636795,
    lat: 42.335491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Adair",
    state: "IA",
    county: "Adair County",
    year: 2008,
    capacity: 174.8,
    totalTurbines: 76,
    lon: -94.689392,
    lat: 41.470192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 76, capacityKW: 2300.0, totalCapacityKW: 174800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Adams",
    state: "IA",
    county: "Adams County",
    year: 2016,
    capacity: 154.284,
    totalTurbines: 64,
    lon: -94.675087,
    lat: 40.938133,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 64, capacityKW: 2415.0, totalCapacityKW: 154560.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Adams Wind Generations, LLC",
    state: "MN",
    county: "Meeker County",
    year: 2011,
    capacity: 19.8,
    totalTurbines: 12,
    lon: -94.731689,
    lat: 44.916992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Alstom", model: "ECO 86", count: 12, capacityKW: 1670.0, totalCapacityKW: 20040.0, hubHeight: 80.0, rotorDiameter: 85.5 }
    ]
  },
  {
    name: "Agriwind",
    state: "IL",
    county: "Bureau County",
    year: 2008,
    capacity: 8.4,
    totalTurbines: 4,
    lon: -89.623596,
    lat: 41.301693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 4, capacityKW: 2100.0, totalCapacityKW: 8400.0, hubHeight: 80.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Ainsworth Wind Project (NPPD)",
    state: "NE",
    county: "Brown County",
    year: 2005,
    capacity: 59.4,
    totalTurbines: 36,
    lon: -99.913094,
    lat: 42.455193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 36, capacityKW: 1650.0, totalCapacityKW: 59400.0, hubHeight: 70.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Alexander",
    state: "KS",
    county: "Rush County",
    year: 2015,
    capacity: 48.3,
    totalTurbines: 21,
    lon: -99.527443,
    lat: 38.450241,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 21, capacityKW: 2300.0, totalCapacityKW: 48300.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Alite Wind Farm",
    state: "CA",
    county: "Kern County",
    year: 2008,
    capacity: 24.0,
    totalTurbines: 8,
    lon: -118.339989,
    lat: 35.035995,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 8, capacityKW: 3000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Allegheny Ridge",
    state: "PA",
    county: "Cambria County",
    year: 2007,
    capacity: 80.0,
    totalTurbines: 42,
    lon: -78.587296,
    lat: 40.389294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 40, capacityKW: 2000.0, totalCapacityKW: 80000.0, hubHeight: 78.0, rotorDiameter: 87.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "G87-2.0", count: 2, capacityKW: 2000.0, totalCapacityKW: 4000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Alta Farms II",
    state: "IL",
    county: "De Witt County",
    year: 2023,
    capacity: 200.5,
    totalTurbines: 50,
    lon: -89.064056,
    lat: 40.17667,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.2-145", count: 1, capacityKW: 4200.0, totalCapacityKW: 4200.0, hubHeight: 107.5, rotorDiameter: null },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.5-145", count: 38, capacityKW: 4500.0, totalCapacityKW: 171000.0, hubHeight: 107.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Alta I",
    state: "CA",
    county: "Kern County",
    year: 2010,
    capacity: 150.0,
    totalTurbines: 101,
    lon: -118.361389,
    lat: 35.020676,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 101, capacityKW: 1500.0, totalCapacityKW: 151500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Alta II",
    state: "CA",
    county: "Kern County",
    year: 2010,
    capacity: 150.0,
    totalTurbines: 41,
    lon: -118.257988,
    lat: 35.028294,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 41, capacityKW: 3000.0, totalCapacityKW: 123000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta III",
    state: "CA",
    county: "Kern County",
    year: 2011,
    capacity: 150.0,
    totalTurbines: 50,
    lon: -118.30629,
    lat: 35.002296,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 50, capacityKW: 3000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta IV",
    state: "CA",
    county: "Kern County",
    year: 2011,
    capacity: 102.0,
    totalTurbines: 37,
    lon: -118.258888,
    lat: 35.020794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 37, capacityKW: 3000.0, totalCapacityKW: 111000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta Mesa",
    state: "CA",
    county: "Riverside County",
    year: 2025,
    capacity: 28.0,
    totalTurbines: 7,
    lon: -116.65992,
    lat: 33.941273,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-4.0", count: 7, capacityKW: 4000.0, totalCapacityKW: 28000.0, hubHeight: 92.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Alta V",
    state: "CA",
    county: "Kern County",
    year: 2011,
    capacity: 168.0,
    totalTurbines: 56,
    lon: -118.24482,
    lat: 35.009449,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 56, capacityKW: 3000.0, totalCapacityKW: 168000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta VI (partial)",
    state: "CA",
    county: "Kern County",
    year: 2011,
    capacity: 132.0,
    totalTurbines: 46,
    lon: -118.322189,
    lat: 35.017231,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 46, capacityKW: 3000.0, totalCapacityKW: 138000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta VIII (partial)",
    state: "CA",
    county: "Kern County",
    year: 2011,
    capacity: 129.0,
    totalTurbines: 58,
    lon: -118.224388,
    lat: 34.991196,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 58, capacityKW: 3000.0, totalCapacityKW: 174000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Alta X",
    state: "CA",
    county: "Kern County",
    year: 2013,
    capacity: 136.8,
    totalTurbines: 48,
    lon: -118.246635,
    lat: 35.084118,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 48, capacityKW: 2850.0, totalCapacityKW: 136800.0, hubHeight: 85.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Alta XI",
    state: "CA",
    county: "Kern County",
    year: 2013,
    capacity: 89.65,
    totalTurbines: 49,
    lon: -118.359886,
    lat: 35.108196,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 42, capacityKW: 1700.0, totalCapacityKW: 71400.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 7, capacityKW: 2850.0, totalCapacityKW: 19950.0, hubHeight: 85.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Amadeus",
    state: "TX",
    county: "Fisher County",
    year: 2020,
    capacity: 250.12,
    totalTurbines: 96,
    lon: -100.591576,
    lat: 32.898556,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 20, capacityKW: 1790.0, totalCapacityKW: 35800.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 76, capacityKW: 2820.0, totalCapacityKW: 214320.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Amazon Wind Farm (Fowler Ridge)",
    state: "IN",
    county: "Benton County",
    year: 2015,
    capacity: 149.5,
    totalTurbines: 65,
    lon: -87.378258,
    lat: 40.643833,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 65, capacityKW: 2300.0, totalCapacityKW: 149500.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Amazon Wind Farm Texas",
    state: "TX",
    county: "Scurry County",
    year: 2017,
    capacity: 253.0,
    totalTurbines: 110,
    lon: -101.000771,
    lat: 32.890293,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 110, capacityKW: 2300.0, totalCapacityKW: 253000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Amazon Wind Farm US Central",
    state: "OH",
    county: "Paulding County",
    year: 2016,
    capacity: 100.8,
    totalTurbines: 48,
    lon: -84.734848,
    lat: 41.148052,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 48, capacityKW: 2100.0, totalCapacityKW: 100800.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Amazon Wind Farm US East",
    state: "NC",
    county: "Perquimans County",
    year: 2017,
    capacity: 208.0,
    totalTurbines: 104,
    lon: -76.459023,
    lat: 36.315113,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.0", count: 104, capacityKW: 2000.0, totalCapacityKW: 208000.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Anacacho",
    state: "TX",
    county: "Kinney County",
    year: 2012,
    capacity: 99.0,
    totalTurbines: 55,
    lon: -100.185776,
    lat: 29.178185,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 55, capacityKW: 1800.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Anderson Wind Project",
    state: "NM",
    county: "Chaves County",
    year: 2014,
    capacity: 14.95,
    totalTurbines: 8,
    lon: -103.855804,
    lat: 33.029808,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "Vestas", model: "V82-1.65", count: 3, capacityKW: 1650.0, totalCapacityKW: 4950.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Anticline Wind",
    state: "WY",
    county: "Natrona County",
    year: 2024,
    capacity: 124.34,
    totalTurbines: 38,
    lon: -106.218323,
    lat: 43.185745,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 2, capacityKW: 2520.0, totalCapacityKW: 5040.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 4, capacityKW: 2720.0, totalCapacityKW: 10880.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 32, capacityKW: 3400.0, totalCapacityKW: 108800.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Antrim",
    state: "NH",
    county: "Hillsborough County",
    year: 2019,
    capacity: 28.8,
    totalTurbines: 9,
    lon: -72.019501,
    lat: 43.056614,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.2-113", count: 8, capacityKW: 3200.0, totalCapacityKW: 25600.0, hubHeight: 92.5, rotorDiameter: 113.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SWT-3.2-113", count: 1, capacityKW: 3200.0, totalCapacityKW: 3200.0, hubHeight: 79.5, rotorDiameter: 113.0 }
    ]
  },
  {
    name: "Appaloosa Run",
    state: "TX",
    county: "Upton County",
    year: 2022,
    capacity: 174.84,
    totalTurbines: 62,
    lon: -101.865356,
    lat: 31.15476,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 1, capacityKW: 2820.0, totalCapacityKW: 2820.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.77-127", count: 61, capacityKW: 2771.0, totalCapacityKW: 169031.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Apple Blossom",
    state: "MI",
    county: "Huron County",
    year: 2017,
    capacity: 100.05,
    totalTurbines: 29,
    lon: -83.307274,
    lat: 43.818142,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 29, capacityKW: 3450.0, totalCapacityKW: 100050.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Aragonne Mesa 2",
    state: "NM",
    county: "Guadalupe County",
    year: 2022,
    capacity: 143.06,
    totalTurbines: 50,
    lon: -105.011391,
    lat: 34.821106,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 20, capacityKW: 2500.0, totalCapacityKW: 50000.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 30, capacityKW: 2820.0, totalCapacityKW: 84600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Aragonne Mesa 2 Expansion",
    state: "NM",
    county: "Guadalupe County",
    year: 2022,
    capacity: 91.5,
    totalTurbines: 33,
    lon: -105.02269,
    lat: 34.809635,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 30, capacityKW: 2820.0, totalCapacityKW: 84600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Arbor Hill",
    state: "IA",
    county: "Adair County",
    year: 2018,
    capacity: 29.17,
    totalTurbines: 125,
    lon: -94.310707,
    lat: 41.394783,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 125, capacityKW: 2000.0, totalCapacityKW: 250000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Arbor Hill 2019",
    state: "IA",
    county: "Adair County",
    year: 2020,
    capacity: 61.4,
    totalTurbines: 17,
    lon: -94.308823,
    lat: 41.473969,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 5, capacityKW: 2200.0, totalCapacityKW: 11000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 12, capacityKW: 4200.0, totalCapacityKW: 50400.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Arbuckle Mountain",
    state: "OK",
    county: "Murray County",
    year: 2015,
    capacity: 100.0,
    totalTurbines: 50,
    lon: -97.199501,
    lat: 34.379906,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Arkwright Summit",
    state: "NY",
    county: "Chautauqua County",
    year: 2018,
    capacity: 78.4,
    totalTurbines: 36,
    lon: -79.259651,
    lat: 42.431263,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 36, capacityKW: 2000.0, totalCapacityKW: 72000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Armadillo Flats",
    state: "OK",
    county: "Garfield County",
    year: 2018,
    capacity: 247.275,
    totalTurbines: 104,
    lon: -97.525116,
    lat: 36.313305,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 2, capacityKW: 1715.0, totalCapacityKW: 3430.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 58, capacityKW: 1790.0, totalCapacityKW: 103820.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Armenia Mountain",
    state: "PA",
    county: "Bradford County",
    year: 2009,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -76.839195,
    lat: 41.764294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Ashtabula II",
    state: "ND",
    county: "Steele County",
    year: 2009,
    capacity: 120.0,
    totalTurbines: 80,
    lon: -97.935989,
    lat: 47.302692,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Ashtabula III",
    state: "ND",
    county: "Barnes County",
    year: 2010,
    capacity: 62.4,
    totalTurbines: 39,
    lon: -97.991493,
    lat: 47.078892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 39, capacityKW: 1600.0, totalCapacityKW: 62400.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Ashtabula Wind Center",
    state: "ND",
    county: "Barnes County",
    year: 2008,
    capacity: 196.5,
    totalTurbines: 131,
    lon: -97.916893,
    lat: 47.16629,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 32, capacityKW: 1500.0, totalCapacityKW: 48000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 99, capacityKW: 1500.0, totalCapacityKW: 148500.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Aurora County Wind",
    state: "SD",
    county: "Aurora County",
    year: 2018,
    capacity: 20.7,
    totalTurbines: 9,
    lon: -98.749001,
    lat: 43.72134,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 9, capacityKW: 2300.0, totalCapacityKW: 20700.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Aurora Wind",
    state: "ND",
    county: "Williams County",
    year: 2021,
    capacity: 298.8,
    totalTurbines: 71,
    lon: -103.110291,
    lat: 48.535072,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 56, capacityKW: 4800.0, totalCapacityKW: 268800.0, hubHeight: 108.0, rotorDiameter: 149.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 15, capacityKW: 2000.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Auwahi Wind",
    state: "HI",
    county: "Maui County",
    year: 2012,
    capacity: 24.0,
    totalTurbines: 8,
    lon: -156.31839,
    lat: 20.595398,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 8, capacityKW: 3000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Aviator Wind",
    state: "TX",
    county: "Coke County",
    year: 2020,
    capacity: 525.02,
    totalTurbines: 191,
    lon: -100.645599,
    lat: 31.797903,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 136, capacityKW: 2720.0, totalCapacityKW: 369920.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 55, capacityKW: 2820.0, totalCapacityKW: 155100.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Azure Sky Wind Project",
    state: "TX",
    county: "Throckmorton County",
    year: 2022,
    capacity: 350.15,
    totalTurbines: 79,
    lon: -99.215134,
    lat: 33.202396,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 65, capacityKW: 4800.0, totalCapacityKW: 312000.0, hubHeight: 108.0, rotorDiameter: 149.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-3.45", count: 7, capacityKW: 3450.0, totalCapacityKW: 24150.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Babbitt Ranch Wind",
    state: "AZ",
    county: "Coconino County",
    year: 2024,
    capacity: 162.96,
    totalTurbines: 50,
    lon: -111.910217,
    lat: 35.640377,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 8, capacityKW: 2520.0, totalCapacityKW: 20160.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 42, capacityKW: 3400.0, totalCapacityKW: 142800.0, hubHeight: 117.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Baffin",
    state: "TX",
    county: "Kenedy County",
    year: 2015,
    capacity: 202.0,
    totalTurbines: 101,
    lon: -97.481331,
    lat: 27.196226,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G97-2.0", count: 101, capacityKW: 2000.0, totalCapacityKW: 202000.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Baldwin",
    state: "ND",
    county: "Burleigh County",
    year: 2010,
    capacity: 102.4,
    totalTurbines: 64,
    lon: -100.673592,
    lat: 47.073193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 64, capacityKW: 1600.0, totalCapacityKW: 102400.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Balko Wind",
    state: "OK",
    county: "Beaver County",
    year: 2015,
    capacity: 299.7,
    totalTurbines: 162,
    lon: -100.926628,
    lat: 36.523552,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 162, capacityKW: 1850.0, totalCapacityKW: 299700.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Ball Hill Wind",
    state: "NY",
    county: "Chautauqua County",
    year: 2023,
    capacity: 107.5,
    totalTurbines: 25,
    lon: -79.154694,
    lat: 42.401356,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-4.3", count: 3, capacityKW: 4300.0, totalCapacityKW: 12900.0, hubHeight: 82.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 22, capacityKW: 4300.0, totalCapacityKW: 94600.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Baron Winds I",
    state: "NY",
    county: "Steuben County",
    year: 2023,
    capacity: 121.8,
    totalTurbines: 32,
    lon: -77.541016,
    lat: 42.454201,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-114", count: 8, capacityKW: 2625.0, totalCapacityKW: 21000.0, hubHeight: 93.0, rotorDiameter: 114.0 },
      { manufacturer: "Vestas", model: "V150-4.0", count: 24, capacityKW: 4200.0, totalCapacityKW: 100800.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Barton",
    state: "IA",
    county: "Worth County",
    year: 2009,
    capacity: 160.0,
    totalTurbines: 80,
    lon: -93.109795,
    lat: 43.408092,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 80, capacityKW: 2000.0, totalCapacityKW: 160000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Barton Chapel",
    state: "TX",
    county: "Jack County",
    year: 2009,
    capacity: 120.0,
    totalTurbines: 60,
    lon: -98.294395,
    lat: 33.066395,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 60, capacityKW: 2000.0, totalCapacityKW: 120000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Bear Creek",
    state: "PA",
    county: "Luzerne County",
    year: 2006,
    capacity: 24.0,
    totalTurbines: 12,
    lon: -75.761642,
    lat: 41.235184,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Bearkat I",
    state: "TX",
    county: "Glasscock County",
    year: 2017,
    capacity: 196.65,
    totalTurbines: 57,
    lon: -101.603561,
    lat: 31.729675,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 57, capacityKW: 3450.0, totalCapacityKW: 196650.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Bearkat II",
    state: "TX",
    county: "Glasscock County",
    year: 2020,
    capacity: 162.15,
    totalTurbines: 47,
    lon: -101.712334,
    lat: 31.754339,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 47, capacityKW: 3450.0, totalCapacityKW: 162150.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Beaver Creek",
    state: "IA",
    county: "Greene County",
    year: 2017,
    capacity: 170.0,
    totalTurbines: 85,
    lon: -94.166763,
    lat: 42.113487,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 85, capacityKW: 2000.0, totalCapacityKW: 170000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Beaver Creek II",
    state: "IA",
    county: "Greene County",
    year: 2018,
    capacity: 170.0,
    totalTurbines: 85,
    lon: -94.225067,
    lat: 42.055771,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 85, capacityKW: 2000.0, totalCapacityKW: 170000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Beaver Creek Wind (PSE)",
    state: "MT",
    county: "Stillwater County",
    year: 2025,
    capacity: 248.16,
    totalTurbines: 88,
    lon: -109.414307,
    lat: 45.910301,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 88, capacityKW: 2820.0, totalCapacityKW: 248160.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Beebe 1B",
    state: "MI",
    county: "Gratiot County",
    year: 2014,
    capacity: 50.4,
    totalTurbines: 21,
    lon: -84.500824,
    lat: 43.346031,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N117", count: 21, capacityKW: 2400.0, totalCapacityKW: 50400.0, hubHeight: 91.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Beebe Community Wind",
    state: "MI",
    county: "Gratiot County",
    year: 2012,
    capacity: 81.6,
    totalTurbines: 34,
    lon: -84.535095,
    lat: 43.271992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N117", count: 34, capacityKW: 2400.0, totalCapacityKW: 81600.0, hubHeight: 91.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Beech Ridge",
    state: "WV",
    county: "Greenbrier County",
    year: 2010,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -80.524796,
    lat: 38.078293,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Beech Ridge II",
    state: "WV",
    county: "Greenbrier County",
    year: 2020,
    capacity: 56.2,
    totalTurbines: 20,
    lon: -80.653358,
    lat: 38.083824,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 2, capacityKW: 2720.0, totalCapacityKW: 5440.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 18, capacityKW: 2820.0, totalCapacityKW: 50760.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Beethoven Wind, LLC",
    state: "SD",
    county: "Hutchinson County",
    year: 2015,
    capacity: 79.55,
    totalTurbines: 43,
    lon: -98.071915,
    lat: 43.170101,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 43, capacityKW: 1850.0, totalCapacityKW: 79550.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Bennington",
    state: "IL",
    county: "Marshall County",
    year: 2021,
    capacity: 93.06,
    totalTurbines: 33,
    lon: -89.075668,
    lat: 40.943249,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 33, capacityKW: 2820.0, totalCapacityKW: 93060.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Benson Creek",
    state: "OR",
    county: "Baker County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -117.276726,
    lat: 44.424286,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Bent Tree",
    state: "MN",
    county: "Freeborn County",
    year: 2011,
    capacity: 201.3,
    totalTurbines: 122,
    lon: -93.493591,
    lat: 43.724892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 122, capacityKW: 1650.0, totalCapacityKW: 201300.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Berkshire Wind",
    state: "MA",
    county: "Berkshire County",
    year: 2011,
    capacity: 15.0,
    totalTurbines: 10,
    lon: -73.275101,
    lat: 42.586491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 10, capacityKW: 1500.0, totalCapacityKW: 15000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Bethel",
    state: "TX",
    county: "Castro County",
    year: 2017,
    capacity: 276.0,
    totalTurbines: 120,
    lon: -102.4589,
    lat: 34.58485,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 120, capacityKW: 2300.0, totalCapacityKW: 276000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Big Blue Wind Farm",
    state: "MN",
    county: "Faribault County",
    year: 2012,
    capacity: 36.0,
    totalTurbines: 18,
    lon: -94.23349,
    lat: 43.619591,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G97-2.0", count: 18, capacityKW: 2000.0, totalCapacityKW: 36000.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Big Horn",
    state: "WA",
    county: "Klickitat County",
    year: 2006,
    capacity: 199.5,
    totalTurbines: 133,
    lon: -120.274185,
    lat: 45.872795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 133, capacityKW: 1500.0, totalCapacityKW: 199500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Big Horn 2",
    state: "WA",
    county: "Klickitat County",
    year: 2010,
    capacity: 50.0,
    totalTurbines: 25,
    lon: -120.294785,
    lat: 45.958595,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 25, capacityKW: 2000.0, totalCapacityKW: 50000.0, hubHeight: 78.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Big Level",
    state: "PA",
    county: "Potter County",
    year: 2019,
    capacity: 90.0,
    totalTurbines: 25,
    lon: -77.662781,
    lat: 41.89027,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.6-137", count: 25, capacityKW: 3600.0, totalCapacityKW: 90000.0, hubHeight: 131.0, rotorDiameter: 137.0 }
    ]
  },
  {
    name: "Big Sampson Wind",
    state: "TX",
    county: "Crockett County",
    year: 2025,
    capacity: 270.0,
    totalTurbines: 60,
    lon: -101.850868,
    lat: 30.96382,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V163-4.5", count: 60, capacityKW: 4500.0, totalCapacityKW: 270000.0, hubHeight: 98.0, rotorDiameter: 163.0 }
    ]
  },
  {
    name: "Big Sky Wind",
    state: "IL",
    county: "Bureau County",
    year: 2011,
    capacity: 239.4,
    totalTurbines: 114,
    lon: -89.359962,
    lat: 41.608463,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 5, capacityKW: 2100.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 88.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 109, capacityKW: 2200.0, totalCapacityKW: 239800.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Big Smile Wind Farm at Dempsey Ridge",
    state: "OK",
    county: "Roger Mills County",
    year: 2012,
    capacity: 132.0,
    totalTurbines: 66,
    lon: -99.847191,
    lat: 35.532696,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 66, capacityKW: 2000.0, totalCapacityKW: 132000.0, hubHeight: 78.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Big Spring I",
    state: "TX",
    county: "Howard County",
    year: 1999,
    capacity: 34.32,
    totalTurbines: 43,
    lon: -101.406891,
    lat: 32.214497,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 42, capacityKW: 660.0, totalCapacityKW: 27720.0, hubHeight: 65.0, rotorDiameter: 47.0 },
      { manufacturer: "Vestas", model: "V66-1.65", count: 1, capacityKW: 1650.0, totalCapacityKW: 1650.0, hubHeight: 80.0, rotorDiameter: 66.0 }
    ]
  },
  {
    name: "Big Spring II",
    state: "TX",
    county: "Howard County",
    year: 1999,
    capacity: 6.6,
    totalTurbines: 3,
    lon: -101.399994,
    lat: 32.213795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V66", count: 3, capacityKW: 1750.0, totalCapacityKW: 5250.0, hubHeight: 78.0, rotorDiameter: 66.0 }
    ]
  },
  {
    name: "Big Timber",
    state: "MT",
    county: "Sweet Grass County",
    year: 2018,
    capacity: 25.06,
    totalTurbines: 14,
    lon: -109.640305,
    lat: 45.849655,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 14, capacityKW: 1790.0, totalCapacityKW: 25060.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Big Turtle",
    state: "MI",
    county: "Huron County",
    year: 2014,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -82.745415,
    lat: 43.877651,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Big Turtle II",
    state: "MI",
    county: "Huron County",
    year: 2016,
    capacity: 29.4,
    totalTurbines: 14,
    lon: -82.774384,
    lat: 43.909485,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 14, capacityKW: 2100.0, totalCapacityKW: 29400.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Biglow Canyon I",
    state: "OR",
    county: "Sherman County",
    year: 2007,
    capacity: 125.4,
    totalTurbines: 76,
    lon: -120.595085,
    lat: 45.660793,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 76, capacityKW: 1650.0, totalCapacityKW: 125400.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Biglow Canyon II",
    state: "OR",
    county: "Sherman County",
    year: 2009,
    capacity: 149.5,
    totalTurbines: 65,
    lon: -120.584984,
    lat: 45.628593,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 65, capacityKW: 2300.0, totalCapacityKW: 149500.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Biglow Canyon III",
    state: "OR",
    county: "Sherman County",
    year: 2010,
    capacity: 174.8,
    totalTurbines: 76,
    lon: -120.577988,
    lat: 45.652794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 76, capacityKW: 2300.0, totalCapacityKW: 174800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Bingham Lake",
    state: "MN",
    county: "Cottonwood County",
    year: 2006,
    capacity: 15.0,
    totalTurbines: 12,
    lon: -95.062988,
    lat: 43.957191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 12, capacityKW: 1250.0, totalCapacityKW: 15000.0, hubHeight: 63.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Bingham Wind",
    state: "ME",
    county: "Somerset County",
    year: 2016,
    capacity: 184.8,
    totalTurbines: 56,
    lon: -69.679024,
    lat: 45.149693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.3", count: 56, capacityKW: 3300.0, totalCapacityKW: 184800.0, hubHeight: 94.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Bishop Hill I",
    state: "IL",
    county: "Henry County",
    year: 2012,
    capacity: 211.38,
    totalTurbines: 133,
    lon: -90.176697,
    lat: 41.157494,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 34, capacityKW: 1500.0, totalCapacityKW: 51000.0, hubHeight: 80.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.62-100", count: 49, capacityKW: 1620.0, totalCapacityKW: 79380.0, hubHeight: 100.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.62-82.5", count: 50, capacityKW: 1620.0, totalCapacityKW: 81000.0, hubHeight: 100.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Bishop Hill II",
    state: "IL",
    county: "Henry County",
    year: 2012,
    capacity: 81.0,
    totalTurbines: 50,
    lon: -90.093094,
    lat: 41.228092,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-116", count: 50, capacityKW: 1620.0, totalCapacityKW: 81000.0, hubHeight: 100.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Bishop Hill III",
    state: "IL",
    county: "Henry County",
    year: 2018,
    capacity: 132.1,
    totalTurbines: 53,
    lon: -90.283607,
    lat: 41.186363,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 2, capacityKW: 2300.0, totalCapacityKW: 4600.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 51, capacityKW: 2500.0, totalCapacityKW: 127500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Bison 1B (2011)",
    state: "ND",
    county: "Morton County",
    year: 2011,
    capacity: 21.0,
    totalTurbines: 7,
    lon: -101.547188,
    lat: 46.964893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 7, capacityKW: 3000.0, totalCapacityKW: 21000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Bison Wind 1A",
    state: "ND",
    county: "Oliver County",
    year: 2010,
    capacity: 36.8,
    totalTurbines: 16,
    lon: -101.529137,
    lat: 46.983624,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 16, capacityKW: 2300.0, totalCapacityKW: 36800.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Bison Wind 1B",
    state: "ND",
    county: "Oliver County",
    year: 2012,
    capacity: 24.0,
    totalTurbines: 9,
    lon: -101.487488,
    lat: 46.999393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 9, capacityKW: 3000.0, totalCapacityKW: 27000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Bison Wind 2",
    state: "ND",
    county: "Morton County",
    year: 2012,
    capacity: 105.0,
    totalTurbines: 34,
    lon: -101.622993,
    lat: 46.941391,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 34, capacityKW: 3000.0, totalCapacityKW: 102000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Bison Wind 3",
    state: "ND",
    county: "Morton County",
    year: 2012,
    capacity: 105.0,
    totalTurbines: 35,
    lon: -101.443993,
    lat: 46.968693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 35, capacityKW: 3000.0, totalCapacityKW: 105000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Bison Wind 4",
    state: "ND",
    county: "Oliver County",
    year: 2014,
    capacity: 204.8,
    totalTurbines: 64,
    lon: -101.721031,
    lat: 47.016331,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-3.2-113", count: 64, capacityKW: 3200.0, totalCapacityKW: 204800.0, hubHeight: 92.5, rotorDiameter: 113.0 }
    ]
  },
  {
    name: "Bitter Ridge",
    state: "IN",
    county: "Jay County",
    year: 2020,
    capacity: 146.64,
    totalTurbines: 52,
    lon: -85.076591,
    lat: 40.360847,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 52, capacityKW: 2820.0, totalCapacityKW: 146640.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Black Oak Getty",
    state: "MN",
    county: "Stearns County",
    year: 2016,
    capacity: 78.0,
    totalTurbines: 39,
    lon: -94.96357,
    lat: 45.660843,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 39, capacityKW: 2000.0, totalCapacityKW: 78000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Black Rock",
    state: "WV",
    county: "Grant County",
    year: 2021,
    capacity: 115.0,
    totalTurbines: 23,
    lon: -79.144173,
    lat: 39.301014,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 23, capacityKW: 5000.0, totalCapacityKW: 115000.0, hubHeight: 107.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Blackjack Creek",
    state: "TX",
    county: "Refugio County",
    year: 2022,
    capacity: 240.0,
    totalTurbines: 50,
    lon: -97.466606,
    lat: 28.262669,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N155/4.8", count: 50, capacityKW: 4800.0, totalCapacityKW: 240000.0, hubHeight: 108.0, rotorDiameter: 155.0 }
    ]
  },
  {
    name: "Blackstone (Top Crop)",
    state: "IL",
    county: "LaSalle County",
    year: 2009,
    capacity: 102.0,
    totalTurbines: 68,
    lon: -88.608192,
    lat: 41.149593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 68, capacityKW: 1500.0, totalCapacityKW: 102000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Blackstone (Top Crop) II",
    state: "IL",
    county: "Grundy County",
    year: 2010,
    capacity: 198.0,
    totalTurbines: 132,
    lon: -88.54409,
    lat: 41.110493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 132, capacityKW: 1500.0, totalCapacityKW: 198000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Blackwell",
    state: "OK",
    county: "Kay County",
    year: 2012,
    capacity: 59.8,
    totalTurbines: 26,
    lon: -97.437988,
    lat: 36.851593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 26, capacityKW: 2300.0, totalCapacityKW: 59800.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Blazing Star 1",
    state: "MN",
    county: "Lincoln County",
    year: 2020,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -96.348915,
    lat: 44.495811,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.0", count: 90, capacityKW: 2000.0, totalCapacityKW: 180000.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Blazing Star 2",
    state: "MN",
    county: "Lincoln County",
    year: 2021,
    capacity: 218.0,
    totalTurbines: 100,
    lon: -96.273079,
    lat: 44.370197,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 90, capacityKW: 2200.0, totalCapacityKW: 198000.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Block Island",
    state: "RI",
    county: "Washington County",
    year: 2016,
    capacity: 30.0,
    totalTurbines: 5,
    lon: -71.521164,
    lat: 41.114731,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "Haliade 150-6", count: 5, capacityKW: 6000.0, totalCapacityKW: 30000.0, hubHeight: 106.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Bloom",
    state: "KS",
    county: "Ford County",
    year: 2017,
    capacity: 178.2,
    totalTurbines: 54,
    lon: -99.968254,
    lat: 37.506557,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.3", count: 54, capacityKW: 3300.0, totalCapacityKW: 178200.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Blooming Grove",
    state: "IL",
    county: "McLean County",
    year: 2020,
    capacity: 260.92,
    totalTurbines: 94,
    lon: -88.848068,
    lat: 40.683647,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 8, capacityKW: 2300.0, totalCapacityKW: 18400.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 86, capacityKW: 2820.0, totalCapacityKW: 242520.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Blue Canyon I",
    state: "OK",
    county: "Comanche County",
    year: 2003,
    capacity: 74.25,
    totalTurbines: 45,
    lon: -98.578995,
    lat: 34.852093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM72", count: 45, capacityKW: 1650.0, totalCapacityKW: 74250.0, hubHeight: 70.0, rotorDiameter: 72.0 }
    ]
  },
  {
    name: "Blue Canyon II",
    state: "OK",
    county: "Kiowa County",
    year: 2005,
    capacity: 146.0,
    totalTurbines: 82,
    lon: -98.677628,
    lat: 34.879383,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 72, capacityKW: 2000.0, totalCapacityKW: 144000.0, hubHeight: 67.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V80-1.8", count: 10, capacityKW: 1800.0, totalCapacityKW: 18000.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Blue Canyon V",
    state: "OK",
    county: "Comanche County",
    year: 2009,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -98.45179,
    lat: 34.811893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Blue Canyon VI",
    state: "OK",
    county: "Caddo County",
    year: 2011,
    capacity: 99.0,
    totalTurbines: 55,
    lon: -98.546089,
    lat: 34.882996,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 55, capacityKW: 1800.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Blue Cloud I",
    state: "TX",
    county: "Lamb County",
    year: 2018,
    capacity: 148.35,
    totalTurbines: 43,
    lon: -102.57605,
    lat: 34.03545,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 43, capacityKW: 3450.0, totalCapacityKW: 148350.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Blue Creek",
    state: "OH",
    county: "Paulding County",
    year: 2012,
    capacity: 304.0,
    totalTurbines: 152,
    lon: -84.555893,
    lat: 41.014091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 152, capacityKW: 2000.0, totalCapacityKW: 304000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Blue Sky - Green Field",
    state: "WI",
    county: "Fond du Lac County",
    year: 2008,
    capacity: 145.2,
    totalTurbines: 88,
    lon: -88.274994,
    lat: 43.850693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 88, capacityKW: 1650.0, totalCapacityKW: 145200.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Blue Summit",
    state: "TX",
    county: "Wilbarger County",
    year: 2012,
    capacity: 139.74,
    totalTurbines: 85,
    lon: -99.321793,
    lat: 34.324093,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 82, capacityKW: 1620.0, totalCapacityKW: 132840.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE2.3-107", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Blue Summit II",
    state: "TX",
    county: "Wilbarger County",
    year: 2018,
    capacity: 99.36,
    totalTurbines: 41,
    lon: -99.482368,
    lat: 34.236786,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 4, capacityKW: 1715.0, totalCapacityKW: 6860.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 37, capacityKW: 2500.0, totalCapacityKW: 92500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Blue Summit III",
    state: "TX",
    county: "Hardeman County",
    year: 2019,
    capacity: 200.2,
    totalTurbines: 82,
    lon: -99.543175,
    lat: 34.175354,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 8, capacityKW: 1715.0, totalCapacityKW: 13720.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 74, capacityKW: 2520.0, totalCapacityKW: 186480.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Bluegrass Ridge",
    state: "MO",
    county: "Gentry County",
    year: 2007,
    capacity: 56.7,
    totalTurbines: 26,
    lon: -94.513893,
    lat: 40.078693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V120-2.2", count: 26, capacityKW: 2100.0, totalCapacityKW: 54600.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Bluestem",
    state: "OK",
    county: "Beaver County",
    year: 2016,
    capacity: 198.0,
    totalTurbines: 60,
    lon: -100.608391,
    lat: 36.505203,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.3", count: 60, capacityKW: 3300.0, totalCapacityKW: 198000.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Bluestem Franklin County Wind Project (SPPW1)",
    state: "NE",
    county: "Franklin County",
    year: 2022,
    capacity: 5.64,
    totalTurbines: 2,
    lon: -98.960533,
    lat: 40.317402,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 2, capacityKW: 2820.0, totalCapacityKW: 5640.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Bluestone Wind",
    state: "NY",
    county: "Broome County",
    year: 2023,
    capacity: 111.8,
    totalTurbines: 26,
    lon: -75.507446,
    lat: 42.103901,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.3", count: 26, capacityKW: 4300.0, totalCapacityKW: 111800.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Bluff Point",
    state: "IN",
    county: "Randolph County",
    year: 2017,
    capacity: 119.7,
    totalTurbines: 56,
    lon: -84.970985,
    lat: 40.300476,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.1-116", count: 56, capacityKW: 2100.0, totalCapacityKW: 117600.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Bobcat Bluff",
    state: "TX",
    county: "Archer County",
    year: 2012,
    capacity: 162.0,
    totalTurbines: 100,
    lon: -98.545891,
    lat: 33.502594,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 100, capacityKW: 1620.0, totalCapacityKW: 162000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Boiling Springs",
    state: "OK",
    county: "Woodward County",
    year: 2020,
    capacity: 148.4,
    totalTurbines: 60,
    lon: -99.364952,
    lat: 36.541721,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 40, capacityKW: 2300.0, totalCapacityKW: 92000.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 20, capacityKW: 2820.0, totalCapacityKW: 56400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Border Winds Project",
    state: "ND",
    county: "Rolette County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -99.697899,
    lat: 48.981293,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Borderlands",
    state: "NM",
    county: "Catron County",
    year: 2021,
    capacity: 99.8,
    totalTurbines: 34,
    lon: -108.897263,
    lat: 34.10392,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE3.0-140", count: 30, capacityKW: 3020.0, totalCapacityKW: 90600.0, hubHeight: 96.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Boswell Springs",
    state: "WY",
    county: "Albany County",
    year: 2024,
    capacity: 329.8,
    totalTurbines: 97,
    lon: -105.895119,
    lat: 41.920147,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 97, capacityKW: 3400.0, totalCapacityKW: 329800.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Brady Wind I",
    state: "ND",
    county: "Stark County",
    year: 2016,
    capacity: 149.73,
    totalTurbines: 87,
    lon: -102.834473,
    lat: 46.649933,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 80, capacityKW: 1715.0, totalCapacityKW: 137200.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 7, capacityKW: 1790.0, totalCapacityKW: 12530.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Brady Wind II",
    state: "ND",
    county: "Hettinger County",
    year: 2016,
    capacity: 149.03,
    totalTurbines: 72,
    lon: -102.888412,
    lat: 46.625175,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 7, capacityKW: 1790.0, totalCapacityKW: 12530.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 65, capacityKW: 2100.0, totalCapacityKW: 136500.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Brahms Wind, LLC",
    state: "NM",
    county: "Curry County",
    year: 2014,
    capacity: 19.8,
    totalTurbines: 12,
    lon: -103.336189,
    lat: 34.747192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 12, capacityKW: 1650.0, totalCapacityKW: 19800.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Brazos Wind Ranch",
    state: "TX",
    county: "Borden County",
    year: 2003,
    capacity: 160.0,
    totalTurbines: 1,
    lon: -101.326675,
    lat: 32.94392,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 1, capacityKW: 1000.0, totalCapacityKW: 1000.0, hubHeight: 60.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Brazos Wind Repower",
    state: "TX",
    county: "Borden County",
    year: 2003,
    capacity: 182.4,
    totalTurbines: 38,
    lon: -101.292358,
    lat: 32.94001,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N155/4.8", count: 38, capacityKW: 4800.0, totalCapacityKW: 182400.0, hubHeight: 108.0, rotorDiameter: 155.0 }
    ]
  },
  {
    name: "Breckinridge",
    state: "OK",
    county: "Garfield County",
    year: 2015,
    capacity: 98.1,
    totalTurbines: 57,
    lon: -97.718071,
    lat: 36.453934,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 57, capacityKW: 1700.0, totalCapacityKW: 96900.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Bright Stalk",
    state: "IL",
    county: "McLean County",
    year: 2019,
    capacity: 205.2,
    totalTurbines: 57,
    lon: -88.641075,
    lat: 40.658073,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 57, capacityKW: 3600.0, totalCapacityKW: 205200.0, hubHeight: 99.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Briscoe",
    state: "TX",
    county: "Briscoe County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 81,
    lon: -101.325508,
    lat: 34.332493,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 81, capacityKW: 1850.0, totalCapacityKW: 149850.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Broadlands",
    state: "IL",
    county: "Douglas County",
    year: 2020,
    capacity: 199.8,
    totalTurbines: 48,
    lon: -88.011932,
    lat: 39.870358,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.7", count: 11, capacityKW: 3700.0, totalCapacityKW: 40700.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 37, capacityKW: 4300.0, totalCapacityKW: 159100.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Broadview Energy JN LLC",
    state: "TX",
    county: "Deaf Smith County",
    year: 2017,
    capacity: 82.8,
    totalTurbines: 79,
    lon: -102.940033,
    lat: 34.772007,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 79, capacityKW: 2300.0, totalCapacityKW: 181700.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Broadview Energy KW LLC",
    state: "NM",
    county: "Curry County",
    year: 2017,
    capacity: 142.6,
    totalTurbines: 62,
    lon: -103.158798,
    lat: 34.768841,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 62, capacityKW: 2300.0, totalCapacityKW: 142600.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Broken Bow I",
    state: "NE",
    county: "Custer County",
    year: 2012,
    capacity: 80.0,
    totalTurbines: 50,
    lon: -99.571793,
    lat: 41.449593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 50, capacityKW: 1600.0, totalCapacityKW: 80000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Broken Bow II",
    state: "NE",
    county: "Custer County",
    year: 2014,
    capacity: 75.0,
    totalTurbines: 43,
    lon: -99.623192,
    lat: 41.541985,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 43, capacityKW: 1700.0, totalCapacityKW: 73100.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Bronco Plains",
    state: "CO",
    county: "Kit Carson County",
    year: 2020,
    capacity: 299.36,
    totalTurbines: 108,
    lon: -103.072594,
    lat: 39.069012,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 98, capacityKW: 2820.0, totalCapacityKW: 276360.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Bronco Plains Wind II",
    state: "CO",
    county: "Kit Carson County",
    year: 2023,
    capacity: 199.04,
    totalTurbines: 72,
    lon: -102.989571,
    lat: 39.20842,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.32-116", count: 8, capacityKW: 2320.0, totalCapacityKW: 18560.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 64, capacityKW: 2820.0, totalCapacityKW: 180480.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Brookfield Tehachapi 1 (CCDLP)",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 102.0,
    totalTurbines: 26,
    lon: -118.333176,
    lat: 35.055397,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 26, capacityKW: 3000.0, totalCapacityKW: 78000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Brookfield Tehachapi 2",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 21.0,
    totalTurbines: 8,
    lon: -118.244492,
    lat: 35.045197,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 8, capacityKW: 3000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Brookfield Wind Park",
    state: "MI",
    county: "Huron County",
    year: 2014,
    capacity: 74.8,
    totalTurbines: 44,
    lon: -83.397995,
    lat: 43.70689,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 44, capacityKW: 1700.0, totalCapacityKW: 74800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Bruenning's Breeze",
    state: "TX",
    county: "Willacy County",
    year: 2017,
    capacity: 228.0,
    totalTurbines: 76,
    lon: -97.751038,
    lat: 26.507999,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3000", count: 76, capacityKW: 3000.0, totalCapacityKW: 228000.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Brule County Wind",
    state: "SD",
    county: "Brule County",
    year: 2018,
    capacity: 20.7,
    totalTurbines: 9,
    lon: -98.917236,
    lat: 43.72578,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 9, capacityKW: 2300.0, totalCapacityKW: 20700.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Buckeye",
    state: "KS",
    county: "Ellis County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 112,
    lon: -99.436478,
    lat: 39.011452,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 112, capacityKW: 1790.0, totalCapacityKW: 200480.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Buckthorn",
    state: "TX",
    county: "Erath County",
    year: 2017,
    capacity: 100.05,
    totalTurbines: 29,
    lon: -98.395592,
    lat: 32.373196,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.45", count: 3, capacityKW: 3450.0, totalCapacityKW: 10350.0, hubHeight: 87.0, rotorDiameter: 117.0 },
      { manufacturer: "Vestas", model: "V126-3.45", count: 26, capacityKW: 3450.0, totalCapacityKW: 89700.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Buena Vista",
    state: "CA",
    county: "Contra Costa County",
    year: 2006,
    capacity: 38.0,
    totalTurbines: 38,
    lon: -121.644188,
    lat: 37.796196,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 38, capacityKW: 1000.0, totalCapacityKW: 38000.0, hubHeight: 55.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Buffalo Bear",
    state: "OK",
    county: "Harper County",
    year: 2008,
    capacity: 18.9,
    totalTurbines: 9,
    lon: -99.65329,
    lat: 36.765495,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 9, capacityKW: 2100.0, totalCapacityKW: 18900.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Buffalo Dunes",
    state: "KS",
    county: "Haskell County",
    year: 2013,
    capacity: 249.75,
    totalTurbines: 135,
    lon: -101.03289,
    lat: 37.629993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 135, capacityKW: 1850.0, totalCapacityKW: 249750.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Buffalo Gap 2",
    state: "TX",
    county: "Nolan County",
    year: 2007,
    capacity: 232.5,
    totalTurbines: 155,
    lon: -100.16909,
    lat: 32.323692,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 155, capacityKW: 1500.0, totalCapacityKW: 232500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Buffalo Gap 3",
    state: "TX",
    county: "Nolan County",
    year: 2008,
    capacity: 170.2,
    totalTurbines: 74,
    lon: -100.179291,
    lat: 32.296795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 74, capacityKW: 2300.0, totalCapacityKW: 170200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Buffalo Gap Wind Farm",
    state: "TX",
    county: "Taylor County",
    year: 2005,
    capacity: 120.6,
    totalTurbines: 58,
    lon: -100.134422,
    lat: 32.30571,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 58, capacityKW: 1800.0, totalCapacityKW: 104400.0, hubHeight: 78.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Buffalo Mountain",
    state: "TN",
    county: "Anderson County",
    year: 2004,
    capacity: 27.0,
    totalTurbines: 15,
    lon: -84.3592,
    lat: 36.136494,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 15, capacityKW: 1800.0, totalCapacityKW: 27000.0, hubHeight: 80.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Buffalo Ridge",
    state: "MN",
    county: "Lincoln County",
    year: 2022,
    capacity: 112.8,
    totalTurbines: 64,
    lon: -96.293472,
    lat: 44.217827,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 40, capacityKW: 2820.0, totalCapacityKW: 112800.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Suzlon", model: "S88", count: 24, capacityKW: 2100.0, totalCapacityKW: 50400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Buffalo Ridge II",
    state: "SD",
    county: "Deuel County",
    year: 2010,
    capacity: 210.0,
    totalTurbines: 105,
    lon: -96.588287,
    lat: 44.554993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 105, capacityKW: 2000.0, totalCapacityKW: 210000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Bull Creek",
    state: "TX",
    county: "Borden County",
    year: 2008,
    capacity: 180.0,
    totalTurbines: 180,
    lon: -101.600891,
    lat: 32.907593,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 180, capacityKW: 1000.0, totalCapacityKW: 180000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Bull Hill",
    state: "ME",
    county: "Hancock County",
    year: 2012,
    capacity: 34.2,
    totalTurbines: 19,
    lon: -68.151001,
    lat: 44.735291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 19, capacityKW: 1800.0, totalCapacityKW: 34200.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Burley Butte",
    state: "ID",
    county: "Cassia County",
    year: 2011,
    capacity: 19.5,
    totalTurbines: 13,
    lon: -113.925385,
    lat: 42.491493,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 13, capacityKW: 1500.0, totalCapacityKW: 19500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Busch Ranch",
    state: "CO",
    county: "Huerfano County",
    year: 2012,
    capacity: 28.8,
    totalTurbines: 16,
    lon: -104.478287,
    lat: 37.785095,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 16, capacityKW: 1800.0, totalCapacityKW: 28800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Busch Ranch II",
    state: "CO",
    county: "Las Animas County",
    year: 2019,
    capacity: 59.4,
    totalTurbines: 27,
    lon: -104.381187,
    lat: 37.756023,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V120-2.2", count: 27, capacityKW: 2200.0, totalCapacityKW: 59400.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Butler Ridge",
    state: "WI",
    county: "Dodge County",
    year: 2009,
    capacity: 54.0,
    totalTurbines: 36,
    lon: -88.487587,
    lat: 43.3895,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 36, capacityKW: 1500.0, totalCapacityKW: 54000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "CED Centerville Wind Project",
    state: "IA",
    county: "Appanoose County",
    year: 2021,
    capacity: 7.9,
    totalTurbines: 3,
    lon: -92.85582,
    lat: 40.708679,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 2, capacityKW: 2800.0, totalCapacityKW: 5600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "CED Manchester Wind",
    state: "IA",
    county: "Delaware County",
    year: 2022,
    capacity: 7.9,
    totalTurbines: 3,
    lon: -91.537697,
    lat: 42.458302,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 2, capacityKW: 2800.0, totalCapacityKW: 5600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cabazon",
    state: "CA",
    county: "Riverside County",
    year: 2002,
    capacity: 40.92,
    totalTurbines: 109,
    lon: -116.714386,
    lat: 33.913795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 59, capacityKW: 660.0, totalCapacityKW: 38940.0, hubHeight: 65.0, rotorDiameter: 47.0 },
      { manufacturer: "Zond", model: "Z50", count: 50, capacityKW: 750.0, totalCapacityKW: 37500.0, hubHeight: 64.0, rotorDiameter: 50.0 }
    ]
  },
  {
    name: "Cabazon-Shell",
    state: "CA",
    county: "Riverside County",
    year: 2002,
    capacity: 40.92,
    totalTurbines: 3,
    lon: -116.735916,
    lat: 33.905884,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47", count: 3, capacityKW: 660.0, totalCapacityKW: 1980.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Cactus Flats",
    state: "TX",
    county: "Concho County",
    year: 2018,
    capacity: 148.35,
    totalTurbines: 43,
    lon: -100.061394,
    lat: 31.091822,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 43, capacityKW: 3450.0, totalCapacityKW: 148350.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Caddo",
    state: "OK",
    county: "Caddo County",
    year: 2021,
    capacity: 303.72,
    totalTurbines: 110,
    lon: -98.43837,
    lat: 35.062031,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 2, capacityKW: 2820.0, totalCapacityKW: 5640.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 108, capacityKW: 2820.0, totalCapacityKW: 304560.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "California Ridge",
    state: "IL",
    county: "Vermilion County",
    year: 2012,
    capacity: 217.08,
    totalTurbines: 134,
    lon: -87.882492,
    lat: 40.191593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-100", count: 134, capacityKW: 1620.0, totalCapacityKW: 217080.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Callahan Divide",
    state: "TX",
    county: "Taylor County",
    year: 2017,
    capacity: 114.0,
    totalTurbines: 76,
    lon: -100.016373,
    lat: 32.311947,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 76, capacityKW: 1500.0, totalCapacityKW: 114000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Cameron",
    state: "TX",
    county: "Cameron County",
    year: 2015,
    capacity: 165.0,
    totalTurbines: 55,
    lon: -97.491302,
    lat: 26.195005,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW125/3000", count: 55, capacityKW: 3000.0, totalCapacityKW: 165000.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Cameron Ridge",
    state: "CA",
    county: "Kern County",
    year: 1999,
    capacity: 60.0,
    totalTurbines: 17,
    lon: -118.307953,
    lat: 35.081192,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "Multi-power 44", count: 17, capacityKW: 700.0, totalCapacityKW: 11900.0, hubHeight: 45.0, rotorDiameter: 44.0 }
    ]
  },
  {
    name: "Camp Grove",
    state: "IL",
    county: "Marshall County",
    year: 2007,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -89.571793,
    lat: 41.062794,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Camp Reed",
    state: "ID",
    county: "Elmore County",
    year: 2010,
    capacity: 22.5,
    totalTurbines: 15,
    lon: -115.049088,
    lat: 42.813293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 15, capacityKW: 1500.0, totalCapacityKW: 22500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Camp Springs",
    state: "TX",
    county: "Scurry County",
    year: 2007,
    capacity: 130.5,
    totalTurbines: 87,
    lon: -100.797691,
    lat: 32.765392,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 87, capacityKW: 1500.0, totalCapacityKW: 130500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Camp Springs II",
    state: "TX",
    county: "Scurry County",
    year: 2008,
    capacity: 88.5,
    totalTurbines: 80,
    lon: -100.757591,
    lat: 32.698692,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Campbell County",
    state: "SD",
    county: "Campbell County",
    year: 2015,
    capacity: 95.0,
    totalTurbines: 55,
    lon: -100.289619,
    lat: 45.819302,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 55, capacityKW: 1700.0, totalCapacityKW: 93500.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Campbell Hill",
    state: "WY",
    county: "Converse County",
    year: 2009,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -105.980492,
    lat: 43.040592,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Canadian Breaks",
    state: "TX",
    county: "Oldham County",
    year: 2019,
    capacity: 200.1,
    totalTurbines: 84,
    lon: -102.350517,
    lat: 35.212276,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 84, capacityKW: 2300.0, totalCapacityKW: 193200.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Canadian Hills",
    state: "OK",
    county: "Canadian County",
    year: 2012,
    capacity: 298.45,
    totalTurbines: 135,
    lon: -98.033691,
    lat: 35.628395,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT102/2.4", count: 62, capacityKW: 2400.0, totalCapacityKW: 148800.0, hubHeight: 80.0, rotorDiameter: 102.0 },
      { manufacturer: "REpower", model: "MM92", count: 73, capacityKW: 2050.0, totalCapacityKW: 149650.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Caney River",
    state: "KS",
    county: "Elk County",
    year: 2011,
    capacity: 199.8,
    totalTurbines: 111,
    lon: -96.430092,
    lat: 37.398792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 111, capacityKW: 1800.0, totalCapacityKW: 199800.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Canton Mountain",
    state: "ME",
    county: "Oxford County",
    year: 2017,
    capacity: 22.8,
    totalTurbines: 8,
    lon: -70.301132,
    lat: 44.518677,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 8, capacityKW: 2850.0, totalCapacityKW: 22800.0, hubHeight: 85.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Canyon Wind",
    state: "TX",
    county: "Scurry County",
    year: 2024,
    capacity: 308.82,
    totalTurbines: 111,
    lon: -100.874069,
    lat: 32.607319,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 14, capacityKW: 2520.0, totalCapacityKW: 35280.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 97, capacityKW: 2820.0, totalCapacityKW: 273540.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Capricorn Ridge",
    state: "TX",
    county: "Sterling County",
    year: 2017,
    capacity: 361.7,
    totalTurbines: 210,
    lon: -100.835396,
    lat: 31.897896,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 145, capacityKW: 1500.0, totalCapacityKW: 217500.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 65, capacityKW: 2300.0, totalCapacityKW: 149500.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Capricorn Ridge expansion",
    state: "TX",
    county: "Sterling County",
    year: 2017,
    capacity: 298.5,
    totalTurbines: 197,
    lon: -100.987991,
    lat: 31.958595,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 28, capacityKW: 1500.0, totalCapacityKW: 42000.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 169, capacityKW: 1500.0, totalCapacityKW: 253500.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Caprock Wind Repower",
    state: "NM",
    county: "Quay County",
    year: 2024,
    capacity: 80.0,
    totalTurbines: 19,
    lon: -103.397293,
    lat: 34.98114,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 19, capacityKW: 4500.0, totalCapacityKW: 85500.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Cardinal Point",
    state: "IL",
    county: "McDonough County",
    year: 2020,
    capacity: 150.0,
    totalTurbines: 60,
    lon: -90.816223,
    lat: 40.625362,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 60, capacityKW: 2500.0, totalCapacityKW: 150000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Carousel",
    state: "CO",
    county: "Kit Carson County",
    year: 2015,
    capacity: 149.6,
    totalTurbines: 87,
    lon: -102.150284,
    lat: 39.338402,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 87, capacityKW: 1700.0, totalCapacityKW: 147900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Carroll",
    state: "IA",
    county: "Carroll County",
    year: 2008,
    capacity: 159.12,
    totalTurbines: 100,
    lon: -94.907394,
    lat: 42.127995,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91.5", count: 24, capacityKW: 1500.0, totalCapacityKW: 36000.0, hubHeight: 80.0, rotorDiameter: 91.5 },
      { manufacturer: "GE Wind", model: "GE1.62-91.5", count: 76, capacityKW: 1620.0, totalCapacityKW: 123120.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Carroll Area",
    state: "IA",
    county: "Carroll County",
    year: 2015,
    capacity: 20.0,
    totalTurbines: 9,
    lon: -94.876869,
    lat: 41.952553,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 9, capacityKW: 2300.0, totalCapacityKW: 20700.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Casa Mesa",
    state: "NM",
    county: "Quay County",
    year: 2018,
    capacity: 50.9,
    totalTurbines: 21,
    lon: -103.990379,
    lat: 34.600285,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 2, capacityKW: 1700.0, totalCapacityKW: 3400.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 19, capacityKW: 2500.0, totalCapacityKW: 47500.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cashton Greens",
    state: "WI",
    county: "Monroe County",
    year: 2012,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -90.80439,
    lat: 43.739094,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 100.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "Casper Wind Farm",
    state: "WY",
    county: "Natrona County",
    year: 2009,
    capacity: 16.5,
    totalTurbines: 11,
    lon: -106.21479,
    lat: 42.890293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 11, capacityKW: 1500.0, totalCapacityKW: 16500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Cassadaga",
    state: "NY",
    county: "Chautauqua County",
    year: 2021,
    capacity: 125.475,
    totalTurbines: 37,
    lon: -79.264534,
    lat: 42.29739,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N117/3675", count: 27, capacityKW: 3675.0, totalCapacityKW: 99225.0, hubHeight: 91.0, rotorDiameter: 117.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-114", count: 10, capacityKW: 2625.0, totalCapacityKW: 26250.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Casselman",
    state: "PA",
    county: "Somerset County",
    year: 2007,
    capacity: 34.5,
    totalTurbines: 23,
    lon: -79.109596,
    lat: 39.860592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 23, capacityKW: 1500.0, totalCapacityKW: 34500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Cassia",
    state: "ID",
    county: "Twin Falls County",
    year: 2009,
    capacity: 29.4,
    totalTurbines: 14,
    lon: -115.017387,
    lat: 42.877495,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 14, capacityKW: 2100.0, totalCapacityKW: 29400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Castle Gap Wind",
    state: "TX",
    county: "Lampasas County",
    year: 2023,
    capacity: 196.8,
    totalTurbines: 41,
    lon: -98.326195,
    lat: 31.364594,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 41, capacityKW: 4800.0, totalCapacityKW: 196800.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Cayuga Ridge",
    state: "IL",
    county: "Livingston County",
    year: 2010,
    capacity: 300.0,
    totalTurbines: 150,
    lon: -88.379997,
    lat: 40.968792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 150, capacityKW: 2000.0, totalCapacityKW: 300000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Cedar Bluff",
    state: "KS",
    county: "Ness County",
    year: 2015,
    capacity: 198.7,
    totalTurbines: 111,
    lon: -99.721901,
    lat: 38.627335,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 111, capacityKW: 1790.0, totalCapacityKW: 198690.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Cedar Creek",
    state: "CO",
    county: "Weld County",
    year: 2007,
    capacity: 300.5,
    totalTurbines: 274,
    lon: -104.042191,
    lat: 40.853794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 53, capacityKW: 1500.0, totalCapacityKW: 79500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 221, capacityKW: 1000.0, totalCapacityKW: 221000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Cedar Creek II",
    state: "CO",
    county: "Weld County",
    year: 2011,
    capacity: 250.8,
    totalTurbines: 122,
    lon: -103.711891,
    lat: 40.940994,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-77", count: 63, capacityKW: 1600.0, totalCapacityKW: 100800.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Nordex", model: "N90", count: 59, capacityKW: 2500.0, totalCapacityKW: 147500.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Cedar Creek Wind",
    state: "ID",
    county: "Bingham County",
    year: 2024,
    capacity: 159.8,
    totalTurbines: 47,
    lon: -112.003044,
    lat: 43.322998,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 47, capacityKW: 3400.0, totalCapacityKW: 159800.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Cedar Hills",
    state: "ND",
    county: "Bowman County",
    year: 2010,
    capacity: 19.5,
    totalTurbines: 13,
    lon: -103.782791,
    lat: 46.242592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 13, capacityKW: 1500.0, totalCapacityKW: 19500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Cedar Point",
    state: "CO",
    county: "Lincoln County",
    year: 2011,
    capacity: 250.2,
    totalTurbines: 139,
    lon: -103.702789,
    lat: 39.414993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 139, capacityKW: 1800.0, totalCapacityKW: 250200.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Cedar Ridge Wind Farm",
    state: "WI",
    county: "Fond du Lac County",
    year: 2008,
    capacity: 67.65,
    totalTurbines: 41,
    lon: -88.318993,
    lat: 43.743893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 41, capacityKW: 1650.0, totalCapacityKW: 67650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Cedar Springs I",
    state: "WY",
    county: "Converse County",
    year: 2020,
    capacity: 199.4,
    totalTurbines: 72,
    lon: -105.438759,
    lat: 43.007557,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 65, capacityKW: 2820.0, totalCapacityKW: 183300.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cedar Springs II",
    state: "WY",
    county: "Converse County",
    year: 2020,
    capacity: 198.88,
    totalTurbines: 72,
    lon: -105.361267,
    lat: 42.946877,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 65, capacityKW: 2820.0, totalCapacityKW: 183300.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cedar Springs III",
    state: "WY",
    county: "Converse County",
    year: 2020,
    capacity: 133.28,
    totalTurbines: 46,
    lon: -105.659447,
    lat: 43.080456,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 2, capacityKW: 2300.0, totalCapacityKW: 4600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 44, capacityKW: 2820.0, totalCapacityKW: 124080.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cedar Springs IV",
    state: "WY",
    county: "Converse County",
    year: 2025,
    capacity: 392.82,
    totalTurbines: 73,
    lon: -105.659561,
    lat: 43.126575,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 16, capacityKW: 2820.0, totalCapacityKW: 45120.0, hubHeight: null, rotorDiameter: 127.0 },
      { manufacturer: "GE Vernova", model: "GE6.1-158", count: 57, capacityKW: 6100.0, totalCapacityKW: 347700.0, hubHeight: null, rotorDiameter: 158.0 }
    ]
  },
  {
    name: "Cedro Hill",
    state: "TX",
    county: "Webb County",
    year: 2010,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -98.93409,
    lat: 27.590296,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.52-97", count: 23, capacityKW: 1500.0, totalCapacityKW: 34500.0, hubHeight: 80.0, rotorDiameter: 97.0 },
      { manufacturer: "GE Wind", model: "GE1.62-97", count: 77, capacityKW: 1500.0, totalCapacityKW: 115500.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Centennial Wind Farm",
    state: "OK",
    county: "Harper County",
    year: 2007,
    capacity: 60.0,
    totalTurbines: 80,
    lon: -99.562691,
    lat: 36.638695,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Central Plains",
    state: "KS",
    county: "Wichita County",
    year: 2009,
    capacity: 99.0,
    totalTurbines: 33,
    lon: -101.169388,
    lat: 38.532093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 33, capacityKW: 3000.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Century",
    state: "IA",
    county: "Hamilton County",
    year: 2017,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -93.693192,
    lat: 42.52589,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 65.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Century Expansion",
    state: "IA",
    county: "Wright County",
    year: 2008,
    capacity: 12.0,
    totalTurbines: 45,
    lon: -93.638893,
    lat: 42.495491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 10, capacityKW: 1500.0, totalCapacityKW: 15000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 35, capacityKW: 1000.0, totalCapacityKW: 35000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Century Oak Wind",
    state: "TX",
    county: "Callahan County",
    year: 2023,
    capacity: 153.0,
    totalTurbines: 45,
    lon: -99.172943,
    lat: 32.446686,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 45, capacityKW: 3400.0, totalCapacityKW: 153000.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Cerro Gordo Repower",
    state: "IA",
    county: "Cerro Gordo County",
    year: 2020,
    capacity: 36.8,
    totalTurbines: 16,
    lon: -93.467415,
    lat: 43.062641,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 16, capacityKW: 2300.0, totalCapacityKW: 36800.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Champion",
    state: "TX",
    county: "Nolan County",
    year: 2008,
    capacity: 126.5,
    totalTurbines: 41,
    lon: -100.597794,
    lat: 32.391193,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 41, capacityKW: 2300.0, totalCapacityKW: 94300.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Chapman Ranch",
    state: "TX",
    county: "Nueces County",
    year: 2017,
    capacity: 249.075,
    totalTurbines: 81,
    lon: -97.572083,
    lat: 27.593964,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3000", count: 81, capacityKW: 3075.0, totalCapacityKW: 249075.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Charles City",
    state: "IA",
    county: "Floyd County",
    year: 2008,
    capacity: 75.0,
    totalTurbines: 50,
    lon: -92.76329,
    lat: 43.039291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91.5", count: 50, capacityKW: 1500.0, totalCapacityKW: 75000.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Chestnut Flats",
    state: "PA",
    county: "Blair County",
    year: 2011,
    capacity: 38.0,
    totalTurbines: 19,
    lon: -78.486595,
    lat: 40.518291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 17, capacityKW: 2000.0, totalCapacityKW: 34000.0, hubHeight: 78.0, rotorDiameter: 87.0 },
      { manufacturer: "Gamesa", model: "G90-2.0", count: 2, capacityKW: 2000.0, totalCapacityKW: 4000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Chevelon Butte Wind Phase I",
    state: "AZ",
    county: "Coconino County",
    year: 2023,
    capacity: 239.0,
    totalTurbines: 57,
    lon: -110.883255,
    lat: 34.716751,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 6, capacityKW: 2000.0, totalCapacityKW: 12000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-4.0", count: 5, capacityKW: 4000.0, totalCapacityKW: 20000.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.5", count: 46, capacityKW: 4500.0, totalCapacityKW: 207000.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Chevelon Butte Wind Phase II",
    state: "AZ",
    county: "Coconino County",
    year: 2024,
    capacity: 216.0,
    totalTurbines: 48,
    lon: -110.811096,
    lat: 34.681458,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 48, capacityKW: 4500.0, totalCapacityKW: 216000.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Cheyenne Ridge",
    state: "CO",
    county: "Kit Carson County",
    year: 2020,
    capacity: 496.4,
    totalTurbines: 228,
    lon: -102.232704,
    lat: 38.953239,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 26, capacityKW: 2000.0, totalCapacityKW: 52000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 202, capacityKW: 2200.0, totalCapacityKW: 444400.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Chickasaw County Wind Energy Center",
    state: "IA",
    county: "Chickasaw County",
    year: 2023,
    capacity: 202.36,
    totalTurbines: 66,
    lon: -92.321625,
    lat: 43.18919,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 8, capacityKW: 2820.0, totalCapacityKW: 22560.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.1-129", count: 58, capacityKW: 3100.0, totalCapacityKW: 179800.0, hubHeight: 85.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Chisholm View",
    state: "OK",
    county: "Garfield County",
    year: 2012,
    capacity: 235.2,
    totalTurbines: 140,
    lon: -97.723694,
    lat: 36.586693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.68-82.5", count: 140, capacityKW: 1680.0, totalCapacityKW: 235200.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Chisholm View II",
    state: "OK",
    county: "Garfield County",
    year: 2016,
    capacity: 64.8,
    totalTurbines: 27,
    lon: -97.726227,
    lat: 36.537346,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.4-107", count: 27, capacityKW: 2400.0, totalCapacityKW: 64800.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Chopin",
    state: "OR",
    county: "Umatilla County",
    year: 2016,
    capacity: 9.9,
    totalTurbines: 6,
    lon: -118.473137,
    lat: 45.897919,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 6, capacityKW: 1650.0, totalCapacityKW: 9900.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Chopin (Phase II)",
    state: "OR",
    county: "Umatilla County",
    year: 2022,
    capacity: 8.65,
    totalTurbines: 5,
    lon: -118.501122,
    lat: 45.90638,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 4, capacityKW: 1715.0, totalCapacityKW: 6860.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 1, capacityKW: 1790.0, totalCapacityKW: 1790.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Cimarron Bend I",
    state: "KS",
    county: "Clark County",
    year: 2016,
    capacity: 200.0,
    totalTurbines: 99,
    lon: -99.938606,
    lat: 37.391716,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 99, capacityKW: 2000.0, totalCapacityKW: 198000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Cimarron Bend II",
    state: "KS",
    county: "Clark County",
    year: 2017,
    capacity: 200.0,
    totalTurbines: 101,
    lon: -99.962181,
    lat: 37.39357,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 101, capacityKW: 2000.0, totalCapacityKW: 202000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Cimarron Bend III",
    state: "KS",
    county: "Clark County",
    year: 2020,
    capacity: 198.84,
    totalTurbines: 74,
    lon: -100.067368,
    lat: 37.393452,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 62, capacityKW: 2820.0, totalCapacityKW: 174840.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Cimarron I",
    state: "KS",
    county: "Gray County",
    year: 2012,
    capacity: 165.6,
    totalTurbines: 72,
    lon: -100.326294,
    lat: 37.879795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 72, capacityKW: 2300.0, totalCapacityKW: 165600.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Cimarron II",
    state: "KS",
    county: "Gray County",
    year: 2012,
    capacity: 131.1,
    totalTurbines: 57,
    lon: -100.389389,
    lat: 37.927193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 57, capacityKW: 2300.0, totalCapacityKW: 131100.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Cirrus 1",
    state: "TX",
    county: "Lynn County",
    year: 2012,
    capacity: 61.2,
    totalTurbines: 17,
    lon: -101.686592,
    lat: 33.015095,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "China Creative Wind Energy", model: "CCWE3.60-116", count: 17, capacityKW: 3600.0, totalCapacityKW: 61200.0, hubHeight: 82.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Cisco",
    state: "MN",
    county: "Jackson County",
    year: 2008,
    capacity: 8.4,
    totalTurbines: 4,
    lon: -95.362091,
    lat: 43.625793,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 4, capacityKW: 2100.0, totalCapacityKW: 8400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Clearwater Energy Project 1A",
    state: "MT",
    county: "Rosebud County",
    year: 2022,
    capacity: 365.52,
    totalTurbines: 131,
    lon: -106.410713,
    lat: 46.862144,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 13, capacityKW: 2520.0, totalCapacityKW: 32760.0, hubHeight: 114.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 118, capacityKW: 2820.0, totalCapacityKW: 332760.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Clearwater Wind East",
    state: "MT",
    county: "Custer County",
    year: 2023,
    capacity: 208.2,
    totalTurbines: 74,
    lon: -105.901588,
    lat: 46.847969,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 11, capacityKW: 2520.0, totalCapacityKW: 27720.0, hubHeight: 114.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 63, capacityKW: 2820.0, totalCapacityKW: 177660.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Clearwater Wind II",
    state: "MT",
    county: "Rosebud County",
    year: 2023,
    capacity: 102.84,
    totalTurbines: 36,
    lon: -106.170647,
    lat: 46.77533,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 5, capacityKW: 2520.0, totalCapacityKW: 12600.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 31, capacityKW: 2820.0, totalCapacityKW: 87420.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Clearwater Wind III",
    state: "MT",
    county: "Rosebud County",
    year: 2024,
    capacity: 99.3,
    totalTurbines: 36,
    lon: -106.243835,
    lat: 46.804688,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 5, capacityKW: 2500.0, totalCapacityKW: 12500.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 31, capacityKW: 2800.0, totalCapacityKW: 86800.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Coachella Hills",
    state: "CA",
    county: "Riverside County",
    year: 2021,
    capacity: 60.6,
    totalTurbines: 16,
    lon: -116.564034,
    lat: 33.890987,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.45", count: 3, capacityKW: 3450.0, totalCapacityKW: 10350.0, hubHeight: 94.0, rotorDiameter: 112.0 },
      { manufacturer: "Vestas", model: "V117-3.6", count: 13, capacityKW: 3600.0, totalCapacityKW: 46800.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Coastal Energy",
    state: "WA",
    county: "Grays Harbor County",
    year: 2010,
    capacity: 6.0,
    totalTurbines: 4,
    lon: -124.068687,
    lat: 46.794094,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 4, capacityKW: 1500.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Coastal Virginia Offshore Wind",
    state: null,
    county: null,
    year: 2020,
    capacity: 12.0,
    totalTurbines: 2,
    lon: -75.491577,
    lat: 36.886841,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SWT-6.0-154", count: 2, capacityKW: 6000.0, totalCapacityKW: 12000.0, hubHeight: 108.0, rotorDiameter: 154.0 }
    ]
  },
  {
    name: "Cold Springs",
    state: "ID",
    county: "Elmore County",
    year: 2012,
    capacity: 138.0,
    totalTurbines: 60,
    lon: -115.404587,
    lat: 43.052296,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 60, capacityKW: 2300.0, totalCapacityKW: 138000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Colorado Green Wind Project (Lamar)",
    state: "CO",
    county: "Prowers County",
    year: 2003,
    capacity: 162.0,
    totalTurbines: 101,
    lon: -102.569046,
    lat: 37.723225,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 8, capacityKW: 1500.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 70.5 },
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 93, capacityKW: 1600.0, totalCapacityKW: 148800.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Colorado Highlands",
    state: "CO",
    county: "Logan County",
    year: 2012,
    capacity: 67.2,
    totalTurbines: 56,
    lon: -102.746094,
    lat: 40.746792,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 42, capacityKW: 1600.0, totalCapacityKW: 67200.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 14, capacityKW: 1700.0, totalCapacityKW: 23800.0, hubHeight: 85.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Combine Hills I",
    state: "OR",
    county: "Umatilla County",
    year: 2003,
    capacity: 41.0,
    totalTurbines: 41,
    lon: -118.515984,
    lat: 45.923714,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 41, capacityKW: 1000.0, totalCapacityKW: 41000.0, hubHeight: 55.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Combine Hills II",
    state: "OR",
    county: "Umatilla County",
    year: 2009,
    capacity: 63.0,
    totalTurbines: 63,
    lon: -118.52755,
    lat: 45.922977,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 63, capacityKW: 1000.0, totalCapacityKW: 63000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Community Wind North",
    state: "MN",
    county: "Lincoln County",
    year: 2011,
    capacity: 24.0,
    totalTurbines: 12,
    lon: -96.40699,
    lat: 44.245693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Community Wind South",
    state: "MN",
    county: "Nobles County",
    year: 2012,
    capacity: 33.0,
    totalTurbines: 14,
    lon: -95.80069,
    lat: 43.719093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 14, capacityKW: 2200.0, totalCapacityKW: 30800.0, hubHeight: 100.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Conception Wind Project",
    state: "MO",
    county: "Nodaway County",
    year: 2008,
    capacity: 50.4,
    totalTurbines: 24,
    lon: -94.687592,
    lat: 40.201294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V120-2.2", count: 24, capacityKW: 2100.0, totalCapacityKW: 50400.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Condon Wind Project, phase I",
    state: "OR",
    county: "Gilliam County",
    year: 2001,
    capacity: 24.6,
    totalTurbines: 41,
    lon: -120.280685,
    lat: 45.277695,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT600", count: 41, capacityKW: 600.0, totalCapacityKW: 24600.0, hubHeight: 60.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Condon Wind Project, phase II",
    state: "OR",
    county: "Gilliam County",
    year: 2002,
    capacity: 25.2,
    totalTurbines: 42,
    lon: -120.274384,
    lat: 45.298393,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT600", count: 42, capacityKW: 600.0, totalCapacityKW: 25200.0, hubHeight: 60.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Contrail",
    state: "IA",
    county: "Taylor County",
    year: 2020,
    capacity: 112.42,
    totalTurbines: 41,
    lon: -94.808601,
    lat: 40.650738,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 6, capacityKW: 2720.0, totalCapacityKW: 16320.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 30, capacityKW: 2820.0, totalCapacityKW: 84600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Copenhagen",
    state: "NY",
    county: "Lewis County",
    year: 2018,
    capacity: 80.0,
    totalTurbines: 40,
    lon: -75.62912,
    lat: 43.881485,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 40, capacityKW: 2000.0, totalCapacityKW: 80000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Coram (Tehachapi 3)",
    state: "CA",
    county: "Kern County",
    year: 2004,
    capacity: 13.5,
    totalTurbines: 1,
    lon: -118.322021,
    lat: 35.057533,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE1.5-70.5", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Coram Energy LLC",
    state: "CA",
    county: "Kern County",
    year: 2005,
    capacity: 9.0,
    totalTurbines: 8,
    lon: -118.326485,
    lat: 35.061096,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "EW 1.5S", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: null, rotorDiameter: null },
      { manufacturer: "GE Vernova", model: "GE1.7-77", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Corriedale Wind Energy Project",
    state: "WY",
    county: "Laramie County",
    year: 2020,
    capacity: 59.22,
    totalTurbines: 21,
    lon: -104.985046,
    lat: 41.119568,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 21, capacityKW: 2820.0, totalCapacityKW: 59220.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Cotton Plains Wind",
    state: "TX",
    county: "Floyd County",
    year: 2017,
    capacity: 50.4,
    totalTurbines: 21,
    lon: -101.226967,
    lat: 34.001938,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.4-107", count: 21, capacityKW: 2400.0, totalCapacityKW: 50400.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Cottonwood Wind",
    state: "NE",
    county: "Webster County",
    year: 2017,
    capacity: 89.96,
    totalTurbines: 40,
    lon: -98.460411,
    lat: 40.287613,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 4, capacityKW: 1790.0, totalCapacityKW: 7160.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 36, capacityKW: 2300.0, totalCapacityKW: 82800.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Courtenay",
    state: "ND",
    county: "Stutsman County",
    year: 2016,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -98.624084,
    lat: 47.183929,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Cow Branch Wind Project",
    state: "MO",
    county: "Atchison County",
    year: 2008,
    capacity: 50.4,
    totalTurbines: 24,
    lon: -95.466095,
    lat: 40.439194,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 24, capacityKW: 2100.0, totalCapacityKW: 50400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Coyote",
    state: "TX",
    county: "Scurry County",
    year: 2020,
    capacity: 53.565,
    totalTurbines: 59,
    lon: -100.890274,
    lat: 32.869358,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 11, capacityKW: 2415.0, totalCapacityKW: 26565.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.5-145", count: 48, capacityKW: 4500.0, totalCapacityKW: 216000.0, hubHeight: 107.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Coyote Ridge",
    state: "SD",
    county: "Brookings County",
    year: 2019,
    capacity: 96.7,
    totalTurbines: 39,
    lon: -96.524071,
    lat: 44.458672,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 35, capacityKW: 2500.0, totalCapacityKW: 87500.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Crane Creek",
    state: "IA",
    county: "Howard County",
    year: 2009,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -92.490295,
    lat: 43.409393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Cranell",
    state: "TX",
    county: "Refugio County",
    year: 2020,
    capacity: 220.0,
    totalTurbines: 100,
    lon: -97.412361,
    lat: 28.187635,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V120-2.2", count: 100, capacityKW: 2200.0, totalCapacityKW: 220000.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Crawfish Wind Project (Prairie Switch)",
    state: "TX",
    county: "Wharton County",
    year: 2024,
    capacity: 163.2,
    totalTurbines: 48,
    lon: -96.132896,
    lat: 29.126488,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 48, capacityKW: 3400.0, totalCapacityKW: 163200.0, hubHeight: 117.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Crescent Wind",
    state: "MI",
    county: "Hillsdale County",
    year: 2021,
    capacity: 166.08,
    totalTurbines: 60,
    lon: -84.426811,
    lat: 41.907749,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 54, capacityKW: 2820.0, totalCapacityKW: 152280.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Creston Ridge",
    state: "NE",
    county: "Platte County",
    year: 2015,
    capacity: 6.8,
    totalTurbines: 4,
    lon: -97.386253,
    lat: 41.677574,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 4, capacityKW: 1700.0, totalCapacityKW: 6800.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Creston Ridge Expansion",
    state: "NE",
    county: "Platte County",
    year: 2017,
    capacity: 6.9,
    totalTurbines: 3,
    lon: -97.404823,
    lat: 41.677486,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Criterion",
    state: "MD",
    county: "Garrett County",
    year: 2010,
    capacity: 64.4,
    totalTurbines: 28,
    lon: -79.366135,
    lat: 39.345322,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 28, capacityKW: 2300.0, totalCapacityKW: 64400.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crocker",
    state: "SD",
    county: "Clark County",
    year: 2019,
    capacity: 209.44,
    totalTurbines: 77,
    lon: -97.889458,
    lat: 45.031082,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 77, capacityKW: 2720.0, totalCapacityKW: 209440.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crofton Bluffs",
    state: "NE",
    county: "Knox County",
    year: 2012,
    capacity: 42.0,
    totalTurbines: 22,
    lon: -97.566689,
    lat: 42.693493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 20, capacityKW: 1800.0, totalCapacityKW: 36000.0, hubHeight: 80.0, rotorDiameter: 90.0 },
      { manufacturer: "Vestas", model: "V90-3.0", count: 2, capacityKW: 3000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Cross Winds",
    state: "IA",
    county: "Palo Alto County",
    year: 2007,
    capacity: 21.0,
    totalTurbines: 10,
    lon: -94.897789,
    lat: 43.066193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 10, capacityKW: 2100.0, totalCapacityKW: 21000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Cross Winds Energy Park",
    state: "MI",
    county: "Tuscola County",
    year: 2014,
    capacity: 110.98,
    totalTurbines: 62,
    lon: -83.507965,
    lat: 43.592953,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 62, capacityKW: 1790.0, totalCapacityKW: 110980.0, hubHeight: 96.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Cross Winds Energy Park II",
    state: "MI",
    county: "Tuscola County",
    year: 2018,
    capacity: 43.7,
    totalTurbines: 19,
    lon: -83.447853,
    lat: 43.629093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 19, capacityKW: 2300.0, totalCapacityKW: 43700.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Cross Winds Energy Park III",
    state: "MI",
    county: "Tuscola County",
    year: 2019,
    capacity: 75.9,
    totalTurbines: 33,
    lon: -83.365562,
    lat: 43.630173,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 33, capacityKW: 2300.0, totalCapacityKW: 75900.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crossing Trails",
    state: "CO",
    county: "Cheyenne County",
    year: 2021,
    capacity: 104.0,
    totalTurbines: 25,
    lon: -102.83049,
    lat: 39.07766,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 5, capacityKW: 3600.0, totalCapacityKW: 18000.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 20, capacityKW: 4300.0, totalCapacityKW: 86000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Crossover Wind",
    state: "AR",
    county: "Cross County",
    year: 2025,
    capacity: 144.0,
    totalTurbines: 31,
    lon: -90.85186,
    lat: 35.217815,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V163-4.5", count: 31, capacityKW: 4500.0, totalCapacityKW: 139500.0, hubHeight: null, rotorDiameter: 163.0 }
    ]
  },
  {
    name: "Crossroads",
    state: "OK",
    county: "Dewey County",
    year: 2011,
    capacity: 195.5,
    totalTurbines: 98,
    lon: -98.82589,
    lat: 36.091595,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 95, capacityKW: 2300.0, totalCapacityKW: 218500.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Siemens", model: "SWT-3.0-101", count: 3, capacityKW: 3000.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Crow Lake",
    state: "SD",
    county: "Jerauld County",
    year: 2010,
    capacity: 87.0,
    totalTurbines: 101,
    lon: -98.66069,
    lat: 43.945694,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 101, capacityKW: 1500.0, totalCapacityKW: 151500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Crowned Ridge I",
    state: "SD",
    county: "Codington County",
    year: 2019,
    capacity: 200.1,
    totalTurbines: 87,
    lon: -96.888962,
    lat: 45.069283,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 87, capacityKW: 2300.0, totalCapacityKW: 200100.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crowned Ridge II",
    state: "SD",
    county: "Codington County",
    year: 2020,
    capacity: 200.6,
    totalTurbines: 88,
    lon: -96.868362,
    lat: 44.946133,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.1-116", count: 9, capacityKW: 2100.0, totalCapacityKW: 18900.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 79, capacityKW: 2300.0, totalCapacityKW: 181700.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crystal Lake I",
    state: "IA",
    county: "Hancock County",
    year: 2008,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -93.828094,
    lat: 43.207993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Crystal Lake II",
    state: "IA",
    county: "Winnebago County",
    year: 2009,
    capacity: 10.0,
    totalTurbines: 80,
    lon: -93.815392,
    lat: 43.273693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 4, capacityKW: 2500.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 96.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 70, capacityKW: 2500.0, totalCapacityKW: 175000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Crystal Lake III",
    state: "IA",
    county: "Winnebago County",
    year: 2009,
    capacity: 66.0,
    totalTurbines: 44,
    lon: -93.897392,
    lat: 43.335991,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 44, capacityKW: 1500.0, totalCapacityKW: 66000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Dakota Range I and II",
    state: "SD",
    county: "Codington County",
    year: 2022,
    capacity: 304.0,
    totalTurbines: 72,
    lon: -97.039932,
    lat: 45.176701,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.8", count: 8, capacityKW: 3800.0, totalCapacityKW: 30400.0, hubHeight: 82.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V136-4.3", count: 64, capacityKW: 4300.0, totalCapacityKW: 275200.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Dakota Range III",
    state: "SD",
    county: "Roberts County",
    year: 2021,
    capacity: 153.6,
    totalTurbines: 32,
    lon: -97.068604,
    lat: 45.301502,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 32, capacityKW: 4800.0, totalCapacityKW: 153600.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Dan's Mountain Wind",
    state: "MD",
    county: "Allegany County",
    year: 2025,
    capacity: 54.9,
    totalTurbines: 9,
    lon: -78.901131,
    lat: 39.584255,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE6.1-158", count: 9, capacityKW: 6100.0, totalCapacityKW: 54900.0, hubHeight: 117.0, rotorDiameter: 158.0 }
    ]
  },
  {
    name: "Danielson",
    state: "MN",
    county: "Meeker County",
    year: 2011,
    capacity: 19.8,
    totalTurbines: 12,
    lon: -94.746391,
    lat: 45.06649,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Alstom", model: "ECO 86", count: 12, capacityKW: 1670.0, totalCapacityKW: 20040.0, hubHeight: 80.0, rotorDiameter: 85.5 }
    ]
  },
  {
    name: "Day County Wind Project",
    state: "SD",
    county: "Day County",
    year: 2010,
    capacity: 105.6,
    totalTurbines: 66,
    lon: -97.893692,
    lat: 45.205292,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 66, capacityKW: 1600.0, totalCapacityKW: 105600.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "DeWind Little Pringle #1",
    state: "TX",
    county: "Hutchinson County",
    year: 2010,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -101.529594,
    lat: 35.912895,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "DeWind", model: "D8.2", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "DeWind Little Pringle #2",
    state: "TX",
    county: "Hutchinson County",
    year: 2010,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -101.540192,
    lat: 35.964294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "DeWind", model: "D8.2", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Deerfield",
    state: "MI",
    county: "Huron County",
    year: 2017,
    capacity: 149.0,
    totalTurbines: 72,
    lon: -82.830399,
    lat: 43.976868,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 72, capacityKW: 2100.0, totalCapacityKW: 151200.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Deerfield II Wind project",
    state: "MI",
    county: "Huron County",
    year: 2023,
    capacity: 112.0,
    totalTurbines: 21,
    lon: -82.875221,
    lat: 43.983227,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.6-114", count: 4, capacityKW: 2600.0, totalCapacityKW: 10400.0, hubHeight: 80.0, rotorDiameter: 114.0 },
      { manufacturer: "Vestas", model: "V150-5.6", count: 1, capacityKW: 5600.0, totalCapacityKW: 5600.0, hubHeight: 105.0, rotorDiameter: 150.0 },
      { manufacturer: "Vestas", model: "V162-6.0", count: 16, capacityKW: 6000.0, totalCapacityKW: 96000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "Deerfield Wind",
    state: "VT",
    county: "Bennington County",
    year: 2017,
    capacity: 30.0,
    totalTurbines: 15,
    lon: -72.990654,
    lat: 42.878674,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 78.0, rotorDiameter: 87.0 },
      { manufacturer: "Gamesa", model: "G97-2.0", count: 8, capacityKW: 2000.0, totalCapacityKW: 16000.0, hubHeight: 78.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Delta Wind Project",
    state: "MS",
    county: "Tunica County",
    year: 2024,
    capacity: 184.5,
    totalTurbines: 41,
    lon: -90.372375,
    lat: 34.47784,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 41, capacityKW: 4500.0, totalCapacityKW: 184500.0, hubHeight: 136.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Desert Sky",
    state: "TX",
    county: "Pecos County",
    year: 2001,
    capacity: 160.5,
    totalTurbines: 76,
    lon: -102.106728,
    lat: 30.920565,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 65.0, rotorDiameter: 70.5 },
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 71, capacityKW: 1500.0, totalCapacityKW: 106500.0, hubHeight: 65.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.85-87.5", count: 4, capacityKW: 1850.0, totalCapacityKW: 7400.0, hubHeight: 80.0, rotorDiameter: 87.5 }
    ]
  },
  {
    name: "Desert Sky Repower",
    state: "TX",
    county: "Pecos County",
    year: 2001,
    capacity: 38.67,
    totalTurbines: 15,
    lon: -102.07634,
    lat: 30.915995,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 3, capacityKW: 1700.0, totalCapacityKW: 5100.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.85-87.5", count: 12, capacityKW: 1850.0, totalCapacityKW: 22200.0, hubHeight: 80.0, rotorDiameter: 87.5 }
    ]
  },
  {
    name: "Deuel Harvest North",
    state: "SD",
    county: "Deuel County",
    year: 2021,
    capacity: 301.14,
    totalTurbines: 109,
    lon: -96.59549,
    lat: 44.908207,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 12, capacityKW: 2300.0, totalCapacityKW: 27600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 97, capacityKW: 2820.0, totalCapacityKW: 273540.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Diablo Winds",
    state: "CA",
    county: "Alameda County",
    year: 2004,
    capacity: 20.46,
    totalTurbines: 31,
    lon: -121.651001,
    lat: 37.773636,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 31, capacityKW: 660.0, totalCapacityKW: 20460.0, hubHeight: 60.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Diamond Spring",
    state: "OK",
    county: "Johnston County",
    year: 2020,
    capacity: 303.5,
    totalTurbines: 112,
    lon: -96.825195,
    lat: 34.517548,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.75-127", count: 102, capacityKW: 2750.0, totalCapacityKW: 280500.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Diamond Trail",
    state: "IA",
    county: "Iowa County",
    year: 2020,
    capacity: 168.8,
    totalTurbines: 46,
    lon: -92.206703,
    lat: 41.665611,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 8, capacityKW: 2000.0, totalCapacityKW: 16000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 5, capacityKW: 2200.0, totalCapacityKW: 11000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-4.2", count: 1, capacityKW: 4200.0, totalCapacityKW: 4200.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V136-4.3", count: 32, capacityKW: 4300.0, totalCapacityKW: 137600.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Diamond Trail Expansion",
    state: "IA",
    county: "Iowa County",
    year: 2020,
    capacity: 83.7,
    totalTurbines: 31,
    lon: -92.215019,
    lat: 41.709122,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 25, capacityKW: 2820.0, totalCapacityKW: 70500.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 6, capacityKW: 2200.0, totalCapacityKW: 13200.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Diamond Vista",
    state: "KS",
    county: "Marion County",
    year: 2018,
    capacity: 299.25,
    totalTurbines: 95,
    lon: -97.092773,
    lat: 38.563576,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 95, capacityKW: 3150.0, totalCapacityKW: 299250.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Diamond Willow Wind",
    state: "MT",
    county: "Fallon County",
    year: 2008,
    capacity: 18.0,
    totalTurbines: 12,
    lon: -104.183189,
    lat: 46.273392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 12, capacityKW: 1500.0, totalCapacityKW: 18000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Diamond Willow extension",
    state: "MT",
    county: "Fallon County",
    year: 2010,
    capacity: 10.5,
    totalTurbines: 8,
    lon: -104.16539,
    lat: 46.271294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 8, capacityKW: 1500.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Difwind 6",
    state: "CA",
    county: "Kern County",
    year: 1987,
    capacity: 27.0,
    totalTurbines: 190,
    lon: -118.262352,
    lat: 35.064373,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Micon", model: "180", count: 176, capacityKW: 108.0, totalCapacityKW: 19008.0, hubHeight: null, rotorDiameter: null }
    ]
  },
  {
    name: "Dillon",
    state: "CA",
    county: "Riverside County",
    year: 2008,
    capacity: 45.0,
    totalTurbines: 45,
    lon: -116.567314,
    lat: 33.914017,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 45, capacityKW: 1000.0, totalCapacityKW: 45000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Diversion Wind",
    state: "TX",
    county: "Baylor County",
    year: 2024,
    capacity: 200.6,
    totalTurbines: 59,
    lon: -99.052254,
    lat: 33.699917,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 59, capacityKW: 3400.0, totalCapacityKW: 200600.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Dole Fresh Vegetables",
    state: "CA",
    county: "Monterey County",
    year: 2022,
    capacity: 5.64,
    totalTurbines: 2,
    lon: -121.350082,
    lat: 36.459293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 2, capacityKW: 2820.0, totalCapacityKW: 5640.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Downeast Wind",
    state: "ME",
    county: "Washington County",
    year: 2025,
    capacity: 126.0,
    totalTurbines: 30,
    lon: -67.90625,
    lat: 44.727009,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.0", count: 30, capacityKW: 4200.0, totalCapacityKW: 126000.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Drift Sand",
    state: "OK",
    county: "Grady County",
    year: 2016,
    capacity: 108.0,
    totalTurbines: 54,
    lon: -97.951134,
    lat: 34.815552,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 54, capacityKW: 2000.0, totalCapacityKW: 108000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Dry Lake",
    state: "AZ",
    county: "Navajo County",
    year: 2009,
    capacity: 63.0,
    totalTurbines: 30,
    lon: -110.253387,
    lat: 34.672695,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 30, capacityKW: 2100.0, totalCapacityKW: 63000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Dry Lake II",
    state: "AZ",
    county: "Navajo County",
    year: 2010,
    capacity: 65.1,
    totalTurbines: 31,
    lon: -110.21479,
    lat: 34.595295,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 31, capacityKW: 2100.0, totalCapacityKW: 65100.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Dunlap",
    state: "WY",
    county: "Carbon County",
    year: 2010,
    capacity: 136.9,
    totalTurbines: 74,
    lon: -106.152885,
    lat: 42.029991,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 74, capacityKW: 1850.0, totalCapacityKW: 136900.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Durbin Creek",
    state: "OR",
    county: "Baker County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -117.317482,
    lat: 44.353138,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Dutch Hill/Cohocton",
    state: "NY",
    county: "Steuben County",
    year: 2009,
    capacity: 125.0,
    totalTurbines: 50,
    lon: -77.453499,
    lat: 42.528492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 23, capacityKW: 2500.0, totalCapacityKW: 57500.0, hubHeight: 80.0, rotorDiameter: 96.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 27, capacityKW: 2500.0, totalCapacityKW: 67500.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "East Fork",
    state: "KS",
    county: "Thomas County",
    year: 2020,
    capacity: 195.84,
    totalTurbines: 72,
    lon: -100.858742,
    lat: 39.356201,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 72, capacityKW: 2720.0, totalCapacityKW: 195840.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "East Raymond",
    state: "TX",
    county: "Willacy County",
    year: 2020,
    capacity: 200.0,
    totalTurbines: 91,
    lon: -97.666832,
    lat: 26.42337,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 1, capacityKW: 2000.0, totalCapacityKW: 2000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 90, capacityKW: 2200.0, totalCapacityKW: 198000.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "East Ridge",
    state: "MN",
    county: "Murray County",
    year: 2006,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -95.916313,
    lat: 43.942856,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 3, capacityKW: 1250.0, totalCapacityKW: 3750.0, hubHeight: 74.5, rotorDiameter: 64.0 },
      { manufacturer: "Suzlon", model: "S64-1.25", count: 5, capacityKW: 1250.0, totalCapacityKW: 6250.0, hubHeight: 65.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Echo",
    state: "MI",
    county: "Huron County",
    year: 2014,
    capacity: 112.0,
    totalTurbines: 70,
    lon: -83.237099,
    lat: 43.883991,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 70, capacityKW: 1600.0, totalCapacityKW: 112000.0, hubHeight: 96.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Echo 1-7",
    state: "OR",
    county: "Morrow County",
    year: 2009,
    capacity: 44.55,
    totalTurbines: 27,
    lon: -119.486984,
    lat: 45.654095,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 27, capacityKW: 1650.0, totalCapacityKW: 44550.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Echo 8-9",
    state: "OR",
    county: "Morrow County",
    year: 2009,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -119.458473,
    lat: 45.64933,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Eclipse",
    state: "IA",
    county: "Guthrie County",
    year: 2012,
    capacity: 207.06,
    totalTurbines: 87,
    lon: -94.637909,
    lat: 41.541241,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.38-129", count: 87, capacityKW: 2380.0, totalCapacityKW: 207060.0, hubHeight: 80.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "EcoGrove",
    state: "IL",
    county: "Stephenson County",
    year: 2009,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -89.918594,
    lat: 42.44939,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW82/1500", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Edom Hills (repower)",
    state: "CA",
    county: "Riverside County",
    year: 2008,
    capacity: 20.0,
    totalTurbines: 8,
    lon: -116.459686,
    lat: 33.883293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C93", count: 8, capacityKW: 2500.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Eight Point Wind",
    state: "NY",
    county: "Steuben County",
    year: 2023,
    capacity: 116.5,
    totalTurbines: 24,
    lon: -77.689705,
    lat: 42.038216,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 7, capacityKW: 2500.0, totalCapacityKW: 17500.0, hubHeight: 90.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE5.5-158", count: 17, capacityKW: 5500.0, totalCapacityKW: 93500.0, hubHeight: 117.0, rotorDiameter: 158.0 }
    ]
  },
  {
    name: "Ekola Flats",
    state: "WY",
    county: "Carbon County",
    year: 2020,
    capacity: 250.9,
    totalTurbines: 51,
    lon: -106.289551,
    lat: 41.92749,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "Vestas", model: "V136-4.3", count: 41, capacityKW: 4300.0, totalCapacityKW: 176300.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "El Algodon Alto Wind Farm",
    state: "TX",
    county: "San Patricio County",
    year: 2022,
    capacity: 200.2,
    totalTurbines: 91,
    lon: -97.691223,
    lat: 28.020683,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 13, capacityKW: 2200.0, totalCapacityKW: 28600.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 78, capacityKW: 2200.0, totalCapacityKW: 171600.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "El Cabo",
    state: "NM",
    county: "Torrance County",
    year: 2017,
    capacity: 298.2,
    totalTurbines: 142,
    lon: -105.610329,
    lat: 34.807079,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 142, capacityKW: 2100.0, totalCapacityKW: 298200.0, hubHeight: 80.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "El Campo",
    state: "TX",
    county: "Knox County",
    year: 2020,
    capacity: 242.8,
    totalTurbines: 67,
    lon: -99.753273,
    lat: 33.745708,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 17, capacityKW: 2000.0, totalCapacityKW: 34000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 2, capacityKW: 3600.0, totalCapacityKW: 7200.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 48, capacityKW: 4200.0, totalCapacityKW: 201600.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "El Sauz Ranch",
    state: "TX",
    county: "Willacy County",
    year: 2025,
    capacity: 301.5,
    totalTurbines: 67,
    lon: -97.595818,
    lat: 26.505831,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N155/4500", count: 67, capacityKW: 4500.0, totalCapacityKW: 301500.0, hubHeight: 108.0, rotorDiameter: 155.0 }
    ]
  },
  {
    name: "Elbow Creek Wind Farm",
    state: "TX",
    county: "Howard County",
    year: 2008,
    capacity: 121.9,
    totalTurbines: 53,
    lon: -101.424194,
    lat: 32.120396,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 53, capacityKW: 2300.0, totalCapacityKW: 121900.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Electra Wind",
    state: "TX",
    county: "Wilbarger County",
    year: 2016,
    capacity: 230.0,
    totalTurbines: 100,
    lon: -99.099022,
    lat: 34.103298,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 100, capacityKW: 2300.0, totalCapacityKW: 230000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Elk",
    state: "IA",
    county: "Delaware County",
    year: 2011,
    capacity: 42.5,
    totalTurbines: 17,
    lon: -91.373314,
    lat: 42.584976,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 17, capacityKW: 2500.0, totalCapacityKW: 42500.0, hubHeight: 100.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Elk City",
    state: "OK",
    county: "Roger Mills County",
    year: 2009,
    capacity: 98.9,
    totalTurbines: 43,
    lon: -99.900589,
    lat: 35.476795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 43, capacityKW: 2300.0, totalCapacityKW: 98900.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Elk City II",
    state: "OK",
    county: "Roger Mills County",
    year: 2010,
    capacity: 101.16,
    totalTurbines: 66,
    lon: -99.678696,
    lat: 35.459892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 48, capacityKW: 1500.0, totalCapacityKW: 72000.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 18, capacityKW: 1620.0, totalCapacityKW: 29160.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Elk River",
    state: "KS",
    county: "Butler County",
    year: 2005,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -96.548195,
    lat: 37.559692,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Elkhorn Ridge",
    state: "NE",
    county: "Knox County",
    year: 2009,
    capacity: 81.0,
    totalTurbines: 27,
    lon: -97.688087,
    lat: 42.660294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 27, capacityKW: 3000.0, totalCapacityKW: 81000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Elkhorn Valley (La Grande)",
    state: "OR",
    county: "Union County",
    year: 2007,
    capacity: 97.35,
    totalTurbines: 59,
    lon: -117.817085,
    lat: 45.112995,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 59, capacityKW: 1650.0, totalCapacityKW: 97350.0, hubHeight: 70.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Elm Creek",
    state: "MN",
    county: "Jackson County",
    year: 2008,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -94.965096,
    lat: 43.759693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Elm Creek II",
    state: "MN",
    county: "Jackson County",
    year: 2010,
    capacity: 148.8,
    totalTurbines: 62,
    lon: -94.901093,
    lat: 43.671692,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT95/2.4", count: 62, capacityKW: 2400.0, totalCapacityKW: 148800.0, hubHeight: 80.0, rotorDiameter: 95.0 }
    ]
  },
  {
    name: "Emmons-Logan",
    state: "ND",
    county: "Logan County",
    year: 2019,
    capacity: 216.44,
    totalTurbines: 102,
    lon: -100.113853,
    lat: 46.395618,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.72-103", count: 61, capacityKW: 1720.0, totalCapacityKW: 104920.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 41, capacityKW: 2720.0, totalCapacityKW: 111520.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Endeavor",
    state: "IA",
    county: "Osceola County",
    year: 2008,
    capacity: 73.2,
    totalTurbines: 40,
    lon: -95.52179,
    lat: 43.482292,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 35, capacityKW: 2500.0, totalCapacityKW: 87500.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Endeavor II",
    state: "IA",
    county: "Osceola County",
    year: 2008,
    capacity: 49.6,
    totalTurbines: 20,
    lon: -95.47509,
    lat: 43.423492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 2, capacityKW: 2300.0, totalCapacityKW: 4600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 18, capacityKW: 2500.0, totalCapacityKW: 45000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "English Farms",
    state: "IA",
    county: "Poweshiek County",
    year: 2019,
    capacity: 170.3,
    totalTurbines: 69,
    lon: -92.496002,
    lat: 41.528702,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 58, capacityKW: 2500.0, totalCapacityKW: 145000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Ensign",
    state: "KS",
    county: "Gray County",
    year: 2012,
    capacity: 98.9,
    totalTurbines: 43,
    lon: -100.261589,
    lat: 37.604492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 39, capacityKW: 2300.0, totalCapacityKW: 89700.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Escalade",
    state: "TX",
    county: "Knox County",
    year: 2022,
    capacity: 336.0,
    totalTurbines: 65,
    lon: -99.66098,
    lat: 33.726151,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.2", count: 20, capacityKW: 4200.0, totalCapacityKW: 84000.0, hubHeight: 119.0, rotorDiameter: 150.0 },
      { manufacturer: "Vestas", model: "V162-5.6", count: 45, capacityKW: 5600.0, totalCapacityKW: 252000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "Eva Creek",
    state: "AK",
    county: "Denali Borough",
    year: 2012,
    capacity: 24.6,
    totalTurbines: 12,
    lon: -148.903778,
    lat: 64.059998,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 12, capacityKW: 2050.0, totalCapacityKW: 24600.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Evanston (Wyoming Wind Energy Center)",
    state: "WY",
    county: "Uinta County",
    year: 2003,
    capacity: 144.0,
    totalTurbines: 78,
    lon: -110.725677,
    lat: 41.380432,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 78, capacityKW: 1800.0, totalCapacityKW: 140400.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Ewington",
    state: "MN",
    county: "Jackson County",
    year: 2008,
    capacity: 22.5,
    totalTurbines: 9,
    lon: -95.425507,
    lat: 43.618538,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 8, capacityKW: 2500.0, totalCapacityKW: 20000.0, hubHeight: 79.0, rotorDiameter: 116.0 },
      { manufacturer: "Suzlon", model: "S88", count: 1, capacityKW: 2100.0, totalCapacityKW: 2100.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Fair Wind",
    state: "MD",
    county: "Garrett County",
    year: 2015,
    capacity: 30.0,
    totalTurbines: 12,
    lon: -79.393959,
    lat: 39.318581,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 12, capacityKW: 2500.0, totalCapacityKW: 30000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Fairbanks Wind Park",
    state: "MI",
    county: "Delta County",
    year: 2022,
    capacity: 72.45,
    totalTurbines: 20,
    lon: -86.68589,
    lat: 45.66938,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.4-132", count: 20, capacityKW: 3450.0, totalCapacityKW: 69000.0, hubHeight: 84.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Fairfield Wind Farm",
    state: "MT",
    county: "Teton County",
    year: 2014,
    capacity: 10.0,
    totalTurbines: 6,
    lon: -111.965691,
    lat: 47.720558,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 2, capacityKW: 1600.0, totalCapacityKW: 3200.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 4, capacityKW: 1700.0, totalCapacityKW: 6800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Falvez Astra",
    state: "TX",
    county: "Randall County",
    year: 2017,
    capacity: 163.2,
    totalTurbines: 68,
    lon: -102.010376,
    lat: 34.750866,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.4-107", count: 68, capacityKW: 2400.0, totalCapacityKW: 163200.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Farmer's",
    state: "MN",
    county: "Jackson County",
    year: 2004,
    capacity: 5.7,
    totalTurbines: 6,
    lon: -95.380737,
    lat: 43.651375,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM54", count: 6, capacityKW: 950.0, totalCapacityKW: 5700.0, hubHeight: 70.0, rotorDiameter: 54.0 }
    ]
  },
  {
    name: "Farmers City",
    state: "MO",
    county: "Atchison County",
    year: 2009,
    capacity: 146.0,
    totalTurbines: 73,
    lon: -95.436089,
    lat: 40.532291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 73, capacityKW: 2000.0, totalCapacityKW: 146000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Farmers' coops/Westridge",
    state: "MN",
    county: "Pipestone County",
    year: 2003,
    capacity: 17.1,
    totalTurbines: 18,
    lon: -96.223473,
    lat: 43.988792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 18, capacityKW: 950.0, totalCapacityKW: 17100.0, hubHeight: 63.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Fenner Wind Power Project",
    state: "NY",
    county: "Madison County",
    year: 2001,
    capacity: 30.0,
    totalTurbines: 19,
    lon: -75.760597,
    lat: 43.001091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 19, capacityKW: 1500.0, totalCapacityKW: 28500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Fenton",
    state: "MN",
    county: "Murray County",
    year: 2007,
    capacity: 205.5,
    totalTurbines: 137,
    lon: -96.018494,
    lat: 43.880894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 137, capacityKW: 1500.0, totalCapacityKW: 205500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Fire Island Project",
    state: "AK",
    county: "Matanuska-Susitna Borough",
    year: 2012,
    capacity: 17.6,
    totalTurbines: 11,
    lon: -150.215973,
    lat: 61.1395,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 11, capacityKW: 1600.0, totalCapacityKW: 17600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Flat Ridge 2",
    state: "KS",
    county: "Kingman County",
    year: 2012,
    capacity: 470.4,
    totalTurbines: 261,
    lon: -98.096191,
    lat: 37.394894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 261, capacityKW: 1600.0, totalCapacityKW: 417600.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Flat Ridge 2 Expansion",
    state: "KS",
    county: "Harper County",
    year: 2012,
    capacity: 470.4,
    totalTurbines: 32,
    lon: -98.316994,
    lat: 37.323795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-87", count: 32, capacityKW: 1600.0, totalCapacityKW: 51200.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Flat Ridge 3",
    state: "KS",
    county: "Kingman County",
    year: 2021,
    capacity: 128.0,
    totalTurbines: 62,
    lon: -98.348358,
    lat: 37.4622,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 44, capacityKW: 2000.0, totalCapacityKW: 88000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 18, capacityKW: 2200.0, totalCapacityKW: 39600.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Flat Ridge 4",
    state: "KS",
    county: "Kingman County",
    year: 2025,
    capacity: 135.0,
    totalTurbines: 30,
    lon: -98.054634,
    lat: 37.387581,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 30, capacityKW: 4500.0, totalCapacityKW: 135000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Flat Ridge 5",
    state: "KS",
    county: "Kingman County",
    year: 2025,
    capacity: 153.0,
    totalTurbines: 34,
    lon: -98.040047,
    lat: 37.394463,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 34, capacityKW: 4500.0, totalCapacityKW: 153000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Flat Ridge Wind Farm",
    state: "KS",
    county: "Barber County",
    year: 2009,
    capacity: 100.0,
    totalTurbines: 40,
    lon: -98.516396,
    lat: 37.380196,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 22, capacityKW: 2500.0, totalCapacityKW: 55000.0, hubHeight: 80.0, rotorDiameter: 96.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 18, capacityKW: 2000.0, totalCapacityKW: 36000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Flat Top",
    state: "TX",
    county: "Mills County",
    year: 2018,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -98.584778,
    lat: 31.599735,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Flat Water",
    state: "NE",
    county: "Richardson County",
    year: 2010,
    capacity: 60.0,
    totalTurbines: 40,
    lon: -95.895393,
    lat: 40.008492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 40, capacityKW: 1500.0, totalCapacityKW: 60000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Fluvanna I",
    state: "TX",
    county: "Scurry County",
    year: 2017,
    capacity: 155.4,
    totalTurbines: 74,
    lon: -101.06691,
    lat: 32.896542,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 74, capacityKW: 2100.0, totalCapacityKW: 155400.0, hubHeight: 80.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Flying Cloud",
    state: "IA",
    county: "Dickinson County",
    year: 2003,
    capacity: 43.5,
    totalTurbines: 29,
    lon: -95.277794,
    lat: 43.398991,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 29, capacityKW: 1500.0, totalCapacityKW: 43500.0, hubHeight: 80.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Foard City",
    state: "TX",
    county: "Foard County",
    year: 2019,
    capacity: 350.28,
    totalTurbines: 139,
    lon: -99.690964,
    lat: 33.937546,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 139, capacityKW: 2520.0, totalCapacityKW: 350280.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Foote Creek II, III, IV Repowering",
    state: "WY",
    county: "Carbon County",
    year: 2023,
    capacity: 46.2,
    totalTurbines: 11,
    lon: -106.187958,
    lat: 41.660233,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-4.2", count: 11, capacityKW: 4200.0, totalCapacityKW: 46200.0, hubHeight: 84.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Ford Ridge",
    state: "IL",
    county: "Ford County",
    year: 2022,
    capacity: 120.4,
    totalTurbines: 43,
    lon: -88.357819,
    lat: 40.565109,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 43, capacityKW: 2800.0, totalCapacityKW: 120400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Forest Creek Wind Project",
    state: "TX",
    county: "Sterling County",
    year: 2006,
    capacity: 124.2,
    totalTurbines: 54,
    lon: -101.210289,
    lat: 32.039597,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 54, capacityKW: 2300.0, totalCapacityKW: 124200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Forward",
    state: "PA",
    county: "Somerset County",
    year: 2008,
    capacity: 29.4,
    totalTurbines: 14,
    lon: -78.861595,
    lat: 40.094193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 14, capacityKW: 2100.0, totalCapacityKW: 29400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Forward Wind Project",
    state: "WI",
    county: "Dodge County",
    year: 2008,
    capacity: 129.0,
    totalTurbines: 86,
    lon: -88.527992,
    lat: 43.57769,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 86, capacityKW: 1500.0, totalCapacityKW: 129000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Fossil Gulch",
    state: "ID",
    county: "Twin Falls County",
    year: 2005,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -114.949585,
    lat: 42.852196,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Fourmile Ridge",
    state: "MD",
    county: "Garrett County",
    year: 2014,
    capacity: 40.0,
    totalTurbines: 16,
    lon: -79.008453,
    lat: 39.639423,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 16, capacityKW: 2500.0, totalCapacityKW: 40000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Fowler Ridge I",
    state: "IN",
    county: "Benton County",
    year: 2009,
    capacity: 400.3,
    totalTurbines: 222,
    lon: -87.24369,
    lat: 40.612392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 6, capacityKW: 2500.0, totalCapacityKW: 15000.0, hubHeight: 80.0, rotorDiameter: 96.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 39, capacityKW: 2200.0, totalCapacityKW: 85800.0, hubHeight: 87.0, rotorDiameter: 120.0 },
      { manufacturer: "Vestas", model: "V82-1.65", count: 177, capacityKW: 1650.0, totalCapacityKW: 292050.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Fowler Ridge II",
    state: "IN",
    county: "Benton County",
    year: 2009,
    capacity: 199.5,
    totalTurbines: 133,
    lon: -87.440491,
    lat: 40.541893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 133, capacityKW: 1500.0, totalCapacityKW: 199500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Foxtail Wind",
    state: "ND",
    county: "Dickey County",
    year: 2019,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -98.856201,
    lat: 46.056953,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.0", count: 68, capacityKW: 2000.0, totalCapacityKW: 136000.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Franklin County",
    state: "IA",
    county: "Franklin County",
    year: 2012,
    capacity: 99.0,
    totalTurbines: 60,
    lon: -93.374992,
    lat: 42.613091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 60, capacityKW: 1650.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Freeborn Wind Energy",
    state: "IA",
    county: "Worth County",
    year: 2021,
    capacity: 154.0,
    totalTurbines: 100,
    lon: -93.066727,
    lat: 43.492378,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 93, capacityKW: 2200.0, totalCapacityKW: 204600.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Frisco",
    state: "TX",
    county: "Hansford County",
    year: 2012,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -101.598892,
    lat: 36.498493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "DeWind", model: "D8.2", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Frontier I",
    state: "OK",
    county: "Kay County",
    year: 2016,
    capacity: 199.8,
    totalTurbines: 61,
    lon: -97.212875,
    lat: 36.83522,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.0", count: 5, capacityKW: 3000.0, totalCapacityKW: 15000.0, hubHeight: 87.0, rotorDiameter: 126.0 },
      { manufacturer: "Vestas", model: "V126-3.3", count: 56, capacityKW: 3300.0, totalCapacityKW: 184800.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Frontier II",
    state: "OK",
    county: "Kay County",
    year: 2021,
    capacity: 355.2,
    totalTurbines: 74,
    lon: -96.989197,
    lat: 36.830017,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 74, capacityKW: 4800.0, totalCapacityKW: 355200.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Future Generation Wind",
    state: "MA",
    county: "Plymouth County",
    year: 2016,
    capacity: 8.0,
    totalTurbines: 4,
    lon: -70.616127,
    lat: 41.777271,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G97-2.0", count: 4, capacityKW: 2000.0, totalCapacityKW: 8000.0, hubHeight: 100.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "G. McNeilus Wind Farm",
    state: "MN",
    county: "Mower County",
    year: 2003,
    capacity: 13.5,
    totalTurbines: 9,
    lon: -92.720695,
    lat: 43.55479,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 9, capacityKW: 1500.0, totalCapacityKW: 13500.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "GL Wind",
    state: "MN",
    county: "Winona County",
    year: 2011,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -91.877182,
    lat: 43.994598,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 80.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "GSG Repower",
    state: "IL",
    county: "LaSalle County",
    year: 2007,
    capacity: 88.4,
    totalTurbines: 26,
    lon: -89.112213,
    lat: 41.621456,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 26, capacityKW: 3400.0, totalCapacityKW: 88400.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Galactic Wind",
    state: "WI",
    county: "Dane County",
    year: 2012,
    capacity: 9.9,
    totalTurbines: 6,
    lon: -89.566193,
    lat: 43.172791,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 6, capacityKW: 1650.0, totalCapacityKW: 9900.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Garnet Wind Project",
    state: "CA",
    county: "Riverside County",
    year: 2009,
    capacity: 6.5,
    totalTurbines: 13,
    lon: -116.582489,
    lat: 33.904194,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "NedWind", model: "40/500", count: 13, capacityKW: 500.0, totalCapacityKW: 6500.0, hubHeight: 39.5, rotorDiameter: 40.0 }
    ]
  },
  {
    name: "Georgia Mountain",
    state: "VT",
    county: "Franklin County",
    year: 2012,
    capacity: 10.0,
    totalTurbines: 4,
    lon: -73.070686,
    lat: 44.664459,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW100", count: 4, capacityKW: 2500.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Glacier Hills",
    state: "WI",
    county: "Columbia County",
    year: 2011,
    capacity: 162.0,
    totalTurbines: 90,
    lon: -89.048897,
    lat: 43.558693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 90, capacityKW: 1800.0, totalCapacityKW: 162000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Glacier I",
    state: "MT",
    county: "Toole County",
    year: 2008,
    capacity: 106.5,
    totalTurbines: 71,
    lon: -112.080887,
    lat: 48.492794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW77/1500", count: 71, capacityKW: 1500.0, totalCapacityKW: 106500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Glacier Sands",
    state: "IL",
    county: "Mason County",
    year: 2021,
    capacity: 184.9,
    totalTurbines: 43,
    lon: -89.622643,
    lat: 40.282471,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.3", count: 43, capacityKW: 4300.0, totalCapacityKW: 184900.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Glacier Wind II",
    state: "MT",
    county: "Glacier County",
    year: 2009,
    capacity: 103.5,
    totalTurbines: 69,
    lon: -112.226685,
    lat: 48.559395,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW77/1500", count: 69, capacityKW: 1500.0, totalCapacityKW: 103500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Glaciers Edge",
    state: "IA",
    county: "Cherokee County",
    year: 2019,
    capacity: 212.04,
    totalTurbines: 82,
    lon: -95.729088,
    lat: 42.885757,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 15, capacityKW: 2300.0, totalCapacityKW: 34500.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 38, capacityKW: 2520.0, totalCapacityKW: 95760.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 29, capacityKW: 2820.0, totalCapacityKW: 81780.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Glass Sands Wind Facility",
    state: "OK",
    county: "Murray County",
    year: 2021,
    capacity: 118.1,
    totalTurbines: 28,
    lon: -96.884262,
    lat: 34.515556,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 1, capacityKW: 2000.0, totalCapacityKW: 2000.0, hubHeight: 120.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 27, capacityKW: 4300.0, totalCapacityKW: 116100.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Glen Ullin Energy Center (Clean Energy 1)",
    state: "ND",
    county: "Morton County",
    year: 2019,
    capacity: 106.7,
    totalTurbines: 43,
    lon: -101.827492,
    lat: 46.970387,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 39, capacityKW: 2500.0, totalCapacityKW: 97500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Glenrock",
    state: "WY",
    county: "Converse County",
    year: 2008,
    capacity: 119.3,
    totalTurbines: 66,
    lon: -105.821388,
    lat: 43.043194,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 8, capacityKW: 1500.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 58, capacityKW: 1850.0, totalCapacityKW: 107300.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Glenrock III",
    state: "WY",
    county: "Converse County",
    year: 2009,
    capacity: 46.0,
    totalTurbines: 26,
    lon: -105.834892,
    lat: 43.029991,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 19, capacityKW: 1850.0, totalCapacityKW: 35150.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Goat Phase I",
    state: "TX",
    county: "Coke County",
    year: 2008,
    capacity: 80.0,
    totalTurbines: 80,
    lon: -100.800995,
    lat: 31.949594,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 80, capacityKW: 1000.0, totalCapacityKW: 80000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Goat Phase II",
    state: "TX",
    county: "Coke County",
    year: 2009,
    capacity: 69.6,
    totalTurbines: 29,
    lon: -100.770195,
    lat: 31.961096,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT92/2.4", count: 29, capacityKW: 2400.0, totalCapacityKW: 69600.0, hubHeight: 80.0, rotorDiameter: 92.0 }
    ]
  },
  {
    name: "Golden Hills",
    state: "CA",
    county: "Alameda County",
    year: 2015,
    capacity: 85.9,
    totalTurbines: 48,
    lon: -121.622475,
    lat: 37.714684,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 48, capacityKW: 1700.0, totalCapacityKW: 81600.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Golden Hills (Oregon)",
    state: "OR",
    county: "Sherman County",
    year: 2022,
    capacity: 201.3,
    totalTurbines: 50,
    lon: -120.661301,
    lat: 45.492558,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 10, capacityKW: 2500.0, totalCapacityKW: 25000.0, hubHeight: 85.0, rotorDiameter: 116.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 40, capacityKW: 4300.0, totalCapacityKW: 172000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Golden Hills North",
    state: "CA",
    county: "Alameda County",
    year: 2017,
    capacity: 46.0,
    totalTurbines: 20,
    lon: -121.655983,
    lat: 37.784878,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 20, capacityKW: 2300.0, totalCapacityKW: 46000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Golden Plains",
    state: "IA",
    county: "Kossuth County",
    year: 2020,
    capacity: 199.82,
    totalTurbines: 82,
    lon: -94.003944,
    lat: 43.365391,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 31, capacityKW: 2300.0, totalCapacityKW: 71300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 51, capacityKW: 2520.0, totalCapacityKW: 128520.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Golden Spread Panhandle Wind Ranch",
    state: "TX",
    county: "Potter County",
    year: 2011,
    capacity: 78.2,
    totalTurbines: 34,
    lon: -102.162888,
    lat: 35.244694,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 34, capacityKW: 2300.0, totalCapacityKW: 78200.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Golden Valley",
    state: "ID",
    county: "Cassia County",
    year: 2011,
    capacity: 12.0,
    totalTurbines: 8,
    lon: -113.922386,
    lat: 42.443893,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 8, capacityKW: 1500.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Golden West Wind Farm",
    state: "CO",
    county: "El Paso County",
    year: 2015,
    capacity: 249.2,
    totalTurbines: 145,
    lon: -104.285309,
    lat: 38.948353,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 145, capacityKW: 1700.0, totalCapacityKW: 246500.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Goldthwaite",
    state: "TX",
    county: "Mills County",
    year: 2013,
    capacity: 141.1,
    totalTurbines: 86,
    lon: -98.458435,
    lat: 31.334755,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 83, capacityKW: 1700.0, totalCapacityKW: 141100.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.5-120", count: 3, capacityKW: 2500.0, totalCapacityKW: 7500.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Goodland I",
    state: "IN",
    county: "Benton County",
    year: 2008,
    capacity: 130.5,
    totalTurbines: 87,
    lon: -87.518692,
    lat: 40.672592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 87, capacityKW: 1500.0, totalCapacityKW: 130500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Goodnight I",
    state: "TX",
    county: "Armstrong County",
    year: 2023,
    capacity: 265.5,
    totalTurbines: 57,
    lon: -101.323997,
    lat: 35.026993,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-4.5", count: 57, capacityKW: 4500.0, totalCapacityKW: 256500.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Goodnoe Hills",
    state: "WA",
    county: "Klickitat County",
    year: 2008,
    capacity: 103.4,
    totalTurbines: 47,
    lon: -120.511482,
    lat: 45.785496,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 47, capacityKW: 2200.0, totalCapacityKW: 103400.0, hubHeight: 85.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Goodwell",
    state: "OK",
    county: "Texas County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -101.598427,
    lat: 36.522968,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 28, capacityKW: 2000.0, totalCapacityKW: 56000.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 72, capacityKW: 2000.0, totalCapacityKW: 144000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Gopher Creek Wind Farm",
    state: "TX",
    county: "Borden County",
    year: 2019,
    capacity: 158.0,
    totalTurbines: 79,
    lon: -101.288498,
    lat: 32.909397,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V116-2.0", count: 79, capacityKW: 2000.0, totalCapacityKW: 158000.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Gordon Butte",
    state: "MT",
    county: "Meagher County",
    year: 2012,
    capacity: 9.0,
    totalTurbines: 6,
    lon: -110.331589,
    lat: 46.415691,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Goshen North",
    state: "ID",
    county: "Bonneville County",
    year: 2010,
    capacity: 124.5,
    totalTurbines: 83,
    lon: -111.836388,
    lat: 43.504795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 83, capacityKW: 1500.0, totalCapacityKW: 124500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Grady",
    state: "NM",
    county: "Curry County",
    year: 2019,
    capacity: 220.5,
    totalTurbines: 84,
    lon: -103.19825,
    lat: 34.810616,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 84, capacityKW: 2625.0, totalCapacityKW: 220500.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Grand Meadow",
    state: "MN",
    county: "Mower County",
    year: 2008,
    capacity: 108.54,
    totalTurbines: 67,
    lon: -92.671394,
    lat: 43.681393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-97", count: 67, capacityKW: 1620.0, totalCapacityKW: 108540.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Grand Ridge",
    state: "IL",
    county: "LaSalle County",
    year: 2008,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -88.694191,
    lat: 41.225391,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Grand Ridge II",
    state: "IL",
    county: "LaSalle County",
    year: 2009,
    capacity: 51.0,
    totalTurbines: 34,
    lon: -88.669594,
    lat: 41.191193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 34, capacityKW: 1500.0, totalCapacityKW: 51000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Grand Ridge III/IV",
    state: "IL",
    county: "LaSalle County",
    year: 2009,
    capacity: 60.0,
    totalTurbines: 40,
    lon: -88.714897,
    lat: 41.181992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 40, capacityKW: 1500.0, totalCapacityKW: 60000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Grande Prairie",
    state: "NE",
    county: "Holt County",
    year: 2016,
    capacity: 400.0,
    totalTurbines: 200,
    lon: -98.503693,
    lat: 42.61853,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 200, capacityKW: 2000.0, totalCapacityKW: 400000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Grandview I",
    state: "TX",
    county: "Carson County",
    year: 2014,
    capacity: 211.22,
    totalTurbines: 118,
    lon: -101.15406,
    lat: 35.306934,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 118, capacityKW: 1790.0, totalCapacityKW: 211220.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Grandview II (Colbeck's Corner)",
    state: "TX",
    county: "Carson County",
    year: 2016,
    capacity: 200.48,
    totalTurbines: 112,
    lon: -101.152405,
    lat: 35.353947,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 112, capacityKW: 1790.0, totalCapacityKW: 200480.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Granite Reliable Power",
    state: "NH",
    county: "Coos County",
    year: 2012,
    capacity: 99.0,
    totalTurbines: 33,
    lon: -71.304802,
    lat: 44.846092,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 33, capacityKW: 3000.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Grant County",
    state: "MN",
    county: "Grant County",
    year: 2010,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -95.890594,
    lat: 45.805691,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Grant Plains",
    state: "OK",
    county: "Grant County",
    year: 2016,
    capacity: 147.2,
    totalTurbines: 64,
    lon: -97.673615,
    lat: 36.968472,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 64, capacityKW: 2300.0, totalCapacityKW: 147200.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Grant Wind",
    state: "OK",
    county: "Grant County",
    year: 2016,
    capacity: 151.8,
    totalTurbines: 66,
    lon: -97.684029,
    lat: 36.895519,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 66, capacityKW: 2300.0, totalCapacityKW: 151800.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Gratiot",
    state: "MI",
    county: "Gratiot County",
    year: 2011,
    capacity: 102.4,
    totalTurbines: 61,
    lon: -84.473793,
    lat: 43.441792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 61, capacityKW: 1600.0, totalCapacityKW: 97600.0, hubHeight: 100.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Gratiot County",
    state: "MI",
    county: "Gratiot County",
    year: 2012,
    capacity: 110.4,
    totalTurbines: 72,
    lon: -84.564796,
    lat: 43.382393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 72, capacityKW: 1600.0, totalCapacityKW: 115200.0, hubHeight: 100.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Gratiot Farms",
    state: "MI",
    county: "Gratiot County",
    year: 2020,
    capacity: 149.66,
    totalTurbines: 57,
    lon: -84.752548,
    lat: 43.155357,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.5-127", count: 2, capacityKW: 2520.0, totalCapacityKW: 5040.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 49, capacityKW: 2520.0, totalCapacityKW: 123480.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Gray County Wind Farm Montezuma)",
    state: "KS",
    county: "Gray County",
    year: 2001,
    capacity: 112.2,
    totalTurbines: 170,
    lon: -100.362289,
    lat: 37.598892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 170, capacityKW: 660.0, totalCapacityKW: 112200.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Great Pathfinder Wind",
    state: "IA",
    county: "Hamilton County",
    year: 2023,
    capacity: 224.4,
    totalTurbines: 62,
    lon: -93.851288,
    lat: 42.230965,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 62, capacityKW: 3400.0, totalCapacityKW: 210800.0, hubHeight: 98.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Great Prairie Wind 1",
    state: "TX",
    county: "Hansford County",
    year: 2022,
    capacity: 360.96,
    totalTurbines: 128,
    lon: -101.51194,
    lat: 36.368382,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 128, capacityKW: 2820.0, totalCapacityKW: 360960.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Great Prairie Wind 2",
    state: "TX",
    county: "Hansford County",
    year: 2022,
    capacity: 211.5,
    totalTurbines: 75,
    lon: -101.490723,
    lat: 36.344021,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 75, capacityKW: 2820.0, totalCapacityKW: 211500.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Great Prairie Wind 3",
    state: "OK",
    county: "Texas County",
    year: 2022,
    capacity: 50.76,
    totalTurbines: 107,
    lon: -101.452583,
    lat: 36.539173,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 107, capacityKW: 2820.0, totalCapacityKW: 301740.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Great Western",
    state: "OK",
    county: "Woodward County",
    year: 2016,
    capacity: 225.0,
    totalTurbines: 93,
    lon: -99.629852,
    lat: 36.147774,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 63, capacityKW: 2000.0, totalCapacityKW: 126000.0, hubHeight: 91.5, rotorDiameter: 100.0 },
      { manufacturer: "Vestas", model: "V117-3.3", count: 30, capacityKW: 3300.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Green Mountain Power",
    state: "VT",
    county: "Bennington County",
    year: 1997,
    capacity: 6.05,
    totalTurbines: 11,
    lon: -72.9618,
    lat: 42.86359,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Zond", model: "Z40", count: 11, capacityKW: 550.0, totalCapacityKW: 6050.0, hubHeight: 40.0, rotorDiameter: 40.0 }
    ]
  },
  {
    name: "Green Pastures I",
    state: "TX",
    county: "Baylor County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 50,
    lon: -99.449181,
    lat: 33.640553,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW116/3000", count: 50, capacityKW: 3000.0, totalCapacityKW: 150000.0, hubHeight: 92.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Green Pastures II",
    state: "TX",
    county: "Baylor County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 50,
    lon: -99.472404,
    lat: 33.636295,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW116/3000", count: 50, capacityKW: 3000.0, totalCapacityKW: 150000.0, hubHeight: 92.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Green River",
    state: "IL",
    county: "Lee County",
    year: 2019,
    capacity: 194.25,
    totalTurbines: 74,
    lon: -89.591087,
    lat: 41.622353,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-126", count: 74, capacityKW: 2625.0, totalCapacityKW: 194250.0, hubHeight: 84.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Greenfield Wind Farm",
    state: "MT",
    county: "Teton County",
    year: 2016,
    capacity: 29.9,
    totalTurbines: 13,
    lon: -111.93618,
    lat: 47.725807,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-107", count: 13, capacityKW: 2300.0, totalCapacityKW: 29900.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Greensburg",
    state: "KS",
    county: "Kiowa County",
    year: 2010,
    capacity: 12.5,
    totalTurbines: 10,
    lon: -99.341492,
    lat: 37.549595,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 10, capacityKW: 1250.0, totalCapacityKW: 12500.0, hubHeight: 72.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Griffin Trail Wind",
    state: "TX",
    county: "Knox County",
    year: 2021,
    capacity: 225.6,
    totalTurbines: 80,
    lon: -99.579033,
    lat: 33.618809,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 80, capacityKW: 2820.0, totalCapacityKW: 225600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Groton",
    state: "NH",
    county: "Grafton County",
    year: 2012,
    capacity: 48.0,
    totalTurbines: 24,
    lon: -71.822998,
    lat: 43.762192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 24, capacityKW: 2000.0, totalCapacityKW: 48000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Gruver Wind",
    state: "OK",
    county: "Texas County",
    year: 2022,
    capacity: 155.1,
    totalTurbines: 55,
    lon: -101.348053,
    lat: 36.51553,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 55, capacityKW: 2820.0, totalCapacityKW: 155100.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Gulf Wind",
    state: "TX",
    county: "Kenedy County",
    year: 2009,
    capacity: 283.2,
    totalTurbines: 44,
    lon: -97.600113,
    lat: 26.983614,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT92/2.4", count: 44, capacityKW: 2400.0, totalCapacityKW: 105600.0, hubHeight: 80.0, rotorDiameter: 92.0 }
    ]
  },
  {
    name: "Gulf Wind Repower",
    state: "TX",
    county: "Kenedy County",
    year: 2021,
    capacity: 271.4,
    totalTurbines: 74,
    lon: -97.571106,
    lat: 26.960192,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 74, capacityKW: 2300.0, totalCapacityKW: 170200.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Gunsight",
    state: "TX",
    county: "Howard County",
    year: 2016,
    capacity: 119.93,
    totalTurbines: 67,
    lon: -101.445084,
    lat: 32.501324,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 67, capacityKW: 1790.0, totalCapacityKW: 119930.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Hackberry",
    state: "TX",
    county: "Shackelford County",
    year: 2008,
    capacity: 165.6,
    totalTurbines: 72,
    lon: -99.416695,
    lat: 32.765095,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 72, capacityKW: 2300.0, totalCapacityKW: 165600.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Hale Wind",
    state: "TX",
    county: "Hale County",
    year: 2019,
    capacity: 478.0,
    totalTurbines: 239,
    lon: -101.638008,
    lat: 33.931946,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 23, capacityKW: 2000.0, totalCapacityKW: 46000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V116-2.0", count: 216, capacityKW: 2000.0, totalCapacityKW: 432000.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Hancock",
    state: "ME",
    county: "Hancock County",
    year: 2016,
    capacity: 51.0,
    totalTurbines: 17,
    lon: -68.15345,
    lat: 44.772755,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.3", count: 17, capacityKW: 3000.0, totalCapacityKW: 51000.0, hubHeight: 116.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Hancock County Wind Farm",
    state: "IA",
    county: "Hancock County",
    year: 2002,
    capacity: 100.048,
    totalTurbines: 148,
    lon: -93.667389,
    lat: 42.951191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "G47-0.676", count: 148, capacityKW: 676.0, totalCapacityKW: 100048.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Happy Jack",
    state: "WY",
    county: "Laramie County",
    year: 2008,
    capacity: 29.4,
    totalTurbines: 14,
    lon: -105.008087,
    lat: 41.144993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 14, capacityKW: 2100.0, totalCapacityKW: 29400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Harbor Wind",
    state: "TX",
    county: "Nueces County",
    year: 2012,
    capacity: 9.0,
    totalTurbines: 6,
    lon: -97.440193,
    lat: 27.832064,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Guodian", model: "UP1500", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Hardin-Hilltop",
    state: "IA",
    county: "Greene County",
    year: 2007,
    capacity: 14.7,
    totalTurbines: 7,
    lon: -94.340195,
    lat: 42.086693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 7, capacityKW: 2100.0, totalCapacityKW: 14700.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Hardscrabble",
    state: "NY",
    county: "Herkimer County",
    year: 2011,
    capacity: 74.0,
    totalTurbines: 37,
    lon: -74.899796,
    lat: 43.104893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 37, capacityKW: 2000.0, totalCapacityKW: 74000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Harvest II",
    state: "MI",
    county: "Huron County",
    year: 2012,
    capacity: 59.4,
    totalTurbines: 33,
    lon: -83.210495,
    lat: 43.783894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 33, capacityKW: 1800.0, totalCapacityKW: 59400.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Harvest Wind Farm",
    state: "WA",
    county: "Klickitat County",
    year: 2009,
    capacity: 98.9,
    totalTurbines: 75,
    lon: -120.226288,
    lat: 45.788795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 43, capacityKW: 2300.0, totalCapacityKW: 98900.0, hubHeight: 80.0, rotorDiameter: 93.0 },
      { manufacturer: "Vestas", model: "V82-1.65", count: 32, capacityKW: 1650.0, totalCapacityKW: 52800.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Hatchett Ridge",
    state: "CA",
    county: "Shasta County",
    year: 2010,
    capacity: 101.2,
    totalTurbines: 44,
    lon: -121.801186,
    lat: 40.898697,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Hawi Renewable",
    state: "HI",
    county: "Hawaii County",
    year: 2006,
    capacity: 10.56,
    totalTurbines: 16,
    lon: -155.855042,
    lat: 20.260166,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 16, capacityKW: 660.0, totalCapacityKW: 10560.0, hubHeight: 37.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Hawkeye",
    state: "IA",
    county: "Fayette County",
    year: 2012,
    capacity: 37.5,
    totalTurbines: 15,
    lon: -92.077126,
    lat: 42.948837,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 15, capacityKW: 2500.0, totalCapacityKW: 37500.0, hubHeight: 100.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Hay Canyon",
    state: "OR",
    county: "Sherman County",
    year: 2009,
    capacity: 100.8,
    totalTurbines: 48,
    lon: -120.598686,
    lat: 45.505394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 48, capacityKW: 2100.0, totalCapacityKW: 100800.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Haystack",
    state: "NE",
    county: "Wayne County",
    year: 2022,
    capacity: 297.03,
    totalTurbines: 46,
    lon: -97.163475,
    lat: 42.19701,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 46, capacityKW: 5000.0, totalCapacityKW: 230000.0, hubHeight: 102.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Headwaters",
    state: "IN",
    county: "Randolph County",
    year: 2014,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -84.964333,
    lat: 40.055794,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Headwaters II",
    state: "IN",
    county: "Randolph County",
    year: 2021,
    capacity: 198.0,
    totalTurbines: 44,
    lon: -85.159584,
    lat: 40.067909,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 10, capacityKW: 3600.0, totalCapacityKW: 36000.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 34, capacityKW: 4200.0, totalCapacityKW: 142800.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Heart of Texas",
    state: "TX",
    county: "McCulloch County",
    year: 2020,
    capacity: 179.88,
    totalTurbines: 64,
    lon: -99.403595,
    lat: 31.244083,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 1, capacityKW: 2520.0, totalCapacityKW: 2520.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 3, capacityKW: 2720.0, totalCapacityKW: 8160.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 60, capacityKW: 2820.0, totalCapacityKW: 169200.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Heartland Divide",
    state: "IA",
    county: "Audubon County",
    year: 2018,
    capacity: 103.5,
    totalTurbines: 36,
    lon: -94.775223,
    lat: 41.740349,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 4, capacityKW: 1700.0, totalCapacityKW: 6800.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 32, capacityKW: 2500.0, totalCapacityKW: 80000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Heartland Divide Wind II",
    state: "IA",
    county: "Audubon County",
    year: 2022,
    capacity: 199.4,
    totalTurbines: 72,
    lon: -94.893806,
    lat: 41.807636,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 1, capacityKW: 2820.0, totalCapacityKW: 2820.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 64, capacityKW: 2820.0, totalCapacityKW: 180480.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Heartland Farms Wind",
    state: "MI",
    county: "Gratiot County",
    year: 2023,
    capacity: 200.4,
    totalTurbines: 72,
    lon: -84.769043,
    lat: 43.237152,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.5-127", count: 4, capacityKW: 2500.0, totalCapacityKW: 10000.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Vernova", model: "GE2.8-127", count: 68, capacityKW: 2800.0, totalCapacityKW: 190400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Helena Wind",
    state: "TX",
    county: "Bee County",
    year: 2022,
    capacity: 264.0,
    totalTurbines: 66,
    lon: -97.967514,
    lat: 28.53956,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.0", count: 66, capacityKW: 4000.0, totalCapacityKW: 264000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Hereford 1",
    state: "TX",
    county: "Deaf Smith County",
    year: 2014,
    capacity: 199.9,
    totalTurbines: 104,
    lon: -102.203659,
    lat: 34.748154,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 54, capacityKW: 1850.0, totalCapacityKW: 99900.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "Vestas", model: "V100-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Heritage Garden",
    state: "MI",
    county: "Delta County",
    year: 2012,
    capacity: 28.0,
    totalTurbines: 14,
    lon: -86.548393,
    lat: 45.80249,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G97-2.0", count: 14, capacityKW: 2000.0, totalCapacityKW: 28000.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Hidalgo",
    state: "TX",
    county: "Hidalgo County",
    year: 2016,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -98.423347,
    lat: 26.523651,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Hidalgo II",
    state: "TX",
    county: "Hidalgo County",
    year: 2016,
    capacity: 100.0,
    totalTurbines: 64,
    lon: -98.410057,
    lat: 26.490732,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 14, capacityKW: 3600.0, totalCapacityKW: 50400.0, hubHeight: 112.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "High Banks Wind Project",
    state: "KS",
    county: "Republic County",
    year: 2023,
    capacity: 643.44,
    totalTurbines: 233,
    lon: -97.457321,
    lat: 39.962902,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 32, capacityKW: 2520.0, totalCapacityKW: 80640.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 201, capacityKW: 2800.0, totalCapacityKW: 562800.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "High Lonesome",
    state: "TX",
    county: "Crockett County",
    year: 2019,
    capacity: 449.935,
    totalTurbines: 182,
    lon: -101.926392,
    lat: 31.069904,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 23, capacityKW: 2300.0, totalCapacityKW: 52900.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 37, capacityKW: 2500.0, totalCapacityKW: 92500.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "Nordex", model: "AW125/3150", count: 34, capacityKW: 3150.0, totalCapacityKW: 107100.0, hubHeight: 87.5, rotorDiameter: 125.0 },
      { manufacturer: "Nordex", model: "AW132/3300", count: 49, capacityKW: 3300.0, totalCapacityKW: 161700.0, hubHeight: 84.0, rotorDiameter: 132.0 },
      { manufacturer: "Nordex", model: "AW132/3465", count: 39, capacityKW: 3465.0, totalCapacityKW: 135135.0, hubHeight: 85.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "High Lonesome Expansion",
    state: "TX",
    county: "Upton County",
    year: 2020,
    capacity: 50.6,
    totalTurbines: 22,
    lon: -101.900185,
    lat: 31.121731,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 22, capacityKW: 2300.0, totalCapacityKW: 50600.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "High Mesa",
    state: "ID",
    county: "Elmore County",
    year: 2012,
    capacity: 39.9,
    totalTurbines: 19,
    lon: -115.04689,
    lat: 42.903393,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S97", count: 19, capacityKW: 2100.0, totalCapacityKW: 39900.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "High Plains",
    state: "WY",
    county: "Albany County",
    year: 2009,
    capacity: 122.1,
    totalTurbines: 66,
    lon: -105.968086,
    lat: 41.678093,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 66, capacityKW: 1850.0, totalCapacityKW: 122100.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "High Prairie",
    state: "MO",
    county: "Adair County",
    year: 2020,
    capacity: 400.0,
    totalTurbines: 175,
    lon: -92.457901,
    lat: 40.255451,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.45", count: 12, capacityKW: 3450.0, totalCapacityKW: 41400.0, hubHeight: 94.0, rotorDiameter: 112.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 163, capacityKW: 2200.0, totalCapacityKW: 358600.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "High Sheldon",
    state: "NY",
    county: "Wyoming County",
    year: 2009,
    capacity: 112.5,
    totalTurbines: 75,
    lon: -78.394196,
    lat: 42.731293,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 75, capacityKW: 1500.0, totalCapacityKW: 112500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "High Winds",
    state: "CA",
    county: "Solano County",
    year: 2003,
    capacity: 162.0,
    totalTurbines: 90,
    lon: -121.832985,
    lat: 38.150295,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 90, capacityKW: 1800.0, totalCapacityKW: 162000.0, hubHeight: 60.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Highland I",
    state: "IA",
    county: "O'Brien County",
    year: 2015,
    capacity: 495.01,
    totalTurbines: 211,
    lon: -95.577393,
    lat: 43.079674,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 211, capacityKW: 2346.0, totalCapacityKW: 495006.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Highland II",
    state: "IA",
    county: "O'Brien County",
    year: 2015,
    capacity: 7.04,
    totalTurbines: 3,
    lon: -95.616188,
    lat: 43.036823,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 3, capacityKW: 2346.0, totalCapacityKW: 7038.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Highland North",
    state: "PA",
    county: "Cambria County",
    year: 2012,
    capacity: 75.0,
    totalTurbines: 30,
    lon: -78.711594,
    lat: 40.312393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 30, capacityKW: 2500.0, totalCapacityKW: 75000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Highland Wind Project",
    state: "PA",
    county: "Cambria County",
    year: 2009,
    capacity: 62.5,
    totalTurbines: 25,
    lon: -78.700699,
    lat: 40.290192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N90", count: 25, capacityKW: 2500.0, totalCapacityKW: 62500.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "HillTopper",
    state: "IL",
    county: "Logan County",
    year: 2018,
    capacity: 185.0,
    totalTurbines: 74,
    lon: -89.336502,
    lat: 40.028061,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 74, capacityKW: 2500.0, totalCapacityKW: 185000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Hog Creek",
    state: "OH",
    county: "Hardin County",
    year: 2017,
    capacity: 66.0,
    totalTurbines: 30,
    lon: -83.744995,
    lat: 40.787907,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 30, capacityKW: 2200.0, totalCapacityKW: 66000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Holiday Hill Community Wind",
    state: "MA",
    county: "Hampden County",
    year: 2019,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -72.871834,
    lat: 42.21027,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW109", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 90.0, rotorDiameter: 109.0 }
    ]
  },
  {
    name: "Hoopeston Wind",
    state: "IL",
    county: "Vermilion County",
    year: 2015,
    capacity: 98.0,
    totalTurbines: 49,
    lon: -87.824287,
    lat: 40.403084,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 49, capacityKW: 2000.0, totalCapacityKW: 98000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Hoosac",
    state: "MA",
    county: "Franklin County",
    year: 2012,
    capacity: 28.5,
    totalTurbines: 19,
    lon: -73.023003,
    lat: 42.71669,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 19, capacityKW: 1500.0, totalCapacityKW: 28500.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Hoosier",
    state: "IN",
    county: "Benton County",
    year: 2009,
    capacity: 106.0,
    totalTurbines: 53,
    lon: -87.271294,
    lat: 40.698692,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 53, capacityKW: 2000.0, totalCapacityKW: 106000.0, hubHeight: 80.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Hopkins Ridge II",
    state: "WA",
    county: "Columbia County",
    year: 2008,
    capacity: 7.2,
    totalTurbines: 4,
    lon: -117.802185,
    lat: 46.431793,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 4, capacityKW: 1800.0, totalCapacityKW: 7200.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Hopkins Ridge Wind Project",
    state: "WA",
    county: "Columbia County",
    year: 2005,
    capacity: 149.4,
    totalTurbines: 83,
    lon: -117.860985,
    lat: 46.455395,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 83, capacityKW: 1800.0, totalCapacityKW: 149400.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Horizon Hill Wind",
    state: "OK",
    county: "Logan County",
    year: 2024,
    capacity: 201.45,
    totalTurbines: 34,
    lon: -97.611946,
    lat: 36.022774,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.45", count: 1, capacityKW: 3600.0, totalCapacityKW: 3600.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V162-6.0", count: 33, capacityKW: 6000.0, totalCapacityKW: 198000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "Horse Butte",
    state: "ID",
    county: "Bonneville County",
    year: 2012,
    capacity: 57.6,
    totalTurbines: 32,
    lon: -111.743591,
    lat: 43.419292,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 32, capacityKW: 1800.0, totalCapacityKW: 57600.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Horse Creek Wind",
    state: "TX",
    county: "Haskell County",
    year: 2016,
    capacity: 230.0,
    totalTurbines: 100,
    lon: -99.556267,
    lat: 33.390739,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 100, capacityKW: 2300.0, totalCapacityKW: 230000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Horse Hollow Expansion",
    state: "TX",
    county: "Taylor County",
    year: 2017,
    capacity: 210.0,
    totalTurbines: 2,
    lon: -100.025787,
    lat: 32.243023,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 2, capacityKW: 1500.0, totalCapacityKW: 3000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Horse Hollow II",
    state: "TX",
    county: "Nolan County",
    year: 2017,
    capacity: 299.0,
    totalTurbines: 130,
    lon: -100.157913,
    lat: 32.264511,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 130, capacityKW: 2300.0, totalCapacityKW: 299000.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Horse Hollow III",
    state: "TX",
    county: "Nolan County",
    year: 2017,
    capacity: 223.5,
    totalTurbines: 149,
    lon: -100.241646,
    lat: 32.253395,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 149, capacityKW: 1500.0, totalCapacityKW: 223500.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Horse Hollow Wind Energy Center",
    state: "TX",
    county: "Taylor County",
    year: 2017,
    capacity: 210.0,
    totalTurbines: 140,
    lon: -100.111053,
    lat: 32.239338,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 140, capacityKW: 1500.0, totalCapacityKW: 210000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Horseshoe Bend",
    state: "OR",
    county: "Morrow County",
    year: 2012,
    capacity: 319.0,
    totalTurbines: 116,
    lon: -119.986488,
    lat: 45.601894,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.75-100", count: 5, capacityKW: 2750.0, totalCapacityKW: 13750.0, hubHeight: 85.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.75-116", count: 19, capacityKW: 2750.0, totalCapacityKW: 52250.0, hubHeight: 85.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.75-127", count: 92, capacityKW: 2750.0, totalCapacityKW: 253000.0, hubHeight: 85.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Horseshoe Bend/ranch pit",
    state: "MT",
    county: "Cascade County",
    year: 2006,
    capacity: 9.0,
    totalTurbines: 6,
    lon: -111.437088,
    lat: 47.497292,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Howard",
    state: "NY",
    county: "Steuben County",
    year: 2011,
    capacity: 51.25,
    totalTurbines: 27,
    lon: -77.52536,
    lat: 42.283028,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 27, capacityKW: 2050.0, totalCapacityKW: 55350.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Hubbard",
    state: "TX",
    county: "Limestone County",
    year: 2021,
    capacity: 301.36,
    totalTurbines: 108,
    lon: -96.844711,
    lat: 31.697676,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 10, capacityKW: 2500.0, totalCapacityKW: 25000.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 98, capacityKW: 2820.0, totalCapacityKW: 276360.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Huerfano River",
    state: "CO",
    county: "Huerfano County",
    year: 2013,
    capacity: 8.0,
    totalTurbines: 4,
    lon: -104.82679,
    lat: 37.777992,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Sany", model: "SE10520E", count: 4, capacityKW: 2000.0, totalCapacityKW: 8000.0, hubHeight: 103.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Ida Grove",
    state: "IA",
    county: "Ida County",
    year: 2016,
    capacity: 301.06,
    totalTurbines: 134,
    lon: -95.398682,
    lat: 42.259747,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 14, capacityKW: 1790.0, totalCapacityKW: 25060.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 120, capacityKW: 2300.0, totalCapacityKW: 276000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Ida Grove II",
    state: "IA",
    county: "Ida County",
    year: 2019,
    capacity: 202.36,
    totalTurbines: 81,
    lon: -95.433929,
    lat: 42.44788,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 8, capacityKW: 2300.0, totalCapacityKW: 18400.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 73, capacityKW: 2520.0, totalCapacityKW: 183960.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Inadale (Roscoe IV)",
    state: "TX",
    county: "Nolan County",
    year: 2009,
    capacity: 197.0,
    totalTurbines: 197,
    lon: -100.564095,
    lat: 32.481792,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 197, capacityKW: 1000.0, totalCapacityKW: 197000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Independence Wind Farm",
    state: "IA",
    county: "Delaware County",
    year: 2021,
    capacity: 55.36,
    totalTurbines: 20,
    lon: -91.545929,
    lat: 42.432762,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 2, capacityKW: 2300.0, totalCapacityKW: 4600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 18, capacityKW: 2820.0, totalCapacityKW: 50760.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Indian Mesa",
    state: "TX",
    county: "Pecos County",
    year: 2001,
    capacity: 82.5,
    totalTurbines: 125,
    lon: -102.168091,
    lat: 30.943295,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G47-0.66", count: 124, capacityKW: 660.0, totalCapacityKW: 81840.0, hubHeight: 50.0, rotorDiameter: 47.0 },
      { manufacturer: "Vestas", model: "V47-0.66", count: 1, capacityKW: 660.0, totalCapacityKW: 660.0, hubHeight: 50.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Indiana Crossroads",
    state: "IN",
    county: "White County",
    year: 2021,
    capacity: 302.4,
    totalTurbines: 71,
    lon: -86.823738,
    lat: 40.645157,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.2", count: 71, capacityKW: 4200.0, totalCapacityKW: 298200.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Indiana Crossroads II",
    state: "IN",
    county: "White County",
    year: 2023,
    capacity: 201.6,
    totalTurbines: 42,
    lon: -87.011139,
    lat: 40.825367,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N155/4.8", count: 42, capacityKW: 4800.0, totalCapacityKW: 201600.0, hubHeight: 105.0, rotorDiameter: 155.0 }
    ]
  },
  {
    name: "Inertia Wind Project",
    state: "TX",
    county: "Haskell County",
    year: 2023,
    capacity: 301.26,
    totalTurbines: 108,
    lon: -99.606003,
    lat: 33.212196,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 11, capacityKW: 2520.0, totalCapacityKW: 27720.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 97, capacityKW: 2820.0, totalCapacityKW: 273540.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Intrepid",
    state: "IA",
    county: "Sac County",
    year: 2004,
    capacity: 160.5,
    totalTurbines: 107,
    lon: -95.27346,
    lat: 42.467285,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 65.0, rotorDiameter: 70.5 },
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 106, capacityKW: 1500.0, totalCapacityKW: 159000.0, hubHeight: 65.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Intrepid Expansion",
    state: "IA",
    county: "Buena Vista County",
    year: 2005,
    capacity: 15.0,
    totalTurbines: 15,
    lon: -95.378693,
    lat: 42.567291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 15, capacityKW: 1000.0, totalCapacityKW: 15000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Iowa Lakes Lakota Wind",
    state: "IA",
    county: "Kossuth County",
    year: 2009,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -94.140594,
    lat: 43.377293,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Iowa Lakes Superior Wind",
    state: "IA",
    county: "Dickinson County",
    year: 2009,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -94.981392,
    lat: 43.451191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Irish Creek Wind",
    state: "KS",
    county: "Marshall County",
    year: 2021,
    capacity: 301.66,
    totalTurbines: 108,
    lon: -96.467667,
    lat: 39.727943,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 98, capacityKW: 2820.0, totalCapacityKW: 276360.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Iron Star",
    state: "KS",
    county: "Ford County",
    year: 2021,
    capacity: 115.0,
    totalTurbines: 62,
    lon: -99.964294,
    lat: 37.651157,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 62, capacityKW: 4800.0, totalCapacityKW: 297600.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Ironwood I",
    state: "KS",
    county: "Ford County",
    year: 2012,
    capacity: 167.9,
    totalTurbines: 73,
    lon: -99.775192,
    lat: 37.828693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 73, capacityKW: 2300.0, totalCapacityKW: 167900.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Isabella I & II",
    state: "MI",
    county: "Isabella County",
    year: 2021,
    capacity: 383.52,
    totalTurbines: 136,
    lon: -84.854012,
    lat: 43.704906,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 136, capacityKW: 2820.0, totalCapacityKW: 383520.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Ivester",
    state: "IA",
    county: "Grundy County",
    year: 2018,
    capacity: 90.825,
    totalTurbines: 35,
    lon: -92.930687,
    lat: 42.359402,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 5, capacityKW: 2415.0, totalCapacityKW: 12075.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 30, capacityKW: 2625.0, totalCapacityKW: 78750.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "JD Wind 10",
    state: "TX",
    county: "Moore County",
    year: 2008,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.801193,
    lat: 35.961395,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 72.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind 11",
    state: "TX",
    county: "Moore County",
    year: 2009,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.977089,
    lat: 35.811695,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 74.5, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind 4",
    state: "TX",
    county: "Hansford County",
    year: 2008,
    capacity: 79.8,
    totalTurbines: 38,
    lon: -101.373192,
    lat: 36.388992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 38, capacityKW: 2100.0, totalCapacityKW: 79800.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "JD Wind 7",
    state: "TX",
    county: "Moore County",
    year: 2009,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.863693,
    lat: 35.995495,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 74.5, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind 8",
    state: "TX",
    county: "Moore County",
    year: 2009,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.899788,
    lat: 36.026894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 74.5, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind 9",
    state: "TX",
    county: "Moore County",
    year: 2008,
    capacity: 10.0,
    totalTurbines: 7,
    lon: -101.989929,
    lat: 35.808182,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 7, capacityKW: 1250.0, totalCapacityKW: 8750.0, hubHeight: 72.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind Phase V",
    state: "TX",
    county: "Sherman County",
    year: 2006,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.871887,
    lat: 36.445496,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 73.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "JD Wind VI",
    state: "TX",
    county: "Sherman County",
    year: 2007,
    capacity: 10.0,
    totalTurbines: 8,
    lon: -101.812492,
    lat: 36.467094,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 8, capacityKW: 1250.0, totalCapacityKW: 10000.0, hubHeight: 72.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Javelina",
    state: "TX",
    county: "Webb County",
    year: 2015,
    capacity: 249.69,
    totalTurbines: 126,
    lon: -98.935936,
    lat: 27.395195,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 11, capacityKW: 1790.0, totalCapacityKW: 19690.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 115, capacityKW: 2000.0, totalCapacityKW: 230000.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Javelina II",
    state: "TX",
    county: "Webb County",
    year: 2016,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -98.931419,
    lat: 27.404799,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Jayhawk",
    state: "KS",
    county: "Bourbon County",
    year: 2021,
    capacity: 197.4,
    totalTurbines: 70,
    lon: -95.003952,
    lat: 37.701653,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 70, capacityKW: 2820.0, totalCapacityKW: 197400.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Jeffers",
    state: "MN",
    county: "Cottonwood County",
    year: 2008,
    capacity: 42.0,
    totalTurbines: 20,
    lon: -95.248093,
    lat: 44.059093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 20, capacityKW: 2500.0, totalCapacityKW: 50000.0, hubHeight: 80.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "Jericho Mountain",
    state: "NH",
    county: "Coos County",
    year: 2015,
    capacity: 14.25,
    totalTurbines: 5,
    lon: -71.220718,
    lat: 44.47118,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 5, capacityKW: 2850.0, totalCapacityKW: 14250.0, hubHeight: 85.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Jericho Rise",
    state: "NY",
    county: "Franklin County",
    year: 2016,
    capacity: 77.7,
    totalTurbines: 37,
    lon: -74.104767,
    lat: 44.914585,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 37, capacityKW: 2100.0, totalCapacityKW: 77700.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Jersey Atlantic Wind Farm",
    state: "NJ",
    county: "Atlantic County",
    year: 2005,
    capacity: 7.5,
    totalTurbines: 5,
    lon: -74.445496,
    lat: 39.382591,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 5, capacityKW: 1500.0, totalCapacityKW: 7500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Jett Creek",
    state: "OR",
    county: "Baker County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -117.262253,
    lat: 44.426102,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Jordan Creek",
    state: "IN",
    county: "Warren County",
    year: 2020,
    capacity: 401.92,
    totalTurbines: 146,
    lon: -87.404198,
    lat: 40.501869,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 14, capacityKW: 2300.0, totalCapacityKW: 32200.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 46, capacityKW: 2520.0, totalCapacityKW: 115920.0, hubHeight: 90.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 86, capacityKW: 2820.0, totalCapacityKW: 242520.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Judith Gap",
    state: "MT",
    county: "Wheatland County",
    year: 2005,
    capacity: 135.0,
    totalTurbines: 90,
    lon: -109.732689,
    lat: 46.573692,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 90, capacityKW: 1500.0, totalCapacityKW: 135000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Jumbo Hill",
    state: "TX",
    county: "Andrews County",
    year: 2020,
    capacity: 160.74,
    totalTurbines: 57,
    lon: -102.972214,
    lat: 32.370579,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 57, capacityKW: 2820.0, totalCapacityKW: 160740.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Jumbo Road",
    state: "TX",
    county: "Castro County",
    year: 2015,
    capacity: 299.7,
    totalTurbines: 162,
    lon: -102.240852,
    lat: 34.716053,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 162, capacityKW: 1850.0, totalCapacityKW: 299700.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Junction Hilltop Wind",
    state: "IA",
    county: "Greene County",
    year: 2012,
    capacity: 8.0,
    totalTurbines: 5,
    lon: -94.26519,
    lat: 42.101192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 5, capacityKW: 1600.0, totalCapacityKW: 8000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Juniper Canyon",
    state: "WA",
    county: "Klickitat County",
    year: 2011,
    capacity: 151.2,
    totalTurbines: 63,
    lon: -120.213989,
    lat: 45.890594,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT95/2.4", count: 63, capacityKW: 2400.0, totalCapacityKW: 151200.0, hubHeight: 80.0, rotorDiameter: 95.0 }
    ]
  },
  {
    name: "KODE Novus II",
    state: "OK",
    county: "Texas County",
    year: 2012,
    capacity: 40.0,
    totalTurbines: 10,
    lon: -101.437187,
    lat: 36.598892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "DeWind", model: "D9.2", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Kaheawa (Maalaea)",
    state: "HI",
    county: "Maui County",
    year: 2006,
    capacity: 30.0,
    totalTurbines: 20,
    lon: -156.550491,
    lat: 20.814198,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5sle", count: 20, capacityKW: 1500.0, totalCapacityKW: 30000.0, hubHeight: 55.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Kaheawa Wind II",
    state: "HI",
    county: "Maui County",
    year: 2012,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -156.539383,
    lat: 20.801397,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Kahuku",
    state: "HI",
    county: "Honolulu County",
    year: 2011,
    capacity: 30.0,
    totalTurbines: 12,
    lon: -157.973785,
    lat: 21.687496,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 12, capacityKW: 2500.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "Karankawa",
    state: "TX",
    county: "Bee County",
    year: 2019,
    capacity: 307.46,
    totalTurbines: 124,
    lon: -97.790741,
    lat: 28.179276,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 22, capacityKW: 2300.0, totalCapacityKW: 50600.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 9, capacityKW: 2500.0, totalCapacityKW: 22500.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 93, capacityKW: 2520.0, totalCapacityKW: 234360.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Karen Avenue Windfarm",
    state: "CA",
    county: "Riverside County",
    year: 2003,
    capacity: 11.7,
    totalTurbines: 12,
    lon: -116.560616,
    lat: 33.920742,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "1.5-70.5", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 56.5, rotorDiameter: 70.5 },
      { manufacturer: "Vestas", model: "V39", count: 6, capacityKW: 450.0, totalCapacityKW: 2700.0, hubHeight: 40.0, rotorDiameter: 42.0 }
    ]
  },
  {
    name: "Kawailoa Wind",
    state: "HI",
    county: "Honolulu County",
    year: 2012,
    capacity: 69.0,
    totalTurbines: 30,
    lon: -158.023788,
    lat: 21.599897,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 30, capacityKW: 2300.0, totalCapacityKW: 69000.0, hubHeight: 99.5, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Kay Wind",
    state: "OK",
    county: "Kay County",
    year: 2015,
    capacity: 299.0,
    totalTurbines: 130,
    lon: -97.248543,
    lat: 36.915932,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 130, capacityKW: 2300.0, totalCapacityKW: 299000.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Keechi",
    state: "TX",
    county: "Jack County",
    year: 2015,
    capacity: 110.0,
    totalTurbines: 55,
    lon: -98.145905,
    lat: 33.140034,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 55, capacityKW: 2000.0, totalCapacityKW: 110000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Keenan II",
    state: "OK",
    county: "Woodward County",
    year: 2010,
    capacity: 151.8,
    totalTurbines: 66,
    lon: -99.510193,
    lat: 36.280895,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 66, capacityKW: 2300.0, totalCapacityKW: 151800.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Kelly Creek",
    state: "IL",
    county: "Ford County",
    year: 2016,
    capacity: 184.0,
    totalTurbines: 92,
    lon: -88.179901,
    lat: 40.969269,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 92, capacityKW: 2000.0, totalCapacityKW: 184000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Kibby Mountain II",
    state: "ME",
    county: "Franklin County",
    year: 2010,
    capacity: 66.0,
    totalTurbines: 22,
    lon: -70.545601,
    lat: 45.331593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 22, capacityKW: 3000.0, totalCapacityKW: 66000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Kibby Mountain, phase I",
    state: "ME",
    county: "Franklin County",
    year: 2009,
    capacity: 66.0,
    totalTurbines: 22,
    lon: -70.536598,
    lat: 45.405392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 22, capacityKW: 3000.0, totalCapacityKW: 66000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Kimball Wind Farm",
    state: "NE",
    county: "Kimball County",
    year: 2018,
    capacity: 30.0,
    totalTurbines: 12,
    lon: -103.71669,
    lat: 41.288429,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 12, capacityKW: 2500.0, totalCapacityKW: 30000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "King Creek 1",
    state: "TX",
    county: "Throckmorton County",
    year: 2022,
    capacity: 393.6,
    totalTurbines: 96,
    lon: -99.508186,
    lat: 33.247391,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 12, capacityKW: 2800.0, totalCapacityKW: 33600.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 65, capacityKW: 5000.0, totalCapacityKW: 325000.0, hubHeight: 102.5, rotorDiameter: 145.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 19, capacityKW: 2000.0, totalCapacityKW: 38000.0, hubHeight: 97.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "King Mtn. Wind Ranch",
    state: "TX",
    county: "Upton County",
    year: 2001,
    capacity: 278.2,
    totalTurbines: 213,
    lon: -102.19529,
    lat: 31.266294,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Bonus", model: "B62", count: 48, capacityKW: 1300.0, totalCapacityKW: 62400.0, hubHeight: 60.0, rotorDiameter: 62.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-1.3-65", count: 165, capacityKW: 1300.0, totalCapacityKW: 214500.0, hubHeight: 60.0, rotorDiameter: 65.0 }
    ]
  },
  {
    name: "King Plains",
    state: "OK",
    county: "Garfield County",
    year: 2020,
    capacity: 248.16,
    totalTurbines: 88,
    lon: -97.475609,
    lat: 36.386959,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 88, capacityKW: 2820.0, totalCapacityKW: 248160.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Kingdom Community Wind",
    state: "VT",
    county: "Orleans County",
    year: 2012,
    capacity: 63.0,
    totalTurbines: 21,
    lon: -72.440903,
    lat: 44.736591,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.0", count: 21, capacityKW: 3000.0, totalCapacityKW: 63000.0, hubHeight: 84.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Kingfisher Wind",
    state: "OK",
    county: "Canadian County",
    year: 2015,
    capacity: 180.0,
    totalTurbines: 148,
    lon: -97.921104,
    lat: 35.698975,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 148, capacityKW: 2000.0, totalCapacityKW: 296000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Kingman",
    state: "AZ",
    county: "Mohave County",
    year: 2011,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -114.06649,
    lat: 35.144695,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 78.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Kingman Wind Energy Center",
    state: "KS",
    county: "Kingman County",
    year: 2016,
    capacity: 206.55,
    totalTurbines: 120,
    lon: -98.159843,
    lat: 37.554905,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 110, capacityKW: 1715.0, totalCapacityKW: 188650.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 10, capacityKW: 1790.0, totalCapacityKW: 17900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Kings Point",
    state: "MO",
    county: "Lawrence County",
    year: 2021,
    capacity: 149.4,
    totalTurbines: 69,
    lon: -94.118332,
    lat: 37.298172,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 120.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 57, capacityKW: 2200.0, totalCapacityKW: 125400.0, hubHeight: 122.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Kit Carson Project",
    state: "CO",
    county: "Kit Carson County",
    year: 2010,
    capacity: 51.0,
    totalTurbines: 34,
    lon: -102.321289,
    lat: 39.365593,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 34, capacityKW: 1500.0, totalCapacityKW: 51000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Klondike I",
    state: "OR",
    county: "Sherman County",
    year: 2001,
    capacity: 24.0,
    totalTurbines: 17,
    lon: -120.551712,
    lat: 45.569065,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 17, capacityKW: 1500.0, totalCapacityKW: 25500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Klondike II",
    state: "OR",
    county: "Sherman County",
    year: 2005,
    capacity: 80.0,
    totalTurbines: 50,
    lon: -120.576286,
    lat: 45.573296,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 50, capacityKW: 1600.0, totalCapacityKW: 80000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Klondike III",
    state: "OR",
    county: "Sherman County",
    year: 2007,
    capacity: 221.2,
    totalTurbines: 124,
    lon: -120.553185,
    lat: 45.617794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Klondike IIIA",
    state: "OR",
    county: "Sherman County",
    year: 2008,
    capacity: 76.5,
    totalTurbines: 52,
    lon: -120.638084,
    lat: 45.575794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 52, capacityKW: 1500.0, totalCapacityKW: 78000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Kossuth",
    state: "IA",
    county: "Kossuth County",
    year: 2020,
    capacity: 152.2,
    totalTurbines: 56,
    lon: -94.114784,
    lat: 42.998447,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 45, capacityKW: 2820.0, totalCapacityKW: 126900.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Kossuth County Wind",
    state: "IA",
    county: "Kossuth County",
    year: 2022,
    capacity: 69.6,
    totalTurbines: 24,
    lon: -94.072746,
    lat: 43.062206,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 2, capacityKW: 2520.0, totalCapacityKW: 5040.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 22, capacityKW: 2820.0, totalCapacityKW: 62040.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Kumeyaay Phase I",
    state: "CA",
    county: "San Diego County",
    year: 2005,
    capacity: 50.0,
    totalTurbines: 25,
    lon: -116.346115,
    lat: 32.72879,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 25, capacityKW: 2000.0, totalCapacityKW: 50000.0, hubHeight: 67.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "La Chalupa",
    state: "TX",
    county: "Cameron County",
    year: 2021,
    capacity: 198.45,
    totalTurbines: 55,
    lon: -97.512276,
    lat: 26.236681,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 55, capacityKW: 3150.0, totalCapacityKW: 173250.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "La Joya",
    state: "NM",
    county: "Torrance County",
    year: 2021,
    capacity: 212.8,
    totalTurbines: 76,
    lon: -105.633476,
    lat: 34.592453,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 76, capacityKW: 2800.0, totalCapacityKW: 212800.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "La Joya II",
    state: "NM",
    county: "Torrance County",
    year: 2021,
    capacity: 91.875,
    totalTurbines: 35,
    lon: -105.760895,
    lat: 34.617973,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-114", count: 35, capacityKW: 2625.0, totalCapacityKW: 91875.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Lacy Creek",
    state: "TX",
    county: "Glasscock County",
    year: 2022,
    capacity: 301.26,
    totalTurbines: 1,
    lon: -101.28286,
    lat: 31.679705,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.52-116", count: 1, capacityKW: 2520.0, totalCapacityKW: 2520.0, hubHeight: 114.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Lacy Creek Wind Project (Edmondson Ranch Wind Energy)",
    state: "TX",
    county: "Sterling County",
    year: 2022,
    capacity: 301.26,
    totalTurbines: 107,
    lon: -101.214485,
    lat: 31.751577,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.52-116", count: 1, capacityKW: 2520.0, totalCapacityKW: 2520.0, hubHeight: 114.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 9, capacityKW: 2520.0, totalCapacityKW: 22680.0, hubHeight: 114.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 97, capacityKW: 2820.0, totalCapacityKW: 273540.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Lake Benton I",
    state: "MN",
    county: "Lincoln County",
    year: 1998,
    capacity: 107.25,
    totalTurbines: 139,
    lon: -96.39473,
    lat: 44.336147,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Enron", model: "Z48", count: 139, capacityKW: 750.0, totalCapacityKW: 104250.0, hubHeight: 53.0, rotorDiameter: 48.0 }
    ]
  },
  {
    name: "Lake Benton II Repower",
    state: "MN",
    county: "Pipestone County",
    year: 2019,
    capacity: 100.2,
    totalTurbines: 44,
    lon: -96.138313,
    lat: 44.135612,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 4, capacityKW: 2100.0, totalCapacityKW: 8400.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.1-116", count: 1, capacityKW: 2100.0, totalCapacityKW: 2100.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 39, capacityKW: 2300.0, totalCapacityKW: 89700.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Lake Winds",
    state: "MI",
    county: "Mason County",
    year: 2012,
    capacity: 100.8,
    totalTurbines: 56,
    lon: -86.342896,
    lat: 43.872494,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 56, capacityKW: 1800.0, totalCapacityKW: 100800.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Lakefield",
    state: "MN",
    county: "Jackson County",
    year: 2011,
    capacity: 205.5,
    totalTurbines: 137,
    lon: -95.18959,
    lat: 43.62759,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 137, capacityKW: 1500.0, totalCapacityKW: 205500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Lakeswind",
    state: "MN",
    county: "Clay County",
    year: 2014,
    capacity: 48.0,
    totalTurbines: 32,
    lon: -96.292389,
    lat: 46.741493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 32, capacityKW: 1500.0, totalCapacityKW: 48000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Lakota Ridge",
    state: "MN",
    county: "Lincoln County",
    year: 1999,
    capacity: 11.25,
    totalTurbines: 15,
    lon: -96.44899,
    lat: 44.382591,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM48", count: 11, capacityKW: 750.0, totalCapacityKW: 8250.0, hubHeight: 55.0, rotorDiameter: 48.0 },
      { manufacturer: "Vestas", model: "V47", count: 4, capacityKW: 1000.0, totalCapacityKW: 4000.0, hubHeight: 62.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Lane City Wind",
    state: "TX",
    county: "Wharton County",
    year: 2025,
    capacity: 202.5,
    totalTurbines: 45,
    lon: -96.006798,
    lat: 29.124695,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V163-4.5", count: 45, capacityKW: 4500.0, totalCapacityKW: 202500.0, hubHeight: 113.0, rotorDiameter: 163.0 }
    ]
  },
  {
    name: "Langdon",
    state: "ND",
    county: "Cavalier County",
    year: 2007,
    capacity: 126.42,
    totalTurbines: 79,
    lon: -98.337593,
    lat: 48.589993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 13, capacityKW: 1500.0, totalCapacityKW: 19500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 29, capacityKW: 1620.0, totalCapacityKW: 46980.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 37, capacityKW: 1620.0, totalCapacityKW: 59940.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Langdon - OTP",
    state: "ND",
    county: "Cavalier County",
    year: 2008,
    capacity: 40.5,
    totalTurbines: 27,
    lon: -98.24939,
    lat: 48.696793,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-97", count: 27, capacityKW: 1500.0, totalCapacityKW: 40500.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Langdon II",
    state: "ND",
    county: "Cavalier County",
    year: 2008,
    capacity: 43.74,
    totalTurbines: 27,
    lon: -98.363892,
    lat: 48.614193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 27, capacityKW: 1620.0, totalCapacityKW: 43740.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Langford",
    state: "TX",
    county: "Tom Green County",
    year: 2009,
    capacity: 160.0,
    totalTurbines: 100,
    lon: -100.631691,
    lat: 31.153795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 100, capacityKW: 1600.0, totalCapacityKW: 160000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Laredo Ridge",
    state: "NE",
    county: "Boone County",
    year: 2011,
    capacity: 81.0,
    totalTurbines: 54,
    lon: -98.020493,
    lat: 41.881695,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 54, capacityKW: 1500.0, totalCapacityKW: 81000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Las Lomas",
    state: "TX",
    county: "Zapata County",
    year: 2020,
    capacity: 201.6,
    totalTurbines: 48,
    lon: -99.013054,
    lat: 26.734369,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Goldwind Americas", model: "GW155 - 4.2S", count: 48, capacityKW: 4200.0, totalCapacityKW: 201600.0, hubHeight: 110.0, rotorDiameter: 155.0 }
    ]
  },
  {
    name: "Las Majadas",
    state: "TX",
    county: "Willacy County",
    year: 2021,
    capacity: 131.8,
    totalTurbines: 125,
    lon: -97.546928,
    lat: 26.318903,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 118, capacityKW: 2200.0, totalCapacityKW: 259600.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Latigo",
    state: "UT",
    county: "San Juan County",
    year: 2016,
    capacity: 62.1,
    totalTurbines: 27,
    lon: -109.358208,
    lat: 37.891262,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 27, capacityKW: 2300.0, totalCapacityKW: 62100.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Laurel",
    state: "IA",
    county: "Marshall County",
    year: 2011,
    capacity: 119.6,
    totalTurbines: 52,
    lon: -93.002396,
    lat: 41.902393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.38-129", count: 46, capacityKW: 2380.0, totalCapacityKW: 109480.0, hubHeight: 80.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Laurel Hill",
    state: "PA",
    county: "Lycoming County",
    year: 2012,
    capacity: 69.0,
    totalTurbines: 30,
    lon: -77.085976,
    lat: 41.515633,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 30, capacityKW: 2300.0, totalCapacityKW: 69000.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Laurel Mountain",
    state: "WV",
    county: "Barbour County",
    year: 2011,
    capacity: 97.6,
    totalTurbines: 61,
    lon: -79.890396,
    lat: 38.990292,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 1, capacityKW: 1600.0, totalCapacityKW: 1600.0, hubHeight: 80.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.65-91", count: 60, capacityKW: 1650.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Leaning Juniper",
    state: "OR",
    county: "Gilliam County",
    year: 2006,
    capacity: 109.2,
    totalTurbines: 67,
    lon: -120.182686,
    lat: 45.645794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 59, capacityKW: 1600.0, totalCapacityKW: 94400.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 8, capacityKW: 1850.0, totalCapacityKW: 14800.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Leaning Juniper II",
    state: "OR",
    county: "Gilliam County",
    year: 2011,
    capacity: 201.3,
    totalTurbines: 117,
    lon: -120.187485,
    lat: 45.689896,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 74, capacityKW: 1500.0, totalCapacityKW: 111000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Suzlon", model: "S88", count: 43, capacityKW: 2100.0, totalCapacityKW: 90300.0, hubHeight: 80.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Ledyard Windpower",
    state: "IA",
    county: "Kossuth County",
    year: 2022,
    capacity: 207.0,
    totalTurbines: 46,
    lon: -94.1119,
    lat: 43.441948,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 46, capacityKW: 4500.0, totalCapacityKW: 207000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Lee/DeKalb",
    state: "IL",
    county: "DeKalb County",
    year: 2009,
    capacity: 217.5,
    totalTurbines: 145,
    lon: -88.934891,
    lat: 41.853394,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 145, capacityKW: 1500.0, totalCapacityKW: 217500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Lempster",
    state: "NH",
    county: "Sullivan County",
    year: 2008,
    capacity: 24.0,
    totalTurbines: 12,
    lon: -72.138397,
    lat: 43.22979,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Limestone Wind",
    state: "TX",
    county: "Navarro County",
    year: 2022,
    capacity: 299.2,
    totalTurbines: 86,
    lon: -96.593536,
    lat: 31.892422,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 86, capacityKW: 3400.0, totalCapacityKW: 292400.0, hubHeight: 117.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Limon I",
    state: "CO",
    county: "Lincoln County",
    year: 2012,
    capacity: 200.0,
    totalTurbines: 125,
    lon: -103.564491,
    lat: 39.408394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 125, capacityKW: 1600.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Limon II",
    state: "CO",
    county: "Lincoln County",
    year: 2012,
    capacity: 200.0,
    totalTurbines: 125,
    lon: -103.643089,
    lat: 39.352196,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-87", count: 125, capacityKW: 1600.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Limon III",
    state: "CO",
    county: "Lincoln County",
    year: 2014,
    capacity: 200.6,
    totalTurbines: 118,
    lon: -103.444603,
    lat: 39.338634,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 118, capacityKW: 1700.0, totalCapacityKW: 200600.0, hubHeight: 85.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Lincoln Land",
    state: "IL",
    county: "Morgan County",
    year: 2021,
    capacity: 301.74,
    totalTurbines: 107,
    lon: -90.090576,
    lat: 39.703461,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 107, capacityKW: 2820.0, totalCapacityKW: 301740.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Lindahl",
    state: "ND",
    county: "Williams County",
    year: 2017,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -102.955788,
    lat: 48.529713,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Linden",
    state: "WA",
    county: "Klickitat County",
    year: 2010,
    capacity: 50.0,
    totalTurbines: 25,
    lon: -120.798988,
    lat: 45.733795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 25, capacityKW: 2000.0, totalCapacityKW: 50000.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Little Blue Wind",
    state: "NE",
    county: "Webster County",
    year: 2021,
    capacity: 248.8,
    totalTurbines: 86,
    lon: -98.583023,
    lat: 40.295868,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 41, capacityKW: 2300.0, totalCapacityKW: 94300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 45, capacityKW: 2820.0, totalCapacityKW: 126900.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Little Elk",
    state: "OK",
    county: "Washita County",
    year: 2015,
    capacity: 74.0,
    totalTurbines: 37,
    lon: -98.895683,
    lat: 35.196079,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 37, capacityKW: 2000.0, totalCapacityKW: 74000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Live Oak",
    state: "TX",
    county: "Schleicher County",
    year: 2018,
    capacity: 199.5,
    totalTurbines: 76,
    lon: -100.727959,
    lat: 31.019808,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 76, capacityKW: 2625.0, totalCapacityKW: 199500.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Llano Estacado Wind Ranch at White Deer",
    state: "TX",
    county: "Carson County",
    year: 2001,
    capacity: 80.0,
    totalTurbines: 79,
    lon: -101.242188,
    lat: 35.469593,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT1000", count: 79, capacityKW: 1000.0, totalCapacityKW: 79000.0, hubHeight: 69.0, rotorDiameter: 57.0 }
    ]
  },
  {
    name: "Lockett",
    state: "TX",
    county: "Wilbarger County",
    year: 2019,
    capacity: 183.75,
    totalTurbines: 75,
    lon: -99.280655,
    lat: 34.042431,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 75, capacityKW: 2450.0, totalCapacityKW: 183750.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Locust Ridge",
    state: "PA",
    county: "Schuylkill County",
    year: 2006,
    capacity: 26.0,
    totalTurbines: 13,
    lon: -76.290794,
    lat: 40.816994,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 13, capacityKW: 2000.0, totalCapacityKW: 26000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Locust Ridge II",
    state: "PA",
    county: "Schuylkill County",
    year: 2009,
    capacity: 102.0,
    totalTurbines: 51,
    lon: -76.188301,
    lat: 40.832993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G83-2.0", count: 51, capacityKW: 2000.0, totalCapacityKW: 102000.0, hubHeight: 78.0, rotorDiameter: 83.0 }
    ]
  },
  {
    name: "Loess Hills Wind Project",
    state: "MO",
    county: "Atchison County",
    year: 2008,
    capacity: 5.0,
    totalTurbines: 4,
    lon: -95.533691,
    lat: 40.414192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 4, capacityKW: 1250.0, totalCapacityKW: 5000.0, hubHeight: 72.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Logan's Gap Wind",
    state: "TX",
    county: "Comanche County",
    year: 2015,
    capacity: 200.1,
    totalTurbines: 87,
    lon: -98.692909,
    lat: 31.787584,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 87, capacityKW: 2300.0, totalCapacityKW: 200100.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Lone Star I",
    state: "TX",
    county: "Shackelford County",
    year: 2007,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -99.509789,
    lat: 32.613594,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G83-2.0", count: 88, capacityKW: 2000.0, totalCapacityKW: 176000.0, hubHeight: 78.0, rotorDiameter: 83.0 },
      { manufacturer: "Gamesa", model: "G87-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Lone Star II",
    state: "TX",
    county: "Shackelford County",
    year: 2008,
    capacity: 156.0,
    totalTurbines: 100,
    lon: -99.521194,
    lat: 32.550694,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Lone Tree",
    state: "IL",
    county: "Bureau County",
    year: 2020,
    capacity: 88.1,
    totalTurbines: 32,
    lon: -89.611679,
    lat: 41.196918,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 29, capacityKW: 2800.0, totalCapacityKW: 81200.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Longhorn",
    state: "TX",
    county: "Floyd County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -101.19825,
    lat: 34.292004,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Lookout",
    state: "PA",
    county: "Somerset County",
    year: 2008,
    capacity: 37.8,
    totalTurbines: 18,
    lon: -78.916695,
    lat: 39.882393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 18, capacityKW: 2100.0, totalCapacityKW: 37800.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Loraine",
    state: "TX",
    county: "Mitchell County",
    year: 2010,
    capacity: 100.5,
    totalTurbines: 68,
    lon: -100.776489,
    lat: 32.470394,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 68, capacityKW: 1500.0, totalCapacityKW: 102000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Loraine II",
    state: "TX",
    county: "Mitchell County",
    year: 2011,
    capacity: 49.5,
    totalTurbines: 32,
    lon: -100.675591,
    lat: 32.440994,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 32, capacityKW: 1500.0, totalCapacityKW: 48000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Lorenzo Winds",
    state: "TX",
    county: "Crosby County",
    year: 2018,
    capacity: 80.46,
    totalTurbines: 36,
    lon: -101.459251,
    lat: 33.761269,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 4, capacityKW: 1715.0, totalCapacityKW: 6860.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 32, capacityKW: 2300.0, totalCapacityKW: 73600.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Los Vientos I",
    state: "TX",
    county: "Willacy County",
    year: 2012,
    capacity: 200.1,
    totalTurbines: 87,
    lon: -97.592896,
    lat: 26.314196,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 87, capacityKW: 2300.0, totalCapacityKW: 200100.0, hubHeight: 98.1, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Los Vientos II",
    state: "TX",
    county: "Willacy County",
    year: 2012,
    capacity: 201.6,
    totalTurbines: 84,
    lon: -97.645493,
    lat: 26.335596,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT102/2.4", count: 84, capacityKW: 2400.0, totalCapacityKW: 201600.0, hubHeight: 90.0, rotorDiameter: 102.0 }
    ]
  },
  {
    name: "Los Vientos III",
    state: "TX",
    county: "Starr County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -98.633492,
    lat: 26.413866,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Los Vientos IV",
    state: "TX",
    county: "Starr County",
    year: 2016,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -98.681213,
    lat: 26.593176,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Los Vientos V",
    state: "TX",
    county: "Starr County",
    year: 2015,
    capacity: 110.0,
    totalTurbines: 55,
    lon: -98.569283,
    lat: 26.422176,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 55, capacityKW: 2000.0, totalCapacityKW: 110000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Lost Creek Ridge Wind Farm",
    state: "MO",
    county: "DeKalb County",
    year: 2010,
    capacity: 148.5,
    totalTurbines: 100,
    lon: -94.469589,
    lat: 40.019592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Lost Lakes Wind Farm",
    state: "IA",
    county: "Dickinson County",
    year: 2009,
    capacity: 100.65,
    totalTurbines: 61,
    lon: -95.247688,
    lat: 43.33469,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 61, capacityKW: 1650.0, totalCapacityKW: 100650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Lower Snake River Phase I",
    state: "WA",
    county: "Garfield County",
    year: 2011,
    capacity: 216.2,
    totalTurbines: 149,
    lon: -117.847885,
    lat: 46.525696,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 149, capacityKW: 2300.0, totalCapacityKW: 342700.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Lundgren",
    state: "IA",
    county: "Webster County",
    year: 2014,
    capacity: 251.022,
    totalTurbines: 107,
    lon: -94.151604,
    lat: 42.363533,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 107, capacityKW: 2346.0, totalCapacityKW: 251022.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Luverne",
    state: "ND",
    county: "Steele County",
    year: 2009,
    capacity: 49.5,
    totalTurbines: 33,
    lon: -97.919594,
    lat: 47.328693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 33, capacityKW: 1500.0, totalCapacityKW: 49500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Macho Springs Wind Farm I",
    state: "NM",
    county: "Luna County",
    year: 2011,
    capacity: 50.4,
    totalTurbines: 28,
    lon: -107.509491,
    lat: 32.540096,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 28, capacityKW: 1800.0, totalCapacityKW: 50400.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Macksburg",
    state: "IA",
    county: "Madison County",
    year: 2014,
    capacity: 119.646,
    totalTurbines: 51,
    lon: -94.148994,
    lat: 41.232864,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 51, capacityKW: 2346.0, totalCapacityKW: 119646.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Madison Windpower",
    state: "NY",
    county: "Madison County",
    year: 2000,
    capacity: 11.55,
    totalTurbines: 7,
    lon: -75.457497,
    lat: 42.894192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V66-1.65", count: 7, capacityKW: 1650.0, totalCapacityKW: 11550.0, hubHeight: 67.0, rotorDiameter: 66.0 }
    ]
  },
  {
    name: "Magic Valley",
    state: "TX",
    county: "Willacy County",
    year: 2012,
    capacity: 203.28,
    totalTurbines: 112,
    lon: -97.616295,
    lat: 26.490795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.82", count: 112, capacityKW: 1815.0, totalCapacityKW: 203280.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Majestic",
    state: "TX",
    county: "Carson County",
    year: 2009,
    capacity: 84.8,
    totalTurbines: 53,
    lon: -101.512894,
    lat: 35.433594,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 53, capacityKW: 1600.0, totalCapacityKW: 84800.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Majestic II",
    state: "TX",
    county: "Carson County",
    year: 2012,
    capacity: 79.6,
    totalTurbines: 51,
    lon: -101.553787,
    lat: 35.390694,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 20, capacityKW: 1500.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 31, capacityKW: 1600.0, totalCapacityKW: 49600.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Mammoth Plains",
    state: "OK",
    county: "Dewey County",
    year: 2014,
    capacity: 198.9,
    totalTurbines: 117,
    lon: -98.76268,
    lat: 35.990826,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 117, capacityKW: 1700.0, totalCapacityKW: 198900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Manzana Winds",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 189.0,
    totalTurbines: 126,
    lon: -118.44529,
    lat: 34.938995,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 126, capacityKW: 1500.0, totalCapacityKW: 189000.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Maple Ridge",
    state: "NY",
    county: "Lewis County",
    year: 2006,
    capacity: 184.8,
    totalTurbines: 112,
    lon: -75.573601,
    lat: 43.758892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 112, capacityKW: 1650.0, totalCapacityKW: 184800.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Maple Ridge (Lowville)",
    state: "NY",
    county: "Lewis County",
    year: 2005,
    capacity: 136.95,
    totalTurbines: 82,
    lon: -75.588799,
    lat: 43.803989,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 82, capacityKW: 1650.0, totalCapacityKW: 135300.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Maple Ridge I",
    state: "NY",
    county: "Lewis County",
    year: 2006,
    capacity: 231.0,
    totalTurbines: 1,
    lon: -75.627747,
    lat: 43.791592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82", count: 1, capacityKW: 1650.0, totalCapacityKW: 1650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Marble River",
    state: "NY",
    county: "Clinton County",
    year: 2012,
    capacity: 215.25,
    totalTurbines: 70,
    lon: -73.9608,
    lat: 44.918491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.075", count: 70, capacityKW: 3075.0, totalCapacityKW: 215250.0, hubHeight: 94.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Marengo I",
    state: "WA",
    county: "Columbia County",
    year: 2007,
    capacity: 156.0,
    totalTurbines: 78,
    lon: -117.809784,
    lat: 46.379395,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 78, capacityKW: 2000.0, totalCapacityKW: 156000.0, hubHeight: 67.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Marengo II",
    state: "WA",
    county: "Columbia County",
    year: 2008,
    capacity: 78.0,
    totalTurbines: 39,
    lon: -117.841789,
    lat: 46.349895,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 39, capacityKW: 2000.0, totalCapacityKW: 78000.0, hubHeight: 67.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Mariah North Wind",
    state: "TX",
    county: "Parmer County",
    year: 2016,
    capacity: 230.4,
    totalTurbines: 96,
    lon: -102.65757,
    lat: 34.745327,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.4-107", count: 96, capacityKW: 2400.0, totalCapacityKW: 230400.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Mars Hill",
    state: "ME",
    county: "Aroostook County",
    year: 2006,
    capacity: 9.0,
    totalTurbines: 28,
    lon: -67.80764,
    lat: 46.561195,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 28, capacityKW: 1500.0, totalCapacityKW: 42000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Marsh Hill",
    state: "NY",
    county: "Steuben County",
    year: 2014,
    capacity: 16.2,
    totalTurbines: 10,
    lon: -77.512444,
    lat: 42.183773,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-103", count: 10, capacityKW: 1620.0, totalCapacityKW: 16200.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Marshall",
    state: "MN",
    county: "Lyon County",
    year: 2008,
    capacity: 18.9,
    totalTurbines: 9,
    lon: -95.788589,
    lat: 44.321091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 9, capacityKW: 2100.0, totalCapacityKW: 18900.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Marshall Wind Energy",
    state: "KS",
    county: "Marshall County",
    year: 2016,
    capacity: 72.0,
    totalTurbines: 36,
    lon: -96.390823,
    lat: 39.82262,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 36, capacityKW: 2000.0, totalCapacityKW: 72000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Maryneal",
    state: "TX",
    county: "Nolan County",
    year: 2021,
    capacity: 182.4,
    totalTurbines: 38,
    lon: -100.502602,
    lat: 32.191849,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 38, capacityKW: 4800.0, totalCapacityKW: 182400.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Mason City Wind",
    state: "IA",
    county: "Cerro Gordo County",
    year: 2020,
    capacity: 7.94,
    totalTurbines: 3,
    lon: -93.094917,
    lat: 43.145149,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 2, capacityKW: 2820.0, totalCapacityKW: 5640.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Mason Wind LLC Dyersville",
    state: "IA",
    county: "Delaware County",
    year: 2017,
    capacity: 6.0,
    totalTurbines: 3,
    lon: -91.224823,
    lat: 42.488827,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "HZ Windpower", model: "H111-2000", count: 3, capacityKW: 2000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 111.0 }
    ]
  },
  {
    name: "Mason Wind LLC Fairbank",
    state: "IA",
    county: "Fayette County",
    year: 2017,
    capacity: 6.0,
    totalTurbines: 3,
    lon: -92.020935,
    lat: 42.643631,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "HZ Windpower", model: "H111-2000", count: 3, capacityKW: 2000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 111.0 }
    ]
  },
  {
    name: "Mason Wind LLC Mason City",
    state: "IA",
    county: "Cerro Gordo County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -93.109657,
    lat: 43.138462,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "HZ Windpower", model: "H111-2000", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 111.0 }
    ]
  },
  {
    name: "Mason Wind LLC Perry",
    state: "IA",
    county: "Dallas County",
    year: 2017,
    capacity: 6.0,
    totalTurbines: 3,
    lon: -94.079254,
    lat: 41.824368,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "HZ Windpower", model: "H111-2000", count: 3, capacityKW: 2000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 111.0 }
    ]
  },
  {
    name: "Maverick Creek",
    state: "TX",
    county: "Concho County",
    year: 2020,
    capacity: 492.0,
    totalTurbines: 126,
    lon: -99.804787,
    lat: 31.247236,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.8-145", count: 16, capacityKW: 4800.0, totalCapacityKW: 76800.0, hubHeight: 107.5, rotorDiameter: 145.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 10, capacityKW: 2200.0, totalCapacityKW: 22000.0, hubHeight: 92.0, rotorDiameter: 120.0 },
      { manufacturer: "Vestas", model: "V136-3.7", count: 17, capacityKW: 3700.0, totalCapacityKW: 62900.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 73, capacityKW: 4200.0, totalCapacityKW: 306600.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Maverick Wind",
    state: "OK",
    county: "Major County",
    year: 2021,
    capacity: 286.62,
    totalTurbines: 103,
    lon: -98.217957,
    lat: 36.285309,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 8, capacityKW: 2500.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 95, capacityKW: 2820.0, totalCapacityKW: 267900.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "McAdoo",
    state: "TX",
    county: "Dickens County",
    year: 2008,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -100.944588,
    lat: 33.743595,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "McFadden Ridge",
    state: "WY",
    county: "Albany County",
    year: 2009,
    capacity: 35.15,
    totalTurbines: 19,
    lon: -106.043991,
    lat: 41.662891,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 19, capacityKW: 1850.0, totalCapacityKW: 35150.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "McKinley Wind Park",
    state: "MI",
    county: "Huron County",
    year: 2012,
    capacity: 14.4,
    totalTurbines: 9,
    lon: -83.265129,
    lat: 43.880634,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 9, capacityKW: 1600.0, totalCapacityKW: 14400.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "McNeilus",
    state: "MN",
    county: "Dodge County",
    year: 2002,
    capacity: 9.0,
    totalTurbines: 47,
    lon: -92.85083,
    lat: 43.985001,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM52", count: 10, capacityKW: 900.0, totalCapacityKW: 9000.0, hubHeight: 70.0, rotorDiameter: 52.0 },
      { manufacturer: "NEG Micon", model: "NM54", count: 24, capacityKW: 950.0, totalCapacityKW: 22800.0, hubHeight: 70.0, rotorDiameter: 54.0 },
      { manufacturer: "NEG Micon", model: "NM72C", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 60.0, rotorDiameter: 72.0 },
      { manufacturer: "NEG Micon", model: "NM82", count: 7, capacityKW: 1650.0, totalCapacityKW: 11550.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Meadow Creek",
    state: "ID",
    county: "Bonneville County",
    year: 2012,
    capacity: 119.7,
    totalTurbines: 57,
    lon: -111.822289,
    lat: 43.577496,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S97", count: 57, capacityKW: 2100.0, totalCapacityKW: 119700.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Meadow Lake",
    state: "IN",
    county: "White County",
    year: 2009,
    capacity: 199.65,
    totalTurbines: 121,
    lon: -86.893295,
    lat: 40.655392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 121, capacityKW: 1650.0, totalCapacityKW: 199650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Meadow Lake II",
    state: "IN",
    county: "White County",
    year: 2010,
    capacity: 99.0,
    totalTurbines: 66,
    lon: -87.009293,
    lat: 40.642593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW82/1500", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Meadow Lake III",
    state: "IN",
    county: "White County",
    year: 2010,
    capacity: 103.5,
    totalTurbines: 69,
    lon: -87.036598,
    lat: 40.613991,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 69, capacityKW: 1500.0, totalCapacityKW: 103500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Meadow Lake IV",
    state: "IN",
    county: "White County",
    year: 2010,
    capacity: 98.7,
    totalTurbines: 47,
    lon: -87.057297,
    lat: 40.68259,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 47, capacityKW: 2100.0, totalCapacityKW: 98700.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Meadow Lake V",
    state: "IN",
    county: "White County",
    year: 2017,
    capacity: 100.0,
    totalTurbines: 50,
    lon: -87.022392,
    lat: 40.729,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Meadow Lake VI",
    state: "IN",
    county: "Benton County",
    year: 2018,
    capacity: 200.4,
    totalTurbines: 61,
    lon: -87.101807,
    lat: 40.732365,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 49, capacityKW: 3600.0, totalCapacityKW: 176400.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Mehoopany",
    state: "PA",
    county: "Wyoming County",
    year: 2012,
    capacity: 140.8,
    totalTurbines: 88,
    lon: -76.069595,
    lat: 41.516392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 88, capacityKW: 1600.0, totalCapacityKW: 140800.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Mendota Hills Repowering",
    state: "IL",
    county: "Lee County",
    year: 2019,
    capacity: 76.125,
    totalTurbines: 29,
    lon: -89.041611,
    lat: 41.74992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-126", count: 29, capacityKW: 2625.0, totalCapacityKW: 76125.0, hubHeight: 84.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Meridian Way",
    state: "KS",
    county: "Cloud County",
    year: 2008,
    capacity: 105.0,
    totalTurbines: 35,
    lon: -97.53009,
    lat: 39.423794,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 35, capacityKW: 3000.0, totalCapacityKW: 105000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Meridian Way II",
    state: "KS",
    county: "Cloud County",
    year: 2008,
    capacity: 96.0,
    totalTurbines: 32,
    lon: -97.770195,
    lat: 39.429691,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 32, capacityKW: 3000.0, totalCapacityKW: 96000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Meridian Wind Park",
    state: "MI",
    county: "Midland County",
    year: 2023,
    capacity: 224.94,
    totalTurbines: 77,
    lon: -84.398239,
    lat: 43.491459,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 66, capacityKW: 2820.0, totalCapacityKW: 186120.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 10, capacityKW: 3600.0, totalCapacityKW: 36000.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Merricourt",
    state: "ND",
    county: "McIntosh County",
    year: 2020,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -99.005928,
    lat: 46.105412,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Mesa Wind Repowering",
    state: "CA",
    county: "Riverside County",
    year: 2024,
    capacity: 30.0,
    totalTurbines: 7,
    lon: -116.674782,
    lat: 33.94482,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-4.0", count: 7, capacityKW: 4000.0, totalCapacityKW: 28000.0, hubHeight: 92.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Mesquite Creek",
    state: "TX",
    county: "Dawson County",
    year: 2015,
    capacity: 211.22,
    totalTurbines: 118,
    lon: -101.761337,
    lat: 32.734055,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 118, capacityKW: 1790.0, totalCapacityKW: 211220.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Mesquite Sky",
    state: "TX",
    county: "Callahan County",
    year: 2021,
    capacity: 340.0,
    totalTurbines: 68,
    lon: -99.473831,
    lat: 32.460869,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 68, capacityKW: 5000.0, totalCapacityKW: 340000.0, hubHeight: 90.0, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Mesquite Star",
    state: "TX",
    county: "Fisher County",
    year: 2020,
    capacity: 418.9,
    totalTurbines: 118,
    lon: -100.500542,
    lat: 32.560112,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.465-132", count: 118, capacityKW: 3550.0, totalCapacityKW: 418900.0, hubHeight: 101.5, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Mesteno",
    state: "TX",
    county: "Starr County",
    year: 2019,
    capacity: 201.6,
    totalTurbines: 56,
    lon: -98.77095,
    lat: 26.524715,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 56, capacityKW: 3600.0, totalCapacityKW: 201600.0, hubHeight: 112.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Meyersdale",
    state: "PA",
    county: "Somerset County",
    year: 2003,
    capacity: 30.0,
    totalTurbines: 20,
    lon: -79.007996,
    lat: 39.781792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 20, capacityKW: 1500.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Miami",
    state: "TX",
    county: "Roberts County",
    year: 2014,
    capacity: 288.6,
    totalTurbines: 156,
    lon: -100.590172,
    lat: 35.652103,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 156, capacityKW: 1850.0, totalCapacityKW: 288600.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Michigan Wind I",
    state: "MI",
    county: "Huron County",
    year: 2008,
    capacity: 69.0,
    totalTurbines: 46,
    lon: -82.989098,
    lat: 43.704693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 46, capacityKW: 1500.0, totalCapacityKW: 69000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Michigan Wind II",
    state: "MI",
    county: "Sanilac County",
    year: 2011,
    capacity: 90.0,
    totalTurbines: 50,
    lon: -82.702293,
    lat: 43.620193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 50, capacityKW: 1800.0, totalCapacityKW: 90000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Midland Wind",
    state: "IL",
    county: "Henry County",
    year: 2023,
    capacity: 105.5,
    totalTurbines: 25,
    lon: -89.976662,
    lat: 41.341515,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.8", count: 4, capacityKW: 3800.0, totalCapacityKW: 15200.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 21, capacityKW: 4300.0, totalCapacityKW: 90300.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Midway",
    state: "TX",
    county: "San Patricio County",
    year: 2019,
    capacity: 162.855,
    totalTurbines: 46,
    lon: -97.267975,
    lat: 27.953232,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.465-132", count: 46, capacityKW: 3465.0, totalCapacityKW: 159390.0, hubHeight: 84.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Milford Phase I",
    state: "UT",
    county: "Beaver County",
    year: 2009,
    capacity: 203.5,
    totalTurbines: 97,
    lon: -112.928787,
    lat: 38.532993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C99", count: 58, capacityKW: 2500.0, totalCapacityKW: 145000.0, hubHeight: 80.0, rotorDiameter: 99.0 },
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 39, capacityKW: 1500.0, totalCapacityKW: 58500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Milford Phase II",
    state: "UT",
    county: "Millard County",
    year: 2011,
    capacity: 102.0,
    totalTurbines: 68,
    lon: -112.958092,
    lat: 38.588394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 68, capacityKW: 1500.0, totalCapacityKW: 102000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Mill Run Windpower LLC",
    state: "PA",
    county: "Fayette County",
    year: 2001,
    capacity: 15.0,
    totalTurbines: 10,
    lon: -79.389,
    lat: 39.924294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 10, capacityKW: 1500.0, totalCapacityKW: 15000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Milligan 1",
    state: "NE",
    county: "Saline County",
    year: 2020,
    capacity: 162.25,
    totalTurbines: 98,
    lon: -97.16304,
    lat: 40.506958,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.75-129", count: 35, capacityKW: 2750.0, totalCapacityKW: 96250.0, hubHeight: 87.0, rotorDiameter: 129.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.5-145", count: 30, capacityKW: 4500.0, totalCapacityKW: 135000.0, hubHeight: 107.5, rotorDiameter: 145.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 33, capacityKW: 2000.0, totalCapacityKW: 66000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Milner Dam",
    state: "ID",
    county: "Cassia County",
    year: 2011,
    capacity: 19.5,
    totalTurbines: 13,
    lon: -114.020187,
    lat: 42.454094,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 13, capacityKW: 1500.0, totalCapacityKW: 19500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Milo",
    state: "NM",
    county: "Roosevelt County",
    year: 2016,
    capacity: 31.65,
    totalTurbines: 25,
    lon: -103.350616,
    lat: 33.903324,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 25, capacityKW: 2000.0, totalCapacityKW: 50000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Minco II",
    state: "OK",
    county: "Caddo County",
    year: 2011,
    capacity: 100.8,
    totalTurbines: 63,
    lon: -98.032692,
    lat: 35.331795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 2, capacityKW: 1600.0, totalCapacityKW: 3200.0, hubHeight: 80.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.6-97", count: 61, capacityKW: 1600.0, totalCapacityKW: 97600.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Minco III",
    state: "OK",
    county: "Caddo County",
    year: 2012,
    capacity: 100.8,
    totalTurbines: 63,
    lon: -98.106094,
    lat: 35.358795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 3, capacityKW: 1600.0, totalCapacityKW: 4800.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.85-116", count: 60, capacityKW: 1850.0, totalCapacityKW: 111000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Minco IV",
    state: "OK",
    county: "Caddo County",
    year: 2018,
    capacity: 129.88,
    totalTurbines: 61,
    lon: -98.278091,
    lat: 35.457973,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "AAER", model: "A-1500", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 65.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 15, capacityKW: 1715.0, totalCapacityKW: 25725.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 6, capacityKW: 1790.0, totalCapacityKW: 10740.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 29, capacityKW: 2300.0, totalCapacityKW: 66700.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 10, capacityKW: 2500.0, totalCapacityKW: 25000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Minco Wind",
    state: "OK",
    county: "Grady County",
    year: 2010,
    capacity: 99.2,
    totalTurbines: 62,
    lon: -97.964195,
    lat: 35.270893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 62, capacityKW: 1600.0, totalCapacityKW: 99200.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Minden Wind Park",
    state: "MI",
    county: "Sanilac County",
    year: 2012,
    capacity: 32.0,
    totalTurbines: 20,
    lon: -82.762794,
    lat: 43.622993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 20, capacityKW: 1600.0, totalCapacityKW: 32000.0, hubHeight: 96.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Minn-Dakota",
    state: "MN",
    county: "Lincoln County",
    year: 2007,
    capacity: 96.0,
    totalTurbines: 100,
    lon: -96.397293,
    lat: 44.306793,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Minnesota Wind Share",
    state: "MN",
    county: "Murray County",
    year: 2006,
    capacity: 5.4,
    totalTurbines: 3,
    lon: -95.982391,
    lat: 43.962593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 3, capacityKW: 1800.0, totalCapacityKW: 5400.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Minonk",
    state: "IL",
    county: "Livingston County",
    year: 2012,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -88.923897,
    lat: 40.886593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Montague",
    state: "OR",
    county: "Gilliam County",
    year: 2019,
    capacity: 200.85,
    totalTurbines: 56,
    lon: -120.09996,
    lat: 45.495518,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 5, capacityKW: 3450.0, totalCapacityKW: 17250.0, hubHeight: 87.0, rotorDiameter: 126.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 51, capacityKW: 3600.0, totalCapacityKW: 183600.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Monte Cristo 1 Wind",
    state: "TX",
    county: "Hidalgo County",
    year: 2025,
    capacity: 238.5,
    totalTurbines: 53,
    lon: -98.20285,
    lat: 26.515703,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V163-4.5", count: 53, capacityKW: 4500.0, totalCapacityKW: 238500.0, hubHeight: 113.0, rotorDiameter: 163.0 }
    ]
  },
  {
    name: "Montezuma",
    state: "CA",
    county: "Solano County",
    year: 2010,
    capacity: 36.8,
    totalTurbines: 16,
    lon: -121.801888,
    lat: 38.153694,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 16, capacityKW: 2300.0, totalCapacityKW: 36800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Montezuma Winds II",
    state: "CA",
    county: "Solano County",
    year: 2012,
    capacity: 78.2,
    totalTurbines: 34,
    lon: -121.823586,
    lat: 38.129093,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 34, capacityKW: 2300.0, totalCapacityKW: 78200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Montfort Wind Farm",
    state: "WI",
    county: "Iowa County",
    year: 2001,
    capacity: 30.0,
    totalTurbines: 20,
    lon: -90.372955,
    lat: 42.963032,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 20, capacityKW: 1500.0, totalCapacityKW: 30000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Montgomery Ranch Wind Farm",
    state: "TX",
    county: "Foard County",
    year: 2024,
    capacity: 202.5,
    totalTurbines: 45,
    lon: -99.627663,
    lat: 33.876244,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 45, capacityKW: 4500.0, totalCapacityKW: 202500.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Moraine II",
    state: "MN",
    county: "Pipestone County",
    year: 2009,
    capacity: 49.5,
    totalTurbines: 33,
    lon: -96.077591,
    lat: 44.113792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 33, capacityKW: 1500.0, totalCapacityKW: 49500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Moraine Sands Wind",
    state: "IL",
    county: "Mason County",
    year: 2023,
    capacity: 171.0,
    totalTurbines: 38,
    lon: -89.804863,
    lat: 40.201164,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 38, capacityKW: 4500.0, totalCapacityKW: 171000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Moraine Wind Power project",
    state: "MN",
    county: "Pipestone County",
    year: 2003,
    capacity: 51.0,
    totalTurbines: 34,
    lon: -96.069595,
    lat: 44.055893,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 34, capacityKW: 1500.0, totalCapacityKW: 51000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Morning Light",
    state: "IA",
    county: "Adair County",
    year: 2012,
    capacity: 101.2,
    totalTurbines: 45,
    lon: -94.582977,
    lat: 41.456413,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.38-129", count: 21, capacityKW: 2380.0, totalCapacityKW: 49980.0, hubHeight: 80.0, rotorDiameter: 129.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.66-129", count: 20, capacityKW: 2660.0, totalCapacityKW: 53200.0, hubHeight: 80.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Moscow Wind",
    state: "ME",
    county: "Somerset County",
    year: 2025,
    capacity: 58.8,
    totalTurbines: 14,
    lon: -69.842026,
    lat: 45.136227,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.2", count: 14, capacityKW: 4200.0, totalCapacityKW: 58800.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Mountain Breeze",
    state: "CO",
    county: "Weld County",
    year: 2020,
    capacity: 171.72,
    totalTurbines: 62,
    lon: -104.031059,
    lat: 40.997459,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 56, capacityKW: 2820.0, totalCapacityKW: 157920.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Mountain Home",
    state: "ID",
    county: "Elmore County",
    year: 2009,
    capacity: 42.0,
    totalTurbines: 20,
    lon: -115.480385,
    lat: 43.058193,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 20, capacityKW: 2100.0, totalCapacityKW: 42000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Mountain View IV",
    state: "CA",
    county: "Riverside County",
    year: 2012,
    capacity: 49.0,
    totalTurbines: 49,
    lon: -116.569885,
    lat: 33.880596,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 49, capacityKW: 1000.0, totalCapacityKW: 49000.0, hubHeight: 60.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Mountain View Power Partners I & II",
    state: "CA",
    county: "Riverside County",
    year: 2001,
    capacity: 66.6,
    totalTurbines: 16,
    lon: -116.608925,
    lat: 33.906044,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT600", count: 16, capacityKW: 600.0, totalCapacityKW: 9600.0, hubHeight: 55.0, rotorDiameter: 45.0 }
    ]
  },
  {
    name: "Mountain View Power Partners III",
    state: "CA",
    county: "Riverside County",
    year: 2003,
    capacity: 22.44,
    totalTurbines: 34,
    lon: -116.591591,
    lat: 33.914696,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 34, capacityKW: 660.0, totalCapacityKW: 22440.0, hubHeight: 60.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Mountain View Power Partners Repower",
    state: "CA",
    county: "Riverside County",
    year: 2022,
    capacity: 66.7,
    totalTurbines: 16,
    lon: -116.62748,
    lat: 33.908997,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.6", count: 3, capacityKW: 3600.0, totalCapacityKW: 10800.0, hubHeight: 92.0, rotorDiameter: 117.0 },
      { manufacturer: "Vestas", model: "V117-4.3", count: 13, capacityKW: 4300.0, totalCapacityKW: 55900.0, hubHeight: 92.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Mountain Wind I",
    state: "WY",
    county: "Uinta County",
    year: 2008,
    capacity: 60.9,
    totalTurbines: 29,
    lon: -110.485085,
    lat: 41.282894,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 29, capacityKW: 2100.0, totalCapacityKW: 60900.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Mountain Wind II",
    state: "WY",
    county: "Uinta County",
    year: 2008,
    capacity: 79.8,
    totalTurbines: 38,
    lon: -110.539886,
    lat: 41.259995,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 38, capacityKW: 2100.0, totalCapacityKW: 79800.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Mountaineer Wind Energy Center (Thomas)",
    state: "WV",
    county: "Tucker County",
    year: 2002,
    capacity: 66.0,
    totalTurbines: 44,
    lon: -79.54425,
    lat: 39.174747,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM72", count: 44, capacityKW: 1500.0, totalCapacityKW: 66000.0, hubHeight: 70.0, rotorDiameter: 72.0 }
    ]
  },
  {
    name: "Mower County Wind Energy Center",
    state: "MN",
    county: "Mower County",
    year: 2006,
    capacity: 98.9,
    totalTurbines: 43,
    lon: -92.591843,
    lat: 43.595329,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 43, capacityKW: 2300.0, totalCapacityKW: 98900.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Mozart",
    state: "TX",
    county: "Stonewall County",
    year: 2012,
    capacity: 30.0,
    totalTurbines: 12,
    lon: -100.509094,
    lat: 32.973392,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 12, capacityKW: 2500.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Munnsville",
    state: "NY",
    county: "Madison County",
    year: 2007,
    capacity: 34.5,
    totalTurbines: 23,
    lon: -75.573898,
    lat: 42.915592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 23, capacityKW: 1500.0, totalCapacityKW: 34500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Musselshell I",
    state: "MT",
    county: "Wheatland County",
    year: 2012,
    capacity: 10.0,
    totalTurbines: 7,
    lon: -109.475388,
    lat: 46.280994,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW87", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 75.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Musselshell II",
    state: "MT",
    county: "Wheatland County",
    year: 2012,
    capacity: 10.0,
    totalTurbines: 7,
    lon: -109.506088,
    lat: 46.265293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW87", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 75.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Mustang Hills",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 18.0,
    totalTurbines: 6,
    lon: -118.241089,
    lat: 35.031494,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 6, capacityKW: 3000.0, totalCapacityKW: 18000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "NREL - NWTC",
    state: "CO",
    county: "Jefferson County",
    year: 2009,
    capacity: 7.1,
    totalTurbines: 6,
    lon: -105.231789,
    lat: 39.911594,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Gamesa", model: "G97-2.0", count: 1, capacityKW: 2000.0, totalCapacityKW: 2000.0, hubHeight: 90.0, rotorDiameter: 97.0 },
      { manufacturer: "Northern Power Systems", model: "NW100", count: 1, capacityKW: 100.0, totalCapacityKW: 100.0, hubHeight: 30.0, rotorDiameter: 21.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Westinghouse", model: "WWG0600", count: 2, capacityKW: 600.0, totalCapacityKW: 1200.0, hubHeight: 37.0, rotorDiameter: 44.0 }
    ]
  },
  {
    name: "Na Pua Makani",
    state: "HI",
    county: "Honolulu County",
    year: 2020,
    capacity: 27.6,
    totalTurbines: 8,
    lon: -157.969696,
    lat: 21.672029,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.45", count: 8, capacityKW: 3450.0, totalCapacityKW: 27600.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "NedPower Mount Storm, Phase I",
    state: "WV",
    county: "Grant County",
    year: 2008,
    capacity: 164.0,
    totalTurbines: 82,
    lon: -79.190094,
    lat: 39.237492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G80-2.0", count: 82, capacityKW: 2000.0, totalCapacityKW: 164000.0, hubHeight: 78.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "NedPower Mount Storm, Phase II",
    state: "WV",
    county: "Grant County",
    year: 2008,
    capacity: 100.0,
    totalTurbines: 50,
    lon: -79.201698,
    lat: 39.235592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G80-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 78.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Neosho Ridge",
    state: "KS",
    county: "Neosho County",
    year: 2021,
    capacity: 301.0,
    totalTurbines: 138,
    lon: -95.465561,
    lat: 37.497402,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 24, capacityKW: 2000.0, totalCapacityKW: 48000.0, hubHeight: 120.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 114, capacityKW: 2200.0, totalCapacityKW: 250800.0, hubHeight: 122.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "New Creek Wind",
    state: "WV",
    county: "Grant County",
    year: 2016,
    capacity: 102.5,
    totalTurbines: 49,
    lon: -79.136002,
    lat: 39.214611,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 4, capacityKW: 2000.0, totalCapacityKW: 8000.0, hubHeight: 78.0, rotorDiameter: 90.0 },
      { manufacturer: "Gamesa", model: "G97-2.1", count: 45, capacityKW: 2100.0, totalCapacityKW: 94500.0, hubHeight: 78.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "New Frontier",
    state: "ND",
    county: "McHenry County",
    year: 2018,
    capacity: 100.05,
    totalTurbines: 29,
    lon: -100.963196,
    lat: 47.895481,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 29, capacityKW: 3450.0, totalCapacityKW: 100050.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "New Harvest",
    state: "IA",
    county: "Crawford County",
    year: 2012,
    capacity: 100.0,
    totalTurbines: 50,
    lon: -95.43499,
    lat: 42.185993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "New Mexico Wind Energy Center",
    state: "NM",
    county: "De Baca County",
    year: 2003,
    capacity: 204.0,
    totalTurbines: 136,
    lon: -104.086548,
    lat: 34.555763,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 136, capacityKW: 1500.0, totalCapacityKW: 204000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Nine Canyon",
    state: "WA",
    county: "Benton County",
    year: 2002,
    capacity: 48.1,
    totalTurbines: 37,
    lon: -119.090385,
    lat: 46.095394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Bonus", model: "B62", count: 37, capacityKW: 1300.0, totalCapacityKW: 48100.0, hubHeight: 60.0, rotorDiameter: 62.0 }
    ]
  },
  {
    name: "Nine Canyon II",
    state: "WA",
    county: "Benton County",
    year: 2003,
    capacity: 15.6,
    totalTurbines: 12,
    lon: -119.140884,
    lat: 46.103992,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Bonus", model: "B62", count: 12, capacityKW: 1300.0, totalCapacityKW: 15600.0, hubHeight: 60.0, rotorDiameter: 62.0 }
    ]
  },
  {
    name: "Nine Canyon III",
    state: "WA",
    county: "Benton County",
    year: 2008,
    capacity: 32.2,
    totalTurbines: 14,
    lon: -119.129135,
    lat: 46.118526,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 14, capacityKW: 2300.0, totalCapacityKW: 32200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Ninnescah",
    state: "KS",
    county: "Pratt County",
    year: 2016,
    capacity: 208.265,
    totalTurbines: 121,
    lon: -98.569611,
    lat: 37.577957,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 111, capacityKW: 1715.0, totalCapacityKW: 190365.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 10, capacityKW: 1790.0, totalCapacityKW: 17900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Niyol Wind",
    state: "CO",
    county: "Logan County",
    year: 2021,
    capacity: 200.8,
    totalTurbines: 74,
    lon: -102.956215,
    lat: 40.633221,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 7, capacityKW: 2500.0, totalCapacityKW: 17500.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 67, capacityKW: 2820.0, totalCapacityKW: 188940.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "No Fossil Fuel - Kingston",
    state: "MA",
    county: "Plymouth County",
    year: 2012,
    capacity: 6.0,
    totalTurbines: 3,
    lon: -70.725098,
    lat: 41.971592,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 3, capacityKW: 2000.0, totalCapacityKW: 6000.0, hubHeight: 90.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Noble Altona",
    state: "NY",
    county: "Clinton County",
    year: 2009,
    capacity: 97.5,
    totalTurbines: 65,
    lon: -73.637199,
    lat: 44.820789,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 65, capacityKW: 1500.0, totalCapacityKW: 97500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Bliss",
    state: "NY",
    county: "Wyoming County",
    year: 2008,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -78.278793,
    lat: 42.544891,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Chateaugay",
    state: "NY",
    county: "Franklin County",
    year: 2009,
    capacity: 106.5,
    totalTurbines: 71,
    lon: -74.023499,
    lat: 44.909191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 71, capacityKW: 1500.0, totalCapacityKW: 106500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Clinton",
    state: "NY",
    county: "Clinton County",
    year: 2008,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -73.987297,
    lat: 44.951389,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Ellenburg",
    state: "NY",
    county: "Clinton County",
    year: 2008,
    capacity: 81.0,
    totalTurbines: 54,
    lon: -73.975296,
    lat: 44.862392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 54, capacityKW: 1500.0, totalCapacityKW: 81000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Great Plains",
    state: "TX",
    county: "Hansford County",
    year: 2009,
    capacity: 114.0,
    totalTurbines: 76,
    lon: -101.389694,
    lat: 36.474194,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 76, capacityKW: 1500.0, totalCapacityKW: 114000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Noble Wethersfield",
    state: "NY",
    county: "Wyoming County",
    year: 2009,
    capacity: 126.0,
    totalTurbines: 84,
    lon: -78.244293,
    lat: 42.602192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 84, capacityKW: 1500.0, totalCapacityKW: 126000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Nobles",
    state: "MN",
    county: "Nobles County",
    year: 2010,
    capacity: 201.0,
    totalTurbines: 133,
    lon: -95.820389,
    lat: 43.672291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.6-97", count: 110, capacityKW: 1600.0, totalCapacityKW: 176000.0, hubHeight: 80.0, rotorDiameter: 97.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 22, capacityKW: 1620.0, totalCapacityKW: 35640.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Nobles 2 Power Partners",
    state: "MN",
    county: "Nobles County",
    year: 2020,
    capacity: 250.4,
    totalTurbines: 74,
    lon: -95.834656,
    lat: 43.791924,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 64, capacityKW: 3600.0, totalCapacityKW: 230400.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Norgaard (7 Projects)",
    state: "MN",
    county: "Lincoln County",
    year: 2006,
    capacity: 8.75,
    totalTurbines: 7,
    lon: -96.32579,
    lat: 44.314693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 7, capacityKW: 1250.0, totalCapacityKW: 8750.0, hubHeight: 73.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "North Allegheny",
    state: "PA",
    county: "Cambria County",
    year: 2009,
    capacity: 70.0,
    totalTurbines: 32,
    lon: -78.579971,
    lat: 40.393047,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87", count: 1, capacityKW: 2000.0, totalCapacityKW: 2000.0, hubHeight: 78.0, rotorDiameter: 87.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 31, capacityKW: 2000.0, totalCapacityKW: 62000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "North Allegheny Repower",
    state: "PA",
    county: "Blair County",
    year: 2009,
    capacity: 72.6,
    totalTurbines: 1,
    lon: -78.5541,
    lat: 40.421692,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 1, capacityKW: 2200.0, totalCapacityKW: 2200.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "North Bend Wind",
    state: "SD",
    county: "Hughes County",
    year: 2023,
    capacity: 200.22,
    totalTurbines: 70,
    lon: -99.72982,
    lat: 44.419258,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 70, capacityKW: 2820.0, totalCapacityKW: 197400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "North Dakota Wind I",
    state: "ND",
    county: "LaMoure County",
    year: 2003,
    capacity: 40.5,
    totalTurbines: 27,
    lon: -98.885788,
    lat: 46.288994,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 27, capacityKW: 1500.0, totalCapacityKW: 40500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "North Dakota Wind II",
    state: "ND",
    county: "LaMoure County",
    year: 2003,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -98.873787,
    lat: 46.308792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "North English",
    state: "IA",
    county: "Poweshiek County",
    year: 2018,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -92.549835,
    lat: 41.633457,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "North English II",
    state: "IA",
    county: "Poweshiek County",
    year: 2019,
    capacity: 140.0,
    totalTurbines: 70,
    lon: -92.427216,
    lat: 41.656189,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 70, capacityKW: 2000.0, totalCapacityKW: 140000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "North Fork Ridge",
    state: "MO",
    county: "Barton County",
    year: 2020,
    capacity: 149.4,
    totalTurbines: 69,
    lon: -94.528534,
    lat: 37.396927,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 12, capacityKW: 2000.0, totalCapacityKW: 24000.0, hubHeight: 120.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 57, capacityKW: 2200.0, totalCapacityKW: 125400.0, hubHeight: 122.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "North Hurlburt",
    state: "OR",
    county: "Gilliam County",
    year: 2012,
    capacity: 63.25,
    totalTurbines: 24,
    lon: -120.057693,
    lat: 45.772125,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.75-116", count: 4, capacityKW: 2750.0, totalCapacityKW: 11000.0, hubHeight: 85.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.75-127", count: 19, capacityKW: 2750.0, totalCapacityKW: 52250.0, hubHeight: 85.0, rotorDiameter: 127.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 1, capacityKW: 5000.0, totalCapacityKW: 5000.0, hubHeight: 90.0, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "North Shaokatan Wind Farm",
    state: "MN",
    county: "Lincoln County",
    year: 2000,
    capacity: 11.88,
    totalTurbines: 18,
    lon: -96.442688,
    lat: 44.422691,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 18, capacityKW: 660.0, totalCapacityKW: 11880.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "North Sky River",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 162.0,
    totalTurbines: 100,
    lon: -118.172386,
    lat: 35.320995,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-100", count: 100, capacityKW: 1620.0, totalCapacityKW: 162000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Northeast Colorado Wind",
    state: "CO",
    county: "Logan County",
    year: 2009,
    capacity: 174.3,
    totalTurbines: 81,
    lon: -102.78569,
    lat: 40.999794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 80.0, rotorDiameter: 82.5 },
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 14, capacityKW: 1600.0, totalCapacityKW: 22400.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 66, capacityKW: 2300.0, totalCapacityKW: 151800.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Northern Divide (Burke)",
    state: "ND",
    county: "Burke County",
    year: 2020,
    capacity: 193.24,
    totalTurbines: 74,
    lon: -102.915451,
    lat: 48.838921,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 8, capacityKW: 1715.0, totalCapacityKW: 13720.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 66, capacityKW: 2720.0, totalCapacityKW: 179520.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Northern Wind Repower",
    state: "MN",
    county: "Murray County",
    year: 2023,
    capacity: 100.0,
    totalTurbines: 36,
    lon: -96.009689,
    lat: 44.025814,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.7-116", count: 1, capacityKW: 2700.0, totalCapacityKW: 2700.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 7, capacityKW: 2500.0, totalCapacityKW: 17500.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.7-116", count: 11, capacityKW: 2700.0, totalCapacityKW: 29700.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 17, capacityKW: 2800.0, totalCapacityKW: 47600.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Northwest Ohio",
    state: "OH",
    county: "Paulding County",
    year: 2018,
    capacity: 105.0,
    totalTurbines: 42,
    lon: -84.563431,
    lat: 41.0392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 42, capacityKW: 2500.0, totalCapacityKW: 105000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Notrees",
    state: "TX",
    county: "Ector County",
    year: 2009,
    capacity: 152.61,
    totalTurbines: 96,
    lon: -102.79599,
    lat: 31.960495,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 40, capacityKW: 1500.0, totalCapacityKW: 60000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Vestas", model: "V82-1.65", count: 55, capacityKW: 1650.0, totalCapacityKW: 90750.0, hubHeight: 80.0, rotorDiameter: 82.0 },
      { manufacturer: "Vestas", model: "V90-1.86", count: 1, capacityKW: 1860.0, totalCapacityKW: 1860.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Number Three Wind Farm",
    state: "NY",
    county: "Lewis County",
    year: 2023,
    capacity: 99.5,
    totalTurbines: 27,
    lon: -75.539169,
    lat: 43.826145,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 110.0, rotorDiameter: 116.0 },
      { manufacturer: "Vestas", model: "V150-4.0", count: 22, capacityKW: 4000.0, totalCapacityKW: 88000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "O'Brien",
    state: "IA",
    county: "O'Brien County",
    year: 2016,
    capacity: 250.263,
    totalTurbines: 104,
    lon: -95.53286,
    lat: 43.19416,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 91, capacityKW: 2415.0, totalCapacityKW: 219765.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 13, capacityKW: 2346.0, totalCapacityKW: 30498.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "OK Wind Energy Center (mooreland)",
    state: "OK",
    county: "Harper County",
    year: 2003,
    capacity: 51.0,
    totalTurbines: 68,
    lon: -99.335152,
    lat: 36.604485,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 68, capacityKW: 1500.0, totalCapacityKW: 102000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "OU Spirit",
    state: "OK",
    county: "Woodward County",
    year: 2009,
    capacity: 101.2,
    totalTurbines: 44,
    lon: -99.499794,
    lat: 36.331993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Oak Creek Wind Power Phase 2",
    state: "CA",
    county: "Kern County",
    year: 1999,
    capacity: 23.1,
    totalTurbines: 33,
    lon: -118.347404,
    lat: 35.034237,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM48", count: 33, capacityKW: 700.0, totalCapacityKW: 23100.0, hubHeight: 55.0, rotorDiameter: 48.0 }
    ]
  },
  {
    name: "Oak Glen Wind Project",
    state: "MN",
    county: "Steele County",
    year: 2011,
    capacity: 43.2,
    totalTurbines: 24,
    lon: -93.114891,
    lat: 43.924191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 24, capacityKW: 1800.0, totalCapacityKW: 43200.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Oak Tree",
    state: "SD",
    county: "Clark County",
    year: 2014,
    capacity: 19.5,
    totalTurbines: 11,
    lon: -97.735718,
    lat: 44.933754,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 11, capacityKW: 1850.0, totalCapacityKW: 20350.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Oakfield Wind",
    state: "ME",
    county: "Aroostook County",
    year: 2015,
    capacity: 147.6,
    totalTurbines: 48,
    lon: -68.103149,
    lat: 46.082092,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.075", count: 48, capacityKW: 3075.0, totalCapacityKW: 147600.0, hubHeight: 84.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Oasis Repowering",
    state: "CA",
    county: "Kern County",
    year: 2020,
    capacity: 72.0,
    totalTurbines: 16,
    lon: -118.303734,
    lat: 35.066334,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.0", count: 4, capacityKW: 3000.0, totalCapacityKW: 12000.0, hubHeight: 94.0, rotorDiameter: 112.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 12, capacityKW: 3600.0, totalCapacityKW: 43200.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Ocotillo",
    state: "TX",
    county: "Howard County",
    year: 2008,
    capacity: 58.8,
    totalTurbines: 26,
    lon: -101.402489,
    lat: 32.161396,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 26, capacityKW: 2100.0, totalCapacityKW: 54600.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Ocotillo Wind I",
    state: "CA",
    county: "Imperial County",
    year: 2013,
    capacity: 42.66,
    totalTurbines: 112,
    lon: -116.056389,
    lat: 32.766495,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 18, capacityKW: 2300.0, totalCapacityKW: 41400.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens", model: "SWT-2.37-108", count: 94, capacityKW: 2370.0, totalCapacityKW: 222780.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Odell",
    state: "MN",
    county: "Cottonwood County",
    year: 2016,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -94.930763,
    lat: 43.886353,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Odin",
    state: "MN",
    county: "Watonwan County",
    year: 2008,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -94.85746,
    lat: 43.863911,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Old Settler Wind",
    state: "TX",
    county: "Floyd County",
    year: 2017,
    capacity: 151.2,
    totalTurbines: 63,
    lon: -101.153343,
    lat: 34.016712,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.4-107", count: 63, capacityKW: 2400.0, totalCapacityKW: 151200.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Oliver County Wind Energy Center",
    state: "ND",
    county: "Oliver County",
    year: 2006,
    capacity: 50.6,
    totalTurbines: 22,
    lon: -101.220787,
    lat: 47.163792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 22, capacityKW: 2300.0, totalCapacityKW: 50600.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Oliver II",
    state: "ND",
    county: "Oliver County",
    year: 2007,
    capacity: 51.2,
    totalTurbines: 32,
    lon: -101.14399,
    lat: 47.152191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 32, capacityKW: 1600.0, totalCapacityKW: 51200.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Oliver III",
    state: "ND",
    county: "Morton County",
    year: 2017,
    capacity: 99.25,
    totalTurbines: 48,
    lon: -101.18251,
    lat: 46.947147,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 5, capacityKW: 1790.0, totalCapacityKW: 8950.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 43, capacityKW: 2100.0, totalCapacityKW: 90300.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Oliver IV",
    state: "ND",
    county: "Oliver County",
    year: 2024,
    capacity: 199.469,
    totalTurbines: 73,
    lon: -101.434525,
    lat: 47.186954,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 5, capacityKW: 2520.0, totalCapacityKW: 12600.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 68, capacityKW: 2820.0, totalCapacityKW: 191760.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Orangeville Wind",
    state: "NY",
    county: "Wyoming County",
    year: 2013,
    capacity: 84.24,
    totalTurbines: 58,
    lon: -78.245377,
    lat: 42.735123,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-100", count: 52, capacityKW: 1620.0, totalCapacityKW: 84240.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.62-103", count: 6, capacityKW: 1620.0, totalCapacityKW: 9720.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Orchard Wind",
    state: "OR",
    county: "Morrow County",
    year: 2020,
    capacity: 10.0,
    totalTurbines: 16,
    lon: -119.562103,
    lat: 45.64843,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.5-127", count: 16, capacityKW: 2500.0, totalCapacityKW: 40000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Oregon Trail",
    state: "ID",
    county: "Twin Falls County",
    year: 2011,
    capacity: 13.5,
    totalTurbines: 9,
    lon: -114.990288,
    lat: 42.830692,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 9, capacityKW: 1500.0, totalCapacityKW: 13500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Orient 2019",
    state: "IA",
    county: "Adair County",
    year: 2019,
    capacity: 398.8,
    totalTurbines: 190,
    lon: -94.368256,
    lat: 41.254673,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 129, capacityKW: 2000.0, totalCapacityKW: 258000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 61, capacityKW: 2200.0, totalCapacityKW: 134200.0, hubHeight: 95.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Orient I",
    state: "IA",
    county: "Adair County",
    year: 2018,
    capacity: 102.0,
    totalTurbines: 51,
    lon: -94.519943,
    lat: 41.22337,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 51, capacityKW: 2000.0, totalCapacityKW: 102000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Origin",
    state: "OK",
    county: "Murray County",
    year: 2014,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -97.22094,
    lat: 34.437862,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Osage Wind",
    state: "OK",
    county: "Osage County",
    year: 2015,
    capacity: 150.36,
    totalTurbines: 84,
    lon: -96.640419,
    lat: 36.691444,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 84, capacityKW: 1790.0, totalCapacityKW: 150360.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Osborn",
    state: "MO",
    county: "DeKalb County",
    year: 2016,
    capacity: 200.91,
    totalTurbines: 97,
    lon: -94.437218,
    lat: 39.837482,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 9, capacityKW: 1790.0, totalCapacityKW: 16110.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.1-116", count: 88, capacityKW: 2100.0, totalCapacityKW: 184800.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Oso Grande",
    state: "NM",
    county: "Chaves County",
    year: 2020,
    capacity: 247.395,
    totalTurbines: 61,
    lon: -103.769318,
    lat: 33.046406,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 13, capacityKW: 2415.0, totalCapacityKW: 31395.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.5-145", count: 48, capacityKW: 4500.0, totalCapacityKW: 216000.0, hubHeight: 107.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Otter Creek",
    state: "IL",
    county: "LaSalle County",
    year: 2020,
    capacity: 158.2,
    totalTurbines: 42,
    lon: -88.651077,
    lat: 41.126442,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 4, capacityKW: 3450.0, totalCapacityKW: 13800.0, hubHeight: 87.0, rotorDiameter: 126.0 },
      { manufacturer: "Vestas", model: "V136-3.8", count: 38, capacityKW: 3800.0, totalCapacityKW: 144400.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Outlaw",
    state: "MO",
    county: "Atchison County",
    year: 2021,
    capacity: 298.6,
    totalTurbines: 91,
    lon: -95.472572,
    lat: 40.523335,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 18, capacityKW: 2000.0, totalCapacityKW: 36000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 22, capacityKW: 2200.0, totalCapacityKW: 48400.0, hubHeight: 80.0, rotorDiameter: 120.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 51, capacityKW: 4200.0, totalCapacityKW: 214200.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "PYCO Soaring Wind Farm",
    state: "TX",
    county: "Lubbock County",
    year: 2008,
    capacity: 10.0,
    totalTurbines: 10,
    lon: -101.792389,
    lat: 33.553192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Fuhrlander", model: "FL1000", count: 10, capacityKW: 1000.0, totalCapacityKW: 10000.0, hubHeight: 70.0, rotorDiameter: 54.0 }
    ]
  },
  {
    name: "PaTu Wind Farm",
    state: "OR",
    county: "Sherman County",
    year: 2010,
    capacity: 9.0,
    totalTurbines: 6,
    lon: -120.617287,
    lat: 45.602592,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Pacific Wind",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 143.5,
    totalTurbines: 70,
    lon: -118.429489,
    lat: 34.915596,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 70, capacityKW: 2050.0, totalCapacityKW: 143500.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Painted Hills Repower",
    state: "CA",
    county: "Riverside County",
    year: 2020,
    capacity: 39.0,
    totalTurbines: 9,
    lon: -116.630493,
    lat: 33.939869,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.0", count: 9, capacityKW: 3000.0, totalCapacityKW: 27000.0, hubHeight: 92.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Pakini Nui (KA'ALUALU)",
    state: "HI",
    county: "Hawaii County",
    year: 2007,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -155.690018,
    lat: 18.964701,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Palm Springs (repower)",
    state: "CA",
    county: "Riverside County",
    year: 2011,
    capacity: 49.5,
    totalTurbines: 33,
    lon: -116.574387,
    lat: 33.910896,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 33, capacityKW: 1500.0, totalCapacityKW: 49500.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Palmas Altas",
    state: "TX",
    county: "Cameron County",
    year: 2019,
    capacity: 144.9,
    totalTurbines: 46,
    lon: -97.488068,
    lat: 26.31707,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 46, capacityKW: 3150.0, totalCapacityKW: 144900.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Palmer's Creek",
    state: "MN",
    county: "Chippewa County",
    year: 2018,
    capacity: 44.6,
    totalTurbines: 18,
    lon: -95.569275,
    lat: 44.852596,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 2, capacityKW: 2300.0, totalCapacityKW: 4600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 16, capacityKW: 2500.0, totalCapacityKW: 40000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Palo Alto",
    state: "IA",
    county: "Palo Alto County",
    year: 2019,
    capacity: 250.0,
    totalTurbines: 125,
    lon: -94.646622,
    lat: 43.222675,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 125, capacityKW: 2000.0, totalCapacityKW: 250000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Palo Alto II",
    state: "IA",
    county: "Palo Alto County",
    year: 2020,
    capacity: 90.0,
    totalTurbines: 45,
    lon: -94.47464,
    lat: 43.121357,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 45, capacityKW: 2000.0, totalCapacityKW: 90000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Palo Duro",
    state: "TX",
    county: "Ochiltree County",
    year: 2014,
    capacity: 249.9,
    totalTurbines: 147,
    lon: -100.996758,
    lat: 36.409275,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 147, capacityKW: 1700.0, totalCapacityKW: 249900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Palouse",
    state: "WA",
    county: "Whitman County",
    year: 2012,
    capacity: 104.4,
    totalTurbines: 58,
    lon: -117.285484,
    lat: 47.136894,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 58, capacityKW: 1800.0, totalCapacityKW: 104400.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Panhandle Wind 1",
    state: "TX",
    county: "Carson County",
    year: 2014,
    capacity: 218.3,
    totalTurbines: 118,
    lon: -101.265579,
    lat: 35.444653,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 118, capacityKW: 1850.0, totalCapacityKW: 218300.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Panhandle Wind 2",
    state: "TX",
    county: "Carson County",
    year: 2014,
    capacity: 181.7,
    totalTurbines: 79,
    lon: -101.424377,
    lat: 35.455425,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 79, capacityKW: 2300.0, totalCapacityKW: 181700.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Panorama Wind",
    state: "CO",
    county: "Weld County",
    year: 2022,
    capacity: 145.0,
    totalTurbines: 66,
    lon: -103.909164,
    lat: 40.93515,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 1, capacityKW: 2000.0, totalCapacityKW: 2000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 65, capacityKW: 2200.0, totalCapacityKW: 143000.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Pantex Renewable Energy Project",
    state: "TX",
    county: "Carson County",
    year: 2014,
    capacity: 11.5,
    totalTurbines: 5,
    lon: -101.53949,
    lat: 35.322693,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Panther Creek I",
    state: "TX",
    county: "Glasscock County",
    year: 2008,
    capacity: 153.9,
    totalTurbines: 95,
    lon: -101.460388,
    lat: 32.135593,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 48, capacityKW: 1620.0, totalCapacityKW: 77760.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 47, capacityKW: 1620.0, totalCapacityKW: 76140.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Panther Creek II",
    state: "TX",
    county: "Glasscock County",
    year: 2009,
    capacity: 124.74,
    totalTurbines: 77,
    lon: -101.283691,
    lat: 31.939795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 60, capacityKW: 1620.0, totalCapacityKW: 97200.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 17, capacityKW: 1620.0, totalCapacityKW: 27540.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Panther Creek III",
    state: "TX",
    county: "Sterling County",
    year: 2009,
    capacity: 212.8,
    totalTurbines: 133,
    lon: -101.06089,
    lat: 32.031494,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 66, capacityKW: 1600.0, totalCapacityKW: 105600.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "GE Wind", model: "GE1.6-97", count: 67, capacityKW: 1600.0, totalCapacityKW: 107200.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Panther Creek Wind",
    state: "IL",
    county: "Pike County",
    year: 2025,
    capacity: 54.4,
    totalTurbines: 16,
    lon: -90.88446,
    lat: 39.625626,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE3.4-140", count: 16, capacityKW: 3400.0, totalCapacityKW: 54400.0, hubHeight: 117.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Papalote Creek",
    state: "TX",
    county: "San Patricio County",
    year: 2009,
    capacity: 179.85,
    totalTurbines: 109,
    lon: -97.532089,
    lat: 27.931696,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 109, capacityKW: 1650.0, totalCapacityKW: 179850.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Papalote Creek II",
    state: "TX",
    county: "San Patricio County",
    year: 2010,
    capacity: 200.1,
    totalTurbines: 87,
    lon: -97.415993,
    lat: 27.937494,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 87, capacityKW: 2300.0, totalCapacityKW: 200100.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Passadumkeag",
    state: "ME",
    county: "Penobscot County",
    year: 2016,
    capacity: 42.9,
    totalTurbines: 13,
    lon: -68.367554,
    lat: 45.128105,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.3", count: 13, capacityKW: 3300.0, totalCapacityKW: 42900.0, hubHeight: 84.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Patriot Wind",
    state: "TX",
    county: "Nueces County",
    year: 2019,
    capacity: 226.05,
    totalTurbines: 63,
    lon: -97.677635,
    lat: 27.561689,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 5, capacityKW: 3450.0, totalCapacityKW: 17250.0, hubHeight: 87.0, rotorDiameter: 126.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 58, capacityKW: 3600.0, totalCapacityKW: 208800.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Patterson Wind",
    state: "CA",
    county: "Alameda County",
    year: 1985,
    capacity: 7.28,
    totalTurbines: 5,
    lon: -121.61319,
    lat: 37.705296,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Nordtank", model: "NTK65", count: 5, capacityKW: 65.0, totalCapacityKW: 325.0, hubHeight: 24.0, rotorDiameter: 16.0 }
    ]
  },
  {
    name: "Patton Wind Farm",
    state: "PA",
    county: "Cambria County",
    year: 2012,
    capacity: 30.0,
    totalTurbines: 15,
    lon: -78.689095,
    lat: 40.64579,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G97-2.0", count: 15, capacityKW: 2000.0, totalCapacityKW: 30000.0, hubHeight: 100.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Payne's Ferry",
    state: "ID",
    county: "Twin Falls County",
    year: 2010,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -115.010986,
    lat: 42.824993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Peak View Wind",
    state: "CO",
    county: "Huerfano County",
    year: 2016,
    capacity: 60.86,
    totalTurbines: 34,
    lon: -104.507179,
    lat: 37.690849,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 34, capacityKW: 1790.0, totalCapacityKW: 60860.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pebble Springs",
    state: "OR",
    county: "Gilliam County",
    year: 2009,
    capacity: 98.7,
    totalTurbines: 47,
    lon: -120.094688,
    lat: 45.683193,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 47, capacityKW: 2100.0, totalCapacityKW: 98700.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Peetz Table",
    state: "CO",
    county: "Logan County",
    year: 2007,
    capacity: 400.5,
    totalTurbines: 267,
    lon: -103.238892,
    lat: 40.900093,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 134, capacityKW: 1500.0, totalCapacityKW: 201000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 133, capacityKW: 1600.0, totalCapacityKW: 212800.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Peetz Table Wind Farm",
    state: "CO",
    county: "Logan County",
    year: 2001,
    capacity: 29.7,
    totalTurbines: 33,
    lon: -103.166969,
    lat: 40.953636,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM52", count: 33, capacityKW: 900.0, totalCapacityKW: 29700.0, hubHeight: 72.0, rotorDiameter: 52.0 }
    ]
  },
  {
    name: "Pegasus",
    state: "MI",
    county: "Tuscola County",
    year: 2019,
    capacity: 48.8,
    totalTurbines: 19,
    lon: -83.617126,
    lat: 43.519085,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 6, capacityKW: 2520.0, totalCapacityKW: 15120.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 9, capacityKW: 2720.0, totalCapacityKW: 24480.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Pegasus II",
    state: "MI",
    county: "Tuscola County",
    year: 2020,
    capacity: 102.5,
    totalTurbines: 32,
    lon: -83.574615,
    lat: 43.470497,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 32, capacityKW: 2500.0, totalCapacityKW: 80000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Penescal",
    state: "TX",
    county: "Kenedy County",
    year: 2009,
    capacity: 201.6,
    totalTurbines: 84,
    lon: -97.513794,
    lat: 27.065695,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT92/2.4", count: 84, capacityKW: 2400.0, totalCapacityKW: 201600.0, hubHeight: 80.0, rotorDiameter: 92.0 }
    ]
  },
  {
    name: "Penescal II",
    state: "TX",
    county: "Kenedy County",
    year: 2010,
    capacity: 201.6,
    totalTurbines: 84,
    lon: -97.483597,
    lat: 27.169994,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT92/2.4", count: 84, capacityKW: 2400.0, totalCapacityKW: 201600.0, hubHeight: 80.0, rotorDiameter: 92.0 }
    ]
  },
  {
    name: "Perennial Wind",
    state: "NE",
    county: "Fillmore County",
    year: 2018,
    capacity: 6.9,
    totalTurbines: 3,
    lon: -97.624298,
    lat: 40.633053,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Perrin Ranch",
    state: "AZ",
    county: "Coconino County",
    year: 2012,
    capacity: 99.2,
    totalTurbines: 62,
    lon: -112.282661,
    lat: 35.411625,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 62, capacityKW: 1600.0, totalCapacityKW: 99200.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Persimmon Creek I",
    state: "OK",
    county: "Woodward County",
    year: 2018,
    capacity: 198.6,
    totalTurbines: 80,
    lon: -99.259781,
    lat: 36.168724,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 73, capacityKW: 2500.0, totalCapacityKW: 182500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Petersburg",
    state: "NE",
    county: "Boone County",
    year: 2011,
    capacity: 40.5,
    totalTurbines: 27,
    lon: -98.010788,
    lat: 41.863094,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 27, capacityKW: 1500.0, totalCapacityKW: 40500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Peyton Creek",
    state: "TX",
    county: "Matagorda County",
    year: 2020,
    capacity: 151.2,
    totalTurbines: 48,
    lon: -95.860191,
    lat: 28.8864,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 48, capacityKW: 3150.0, totalCapacityKW: 151200.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Peyton Creek II",
    state: "TX",
    county: "Matagorda County",
    year: 2025,
    capacity: 243.0,
    totalTurbines: 54,
    lon: -95.883385,
    lat: 28.89444,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V163-4.5", count: 54, capacityKW: 4500.0, totalCapacityKW: 243000.0, hubHeight: 112.0, rotorDiameter: 163.0 }
    ]
  },
  {
    name: "Pheasant Run I",
    state: "MI",
    county: "Huron County",
    year: 2013,
    capacity: 74.8,
    totalTurbines: 44,
    lon: -83.363495,
    lat: 43.732491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 44, capacityKW: 1700.0, totalCapacityKW: 74800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pilgrim Stage Station",
    state: "ID",
    county: "Twin Falls County",
    year: 2011,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -115.000885,
    lat: 42.786392,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Pilot Hill",
    state: "IL",
    county: "Iroquois County",
    year: 2015,
    capacity: 175.1,
    totalTurbines: 103,
    lon: -88.018745,
    lat: 40.994522,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 103, capacityKW: 1700.0, totalCapacityKW: 175100.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pine River",
    state: "MI",
    county: "Isabella County",
    year: 2019,
    capacity: 161.3,
    totalTurbines: 65,
    lon: -84.615242,
    lat: 43.459225,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 59, capacityKW: 2500.0, totalCapacityKW: 147500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Pine Tree Wind Farm",
    state: "CA",
    county: "Kern County",
    year: 2009,
    capacity: 120.0,
    totalTurbines: 80,
    lon: -118.193687,
    lat: 35.288197,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 65.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Pine Tree extension",
    state: "CA",
    county: "Kern County",
    year: 2010,
    capacity: 15.0,
    totalTurbines: 10,
    lon: -118.199486,
    lat: 35.278896,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 10, capacityKW: 1500.0, totalCapacityKW: 15000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Pinnacle",
    state: "WV",
    county: "Mineral County",
    year: 2011,
    capacity: 36.0,
    totalTurbines: 23,
    lon: -79.030495,
    lat: 39.443993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT95/2.4", count: 23, capacityKW: 2400.0, totalCapacityKW: 55200.0, hubHeight: 80.0, rotorDiameter: 95.0 }
    ]
  },
  {
    name: "Pinnebog",
    state: "MI",
    county: "Huron County",
    year: 2016,
    capacity: 51.0,
    totalTurbines: 30,
    lon: -83.088684,
    lat: 43.832909,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 30, capacityKW: 1700.0, totalCapacityKW: 51000.0, hubHeight: 96.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pinyon Pines I",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 168.0,
    totalTurbines: 59,
    lon: -118.225487,
    lat: 35.059895,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 59, capacityKW: 3000.0, totalCapacityKW: 177000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Pinyon Pines II",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 132.0,
    totalTurbines: 37,
    lon: -118.198853,
    lat: 35.017048,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 37, capacityKW: 3000.0, totalCapacityKW: 111000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Pioneer Grove",
    state: "IA",
    county: "Cedar County",
    year: 2012,
    capacity: 6.0,
    totalTurbines: 2,
    lon: -91.234192,
    lat: 41.850891,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW116/3000", count: 2, capacityKW: 3000.0, totalCapacityKW: 6000.0, hubHeight: 100.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Pioneer Hutt Wind",
    state: "TX",
    county: "Midland County",
    year: 2024,
    capacity: 140.18,
    totalTurbines: 51,
    lon: -101.91095,
    lat: 31.791592,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 44, capacityKW: 2820.0, totalCapacityKW: 124080.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Pioneer Prairie I",
    state: "IA",
    county: "Mitchell County",
    year: 2008,
    capacity: 198.0,
    totalTurbines: 120,
    lon: -92.655495,
    lat: 43.490993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 120, capacityKW: 1650.0, totalCapacityKW: 198000.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Pioneer Prairie II",
    state: "IA",
    county: "Mitchell County",
    year: 2009,
    capacity: 70.95,
    totalTurbines: 62,
    lon: -92.713959,
    lat: 43.493946,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 62, capacityKW: 1650.0, totalCapacityKW: 102300.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Pioneer Trail",
    state: "IL",
    county: "Iroquois County",
    year: 2011,
    capacity: 150.4,
    totalTurbines: 94,
    lon: -88.034798,
    lat: 40.506191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 94, capacityKW: 1600.0, totalCapacityKW: 150400.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Pioneer Wind Park",
    state: "WY",
    county: "Converse County",
    year: 2016,
    capacity: 80.0,
    totalTurbines: 46,
    lon: -105.880234,
    lat: 42.673756,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 46, capacityKW: 1850.0, totalCapacityKW: 85100.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Pisgah Mountain",
    state: "ME",
    county: "Penobscot County",
    year: 2016,
    capacity: 9.0,
    totalTurbines: 5,
    lon: -68.521385,
    lat: 44.775269,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 5, capacityKW: 1800.0, totalCapacityKW: 9000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pleasant Hill",
    state: "TX",
    county: "Crosby County",
    year: 2015,
    capacity: 19.8,
    totalTurbines: 11,
    lon: -101.439392,
    lat: 33.746178,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Sany", model: "SE10020E", count: 6, capacityKW: 1800.0, totalCapacityKW: 10800.0, hubHeight: 80.0, rotorDiameter: 102.0 },
      { manufacturer: "Sany", model: "SE9320IIIE", count: 5, capacityKW: 1800.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Pleasant Valley",
    state: "MN",
    county: "Mower County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -92.803764,
    lat: 43.824631,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Plum Creek",
    state: "NE",
    county: "Wayne County",
    year: 2020,
    capacity: 231.24,
    totalTurbines: 82,
    lon: -97.254456,
    lat: 42.142624,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 82, capacityKW: 2820.0, totalCapacityKW: 231240.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Plymouth Wind",
    state: "IA",
    county: "Plymouth County",
    year: 2021,
    capacity: 202.74,
    totalTurbines: 73,
    lon: -95.968964,
    lat: 42.783691,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 66, capacityKW: 2820.0, totalCapacityKW: 186120.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Pocahontas Prairie",
    state: "IA",
    county: "Pocahontas County",
    year: 2012,
    capacity: 83.2,
    totalTurbines: 40,
    lon: -94.611992,
    lat: 42.561291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 24, capacityKW: 2000.0, totalCapacityKW: 48000.0, hubHeight: 100.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 16, capacityKW: 2200.0, totalCapacityKW: 35200.0, hubHeight: 100.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Point Wind Plant",
    state: "CA",
    county: "Kern County",
    year: 2021,
    capacity: 57.6,
    totalTurbines: 16,
    lon: -118.349266,
    lat: 35.086128,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 16, capacityKW: 3600.0, totalCapacityKW: 57600.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Polaris",
    state: "MI",
    county: "Gratiot County",
    year: 2020,
    capacity: 168.6,
    totalTurbines: 68,
    lon: -84.378418,
    lat: 43.31818,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 7, capacityKW: 2300.0, totalCapacityKW: 16100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 61, capacityKW: 2500.0, totalCapacityKW: 152500.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Pomeroy (expansion)",
    state: "IA",
    county: "Pocahontas County",
    year: 2011,
    capacity: 33.7,
    totalTurbines: 13,
    lon: -94.778496,
    lat: 42.547791,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 2, capacityKW: 2415.0, totalCapacityKW: 4830.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.66-129", count: 10, capacityKW: 2660.0, totalCapacityKW: 26600.0, hubHeight: 80.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Pomeroy I",
    state: "IA",
    county: "Pocahontas County",
    year: 2007,
    capacity: 125.88,
    totalTurbines: 82,
    lon: -94.712593,
    lat: 42.568192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91.5", count: 53, capacityKW: 1500.0, totalCapacityKW: 79500.0, hubHeight: 80.0, rotorDiameter: 91.5 },
      { manufacturer: "GE Wind", model: "GE1.62-91.5", count: 29, capacityKW: 1620.0, totalCapacityKW: 46980.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Pomeroy II",
    state: "IA",
    county: "Pocahontas County",
    year: 2007,
    capacity: 76.5,
    totalTurbines: 49,
    lon: -94.769791,
    lat: 42.590691,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91.5", count: 24, capacityKW: 1500.0, totalCapacityKW: 36000.0, hubHeight: 80.0, rotorDiameter: 91.5 },
      { manufacturer: "GE Wind", model: "GE1.62-91.5", count: 25, capacityKW: 1620.0, totalCapacityKW: 40500.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Pomeroy III",
    state: "IA",
    county: "Pocahontas County",
    year: 2008,
    capacity: 62.22,
    totalTurbines: 40,
    lon: -94.817795,
    lat: 42.630791,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 80.0, rotorDiameter: 91.5 },
      { manufacturer: "GE Wind", model: "GE1.62-91.5", count: 26, capacityKW: 1620.0, totalCapacityKW: 42120.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Ponderosa",
    state: "OK",
    county: "Beaver County",
    year: 2020,
    capacity: 203.57,
    totalTurbines: 100,
    lon: -100.651993,
    lat: 36.50293,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 48, capacityKW: 1715.0, totalCapacityKW: 82320.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 11, capacityKW: 1790.0, totalCapacityKW: 19690.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 8, capacityKW: 2300.0, totalCapacityKW: 18400.0, hubHeight: 94.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 33, capacityKW: 2520.0, totalCapacityKW: 83160.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Ponderosa II",
    state: "OK",
    county: "Beaver County",
    year: 2024,
    capacity: 100.8,
    totalTurbines: 36,
    lon: -100.777092,
    lat: 36.553429,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 36, capacityKW: 2800.0, totalCapacityKW: 100800.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Post Rock",
    state: "KS",
    county: "Ellsworth County",
    year: 2012,
    capacity: 201.0,
    totalTurbines: 134,
    lon: -98.29039,
    lat: 38.857292,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 134, capacityKW: 1500.0, totalCapacityKW: 201000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Power County",
    state: "ID",
    county: "Power County",
    year: 2011,
    capacity: 45.0,
    totalTurbines: 18,
    lon: -112.764687,
    lat: 42.701996,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 18, capacityKW: 2500.0, totalCapacityKW: 45000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Prairie",
    state: "IA",
    county: "Mahaska County",
    year: 2017,
    capacity: 164.0,
    totalTurbines: 82,
    lon: -92.695496,
    lat: 41.462124,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 82, capacityKW: 2000.0, totalCapacityKW: 164000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Prairie Breeze",
    state: "NE",
    county: "Antelope County",
    year: 2014,
    capacity: 200.6,
    totalTurbines: 118,
    lon: -98.130951,
    lat: 41.928982,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 118, capacityKW: 1700.0, totalCapacityKW: 200600.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Prairie Breeze II",
    state: "NE",
    county: "Antelope County",
    year: 2015,
    capacity: 73.5,
    totalTurbines: 41,
    lon: -97.969818,
    lat: 41.916832,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 41, capacityKW: 1790.0, totalCapacityKW: 73390.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Prairie Breeze III",
    state: "NE",
    county: "Antelope County",
    year: 2016,
    capacity: 35.8,
    totalTurbines: 20,
    lon: -97.974388,
    lat: 41.961174,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 20, capacityKW: 1790.0, totalCapacityKW: 35800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Prairie Hill",
    state: "TX",
    county: "Limestone County",
    year: 2020,
    capacity: 300.0,
    totalTurbines: 100,
    lon: -96.75515,
    lat: 31.607563,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW140/3000", count: 100, capacityKW: 3000.0, totalCapacityKW: 300000.0, hubHeight: 82.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Prairie Queen",
    state: "KS",
    county: "Allen County",
    year: 2019,
    capacity: 199.275,
    totalTurbines: 59,
    lon: -95.272545,
    lat: 37.991913,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-126", count: 11, capacityKW: 2625.0, totalCapacityKW: 28875.0, hubHeight: 84.0, rotorDiameter: 126.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.55-132", count: 48, capacityKW: 3550.0, totalCapacityKW: 170400.0, hubHeight: 114.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Prairie Rose",
    state: "MN",
    county: "Rock County",
    year: 2012,
    capacity: 199.92,
    totalTurbines: 119,
    lon: -96.285492,
    lat: 43.797894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.68-82.5", count: 119, capacityKW: 1680.0, totalCapacityKW: 199920.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Prairie Winds ND 1",
    state: "ND",
    county: "Ward County",
    year: 2009,
    capacity: 115.5,
    totalTurbines: 77,
    lon: -101.264091,
    lat: 47.974892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 77, capacityKW: 1500.0, totalCapacityKW: 115500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Pratt Wind Energy Center",
    state: "KS",
    county: "Pratt County",
    year: 2018,
    capacity: 243.8,
    totalTurbines: 106,
    lon: -98.944473,
    lat: 37.560955,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 8, capacityKW: 2300.0, totalCapacityKW: 18400.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 98, capacityKW: 2300.0, totalCapacityKW: 225400.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Prescott Wind Farm I",
    state: "IA",
    county: "Adams County",
    year: 2024,
    capacity: 38.7,
    totalTurbines: 9,
    lon: -94.618042,
    lat: 41.127522,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.3", count: 9, capacityKW: 4300.0, totalCapacityKW: 38700.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Prevailing Wind",
    state: "SD",
    county: "Bon Homme County",
    year: 2020,
    capacity: 216.6,
    totalTurbines: 57,
    lon: -97.994781,
    lat: 43.16164,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.8-137", count: 57, capacityKW: 3800.0, totalCapacityKW: 216600.0, hubHeight: 110.0, rotorDiameter: 137.0 }
    ]
  },
  {
    name: "Priddy",
    state: "TX",
    county: "Mills County",
    year: 2022,
    capacity: 302.4,
    totalTurbines: 63,
    lon: -98.423454,
    lat: 31.594831,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N149/4.8", count: 63, capacityKW: 4800.0, totalCapacityKW: 302400.0, hubHeight: 108.0, rotorDiameter: 149.0 }
    ]
  },
  {
    name: "Prospector",
    state: "OR",
    county: "Baker County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -117.255295,
    lat: 44.4184,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Prosperity Wind (Goose Creek)",
    state: "IL",
    county: "Piatt County",
    year: 2025,
    capacity: 300.0,
    totalTurbines: 50,
    lon: -88.598351,
    lat: 40.188335,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V162-6.0", count: 50, capacityKW: 6000.0, totalCapacityKW: 300000.0, hubHeight: 105.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "Providence Heights",
    state: "IL",
    county: "Bureau County",
    year: 2008,
    capacity: 72.0,
    totalTurbines: 36,
    lon: -89.617546,
    lat: 41.180325,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 36, capacityKW: 2000.0, totalCapacityKW: 72000.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Pryor Mountain",
    state: "MT",
    county: "Carbon County",
    year: 2021,
    capacity: 239.8,
    totalTurbines: 114,
    lon: -108.716766,
    lat: 45.211918,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 57, capacityKW: 2000.0, totalCapacityKW: 114000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 53, capacityKW: 2200.0, totalCapacityKW: 116600.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Punta Lima Repower",
    state: "PR",
    county: "Naguabo Municipio",
    year: 2024,
    capacity: 26.0,
    totalTurbines: 13,
    lon: -65.694962,
    lat: 18.184381,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 13, capacityKW: 2000.0, totalCapacityKW: 26000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Pyron (Roscoe III)",
    state: "TX",
    county: "Scurry County",
    year: 2009,
    capacity: 265.6,
    totalTurbines: 166,
    lon: -100.674095,
    lat: 32.619095,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-97", count: 166, capacityKW: 1600.0, totalCapacityKW: 265600.0, hubHeight: 80.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Quilt Block",
    state: "WI",
    county: "Lafayette County",
    year: 2017,
    capacity: 98.0,
    totalTurbines: 49,
    lon: -90.281036,
    lat: 42.630009,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 49, capacityKW: 2000.0, totalCapacityKW: 98000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Radford's Run",
    state: "IL",
    county: "Macon County",
    year: 2017,
    capacity: 305.8,
    totalTurbines: 139,
    lon: -89.007851,
    lat: 39.971161,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 139, capacityKW: 2200.0, totalCapacityKW: 305800.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Rail Splitter",
    state: "IL",
    county: "Logan County",
    year: 2009,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -89.417297,
    lat: 40.299194,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Ralls Wind Farm",
    state: "TX",
    county: "Crosby County",
    year: 2011,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -101.381607,
    lat: 33.661327,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Sany", model: "SE8720IIIE", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 86.8 }
    ]
  },
  {
    name: "Ranchero",
    state: "TX",
    county: "Crockett County",
    year: 2019,
    capacity: 300.0,
    totalTurbines: 120,
    lon: -101.838211,
    lat: 31.02602,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 120, capacityKW: 2500.0, totalCapacityKW: 300000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Ranchland Wind Project",
    state: "TX",
    county: "Callahan County",
    year: 2022,
    capacity: 262.92,
    totalTurbines: 63,
    lon: -99.194122,
    lat: 32.282909,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SWT-2.415-108", count: 8, capacityKW: 2415.0, totalCapacityKW: 19320.0, hubHeight: 90.0, rotorDiameter: 108.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 8, capacityKW: 2000.0, totalCapacityKW: 16000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 32, capacityKW: 4300.0, totalCapacityKW: 137600.0, hubHeight: 105.0, rotorDiameter: 150.0 },
      { manufacturer: "Vestas", model: "V162-6.0", count: 15, capacityKW: 6000.0, totalCapacityKW: 90000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "Rattlesnake",
    state: "TX",
    county: "Glasscock County",
    year: 2015,
    capacity: 207.0,
    totalTurbines: 118,
    lon: -101.454155,
    lat: 31.688375,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 118, capacityKW: 1790.0, totalCapacityKW: 211220.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Rattlesnake Creek",
    state: "NE",
    county: "Dixon County",
    year: 2018,
    capacity: 318.15,
    totalTurbines: 101,
    lon: -96.766434,
    lat: 42.366844,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 101, capacityKW: 3150.0, totalCapacityKW: 318150.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Rattlesnake Flat",
    state: "WA",
    county: "Adams County",
    year: 2020,
    capacity: 149.9,
    totalTurbines: 57,
    lon: -118.429131,
    lat: 46.880329,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.7-129", count: 47, capacityKW: 2700.0, totalCapacityKW: 126900.0, hubHeight: 87.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Rattlesnake Road",
    state: "OR",
    county: "Gilliam County",
    year: 2008,
    capacity: 102.9,
    totalTurbines: 49,
    lon: -120.240784,
    lat: 45.685295,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 49, capacityKW: 2100.0, totalCapacityKW: 102900.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Rattlesnake Wind",
    state: "TX",
    county: "McCulloch County",
    year: 2018,
    capacity: 160.0,
    totalTurbines: 64,
    lon: -99.52578,
    lat: 31.259573,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW109", count: 64, capacityKW: 2500.0, totalCapacityKW: 160000.0, hubHeight: 90.0, rotorDiameter: 109.0 }
    ]
  },
  {
    name: "Reading Wind Facility",
    state: "KS",
    county: "Lyon County",
    year: 2020,
    capacity: 200.13,
    totalTurbines: 62,
    lon: -96.084259,
    lat: 38.503643,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 14, capacityKW: 2415.0, totalCapacityKW: 33810.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.465-132", count: 48, capacityKW: 3465.0, totalCapacityKW: 166320.0, hubHeight: 101.5, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Record Hill",
    state: "ME",
    county: "Oxford County",
    year: 2011,
    capacity: 50.6,
    totalTurbines: 22,
    lon: -70.631851,
    lat: 44.669346,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 22, capacityKW: 2300.0, totalCapacityKW: 50600.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Red Barn Wind",
    state: "WI",
    county: "Grant County",
    year: 2023,
    capacity: 92.4,
    totalTurbines: 28,
    lon: -90.474106,
    lat: 42.96249,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.7-116", count: 4, capacityKW: 2700.0, totalCapacityKW: 10800.0, hubHeight: 112.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE3.4-140", count: 24, capacityKW: 3400.0, totalCapacityKW: 81600.0, hubHeight: 112.0, rotorDiameter: 140.0 }
    ]
  },
  {
    name: "Red Canyon Wind Energy",
    state: "TX",
    county: "Garza County",
    year: 2006,
    capacity: 84.0,
    totalTurbines: 56,
    lon: -101.215919,
    lat: 32.95208,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 1, capacityKW: 1500.0, totalCapacityKW: 1500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 55, capacityKW: 1500.0, totalCapacityKW: 82500.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Red Dirt",
    state: "OK",
    county: "Kingfisher County",
    year: 2017,
    capacity: 299.25,
    totalTurbines: 95,
    lon: -97.701302,
    lat: 36.009148,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3150", count: 95, capacityKW: 3150.0, totalCapacityKW: 299250.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Red Hills",
    state: "OK",
    county: "Roger Mills County",
    year: 2008,
    capacity: 123.0,
    totalTurbines: 82,
    lon: -99.365791,
    lat: 35.545795,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW77/1500", count: 82, capacityKW: 1500.0, totalCapacityKW: 123000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Red Horse 2",
    state: "AZ",
    county: "Cochise County",
    year: 2015,
    capacity: 30.0,
    totalTurbines: 15,
    lon: -110.086411,
    lat: 32.276573,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 15, capacityKW: 2000.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Red Mesa",
    state: "NM",
    county: "Cibola County",
    year: 2010,
    capacity: 102.4,
    totalTurbines: 64,
    lon: -107.376289,
    lat: 35.260296,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 64, capacityKW: 1600.0, totalCapacityKW: 102400.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Red Pine",
    state: "MN",
    county: "Lincoln County",
    year: 2017,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -96.202911,
    lat: 44.505867,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 50, capacityKW: 2000.0, totalCapacityKW: 100000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Redbed Plains",
    state: "OK",
    county: "Grady County",
    year: 2017,
    capacity: 99.1,
    totalTurbines: 48,
    lon: -97.830353,
    lat: 35.254803,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.0", count: 17, capacityKW: 2000.0, totalCapacityKW: 34000.0, hubHeight: 93.0, rotorDiameter: 114.0 },
      { manufacturer: "Gamesa", model: "G114-2.1", count: 31, capacityKW: 2100.0, totalCapacityKW: 65100.0, hubHeight: 93.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Reloj del Sol",
    state: "TX",
    county: "Zapata County",
    year: 2021,
    capacity: 209.4,
    totalTurbines: 63,
    lon: -99.311981,
    lat: 27.054855,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW132/3000", count: 17, capacityKW: 3000.0, totalCapacityKW: 51000.0, hubHeight: 120.0, rotorDiameter: 132.0 },
      { manufacturer: "Nordex", model: "AW132/3300", count: 6, capacityKW: 3300.0, totalCapacityKW: 19800.0, hubHeight: 120.0, rotorDiameter: 132.0 },
      { manufacturer: "Nordex", model: "AW132/3465", count: 40, capacityKW: 3465.0, totalCapacityKW: 138600.0, hubHeight: 120.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Revolution Wind",
    state: null,
    county: null,
    year: 2025,
    capacity: 704.0,
    totalTurbines: 26,
    lon: -71.062508,
    lat: 41.227932,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-11.0-200-DD", count: 26, capacityKW: 11000.0, totalCapacityKW: 286000.0, hubHeight: 133.0, rotorDiameter: 200.0 }
    ]
  },
  {
    name: "Richland",
    state: "IA",
    county: "Sac County",
    year: 2020,
    capacity: 130.92,
    totalTurbines: 52,
    lon: -95.251282,
    lat: 42.434479,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 12, capacityKW: 2300.0, totalCapacityKW: 27600.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 40, capacityKW: 2520.0, totalCapacityKW: 100800.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Ridgewind",
    state: "MN",
    county: "Pipestone County",
    year: 2010,
    capacity: 25.3,
    totalTurbines: 11,
    lon: -96.074295,
    lat: 44.009892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Rim Rock",
    state: "MT",
    county: "Toole County",
    year: 2012,
    capacity: 189.0,
    totalTurbines: 126,
    lon: -112.053787,
    lat: 48.852993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW77/1500", count: 126, capacityKW: 1500.0, totalCapacityKW: 189000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Ringer Hill",
    state: "PA",
    county: "Somerset County",
    year: 2016,
    capacity: 39.9,
    totalTurbines: 14,
    lon: -79.184525,
    lat: 39.752728,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 14, capacityKW: 2850.0, totalCapacityKW: 39900.0, hubHeight: 98.3, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Rio Bravo",
    state: "TX",
    county: "Starr County",
    year: 2019,
    capacity: 237.6,
    totalTurbines: 66,
    lon: -99.0214,
    lat: 26.619745,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 66, capacityKW: 3600.0, totalCapacityKW: 237600.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Rippey",
    state: "IA",
    county: "Greene County",
    year: 2012,
    capacity: 50.0,
    totalTurbines: 20,
    lon: -94.19799,
    lat: 41.996994,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 20, capacityKW: 2500.0, totalCapacityKW: 50000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Rising Tree North",
    state: "CA",
    county: "Kern County",
    year: 2014,
    capacity: 99.0,
    totalTurbines: 30,
    lon: -118.230743,
    lat: 35.08717,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.3", count: 30, capacityKW: 3300.0, totalCapacityKW: 99000.0, hubHeight: 84.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Rising Tree South",
    state: "CA",
    county: "Kern County",
    year: 2015,
    capacity: 99.0,
    totalTurbines: 30,
    lon: -118.237755,
    lat: 35.05933,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.3", count: 30, capacityKW: 3300.0, totalCapacityKW: 99000.0, hubHeight: 84.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Roadrunner",
    state: "TX",
    county: "Callahan County",
    year: 2024,
    capacity: 256.02,
    totalTurbines: 90,
    lon: -99.174301,
    lat: 32.47401,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 2, capacityKW: 2520.0, totalCapacityKW: 5040.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 88, capacityKW: 2820.0, totalCapacityKW: 248160.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Roaring Brook Wind",
    state: "NY",
    county: "Lewis County",
    year: 2021,
    capacity: 79.725,
    totalTurbines: 20,
    lon: -75.629753,
    lat: 43.707985,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-114", count: 5, capacityKW: 2625.0, totalCapacityKW: 13125.0, hubHeight: 93.0, rotorDiameter: 114.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.44-145", count: 15, capacityKW: 4440.0, totalCapacityKW: 66600.0, hubHeight: 107.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Rock Aetna",
    state: "MN",
    county: "Murray County",
    year: 2022,
    capacity: 21.76,
    totalTurbines: 8,
    lon: -96.059738,
    lat: 44.020973,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 1, capacityKW: 2500.0, totalCapacityKW: 2500.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.7-116", count: 4, capacityKW: 2700.0, totalCapacityKW: 10800.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 3, capacityKW: 2820.0, totalCapacityKW: 8460.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Rock County Wind Fuel Project",
    state: "MN",
    county: "Rock County",
    year: 2020,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -96.277794,
    lat: 43.630451,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Rock Creek",
    state: "MO",
    county: "Atchison County",
    year: 2017,
    capacity: 300.0,
    totalTurbines: 150,
    lon: -95.251198,
    lat: 40.450283,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 150, capacityKW: 2000.0, totalCapacityKW: 300000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Rock Creek Wind Energy Center I",
    state: "WY",
    county: "Albany County",
    year: 2025,
    capacity: 195.2,
    totalTurbines: 32,
    lon: -106.035027,
    lat: 41.571083,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE6.1-158", count: 32, capacityKW: 6100.0, totalCapacityKW: 195200.0, hubHeight: 101.0, rotorDiameter: 158.0 }
    ]
  },
  {
    name: "Rock Falls",
    state: "OK",
    county: "Grant County",
    year: 2017,
    capacity: 154.575,
    totalTurbines: 60,
    lon: -97.47226,
    lat: 36.91037,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 9, capacityKW: 2300.0, totalCapacityKW: 20700.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens", model: "SWT-2.625-120", count: 51, capacityKW: 2625.0, totalCapacityKW: 133875.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Rock River I Repowering",
    state: "WY",
    county: "Carbon County",
    year: 2024,
    capacity: 50.008,
    totalTurbines: 19,
    lon: -106.095772,
    lat: 41.718559,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 19, capacityKW: 2820.0, totalCapacityKW: 53580.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Rockhaven Wind Project",
    state: "OK",
    county: "Murray County",
    year: 2021,
    capacity: 140.0,
    totalTurbines: 48,
    lon: -97.299622,
    lat: 34.407627,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 11, capacityKW: 2200.0, totalCapacityKW: 24200.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 21, capacityKW: 2200.0, totalCapacityKW: 46200.0, hubHeight: 92.0, rotorDiameter: 120.0 },
      { manufacturer: "Vestas", model: "V150-4.0", count: 8, capacityKW: 4000.0, totalCapacityKW: 32000.0, hubHeight: 95.0, rotorDiameter: 150.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 8, capacityKW: 4200.0, totalCapacityKW: 33600.0, hubHeight: 95.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Rockland",
    state: "ID",
    county: "Power County",
    year: 2011,
    capacity: 79.2,
    totalTurbines: 44,
    lon: -112.886589,
    lat: 42.691593,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 44, capacityKW: 1800.0, totalCapacityKW: 79200.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Rocksprings",
    state: "TX",
    county: "Val Verde County",
    year: 2017,
    capacity: 149.34,
    totalTurbines: 69,
    lon: -100.799934,
    lat: 29.763569,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 16, capacityKW: 1715.0, totalCapacityKW: 27440.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 53, capacityKW: 2300.0, totalCapacityKW: 121900.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Rocky Ridge I",
    state: "OK",
    county: "Washita County",
    year: 2012,
    capacity: 148.8,
    totalTurbines: 93,
    lon: -99.04129,
    lat: 35.185894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 93, capacityKW: 1600.0, totalCapacityKW: 148800.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Rolling Hills",
    state: "WY",
    county: "Converse County",
    year: 2009,
    capacity: 115.8,
    totalTurbines: 259,
    lon: -94.740593,
    lat: 41.282394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 18, capacityKW: 1500.0, totalCapacityKW: 27000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 48, capacityKW: 1850.0, totalCapacityKW: 88800.0, hubHeight: 80.0, rotorDiameter: 91.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.38-129", count: 86, capacityKW: 2380.0, totalCapacityKW: 204680.0, hubHeight: 80.0, rotorDiameter: 129.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.415-108", count: 12, capacityKW: 2415.0, totalCapacityKW: 28980.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.66-112", count: 9, capacityKW: 2660.0, totalCapacityKW: 23940.0, hubHeight: 80.0, rotorDiameter: 112.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.66-129", count: 80, capacityKW: 2660.0, totalCapacityKW: 212800.0, hubHeight: 80.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Rollins",
    state: "ME",
    county: "Penobscot County",
    year: 2011,
    capacity: 60.0,
    totalTurbines: 40,
    lon: -68.390999,
    lat: 45.311291,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 40, capacityKW: 1500.0, totalCapacityKW: 60000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Roosevelt",
    state: "NM",
    county: "Roosevelt County",
    year: 2015,
    capacity: 250.0,
    totalTurbines: 125,
    lon: -103.448509,
    lat: 33.954655,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 125, capacityKW: 2000.0, totalCapacityKW: 250000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Roscoe",
    state: "TX",
    county: "Nolan County",
    year: 2008,
    capacity: 209.0,
    totalTurbines: 209,
    lon: -100.637894,
    lat: 32.434494,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 209, capacityKW: 1000.0, totalCapacityKW: 209000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Rosewater",
    state: "IN",
    county: "White County",
    year: 2020,
    capacity: 102.0,
    totalTurbines: 25,
    lon: -86.998116,
    lat: 40.804256,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 5, capacityKW: 3600.0, totalCapacityKW: 18000.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 20, capacityKW: 4200.0, totalCapacityKW: 84000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Rosiere Wind Farm",
    state: "WI",
    county: "Kewaunee County",
    year: 1999,
    capacity: 11.22,
    totalTurbines: 17,
    lon: -87.647224,
    lat: 44.643341,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 17, capacityKW: 660.0, totalCapacityKW: 11220.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Roth Rock",
    state: "MD",
    county: "Garrett County",
    year: 2011,
    capacity: 50.0,
    totalTurbines: 20,
    lon: -79.457695,
    lat: 39.264793,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N90", count: 20, capacityKW: 2500.0, totalCapacityKW: 50000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Roundhouse",
    state: "WY",
    county: "Laramie County",
    year: 2020,
    capacity: 226.56,
    totalTurbines: 82,
    lon: -105.045235,
    lat: 41.089378,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 9, capacityKW: 2300.0, totalCapacityKW: 20700.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 73, capacityKW: 2820.0, totalCapacityKW: 205860.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Roundhouse Wind II",
    state: "WY",
    county: "Laramie County",
    year: 2023,
    capacity: 87.4,
    totalTurbines: 38,
    lon: -105.00367,
    lat: 41.040394,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 38, capacityKW: 2300.0, totalCapacityKW: 87400.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Route 66",
    state: "TX",
    county: "Carson County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -101.470039,
    lat: 35.194923,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Roxwind",
    state: "ME",
    county: "Oxford County",
    year: 2021,
    capacity: 15.2,
    totalTurbines: 4,
    lon: -70.618729,
    lat: 44.61388,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE3.8-137", count: 4, capacityKW: 3800.0, totalCapacityKW: 15200.0, hubHeight: 81.5, rotorDiameter: 137.0 }
    ]
  },
  {
    name: "Rugby",
    state: "ND",
    county: "Pierce County",
    year: 2009,
    capacity: 149.1,
    totalTurbines: 71,
    lon: -99.990692,
    lat: 48.503792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 71, capacityKW: 2100.0, totalCapacityKW: 149100.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Rush Creek I",
    state: "CO",
    county: "Elbert County",
    year: 2018,
    capacity: 400.0,
    totalTurbines: 200,
    lon: -103.838715,
    lat: 39.138878,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 200, capacityKW: 2000.0, totalCapacityKW: 400000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Rush Creek II",
    state: "CO",
    county: "Lincoln County",
    year: 2018,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -103.199585,
    lat: 39.095085,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Rush Springs Wind Energy Center",
    state: "OK",
    county: "Grady County",
    year: 2016,
    capacity: 249.0,
    totalTurbines: 119,
    lon: -97.783905,
    lat: 34.694576,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 119, capacityKW: 2075.0, totalCapacityKW: 246925.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Ruthton Wind Farm",
    state: "MN",
    county: "Lincoln County",
    year: 2001,
    capacity: 15.84,
    totalTurbines: 24,
    lon: -96.222191,
    lat: 44.225693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 24, capacityKW: 660.0, totalCapacityKW: 15840.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Sac County Wind (Richland Wind)",
    state: "IA",
    county: "Sac County",
    year: 2021,
    capacity: 81.4,
    totalTurbines: 29,
    lon: -95.222145,
    lat: 42.433388,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 17, capacityKW: 2300.0, totalCapacityKW: 39100.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 12, capacityKW: 2820.0, totalCapacityKW: 33840.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Saddleback Ridge",
    state: "ME",
    county: "Franklin County",
    year: 2015,
    capacity: 25.65,
    totalTurbines: 12,
    lon: -70.36657,
    lat: 44.616241,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 12, capacityKW: 2850.0, totalCapacityKW: 34200.0, hubHeight: 85.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Sagamore Wind",
    state: "NM",
    county: "Roosevelt County",
    year: 2020,
    capacity: 522.8,
    totalTurbines: 240,
    lon: -103.228325,
    lat: 34.031746,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 26, capacityKW: 2000.0, totalCapacityKW: 52000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 214, capacityKW: 2200.0, totalCapacityKW: 470800.0, hubHeight: 80.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Sage Draw",
    state: "TX",
    county: "Lynn County",
    year: 2020,
    capacity: 338.4,
    totalTurbines: 120,
    lon: -101.64183,
    lat: 33.326004,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 120, capacityKW: 2820.0, totalCapacityKW: 338400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Sagebrush (Kittitas Valley)",
    state: "WA",
    county: "Kittitas County",
    year: 2010,
    capacity: 100.8,
    totalTurbines: 48,
    lon: -120.699783,
    lat: 47.166096,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 48, capacityKW: 2100.0, totalCapacityKW: 100800.0, hubHeight: 80.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Salmon Falls",
    state: "ID",
    county: "Twin Falls County",
    year: 2011,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -114.989883,
    lat: 42.694893,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Salt Fork",
    state: "TX",
    county: "Gray County",
    year: 2016,
    capacity: 174.0,
    totalTurbines: 87,
    lon: -100.937332,
    lat: 35.197807,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 87, capacityKW: 2000.0, totalCapacityKW: 174000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "San Gorgonio Farms Wind Farm",
    state: "CA",
    county: "Riverside County",
    year: 1986,
    capacity: 31.0,
    totalTurbines: 114,
    lon: -116.619186,
    lat: 33.920795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Bonus", model: "120", count: 55, capacityKW: 120.0, totalCapacityKW: 6600.0, hubHeight: 24.0, rotorDiameter: 19.4 },
      { manufacturer: "Bonus", model: "65", count: 20, capacityKW: 65.0, totalCapacityKW: 1300.0, hubHeight: 24.0, rotorDiameter: 15.3 },
      { manufacturer: "DWT", model: "V34", count: 1, capacityKW: 350.0, totalCapacityKW: 350.0, hubHeight: null, rotorDiameter: null },
      { manufacturer: "Micon", model: "60", count: 1, capacityKW: 60.0, totalCapacityKW: 60.0, hubHeight: null, rotorDiameter: null },
      { manufacturer: "Micon", model: "M65", count: 1, capacityKW: 65.0, totalCapacityKW: 65.0, hubHeight: null, rotorDiameter: null },
      { manufacturer: "Vestas", model: "V39", count: 18, capacityKW: 500.0, totalCapacityKW: 9000.0, hubHeight: 40.0, rotorDiameter: 39.0 },
      { manufacturer: "Vestas", model: "V42", count: 7, capacityKW: 500.0, totalCapacityKW: 3500.0, hubHeight: 40.0, rotorDiameter: 39.0 },
      { manufacturer: "Vestas", model: "V44", count: 9, capacityKW: 500.0, totalCapacityKW: 4500.0, hubHeight: 40.0, rotorDiameter: 42.0 },
      { manufacturer: "Vestas", model: "V90-3.0", count: 2, capacityKW: 3000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "San Gorgonio Westwinds II LLC",
    state: "CA",
    county: "Riverside County",
    year: 1999,
    capacity: 43.4,
    totalTurbines: 62,
    lon: -116.569389,
    lat: 33.903694,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "Multi-power 44", count: 14, capacityKW: 700.0, totalCapacityKW: 9800.0, hubHeight: 50.0, rotorDiameter: 44.0 },
      { manufacturer: "NEG Micon", model: "NM48", count: 48, capacityKW: 700.0, totalCapacityKW: 33600.0, hubHeight: 50.0, rotorDiameter: 48.0 }
    ]
  },
  {
    name: "San Juan Mesa",
    state: "NM",
    county: "Chaves County",
    year: 2005,
    capacity: 120.0,
    totalTurbines: 120,
    lon: -103.863693,
    lat: 33.966694,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 120, capacityKW: 1000.0, totalCapacityKW: 120000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "San Roman",
    state: "TX",
    county: "Cameron County",
    year: 2016,
    capacity: 93.0,
    totalTurbines: 31,
    lon: -97.333183,
    lat: 26.119848,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3000", count: 31, capacityKW: 3000.0, totalCapacityKW: 93000.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Sand Bluff",
    state: "TX",
    county: "Glasscock County",
    year: 2007,
    capacity: 90.0,
    totalTurbines: 45,
    lon: -101.35379,
    lat: 31.999596,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 45, capacityKW: 2000.0, totalCapacityKW: 90000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Sandy Ridge",
    state: "PA",
    county: "Blair County",
    year: 2012,
    capacity: 50.0,
    totalTurbines: 25,
    lon: -78.281898,
    lat: 40.723793,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 25, capacityKW: 2000.0, totalCapacityKW: 50000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Sandy Ridge 2",
    state: "PA",
    county: "Blair County",
    year: 2023,
    capacity: 87.6,
    totalTurbines: 15,
    lon: -78.31707,
    lat: 40.727699,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 1, capacityKW: 3600.0, totalCapacityKW: 3600.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-6.0", count: 14, capacityKW: 6000.0, totalCapacityKW: 84000.0, hubHeight: 120.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Santa Isabel",
    state: "PR",
    county: "Santa Isabel Municipio",
    year: 2012,
    capacity: 101.2,
    totalTurbines: 44,
    lon: -66.399483,
    lat: 17.973644,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Santa Rita",
    state: "TX",
    county: "Reagan County",
    year: 2018,
    capacity: 300.0,
    totalTurbines: 120,
    lon: -101.400368,
    lat: 31.158272,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 120, capacityKW: 2500.0, totalCapacityKW: 300000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Santa Rita East",
    state: "TX",
    county: "Irion County",
    year: 2019,
    capacity: 302.4,
    totalTurbines: 120,
    lon: -101.177155,
    lat: 31.179386,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 120, capacityKW: 2520.0, totalCapacityKW: 302400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Sapphire Sky Wind Energy Center",
    state: "IL",
    county: "McLean County",
    year: 2023,
    capacity: 259.8,
    totalTurbines: 64,
    lon: -88.502937,
    lat: 40.320633,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 22, capacityKW: 3600.0, totalCapacityKW: 79200.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.3", count: 42, capacityKW: 4300.0, totalCapacityKW: 180600.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Saratoga",
    state: "IA",
    county: "Howard County",
    year: 2019,
    capacity: 66.0,
    totalTurbines: 33,
    lon: -92.32692,
    lat: 43.355881,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V116-2.0", count: 33, capacityKW: 2000.0, totalCapacityKW: 66000.0, hubHeight: 94.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Sawtooth",
    state: "ID",
    county: "Elmore County",
    year: 2011,
    capacity: 22.4,
    totalTurbines: 14,
    lon: -115.391586,
    lat: 42.966595,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 14, capacityKW: 1600.0, totalCapacityKW: 22400.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Scioto Ridge",
    state: "OH",
    county: "Hardin County",
    year: 2021,
    capacity: 247.0,
    totalTurbines: 75,
    lon: -83.804726,
    lat: 40.559422,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.6-114", count: 12, capacityKW: 2600.0, totalCapacityKW: 31200.0, hubHeight: 93.0, rotorDiameter: 114.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.4-132", count: 63, capacityKW: 3400.0, totalCapacityKW: 214200.0, hubHeight: 84.0, rotorDiameter: 132.0 }
    ]
  },
  {
    name: "Seiling",
    state: "OK",
    county: "Dewey County",
    year: 2014,
    capacity: 198.9,
    totalTurbines: 117,
    lon: -98.989624,
    lat: 36.124153,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 117, capacityKW: 1700.0, totalCapacityKW: 198900.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Seiling 2",
    state: "OK",
    county: "Dewey County",
    year: 2014,
    capacity: 100.3,
    totalTurbines: 59,
    lon: -98.896103,
    lat: 36.123493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 59, capacityKW: 1700.0, totalCapacityKW: 100300.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Senate",
    state: "TX",
    county: "Young County",
    year: 2012,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -98.457092,
    lat: 33.216293,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Sendero",
    state: "TX",
    county: "Jim Hogg County",
    year: 2015,
    capacity: 78.0,
    totalTurbines: 39,
    lon: -98.946274,
    lat: 27.177326,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 39, capacityKW: 2000.0, totalCapacityKW: 78000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Settler's Trail",
    state: "IL",
    county: "Iroquois County",
    year: 2011,
    capacity: 150.4,
    totalTurbines: 94,
    lon: -87.536896,
    lat: 40.712494,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 94, capacityKW: 1600.0, totalCapacityKW: 150400.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Seven Cowboy",
    state: "OK",
    county: "Washita County",
    year: 2023,
    capacity: 301.74,
    totalTurbines: 107,
    lon: -99.105614,
    lat: 35.279953,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 107, capacityKW: 2820.0, totalCapacityKW: 301740.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Seven Mile Hill I & II",
    state: "WY",
    county: "Carbon County",
    year: 2008,
    capacity: 118.5,
    totalTurbines: 79,
    lon: -106.366089,
    lat: 41.926693,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 3, capacityKW: 1500.0, totalCapacityKW: 4500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.85-91", count: 76, capacityKW: 1850.0, totalCapacityKW: 140600.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Seymour Hills",
    state: "TX",
    county: "Baylor County",
    year: 2019,
    capacity: 30.24,
    totalTurbines: 12,
    lon: -99.206848,
    lat: 33.575943,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 12, capacityKW: 2520.0, totalCapacityKW: 30240.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Shady Oaks",
    state: "IL",
    county: "Lee County",
    year: 2012,
    capacity: 109.5,
    totalTurbines: 71,
    lon: -89.08139,
    lat: 41.660492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Goldwind", model: "GW100", count: 3, capacityKW: 2500.0, totalCapacityKW: 7500.0, hubHeight: 100.0, rotorDiameter: 100.0 },
      { manufacturer: "Goldwind", model: "GW82", count: 68, capacityKW: 1500.0, totalCapacityKW: 102000.0, hubHeight: 85.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Shady Oaks II",
    state: "IL",
    county: "Lee County",
    year: 2023,
    capacity: 108.2,
    totalTurbines: 22,
    lon: -89.013763,
    lat: 41.670128,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.6-114", count: 5, capacityKW: 2600.0, totalCapacityKW: 13000.0, hubHeight: 80.0, rotorDiameter: 114.0 },
      { manufacturer: "Vestas", model: "V150-5.6", count: 17, capacityKW: 5600.0, totalCapacityKW: 95200.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Shamrock Wind Facility (White Mesa Wind III)",
    state: "TX",
    county: "Crockett County",
    year: 2023,
    capacity: 223.92,
    totalTurbines: 81,
    lon: -101.553429,
    lat: 30.97822,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.32-116", count: 9, capacityKW: 2320.0, totalCapacityKW: 20880.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 72, capacityKW: 2820.0, totalCapacityKW: 203040.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Shannon",
    state: "TX",
    county: "Clay County",
    year: 2015,
    capacity: 204.09,
    totalTurbines: 119,
    lon: -98.368896,
    lat: 33.509186,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 119, capacityKW: 1715.0, totalCapacityKW: 204085.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Shaokatan Hills",
    state: "MN",
    county: "Lincoln County",
    year: 1999,
    capacity: 11.88,
    totalTurbines: 18,
    lon: -96.438988,
    lat: 44.396091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 18, capacityKW: 660.0, totalCapacityKW: 11880.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Sheffield",
    state: "VT",
    county: "Caledonia County",
    year: 2011,
    capacity: 40.0,
    totalTurbines: 16,
    lon: -72.090096,
    lat: 44.676891,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C93", count: 12, capacityKW: 2500.0, totalCapacityKW: 30000.0, hubHeight: 80.0, rotorDiameter: 93.0 },
      { manufacturer: "Clipper", model: "C96", count: 4, capacityKW: 2500.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "Shepherds Flat",
    state: "OR",
    county: "Gilliam County",
    year: 2012,
    capacity: 290.0,
    totalTurbines: 82,
    lon: -120.091583,
    lat: 45.758595,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-100", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 85.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.75-127", count: 69, capacityKW: 2750.0, totalCapacityKW: 189750.0, hubHeight: 85.0, rotorDiameter: 127.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 11, capacityKW: 5000.0, totalCapacityKW: 55000.0, hubHeight: 90.0, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Sherbino I",
    state: "TX",
    county: "Pecos County",
    year: 2008,
    capacity: 150.0,
    totalTurbines: 50,
    lon: -102.388092,
    lat: 30.816795,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 50, capacityKW: 3000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Sherbino II",
    state: "TX",
    county: "Pecos County",
    year: 2011,
    capacity: 150.0,
    totalTurbines: 60,
    lon: -102.481392,
    lat: 30.792194,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 1, capacityKW: 2500.0, totalCapacityKW: 2500.0, hubHeight: 80.0, rotorDiameter: 96.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 59, capacityKW: 2000.0, totalCapacityKW: 118000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Shiloh II",
    state: "CA",
    county: "Solano County",
    year: 2009,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -121.758385,
    lat: 38.141396,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Shiloh III",
    state: "CA",
    county: "Solano County",
    year: 2011,
    capacity: 102.5,
    totalTurbines: 50,
    lon: -121.815384,
    lat: 38.173195,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 50, capacityKW: 2050.0, totalCapacityKW: 102500.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Shiloh IV",
    state: "CA",
    county: "Solano County",
    year: 2012,
    capacity: 102.5,
    totalTurbines: 50,
    lon: -121.864883,
    lat: 38.123795,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 50, capacityKW: 2050.0, totalCapacityKW: 102500.0, hubHeight: 78.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Shiloh Wind Project",
    state: "CA",
    county: "Solano County",
    year: 2006,
    capacity: 150.0,
    totalTurbines: 106,
    lon: -121.882988,
    lat: 38.144096,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 106, capacityKW: 1500.0, totalCapacityKW: 159000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Shirley",
    state: "WI",
    county: "Brown County",
    year: 2010,
    capacity: 20.0,
    totalTurbines: 8,
    lon: -87.923393,
    lat: 44.350792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 8, capacityKW: 2500.0, totalCapacityKW: 20000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Sholes",
    state: "NE",
    county: "Wayne County",
    year: 2019,
    capacity: 160.02,
    totalTurbines: 71,
    lon: -97.332123,
    lat: 42.29734,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.72-103", count: 6, capacityKW: 1720.0, totalCapacityKW: 10320.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 64, capacityKW: 2300.0, totalCapacityKW: 147200.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 1, capacityKW: 2500.0, totalCapacityKW: 2500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Shooting Star",
    state: "KS",
    county: "Kiowa County",
    year: 2012,
    capacity: 104.0,
    totalTurbines: 65,
    lon: -99.473793,
    lat: 37.510693,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 65, capacityKW: 1600.0, totalCapacityKW: 104000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Sigel Wind Park",
    state: "MI",
    county: "Huron County",
    year: 2012,
    capacity: 64.0,
    totalTurbines: 40,
    lon: -82.798195,
    lat: 43.816391,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 40, capacityKW: 1600.0, totalCapacityKW: 64000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Silver Maple",
    state: "ME",
    county: "Penobscot County",
    year: 2022,
    capacity: 20.0,
    totalTurbines: 5,
    lon: -68.517059,
    lat: 44.765808,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-4.0", count: 5, capacityKW: 4000.0, totalCapacityKW: 20000.0, hubHeight: 117.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Silver Sage",
    state: "WY",
    county: "Laramie County",
    year: 2009,
    capacity: 42.0,
    totalTurbines: 20,
    lon: -105.022987,
    lat: 41.131992,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 20, capacityKW: 2100.0, totalCapacityKW: 42000.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Silver Star I",
    state: "TX",
    county: "Eastland County",
    year: 2008,
    capacity: 48.0,
    totalTurbines: 24,
    lon: -98.492088,
    lat: 32.329395,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 24, capacityKW: 2000.0, totalCapacityKW: 48000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Skeleton Creek",
    state: "OK",
    county: "Garfield County",
    year: 2020,
    capacity: 250.9,
    totalTurbines: 90,
    lon: -98.226921,
    lat: 36.504921,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 80, capacityKW: 2820.0, totalCapacityKW: 225600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Skookumchuck",
    state: "WA",
    county: "Lewis County",
    year: 2020,
    capacity: 136.8,
    totalTurbines: 38,
    lon: -122.540085,
    lat: 46.696766,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 38, capacityKW: 3600.0, totalCapacityKW: 136800.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Sky River Repower",
    state: "CA",
    county: "Kern County",
    year: 2021,
    capacity: 63.3,
    totalTurbines: 21,
    lon: -118.236893,
    lat: 35.198349,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 20, capacityKW: 2820.0, totalCapacityKW: 56400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Slate Creek",
    state: "KS",
    county: "Sumner County",
    year: 2015,
    capacity: 150.0,
    totalTurbines: 75,
    lon: -97.34494,
    lat: 37.120056,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 75, capacityKW: 2000.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Sleeping Bear",
    state: "OK",
    county: "Harper County",
    year: 2007,
    capacity: 94.5,
    totalTurbines: 45,
    lon: -99.521294,
    lat: 36.643593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 45, capacityKW: 2100.0, totalCapacityKW: 94500.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Smoky Hills",
    state: "KS",
    county: "Lincoln County",
    year: 2008,
    capacity: 112.0,
    totalTurbines: 56,
    lon: -98.046089,
    lat: 38.879192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 7, capacityKW: 2000.0, totalCapacityKW: 14000.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "Vestas", model: "V80-1.8", count: 49, capacityKW: 1800.0, totalCapacityKW: 88200.0, hubHeight: 80.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Smoky Hills II",
    state: "KS",
    county: "Lincoln County",
    year: 2008,
    capacity: 148.5,
    totalTurbines: 99,
    lon: -98.260689,
    lat: 38.873093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 49, capacityKW: 1500.0, totalCapacityKW: 73500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 50, capacityKW: 1600.0, totalCapacityKW: 80000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Snyder",
    state: "TX",
    county: "Scurry County",
    year: 2007,
    capacity: 63.0,
    totalTurbines: 21,
    lon: -100.742493,
    lat: 32.733994,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 21, capacityKW: 3000.0, totalCapacityKW: 63000.0, hubHeight: 105.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Solano IV Repower",
    state: "CA",
    county: "Solano County",
    year: 2024,
    capacity: 85.5,
    totalTurbines: 19,
    lon: -121.751251,
    lat: 38.112141,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.5", count: 19, capacityKW: 4500.0, totalCapacityKW: 85500.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Solano Phase 3",
    state: "CA",
    county: "Solano County",
    year: 2012,
    capacity: 127.8,
    totalTurbines: 55,
    lon: -121.777184,
    lat: 38.083496,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-1.8", count: 31, capacityKW: 1800.0, totalCapacityKW: 55800.0, hubHeight: 80.0, rotorDiameter: 90.0 },
      { manufacturer: "Vestas", model: "V90-3.0", count: 24, capacityKW: 3000.0, totalCapacityKW: 72000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Solano Phase IIA",
    state: "CA",
    county: "Solano County",
    year: 2006,
    capacity: 24.0,
    totalTurbines: 8,
    lon: -121.775085,
    lat: 38.097294,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 8, capacityKW: 3000.0, totalCapacityKW: 24000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Solano Wind Project",
    state: "CA",
    county: "Solano County",
    year: 2007,
    capacity: 63.0,
    totalTurbines: 21,
    lon: -121.77079,
    lat: 38.090694,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 21, capacityKW: 3000.0, totalCapacityKW: 63000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Soldier Creek Wind Energy Center",
    state: "KS",
    county: "Nemaha County",
    year: 2020,
    capacity: 300.96,
    totalTurbines: 120,
    lon: -96.021362,
    lat: 39.617668,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 59, capacityKW: 2300.0, totalCapacityKW: 135700.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 3, capacityKW: 2500.0, totalCapacityKW: 7500.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 58, capacityKW: 2720.0, totalCapacityKW: 157760.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Solomon Forks",
    state: "KS",
    county: "Thomas County",
    year: 2019,
    capacity: 275.625,
    totalTurbines: 105,
    lon: -101.160042,
    lat: 39.339443,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 105, capacityKW: 2625.0, totalCapacityKW: 275625.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Somerset",
    state: "PA",
    county: "Somerset County",
    year: 2001,
    capacity: 9.0,
    totalTurbines: 6,
    lon: -79.013596,
    lat: 39.976593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "South Chestnut",
    state: "PA",
    county: "Fayette County",
    year: 2012,
    capacity: 46.0,
    totalTurbines: 23,
    lon: -79.710197,
    lat: 39.750191,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 23, capacityKW: 2000.0, totalCapacityKW: 46000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "South Dakota",
    state: "SD",
    county: "Hyde County",
    year: 2003,
    capacity: 40.5,
    totalTurbines: 27,
    lon: -99.483429,
    lat: 44.348885,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 27, capacityKW: 1500.0, totalCapacityKW: 40500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "South Dakota Wind Partners",
    state: "SD",
    county: "Brule County",
    year: 2011,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -98.834892,
    lat: 43.919792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "South Fork",
    state: "MN",
    county: "Jackson County",
    year: 2016,
    capacity: 13.0,
    totalTurbines: 6,
    lon: -95.399933,
    lat: 43.593971,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 6, capacityKW: 2300.0, totalCapacityKW: 13800.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "South Fork Wind Farm",
    state: null,
    county: null,
    year: 2024,
    capacity: 132.0,
    totalTurbines: 12,
    lon: -71.101898,
    lat: 41.077591,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-11.0-200-DD", count: 12, capacityKW: 11000.0, totalCapacityKW: 132000.0, hubHeight: null, rotorDiameter: 200.0 }
    ]
  },
  {
    name: "South Hurlburt",
    state: "OR",
    county: "Gilliam County",
    year: 2012,
    capacity: 290.0,
    totalTurbines: 116,
    lon: -120.080185,
    lat: 45.703094,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-100", count: 3, capacityKW: 2500.0, totalCapacityKW: 7500.0, hubHeight: 85.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 3, capacityKW: 2500.0, totalCapacityKW: 7500.0, hubHeight: 85.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.75-100", count: 9, capacityKW: 2750.0, totalCapacityKW: 24750.0, hubHeight: 85.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE2.75-116", count: 8, capacityKW: 2750.0, totalCapacityKW: 22000.0, hubHeight: 85.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.75-127", count: 86, capacityKW: 2750.0, totalCapacityKW: 236500.0, hubHeight: 85.0, rotorDiameter: 127.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-5.0-145", count: 7, capacityKW: 5000.0, totalCapacityKW: 35000.0, hubHeight: 90.0, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "South Peak",
    state: "MT",
    county: "Judith Basin County",
    year: 2020,
    capacity: 79.9,
    totalTurbines: 29,
    lon: -110.585182,
    lat: 47.301392,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 1, capacityKW: 2500.0, totalCapacityKW: 2500.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 25, capacityKW: 2820.0, totalCapacityKW: 70500.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "South Plains",
    state: "TX",
    county: "Floyd County",
    year: 2015,
    capacity: 200.0,
    totalTurbines: 100,
    lon: -101.403824,
    lat: 34.10141,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 100, capacityKW: 2000.0, totalCapacityKW: 200000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "South Plains II",
    state: "TX",
    county: "Floyd County",
    year: 2016,
    capacity: 300.3,
    totalTurbines: 91,
    lon: -101.372101,
    lat: 34.18396,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V117-3.3", count: 91, capacityKW: 3300.0, totalCapacityKW: 300300.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "South Trent Mesa",
    state: "TX",
    county: "Taylor County",
    year: 2009,
    capacity: 101.2,
    totalTurbines: 44,
    lon: -100.139694,
    lat: 32.415894,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-82", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Southern Hills",
    state: "IA",
    county: "Adams County",
    year: 2020,
    capacity: 131.3,
    totalTurbines: 36,
    lon: -94.48317,
    lat: 41.111717,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 2, capacityKW: 2000.0, totalCapacityKW: 4000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 9, capacityKW: 2200.0, totalCapacityKW: 19800.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-4.3", count: 25, capacityKW: 4300.0, totalCapacityKW: 107500.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Southern Hills Expansion",
    state: "IA",
    county: "Union County",
    year: 2021,
    capacity: 91.2,
    totalTurbines: 27,
    lon: -94.435562,
    lat: 41.138271,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.8-145", count: 21, capacityKW: 4800.0, totalCapacityKW: 100800.0, hubHeight: 107.5, rotorDiameter: 145.0 },
      { manufacturer: "Vestas", model: "V110-2.2", count: 6, capacityKW: 2200.0, totalCapacityKW: 13200.0, hubHeight: 100.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Spanish Fork",
    state: "UT",
    county: "Utah County",
    year: 2008,
    capacity: 18.9,
    totalTurbines: 9,
    lon: -111.584389,
    lat: 40.070095,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 9, capacityKW: 2100.0, totalCapacityKW: 18900.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Spearville",
    state: "KS",
    county: "Ford County",
    year: 2006,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -99.721527,
    lat: 37.873287,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Spearville 3",
    state: "KS",
    county: "Ford County",
    year: 2012,
    capacity: 100.8,
    totalTurbines: 63,
    lon: -99.841393,
    lat: 37.824593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 63, capacityKW: 1600.0, totalCapacityKW: 100800.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Spearville II",
    state: "KS",
    county: "Ford County",
    year: 2010,
    capacity: 48.0,
    totalTurbines: 32,
    lon: -99.727692,
    lat: 37.864494,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 32, capacityKW: 1500.0, totalCapacityKW: 48000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Spinning Spur 2",
    state: "TX",
    county: "Oldham County",
    year: 2014,
    capacity: 160.95,
    totalTurbines: 87,
    lon: -102.658394,
    lat: 35.320995,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.85-87", count: 87, capacityKW: 1850.0, totalCapacityKW: 160950.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Spinning Spur 3",
    state: "TX",
    county: "Oldham County",
    year: 2015,
    capacity: 194.0,
    totalTurbines: 97,
    lon: -102.724854,
    lat: 35.323025,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 97, capacityKW: 2000.0, totalCapacityKW: 194000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Spinning Spur Wind Ranch",
    state: "TX",
    county: "Oldham County",
    year: 2012,
    capacity: 161.0,
    totalTurbines: 70,
    lon: -102.521889,
    lat: 35.318893,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 36, capacityKW: 2300.0, totalCapacityKW: 82800.0, hubHeight: 80.0, rotorDiameter: 101.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 34, capacityKW: 2300.0, totalCapacityKW: 78200.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Spion Kop",
    state: "MT",
    county: "Judith Basin County",
    year: 2012,
    capacity: 40.0,
    totalTurbines: 25,
    lon: -110.651886,
    lat: 47.327293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 25, capacityKW: 1600.0, totalCapacityKW: 40000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Spring Canyon",
    state: "CO",
    county: "Logan County",
    year: 2006,
    capacity: 60.0,
    totalTurbines: 40,
    lon: -102.987793,
    lat: 40.979393,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 40, capacityKW: 1500.0, totalCapacityKW: 60000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Spring Canyon Expansion",
    state: "CO",
    county: "Logan County",
    year: 2014,
    capacity: 60.0,
    totalTurbines: 35,
    lon: -103.003021,
    lat: 40.998104,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 35, capacityKW: 1790.0, totalCapacityKW: 62650.0, hubHeight: 85.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Spring Valley",
    state: "NV",
    county: "White Pine County",
    year: 2012,
    capacity: 151.8,
    totalTurbines: 66,
    lon: -114.481789,
    lat: 39.074993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 66, capacityKW: 2300.0, totalCapacityKW: 151800.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Spruce Mountain",
    state: "ME",
    county: "Oxford County",
    year: 2011,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -70.559196,
    lat: 44.420193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G90-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 78.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Stanton Energy Center",
    state: "TX",
    county: "Martin County",
    year: 2008,
    capacity: 120.0,
    totalTurbines: 80,
    lon: -101.748489,
    lat: 32.159393,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 80, capacityKW: 1500.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Star Point",
    state: "OR",
    county: "Sherman County",
    year: 2010,
    capacity: 98.7,
    totalTurbines: 47,
    lon: -120.423088,
    lat: 45.549496,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 47, capacityKW: 2100.0, totalCapacityKW: 98700.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Stateline Wind Project",
    state: "OR",
    county: "Umatilla County",
    year: 2001,
    capacity: 83.16,
    totalTurbines: 454,
    lon: -118.694931,
    lat: 45.980595,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 454, capacityKW: 660.0, totalCapacityKW: 299640.0, hubHeight: 50.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Steel Winds",
    state: "NY",
    county: "Erie County",
    year: 2007,
    capacity: 20.0,
    totalTurbines: 8,
    lon: -78.864914,
    lat: 42.813736,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 8, capacityKW: 2500.0, totalCapacityKW: 20000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Steel Winds II",
    state: "NY",
    county: "Erie County",
    year: 2012,
    capacity: 15.0,
    totalTurbines: 6,
    lon: -78.861794,
    lat: 42.806393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 6, capacityKW: 2500.0, totalCapacityKW: 15000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Steele Flats",
    state: "NE",
    county: "Gage County",
    year: 2013,
    capacity: 74.8,
    totalTurbines: 44,
    lon: -96.903259,
    lat: 40.02449,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 44, capacityKW: 1700.0, totalCapacityKW: 74800.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Stella",
    state: "TX",
    county: "Kenedy County",
    year: 2018,
    capacity: 201.0,
    totalTurbines: 67,
    lon: -97.675285,
    lat: 26.983574,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Nordex", model: "AW125/3000", count: 67, capacityKW: 3000.0, totalCapacityKW: 201000.0, hubHeight: 87.5, rotorDiameter: 125.0 }
    ]
  },
  {
    name: "Stephens Ranch 1",
    state: "TX",
    county: "Borden County",
    year: 2014,
    capacity: 211.22,
    totalTurbines: 118,
    lon: -101.66774,
    lat: 32.867695,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 118, capacityKW: 1790.0, totalCapacityKW: 211220.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Stephens Ranch II",
    state: "TX",
    county: "Lynn County",
    year: 2015,
    capacity: 164.68,
    totalTurbines: 92,
    lon: -101.616783,
    lat: 32.977886,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 92, capacityKW: 1790.0, totalCapacityKW: 164680.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Sterling Phase I",
    state: "NM",
    county: "Lea County",
    year: 2017,
    capacity: 29.9,
    totalTurbines: 13,
    lon: -103.258034,
    lat: 33.344757,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 13, capacityKW: 2300.0, totalCapacityKW: 29900.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Stetson",
    state: "ME",
    county: "Washington County",
    year: 2009,
    capacity: 57.0,
    totalTurbines: 38,
    lon: -67.978401,
    lat: 45.51989,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 38, capacityKW: 1500.0, totalCapacityKW: 57000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Stetson Wind expansion",
    state: "ME",
    county: "Washington County",
    year: 2010,
    capacity: 25.5,
    totalTurbines: 17,
    lon: -67.960899,
    lat: 45.586891,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 17, capacityKW: 1500.0, totalCapacityKW: 25500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Stillwater Big Sky",
    state: "MT",
    county: "Stillwater County",
    year: 2018,
    capacity: 79.75,
    totalTurbines: 31,
    lon: -109.503242,
    lat: 45.895695,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.3-108", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 26, capacityKW: 2625.0, totalCapacityKW: 68250.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Stoneray",
    state: "MN",
    county: "Murray County",
    year: 2018,
    capacity: 34.125,
    totalTurbines: 13,
    lon: -96.054909,
    lat: 43.962101,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-120", count: 13, capacityKW: 2625.0, totalCapacityKW: 34125.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Stoneray II",
    state: "MN",
    county: "Pipestone County",
    year: 2019,
    capacity: 66.625,
    totalTurbines: 25,
    lon: -96.120789,
    lat: 44.087074,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 5, capacityKW: 2300.0, totalCapacityKW: 11500.0, hubHeight: 80.0, rotorDiameter: 108.0 },
      { manufacturer: "Siemens", model: "SWT-2.625-120", count: 19, capacityKW: 2625.0, totalCapacityKW: 49875.0, hubHeight: 85.0, rotorDiameter: 120.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SWT-2.625-120", count: 1, capacityKW: 2625.0, totalCapacityKW: 2625.0, hubHeight: 85.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Stoney Corners",
    state: "MI",
    county: "Missaukee County",
    year: 2008,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -85.313393,
    lat: 44.189892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Fuhrlander", model: "FL2500", count: 2, capacityKW: 2500.0, totalCapacityKW: 5000.0, hubHeight: 100.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Stoney Corners - Repower",
    state: "MI",
    county: "Missaukee County",
    year: 2009,
    capacity: 14.0,
    totalTurbines: 7,
    lon: -85.303596,
    lat: 44.201092,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 7, capacityKW: 2050.0, totalCapacityKW: 14350.0, hubHeight: 80.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Stoney Corners II",
    state: "MI",
    county: "Missaukee County",
    year: 2010,
    capacity: 20.75,
    totalTurbines: 10,
    lon: -85.315834,
    lat: 44.18111,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 10, capacityKW: 2050.0, totalCapacityKW: 20500.0, hubHeight: 100.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Stoney Corners III",
    state: "MI",
    county: "Osceola County",
    year: 2011,
    capacity: 20.5,
    totalTurbines: 10,
    lon: -85.263496,
    lat: 44.160091,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Northern Power Systems", model: "NPS-2300", count: 1, capacityKW: 2300.0, totalCapacityKW: 2300.0, hubHeight: 80.0, rotorDiameter: 93.0 },
      { manufacturer: "REpower", model: "MM92", count: 9, capacityKW: 2050.0, totalCapacityKW: 18450.0, hubHeight: 100.0, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Stony Creek",
    state: "PA",
    county: "Somerset County",
    year: 2009,
    capacity: 52.5,
    totalTurbines: 35,
    lon: -78.814194,
    lat: 40.025791,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 35, capacityKW: 1500.0, totalCapacityKW: 52500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Storm Lake I",
    state: "IA",
    county: "Buena Vista County",
    year: 1999,
    capacity: 108.75,
    totalTurbines: 146,
    lon: -95.384727,
    lat: 42.655087,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Enron", model: "Z50", count: 146, capacityKW: 750.0, totalCapacityKW: 109500.0, hubHeight: 65.0, rotorDiameter: 50.0 }
    ]
  },
  {
    name: "Storm Lake II",
    state: "IA",
    county: "Buena Vista County",
    year: 1999,
    capacity: 79.5,
    totalTurbines: 107,
    lon: -95.31311,
    lat: 42.803688,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Enron", model: "Z50", count: 107, capacityKW: 750.0, totalCapacityKW: 80250.0, hubHeight: 65.0, rotorDiameter: 50.0 }
    ]
  },
  {
    name: "Story County",
    state: "IA",
    county: "Story County",
    year: 2008,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -93.307495,
    lat: 42.129391,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 50, capacityKW: 1500.0, totalCapacityKW: 75000.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 50, capacityKW: 1500.0, totalCapacityKW: 75000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Story II (aka Garden Wind)",
    state: "IA",
    county: "Hardin County",
    year: 2009,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -93.430992,
    lat: 42.211491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Strauss Wind",
    state: "CA",
    county: "Santa Barbara County",
    year: 2023,
    capacity: 95.25,
    totalTurbines: 27,
    lon: -120.510635,
    lat: 34.593121,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.79-100", count: 4, capacityKW: 1790.0, totalCapacityKW: 7160.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE3.83-137", count: 23, capacityKW: 3830.0, totalCapacityKW: 88090.0, hubHeight: 81.5, rotorDiameter: 137.0 }
    ]
  },
  {
    name: "Sugar Creek",
    state: "IL",
    county: "Logan County",
    year: 2020,
    capacity: 202.0,
    totalTurbines: 57,
    lon: -89.582893,
    lat: 40.137886,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 17, capacityKW: 2000.0, totalCapacityKW: 34000.0, hubHeight: 120.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 40, capacityKW: 4200.0, totalCapacityKW: 168000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Summit Wind Repowering",
    state: "CA",
    county: "Alameda County",
    year: 2021,
    capacity: 62.1,
    totalTurbines: 23,
    lon: -121.682251,
    lat: 37.729233,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.7-116", count: 23, capacityKW: 2700.0, totalCapacityKW: 62100.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Sundance Wind",
    state: "OK",
    county: "Woods County",
    year: 2021,
    capacity: 199.4,
    totalTurbines: 43,
    lon: -98.626671,
    lat: 36.54493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 43, capacityKW: 2820.0, totalCapacityKW: 121260.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Sunflower",
    state: "ND",
    county: "Morton County",
    year: 2016,
    capacity: 104.0,
    totalTurbines: 52,
    lon: -102.040298,
    lat: 46.847366,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-2.0", count: 52, capacityKW: 2000.0, totalCapacityKW: 104000.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Sunflower Wind (KS)",
    state: "KS",
    county: "Marion County",
    year: 2023,
    capacity: 200.032,
    totalTurbines: 76,
    lon: -97.00972,
    lat: 38.2589,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 76, capacityKW: 2820.0, totalCapacityKW: 214320.0, hubHeight: 90.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Sunray I",
    state: "TX",
    county: "Moore County",
    year: 2009,
    capacity: 10.5,
    totalTurbines: 6,
    lon: -101.87619,
    lat: 35.929493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 6, capacityKW: 1500.0, totalCapacityKW: 9000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Sunray II",
    state: "TX",
    county: "Moore County",
    year: 2009,
    capacity: 39.0,
    totalTurbines: 27,
    lon: -101.895187,
    lat: 35.942696,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 27, capacityKW: 1500.0, totalCapacityKW: 40500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Sweetland",
    state: "SD",
    county: "Hand County",
    year: 2023,
    capacity: 198.8,
    totalTurbines: 71,
    lon: -98.835945,
    lat: 44.426815,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 71, capacityKW: 2800.0, totalCapacityKW: 198800.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Sweetwater",
    state: "TX",
    county: "Nolan County",
    year: 2017,
    capacity: 37.5,
    totalTurbines: 25,
    lon: -100.328239,
    lat: 32.342407,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 25, capacityKW: 1500.0, totalCapacityKW: 37500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Sweetwater IVa",
    state: "TX",
    county: "Nolan County",
    year: 2007,
    capacity: 135.0,
    totalTurbines: 135,
    lon: -100.504089,
    lat: 32.278294,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT62/1.0", count: 135, capacityKW: 1000.0, totalCapacityKW: 135000.0, hubHeight: 69.0, rotorDiameter: 61.4 }
    ]
  },
  {
    name: "Sweetwater IVb",
    state: "TX",
    county: "Nolan County",
    year: 2007,
    capacity: 105.8,
    totalTurbines: 46,
    lon: -100.538994,
    lat: 32.250694,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 46, capacityKW: 2300.0, totalCapacityKW: 105800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Sweetwater Phase II",
    state: "TX",
    county: "Nolan County",
    year: 2017,
    capacity: 98.82,
    totalTurbines: 61,
    lon: -100.368851,
    lat: 32.328514,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 9, capacityKW: 1620.0, totalCapacityKW: 14580.0, hubHeight: 80.0, rotorDiameter: 87.0 },
      { manufacturer: "GE Wind", model: "GE1.62-91", count: 52, capacityKW: 1620.0, totalCapacityKW: 84240.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Sweetwater Phase III",
    state: "TX",
    county: "Nolan County",
    year: 2005,
    capacity: 144.0,
    totalTurbines: 90,
    lon: -100.447075,
    lat: 32.271164,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 90, capacityKW: 1600.0, totalCapacityKW: 144000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Sweetwater V",
    state: "TX",
    county: "Nolan County",
    year: 2007,
    capacity: 80.5,
    totalTurbines: 35,
    lon: -100.435493,
    lat: 32.243996,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 35, capacityKW: 2300.0, totalCapacityKW: 80500.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "TB Flats I & II",
    state: "WY",
    county: "Carbon County",
    year: 2021,
    capacity: 301.1,
    totalTurbines: 132,
    lon: -106.135345,
    lat: 42.165058,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 28, capacityKW: 2000.0, totalCapacityKW: 56000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V136-4.3", count: 104, capacityKW: 4300.0, totalCapacityKW: 447200.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Taconite Ridge Energy Center",
    state: "MN",
    county: "St. Louis County",
    year: 2008,
    capacity: 25.0,
    totalTurbines: 10,
    lon: -92.590393,
    lat: 47.57489,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C96", count: 10, capacityKW: 2500.0, totalCapacityKW: 25000.0, hubHeight: 80.0, rotorDiameter: 96.0 }
    ]
  },
  {
    name: "Tahoka Wind",
    state: "TX",
    county: "Lynn County",
    year: 2018,
    capacity: 300.0,
    totalTurbines: 120,
    lon: -101.606903,
    lat: 33.117092,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 120, capacityKW: 2500.0, totalCapacityKW: 300000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Taloga",
    state: "OK",
    county: "Dewey County",
    year: 2011,
    capacity: 129.6,
    totalTurbines: 54,
    lon: -98.961693,
    lat: 35.878593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Mitsubishi", model: "MWT95/2.4", count: 54, capacityKW: 2400.0, totalCapacityKW: 129600.0, hubHeight: 80.0, rotorDiameter: 95.0 }
    ]
  },
  {
    name: "Tatanka",
    state: "SD",
    county: "McPherson County",
    year: 2008,
    capacity: 88.5,
    totalTurbines: 120,
    lon: -99.010895,
    lat: 45.933193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Acciona", model: "AW82/1500", count: 120, capacityKW: 1500.0, totalCapacityKW: 180000.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Tatanka Ridge",
    state: "SD",
    county: "Deuel County",
    year: 2021,
    capacity: 155.0,
    totalTurbines: 56,
    lon: -96.756935,
    lat: 44.664902,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 6, capacityKW: 2500.0, totalCapacityKW: 15000.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 50, capacityKW: 2800.0, totalCapacityKW: 140000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Tehachapi Windplant I",
    state: "CA",
    county: "Kern County",
    year: 1984,
    capacity: 8.71,
    totalTurbines: 134,
    lon: -118.382896,
    lat: 35.05843,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Nordtank", model: "NTK65/13", count: 134, capacityKW: 65.0, totalCapacityKW: 8710.0, hubHeight: 24.0, rotorDiameter: 16.5 }
    ]
  },
  {
    name: "Tehachapi Windplant II",
    state: "CA",
    county: "Kern County",
    year: 1997,
    capacity: 22.165,
    totalTurbines: 202,
    lon: -118.293205,
    lat: 35.125523,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47", count: 12, capacityKW: 660.0, totalCapacityKW: 7920.0, hubHeight: 50.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Tenaska Clear Creek Energy Center",
    state: "MO",
    county: "Nodaway County",
    year: 2020,
    capacity: 242.0,
    totalTurbines: 111,
    lon: -94.903305,
    lat: 40.413517,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 11, capacityKW: 2000.0, totalCapacityKW: 22000.0, hubHeight: 80.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 100, capacityKW: 2200.0, totalCapacityKW: 220000.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Tholen & Petersen",
    state: "MN",
    county: "Pipestone County",
    year: 2005,
    capacity: 13.2,
    totalTurbines: 8,
    lon: -96.096291,
    lat: 44.077892,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 8, capacityKW: 1650.0, totalCapacityKW: 13200.0, hubHeight: 70.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Thousand Springs",
    state: "ID",
    county: "Twin Falls County",
    year: 2011,
    capacity: 12.0,
    totalTurbines: 8,
    lon: -114.966805,
    lat: 42.893803,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 8, capacityKW: 1500.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Threemile Canyon",
    state: "OR",
    county: "Morrow County",
    year: 2009,
    capacity: 9.9,
    totalTurbines: 6,
    lon: -119.940582,
    lat: 45.680393,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 6, capacityKW: 1650.0, totalCapacityKW: 9900.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Thunder Ranch",
    state: "OK",
    county: "Noble County",
    year: 2017,
    capacity: 297.8,
    totalTurbines: 120,
    lon: -97.388435,
    lat: 36.558376,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 109, capacityKW: 2500.0, totalCapacityKW: 272500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Thunder Spirit",
    state: "ND",
    county: "Adams County",
    year: 2015,
    capacity: 107.5,
    totalTurbines: 43,
    lon: -102.634422,
    lat: 46.085884,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N100", count: 43, capacityKW: 2500.0, totalCapacityKW: 107500.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Thunder Spirit II",
    state: "ND",
    county: "Adams County",
    year: 2018,
    capacity: 48.0,
    totalTurbines: 16,
    lon: -102.524971,
    lat: 46.058079,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Nordex", model: "N117/3000", count: 16, capacityKW: 3000.0, totalCapacityKW: 48000.0, hubHeight: 91.0, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Thunderhead Wind",
    state: "NE",
    county: "Antelope County",
    year: 2022,
    capacity: 299.36,
    totalTurbines: 108,
    lon: -98.203743,
    lat: 42.007034,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 10, capacityKW: 2300.0, totalCapacityKW: 23000.0, hubHeight: 100.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 98, capacityKW: 2820.0, totalCapacityKW: 276360.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Timber Road II",
    state: "OH",
    county: "Paulding County",
    year: 2011,
    capacity: 99.0,
    totalTurbines: 55,
    lon: -84.735695,
    lat: 41.053093,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V100-1.8", count: 55, capacityKW: 1800.0, totalCapacityKW: 99000.0, hubHeight: 95.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Timber Road IV",
    state: "OH",
    county: "Paulding County",
    year: 2020,
    capacity: 126.0,
    totalTurbines: 31,
    lon: -84.664558,
    lat: 41.0294,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.6", count: 7, capacityKW: 3600.0, totalCapacityKW: 25200.0, hubHeight: 105.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V150-4.2", count: 24, capacityKW: 4200.0, totalCapacityKW: 100800.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Timbermill Wind",
    state: "NC",
    county: "Chowan County",
    year: 2024,
    capacity: 189.0,
    totalTurbines: 45,
    lon: -76.602798,
    lat: 36.186302,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V150-4.2", count: 45, capacityKW: 4200.0, totalCapacityKW: 189000.0, hubHeight: 105.0, rotorDiameter: 150.0 }
    ]
  },
  {
    name: "Titan I",
    state: "SD",
    county: "Hand County",
    year: 2009,
    capacity: 25.0,
    totalTurbines: 10,
    lon: -99.144295,
    lat: 44.476593,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Clipper", model: "C89", count: 10, capacityKW: 2500.0, totalCapacityKW: 25000.0, hubHeight: 80.0, rotorDiameter: 89.0 }
    ]
  },
  {
    name: "Top of Iowa",
    state: "IA",
    county: "Worth County",
    year: 2001,
    capacity: 80.1,
    totalTurbines: 88,
    lon: -93.39669,
    lat: 43.354706,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "NEG Micon", model: "NM52", count: 88, capacityKW: 900.0, totalCapacityKW: 79200.0, hubHeight: 72.0, rotorDiameter: 52.0 }
    ]
  },
  {
    name: "Top of Iowa II",
    state: "IA",
    county: "Worth County",
    year: 2008,
    capacity: 80.0,
    totalTurbines: 40,
    lon: -93.319504,
    lat: 43.335876,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 40, capacityKW: 2000.0, totalCapacityKW: 80000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Top of Iowa III",
    state: "IA",
    county: "Worth County",
    year: 2008,
    capacity: 29.7,
    totalTurbines: 18,
    lon: -93.274155,
    lat: 43.353443,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 18, capacityKW: 1650.0, totalCapacityKW: 29700.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Top of the World",
    state: "WY",
    county: "Converse County",
    year: 2010,
    capacity: 200.2,
    totalTurbines: 110,
    lon: -105.77739,
    lat: 42.973492,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 66, capacityKW: 1500.0, totalCapacityKW: 99000.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 44, capacityKW: 2300.0, totalCapacityKW: 101200.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Torrecillas",
    state: "TX",
    county: "Duval County",
    year: 2018,
    capacity: 300.0,
    totalTurbines: 120,
    lon: -98.763069,
    lat: 27.614115,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 120, capacityKW: 2500.0, totalCapacityKW: 300000.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Traverse Wind",
    state: "OK",
    county: "Blaine County",
    year: 2022,
    capacity: 993.6,
    totalTurbines: 299,
    lon: -98.840172,
    lat: 35.727257,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.8-127", count: 2, capacityKW: 2800.0, totalCapacityKW: 5600.0, hubHeight: 89.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 297, capacityKW: 2800.0, totalCapacityKW: 831600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Trent Mesa",
    state: "TX",
    county: "Nolan County",
    year: 2001,
    capacity: 124.5,
    totalTurbines: 83,
    lon: -100.25589,
    lat: 32.455494,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 83, capacityKW: 1500.0, totalCapacityKW: 124500.0, hubHeight: 65.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Trent Mesa Repower",
    state: "TX",
    county: "Nolan County",
    year: 2001,
    capacity: 29.17,
    totalTurbines: 16,
    lon: -100.183815,
    lat: 32.429199,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 13, capacityKW: 1700.0, totalCapacityKW: 22100.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.7-103", count: 3, capacityKW: 1700.0, totalCapacityKW: 5100.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Trimont Wind",
    state: "MN",
    county: "Jackson County",
    year: 2005,
    capacity: 107.2,
    totalTurbines: 67,
    lon: -94.85939,
    lat: 43.76519,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 67, capacityKW: 1600.0, totalCapacityKW: 107200.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Trinity Hills",
    state: "TX",
    county: "Archer County",
    year: 2012,
    capacity: 198.0,
    totalTurbines: 90,
    lon: -98.682793,
    lat: 33.425095,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.2", count: 90, capacityKW: 2200.0, totalCapacityKW: 198000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Triple H 1",
    state: "SD",
    county: "Hyde County",
    year: 2020,
    capacity: 250.24,
    totalTurbines: 92,
    lon: -99.595451,
    lat: 44.477589,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 92, capacityKW: 2720.0, totalCapacityKW: 250240.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Tuana Gulch",
    state: "ID",
    county: "Twin Falls County",
    year: 2011,
    capacity: 10.5,
    totalTurbines: 7,
    lon: -114.969284,
    lat: 42.833794,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 7, capacityKW: 1500.0, totalCapacityKW: 10500.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Tuana Springs",
    state: "ID",
    county: "Twin Falls County",
    year: 2010,
    capacity: 16.8,
    totalTurbines: 8,
    lon: -115.01709,
    lat: 42.896996,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 8, capacityKW: 2100.0, totalCapacityKW: 16800.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Tucannon River",
    state: "WA",
    county: "Columbia County",
    year: 2014,
    capacity: 266.8,
    totalTurbines: 116,
    lon: -118.045059,
    lat: 46.439133,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 116, capacityKW: 2300.0, totalCapacityKW: 266800.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Tule",
    state: "CA",
    county: "San Diego County",
    year: 2018,
    capacity: 131.1,
    totalTurbines: 57,
    lon: -116.324547,
    lat: 32.793793,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-107", count: 57, capacityKW: 2300.0, totalCapacityKW: 131100.0, hubHeight: 80.0, rotorDiameter: 107.0 }
    ]
  },
  {
    name: "Turkey Track",
    state: "TX",
    county: "Nolan County",
    year: 2008,
    capacity: 169.5,
    totalTurbines: 113,
    lon: -100.24749,
    lat: 32.148296,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 113, capacityKW: 1500.0, totalCapacityKW: 169500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Turtle Creek",
    state: "IA",
    county: "Mitchell County",
    year: 2018,
    capacity: 199.2,
    totalTurbines: 56,
    lon: -92.824867,
    lat: 43.384914,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.45", count: 16, capacityKW: 3450.0, totalCapacityKW: 55200.0, hubHeight: 82.0, rotorDiameter: 136.0 },
      { manufacturer: "Vestas", model: "V136-3.6", count: 40, capacityKW: 3600.0, totalCapacityKW: 144000.0, hubHeight: 82.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Tuscola Bay Wind",
    state: "MI",
    county: "Tuscola County",
    year: 2012,
    capacity: 120.0,
    totalTurbines: 75,
    lon: -83.637856,
    lat: 43.558769,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 68, capacityKW: 1600.0, totalCapacityKW: 108800.0, hubHeight: 80.0, rotorDiameter: 100.0 },
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 7, capacityKW: 1600.0, totalCapacityKW: 11200.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Tuscola II",
    state: "MI",
    county: "Tuscola County",
    year: 2013,
    capacity: 100.3,
    totalTurbines: 59,
    lon: -83.505898,
    lat: 43.540493,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.7-100", count: 59, capacityKW: 1700.0, totalCapacityKW: 100300.0, hubHeight: 80.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Twin Buttes",
    state: "CO",
    county: "Bent County",
    year: 2007,
    capacity: 75.0,
    totalTurbines: 50,
    lon: -102.847794,
    lat: 37.668293,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 50, capacityKW: 1500.0, totalCapacityKW: 75000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Twin Buttes II",
    state: "CO",
    county: "Prowers County",
    year: 2017,
    capacity: 75.0,
    totalTurbines: 36,
    lon: -102.544899,
    lat: 37.783203,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.0", count: 6, capacityKW: 2000.0, totalCapacityKW: 12000.0, hubHeight: 80.0, rotorDiameter: 114.0 },
      { manufacturer: "Gamesa", model: "G114-2.1", count: 30, capacityKW: 2100.0, totalCapacityKW: 63000.0, hubHeight: 80.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Twin Groves I",
    state: "IL",
    county: "McLean County",
    year: 2007,
    capacity: 198.0,
    totalTurbines: 121,
    lon: -88.695396,
    lat: 40.422993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 121, capacityKW: 1650.0, totalCapacityKW: 199650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Twin Groves II",
    state: "IL",
    county: "McLean County",
    year: 2007,
    capacity: 198.0,
    totalTurbines: 119,
    lon: -88.600296,
    lat: 40.460491,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82", count: 1, capacityKW: 1650.0, totalCapacityKW: 1650.0, hubHeight: 80.0, rotorDiameter: 82.0 },
      { manufacturer: "Vestas", model: "V82-1.65", count: 118, capacityKW: 1650.0, totalCapacityKW: 194700.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Twin Ridges",
    state: "PA",
    county: "Somerset County",
    year: 2012,
    capacity: 139.4,
    totalTurbines: 68,
    lon: -78.83255,
    lat: 39.803284,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 68, capacityKW: 2050.0, totalCapacityKW: 139400.0, hubHeight: 98.5, rotorDiameter: 92.5 }
    ]
  },
  {
    name: "Two Dot",
    state: "MT",
    county: "Wheatland County",
    year: 2014,
    capacity: 9.72,
    totalTurbines: 6,
    lon: -110.088486,
    lat: 46.451393,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-87", count: 6, capacityKW: 1620.0, totalCapacityKW: 9720.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Tyler Bluff",
    state: "TX",
    county: "Cooke County",
    year: 2016,
    capacity: 125.58,
    totalTurbines: 52,
    lon: -97.411652,
    lat: 33.702591,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 52, capacityKW: 2415.0, totalCapacityKW: 125580.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Upland Prairie",
    state: "IA",
    county: "Dickinson County",
    year: 2019,
    capacity: 299.3,
    totalTurbines: 121,
    lon: -95.346336,
    lat: 43.256882,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 16, capacityKW: 2300.0, totalCapacityKW: 36800.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 105, capacityKW: 2500.0, totalCapacityKW: 262500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Upstream",
    state: "NE",
    county: "Antelope County",
    year: 2018,
    capacity: 202.5,
    totalTurbines: 81,
    lon: -98.049492,
    lat: 42.198193,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 81, capacityKW: 2500.0, totalCapacityKW: 202500.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Valley View",
    state: "MN",
    county: "Murray County",
    year: 2011,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -96.028442,
    lat: 43.903084,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G87-2.0", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 78.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Vansycle I",
    state: "OR",
    county: "Umatilla County",
    year: 1998,
    capacity: 25.08,
    totalTurbines: 38,
    lon: -118.670486,
    lat: 45.943893,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 38, capacityKW: 660.0, totalCapacityKW: 25080.0, hubHeight: 50.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Vansycle II",
    state: "OR",
    county: "Umatilla County",
    year: 2009,
    capacity: 102.2,
    totalTurbines: 43,
    lon: -118.586235,
    lat: 45.907467,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-107", count: 28, capacityKW: 2300.0, totalCapacityKW: 64400.0, hubHeight: 80.0, rotorDiameter: 107.0 },
      { manufacturer: "GE Wind", model: "GE2.52-116", count: 15, capacityKW: 2520.0, totalCapacityKW: 37800.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Vantage Point",
    state: "WA",
    county: "Kittitas County",
    year: 2010,
    capacity: 90.0,
    totalTurbines: 60,
    lon: -120.151588,
    lat: 46.946793,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 60, capacityKW: 1500.0, totalCapacityKW: 90000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Vasco (repower)",
    state: "CA",
    county: "Contra Costa County",
    year: 2011,
    capacity: 78.2,
    totalTurbines: 34,
    lon: -121.701584,
    lat: 37.789993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-101", count: 34, capacityKW: 2300.0, totalCapacityKW: 78200.0, hubHeight: 80.0, rotorDiameter: 101.0 }
    ]
  },
  {
    name: "Velva Wind Farm",
    state: "ND",
    county: "McHenry County",
    year: 2006,
    capacity: 11.88,
    totalTurbines: 17,
    lon: -100.899605,
    lat: 48.098118,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V47-0.66", count: 17, capacityKW: 660.0, totalCapacityKW: 11220.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Victory(Carroll)",
    state: "IA",
    county: "Crawford County",
    year: 2017,
    capacity: 104.2,
    totalTurbines: 66,
    lon: -95.147392,
    lat: 42.143192,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-87", count: 66, capacityKW: 1600.0, totalCapacityKW: 105600.0, hubHeight: 80.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Vienna I, II Repowering",
    state: "IA",
    county: "Marshall County",
    year: 2024,
    capacity: 152.25,
    totalTurbines: 60,
    lon: -92.789223,
    lat: 42.179733,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-3.1-129", count: 60, capacityKW: 3100.0, totalCapacityKW: 186000.0, hubHeight: 83.0, rotorDiameter: 129.0 }
    ]
  },
  {
    name: "Vineyard Wind",
    state: null,
    county: null,
    year: 2025,
    capacity: 800.0,
    totalTurbines: 34,
    lon: -70.440376,
    lat: 41.070583,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "Haliade-X", count: 34, capacityKW: 13000.0, totalCapacityKW: 442000.0, hubHeight: 137.5, rotorDiameter: 220.0 }
    ]
  },
  {
    name: "Voyager II",
    state: "CA",
    county: "Kern County",
    year: 2018,
    capacity: 193.5,
    totalTurbines: 54,
    lon: -118.27169,
    lat: 35.097233,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.45", count: 6, capacityKW: 3450.0, totalCapacityKW: 20700.0, hubHeight: 94.0, rotorDiameter: 112.0 },
      { manufacturer: "Vestas", model: "V117-3.6", count: 48, capacityKW: 3600.0, totalCapacityKW: 172800.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  },
  {
    name: "Voyager Wind",
    state: "CA",
    county: "Kern County",
    year: 2019,
    capacity: 131.1,
    totalTurbines: 38,
    lon: -118.272392,
    lat: 35.048683,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V112-3.45", count: 38, capacityKW: 3450.0, totalCapacityKW: 131100.0, hubHeight: 94.0, rotorDiameter: 112.0 }
    ]
  },
  {
    name: "Wagner",
    state: "CA",
    county: "Riverside County",
    year: 2012,
    capacity: 6.0,
    totalTurbines: 2,
    lon: -116.555588,
    lat: 33.907295,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V90-3.0", count: 2, capacityKW: 3000.0, totalCapacityKW: 6000.0, hubHeight: 80.0, rotorDiameter: 90.0 }
    ]
  },
  {
    name: "Wake",
    state: "TX",
    county: "Crosby County",
    year: 2016,
    capacity: 257.25,
    totalTurbines: 150,
    lon: -101.111687,
    lat: 33.763725,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 150, capacityKW: 1715.0, totalCapacityKW: 257250.0, hubHeight: 80.0, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Walleye",
    state: "MN",
    county: "Rock County",
    year: 2022,
    capacity: 110.72,
    totalTurbines: 40,
    lon: -96.448669,
    lat: 43.65612,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 89.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 36, capacityKW: 2820.0, totalCapacityKW: 101520.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Walnut Ridge",
    state: "IL",
    county: "Bureau County",
    year: 2018,
    capacity: 212.0,
    totalTurbines: 106,
    lon: -89.64019,
    lat: 41.578377,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 106, capacityKW: 2000.0, totalCapacityKW: 212000.0, hubHeight: 95.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "Walnut Wind Project",
    state: "IA",
    county: "Pottawattamie County",
    year: 2008,
    capacity: 165.24,
    totalTurbines: 102,
    lon: -95.167191,
    lat: 41.495392,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.62-91.5", count: 102, capacityKW: 1620.0, totalCapacityKW: 165240.0, hubHeight: 80.0, rotorDiameter: 91.5 }
    ]
  },
  {
    name: "Wapsipinicon Wind",
    state: "MN",
    county: "Mower County",
    year: 2008,
    capacity: 100.5,
    totalTurbines: 67,
    lon: -92.697792,
    lat: 43.751991,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 67, capacityKW: 1500.0, totalCapacityKW: 100500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Waverly",
    state: "KS",
    county: "Coffey County",
    year: 2015,
    capacity: 199.0,
    totalTurbines: 97,
    lon: -95.521179,
    lat: 38.386124,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.0", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 114.0 },
      { manufacturer: "Gamesa", model: "G114-2.1", count: 90, capacityKW: 2100.0, totalCapacityKW: 189000.0, hubHeight: 80.0, rotorDiameter: 114.0 }
    ]
  },
  {
    name: "Waymart Wind Farm",
    state: "PA",
    county: "Wayne County",
    year: 2003,
    capacity: 64.5,
    totalTurbines: 43,
    lon: -75.435799,
    lat: 41.606792,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-70.5", count: 43, capacityKW: 1500.0, totalCapacityKW: 64500.0, hubHeight: 65.0, rotorDiameter: 70.5 }
    ]
  },
  {
    name: "Weatherford Wind Energy Center",
    state: "OK",
    county: "Custer County",
    year: 2005,
    capacity: 113.6,
    totalTurbines: 70,
    lon: -98.759995,
    lat: 35.492195,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 70, capacityKW: 1600.0, totalCapacityKW: 112000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Weatherford Wind Energy Center Expansion",
    state: "OK",
    county: "Washita County",
    year: 2005,
    capacity: 43.2,
    totalTurbines: 27,
    lon: -98.669891,
    lat: 35.459496,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 27, capacityKW: 1600.0, totalCapacityKW: 43200.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Weaver",
    state: "ME",
    county: "Hancock County",
    year: 2020,
    capacity: 72.6,
    totalTurbines: 22,
    lon: -68.238235,
    lat: 44.743633,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.3", count: 22, capacityKW: 3300.0, totalCapacityKW: 72600.0, hubHeight: 117.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Wellsburg",
    state: "IA",
    county: "Grundy County",
    year: 2014,
    capacity: 140.76,
    totalTurbines: 60,
    lon: -92.971695,
    lat: 42.386162,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.346-108", count: 60, capacityKW: 2346.0, totalCapacityKW: 140760.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Wessington Springs",
    state: "SD",
    county: "Jerauld County",
    year: 2009,
    capacity: 51.0,
    totalTurbines: 34,
    lon: -98.603394,
    lat: 43.985394,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 34, capacityKW: 1500.0, totalCapacityKW: 51000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "West Pipestone (Maiden Winds)",
    state: "MN",
    county: "Pipestone County",
    year: 2004,
    capacity: 8.25,
    totalTurbines: 5,
    lon: -96.436554,
    lat: 44.015327,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 5, capacityKW: 1650.0, totalCapacityKW: 8250.0, hubHeight: 70.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "West Raymond",
    state: "TX",
    county: "Willacy County",
    year: 2021,
    capacity: 234.4,
    totalTurbines: 109,
    lon: -97.841003,
    lat: 26.343292,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V110-2.0", count: 16, capacityKW: 2000.0, totalCapacityKW: 32000.0, hubHeight: 95.0, rotorDiameter: 110.0 },
      { manufacturer: "Vestas", model: "V120-2.2", count: 93, capacityKW: 2200.0, totalCapacityKW: 204600.0, hubHeight: 92.0, rotorDiameter: 120.0 }
    ]
  },
  {
    name: "Western Plains",
    state: "KS",
    county: "Ford County",
    year: 2017,
    capacity: 280.6,
    totalTurbines: 122,
    lon: -99.655151,
    lat: 37.842823,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 122, capacityKW: 2300.0, totalCapacityKW: 280600.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Western Spirit",
    state: "NM",
    county: "Torrance County",
    year: 2021,
    capacity: 1055.6,
    totalTurbines: 377,
    lon: -105.357796,
    lat: 34.430576,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 377, capacityKW: 2800.0, totalCapacityKW: 1055600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Western Trail",
    state: "TX",
    county: "Wilbarger County",
    year: 2021,
    capacity: 366.6,
    totalTurbines: 130,
    lon: -99.064995,
    lat: 33.894497,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 130, capacityKW: 2820.0, totalCapacityKW: 366600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Wheatfield",
    state: "OR",
    county: "Gilliam County",
    year: 2009,
    capacity: 96.6,
    totalTurbines: 46,
    lon: -120.313484,
    lat: 45.664494,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S88", count: 46, capacityKW: 2100.0, totalCapacityKW: 96600.0, hubHeight: 79.0, rotorDiameter: 88.0 }
    ]
  },
  {
    name: "Wheatridge East",
    state: "OR",
    county: "Morrow County",
    year: 2025,
    capacity: 200.22,
    totalTurbines: 70,
    lon: -119.429459,
    lat: 45.485592,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 70, capacityKW: 2820.0, totalCapacityKW: 197400.0, hubHeight: 88.6, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Wheatridge Wind",
    state: "OR",
    county: "Morrow County",
    year: 2020,
    capacity: 299.54,
    totalTurbines: 120,
    lon: -119.547134,
    lat: 45.501888,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 13, capacityKW: 2300.0, totalCapacityKW: 29900.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 107, capacityKW: 2520.0, totalCapacityKW: 269640.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Whirlwind Energy Center",
    state: "TX",
    county: "Floyd County",
    year: 2007,
    capacity: 59.8,
    totalTurbines: 26,
    lon: -101.105392,
    lat: 34.093895,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 26, capacityKW: 2300.0, totalCapacityKW: 59800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Whispering Willow I",
    state: "IA",
    county: "Franklin County",
    year: 2009,
    capacity: 199.65,
    totalTurbines: 121,
    lon: -93.21949,
    lat: 42.605492,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V82-1.65", count: 121, capacityKW: 1650.0, totalCapacityKW: 199650.0, hubHeight: 80.0, rotorDiameter: 82.0 }
    ]
  },
  {
    name: "Whispering Willow North",
    state: "IA",
    county: "Franklin County",
    year: 2020,
    capacity: 201.26,
    totalTurbines: 81,
    lon: -93.46653,
    lat: 42.781181,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 13, capacityKW: 2300.0, totalCapacityKW: 29900.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.5-127", count: 68, capacityKW: 2520.0, totalCapacityKW: 171360.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "White Cloud",
    state: "MO",
    county: "Nodaway County",
    year: 2020,
    capacity: 236.5,
    totalTurbines: 89,
    lon: -94.980507,
    lat: 40.299042,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.75-129", count: 78, capacityKW: 2750.0, totalCapacityKW: 214500.0, hubHeight: 109.0, rotorDiameter: 129.0 },
      { manufacturer: "Vestas", model: "V110-2.0", count: 11, capacityKW: 2000.0, totalCapacityKW: 22000.0, hubHeight: 80.0, rotorDiameter: 110.0 }
    ]
  },
  {
    name: "White Creek",
    state: "WA",
    county: "Klickitat County",
    year: 2007,
    capacity: 204.7,
    totalTurbines: 89,
    lon: -120.304688,
    lat: 45.808693,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 89, capacityKW: 2300.0, totalCapacityKW: 204700.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "White Hills",
    state: "AZ",
    county: "Mohave County",
    year: 2020,
    capacity: 349.6,
    totalTurbines: 126,
    lon: -114.444679,
    lat: 35.845043,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 11, capacityKW: 2300.0, totalCapacityKW: 25300.0, hubHeight: 80.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 115, capacityKW: 2820.0, totalCapacityKW: 324300.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "White Mesa",
    state: "TX",
    county: "Crockett County",
    year: 2021,
    capacity: 507.6,
    totalTurbines: 180,
    lon: -101.291122,
    lat: 30.964605,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 180, capacityKW: 2820.0, totalCapacityKW: 507600.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "White Oak",
    state: "IL",
    county: "McLean County",
    year: 2011,
    capacity: 150.0,
    totalTurbines: 100,
    lon: -89.075592,
    lat: 40.624992,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 100, capacityKW: 1500.0, totalCapacityKW: 150000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "White Rock East",
    state: "OK",
    county: "Caddo County",
    year: 2024,
    capacity: 199.98,
    totalTurbines: 33,
    lon: -98.310165,
    lat: 35.019115,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V162-6.0", count: 33, capacityKW: 6000.0, totalCapacityKW: 198000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "White Rock West",
    state: "OK",
    county: "Caddo County",
    year: 2023,
    capacity: 102.0,
    totalTurbines: 17,
    lon: -98.23951,
    lat: 34.990086,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V162-6.0", count: 17, capacityKW: 6000.0, totalCapacityKW: 102000.0, hubHeight: 119.0, rotorDiameter: 162.0 }
    ]
  },
  {
    name: "White Tail",
    state: "TX",
    county: "Webb County",
    year: 2012,
    capacity: 91.2,
    totalTurbines: 57,
    lon: -98.967392,
    lat: 27.509295,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-82.5", count: 57, capacityKW: 1600.0, totalCapacityKW: 91200.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Whitewater Hill",
    state: "CA",
    county: "Riverside County",
    year: 2002,
    capacity: 61.5,
    totalTurbines: 41,
    lon: -116.607445,
    lat: 33.928379,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-65", count: 41, capacityKW: 1500.0, totalCapacityKW: 61500.0, hubHeight: 65.0, rotorDiameter: 65.0 }
    ]
  },
  {
    name: "Whitney Hill",
    state: "IL",
    county: "Logan County",
    year: 2019,
    capacity: 65.28,
    totalTurbines: 24,
    lon: -89.32151,
    lat: 39.948944,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.72-116", count: 24, capacityKW: 2720.0, totalCapacityKW: 65280.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Wild Horse I",
    state: "WA",
    county: "Kittitas County",
    year: 2006,
    capacity: 228.6,
    totalTurbines: 127,
    lon: -120.187988,
    lat: 47.045895,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-1.8", count: 127, capacityKW: 1800.0, totalCapacityKW: 228600.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Wild Horse II",
    state: "WA",
    county: "Kittitas County",
    year: 2009,
    capacity: 44.0,
    totalTurbines: 22,
    lon: -120.221687,
    lat: 47.057693,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V80-2.0", count: 22, capacityKW: 2000.0, totalCapacityKW: 44000.0, hubHeight: 67.0, rotorDiameter: 80.0 }
    ]
  },
  {
    name: "Wild Plains Wind",
    state: "KS",
    county: "Sumner County",
    year: 2025,
    capacity: 307.24,
    totalTurbines: 109,
    lon: -97.279022,
    lat: 37.28717,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Vernova", model: "GE2.52-116", count: 7, capacityKW: 2520.0, totalCapacityKW: 17640.0, hubHeight: 90.0, rotorDiameter: 116.0 },
      { manufacturer: "GE Vernova", model: "GE2.82-127", count: 100, capacityKW: 2820.0, totalCapacityKW: 282000.0, hubHeight: 114.0, rotorDiameter: 127.0 },
      { manufacturer: "GE Vernova", model: "GE3.8-154", count: 2, capacityKW: 3800.0, totalCapacityKW: 7600.0, hubHeight: 98.0, rotorDiameter: 154.0 }
    ]
  },
  {
    name: "Wildcat Creek (Cooke Wind Farm)",
    state: "TX",
    county: "Cooke County",
    year: 2021,
    capacity: 180.075,
    totalTurbines: 52,
    lon: -97.337158,
    lat: 33.534046,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G114-2.1", count: 4, capacityKW: 2100.0, totalCapacityKW: 8400.0, hubHeight: 80.0, rotorDiameter: 114.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-2.625-126", count: 27, capacityKW: 2625.0, totalCapacityKW: 70875.0, hubHeight: 84.0, rotorDiameter: 126.0 },
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SG-4.8-145", count: 21, capacityKW: 4800.0, totalCapacityKW: 100800.0, hubHeight: 79.5, rotorDiameter: 145.0 }
    ]
  },
  {
    name: "Wildcat I",
    state: "IN",
    county: "Tipton County",
    year: 2012,
    capacity: 200.0,
    totalTurbines: 125,
    lon: -85.913597,
    lat: 40.287891,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-100", count: 125, capacityKW: 1600.0, totalCapacityKW: 200000.0, hubHeight: 100.0, rotorDiameter: 100.0 }
    ]
  },
  {
    name: "Wildcat Ranch",
    state: "TX",
    county: "Cochran County",
    year: 2018,
    capacity: 150.59,
    totalTurbines: 67,
    lon: -102.922714,
    lat: 33.575226,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.715-103", count: 6, capacityKW: 1715.0, totalCapacityKW: 10290.0, hubHeight: 80.0, rotorDiameter: 103.0 },
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 61, capacityKW: 2300.0, totalCapacityKW: 140300.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Wildcat Wind Project",
    state: "NM",
    county: "Lea County",
    year: 2012,
    capacity: 27.3,
    totalTurbines: 13,
    lon: -103.288094,
    lat: 32.962894,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S97", count: 13, capacityKW: 2100.0, totalCapacityKW: 27300.0, hubHeight: 90.0, rotorDiameter: 97.0 }
    ]
  },
  {
    name: "Wildhorse Mountain Wind Facility",
    state: "OK",
    county: "Pushmataha County",
    year: 2019,
    capacity: 100.05,
    totalTurbines: 24,
    lon: -95.137215,
    lat: 34.591656,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V136-3.45", count: 24, capacityKW: 3450.0, totalCapacityKW: 82800.0, hubHeight: 105.0, rotorDiameter: 136.0 }
    ]
  },
  {
    name: "Wildorado",
    state: "TX",
    county: "Oldham County",
    year: 2007,
    capacity: 161.0,
    totalTurbines: 70,
    lon: -102.36599,
    lat: 35.309692,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 70, capacityKW: 2300.0, totalCapacityKW: 161000.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Willow Creek",
    state: "OR",
    county: "Morrow County",
    year: 2009,
    capacity: 72.0,
    totalTurbines: 48,
    lon: -119.991684,
    lat: 45.662094,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 48, capacityKW: 1500.0, totalCapacityKW: 72000.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Willow Creek Wind Energy",
    state: "SD",
    county: "Butte County",
    year: 2020,
    capacity: 106.4,
    totalTurbines: 38,
    lon: -103.25808,
    lat: 44.901558,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.8-127", count: 38, capacityKW: 2800.0, totalCapacityKW: 106400.0, hubHeight: 89.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "Willow Spring",
    state: "OR",
    county: "Baker County",
    year: 2017,
    capacity: 10.0,
    totalTurbines: 5,
    lon: -117.270172,
    lat: 44.382561,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.0-116", count: 5, capacityKW: 2000.0, totalCapacityKW: 10000.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Willow Springs Wind Farm",
    state: "TX",
    county: "Haskell County",
    year: 2017,
    capacity: 250.0,
    totalTurbines: 100,
    lon: -99.67765,
    lat: 33.284569,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.5-116", count: 100, capacityKW: 2500.0, totalCapacityKW: 250000.0, hubHeight: 90.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Wilton Wind Energy Center II",
    state: "ND",
    county: "Burleigh County",
    year: 2009,
    capacity: 49.5,
    totalTurbines: 33,
    lon: -100.586288,
    lat: 47.115993,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-91", count: 33, capacityKW: 1500.0, totalCapacityKW: 49500.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Wilton Wind Farm",
    state: "ND",
    county: "Burleigh County",
    year: 2006,
    capacity: 18.0,
    totalTurbines: 33,
    lon: -100.684189,
    lat: 47.13039,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 5, capacityKW: 1500.0, totalCapacityKW: 7500.0, hubHeight: 80.0, rotorDiameter: 77.0 },
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 28, capacityKW: 1600.0, totalCapacityKW: 44800.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Wind Colebrook South",
    state: "CT",
    county: "Litchfield County",
    year: 2015,
    capacity: 5.0,
    totalTurbines: 2,
    lon: -73.145027,
    lat: 41.964752,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.85-103", count: 2, capacityKW: 2850.0, totalCapacityKW: 5700.0, hubHeight: 91.7, rotorDiameter: 103.0 }
    ]
  },
  {
    name: "Wind Wall",
    state: "CA",
    county: "Kern County",
    year: 2021,
    capacity: 44.85,
    totalTurbines: 13,
    lon: -118.338936,
    lat: 35.097858,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V126-3.45", count: 13, capacityKW: 3450.0, totalCapacityKW: 44850.0, hubHeight: 87.0, rotorDiameter: 126.0 }
    ]
  },
  {
    name: "Windstar",
    state: "CA",
    county: "Kern County",
    year: 2012,
    capacity: 120.0,
    totalTurbines: 60,
    lon: -118.358086,
    lat: 35.069496,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G80-2.0", count: 37, capacityKW: 2000.0, totalCapacityKW: 74000.0, hubHeight: 67.0, rotorDiameter: 80.0 },
      { manufacturer: "Gamesa", model: "G87-2.0", count: 23, capacityKW: 2000.0, totalCapacityKW: 46000.0, hubHeight: 67.0, rotorDiameter: 87.0 }
    ]
  },
  {
    name: "Windthorst-2",
    state: "TX",
    county: "Archer County",
    year: 2014,
    capacity: 64.4,
    totalTurbines: 28,
    lon: -98.479004,
    lat: 33.510086,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-108", count: 28, capacityKW: 2300.0, totalCapacityKW: 64400.0, hubHeight: 80.0, rotorDiameter: 108.0 }
    ]
  },
  {
    name: "Windy Point I (Tuolomne Wind Project)",
    state: "WA",
    county: "Klickitat County",
    year: 2009,
    capacity: 136.6,
    totalTurbines: 62,
    lon: -120.615883,
    lat: 45.770596,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "REpower", model: "MM92", count: 20, capacityKW: 2000.0, totalCapacityKW: 40000.0, hubHeight: 80.0, rotorDiameter: 92.5 },
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 42, capacityKW: 2300.0, totalCapacityKW: 96600.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Windy Point II",
    state: "WA",
    county: "Klickitat County",
    year: 2009,
    capacity: 202.4,
    totalTurbines: 86,
    lon: -120.781387,
    lat: 45.722294,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 86, capacityKW: 2300.0, totalCapacityKW: 197800.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Windy Point II (Windy Flats)",
    state: "WA",
    county: "Klickitat County",
    year: 2009,
    capacity: 202.4,
    totalTurbines: 3,
    lon: -120.779839,
    lat: 45.727936,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens Gamesa Renewable Energy", model: "SWT-2.3-93", count: 3, capacityKW: 2300.0, totalCapacityKW: 6900.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Windy Point IIa (Windy Flats Extension)",
    state: "WA",
    county: "Klickitat County",
    year: 2009,
    capacity: 59.8,
    totalTurbines: 25,
    lon: -120.885971,
    lat: 45.698986,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Siemens", model: "SWT-2.3-93", count: 25, capacityKW: 2300.0, totalCapacityKW: 57500.0, hubHeight: 80.0, rotorDiameter: 93.0 }
    ]
  },
  {
    name: "Winnebago I",
    state: "IA",
    county: "Winnebago County",
    year: 2008,
    capacity: 20.0,
    totalTurbines: 10,
    lon: -93.788994,
    lat: 43.319393,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G83-2.0", count: 10, capacityKW: 2000.0, totalCapacityKW: 20000.0, hubHeight: 78.0, rotorDiameter: 83.0 }
    ]
  },
  {
    name: "Wolf",
    state: "MN",
    county: "Nobles County",
    year: 2006,
    capacity: 6.25,
    totalTurbines: 5,
    lon: -95.780365,
    lat: 43.585896,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "Suzlon", model: "S64", count: 5, capacityKW: 1250.0, totalCapacityKW: 6250.0, hubHeight: 73.0, rotorDiameter: 64.0 }
    ]
  },
  {
    name: "Wolf Ridge",
    state: "TX",
    county: "Cooke County",
    year: 2008,
    capacity: 120.0,
    totalTurbines: 75,
    lon: -97.458641,
    lat: 33.722122,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.6-91", count: 75, capacityKW: 1600.0, totalCapacityKW: 120000.0, hubHeight: 80.0, rotorDiameter: 91.0 }
    ]
  },
  {
    name: "Wolverine Creek",
    state: "ID",
    county: "Bonneville County",
    year: 2005,
    capacity: 64.5,
    totalTurbines: 43,
    lon: -111.853691,
    lat: 43.379993,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-77", count: 43, capacityKW: 1500.0, totalCapacityKW: 64500.0, hubHeight: 80.0, rotorDiameter: 77.0 }
    ]
  },
  {
    name: "Woodstock Hills Repower",
    state: "MN",
    county: "Pipestone County",
    year: 2018,
    capacity: 9.2,
    totalTurbines: 4,
    lon: -96.075035,
    lat: 43.990719,
    interconnect: "Eastern",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.3-116", count: 4, capacityKW: 2300.0, totalCapacityKW: 9200.0, hubHeight: 80.0, rotorDiameter: 116.0 }
    ]
  },
  {
    name: "Woodward Mountain I",
    state: "TX",
    county: "Pecos County",
    year: 2001,
    capacity: 82.5,
    totalTurbines: 123,
    lon: -102.485092,
    lat: 30.916796,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G47-0.66", count: 123, capacityKW: 660.0, totalCapacityKW: 81180.0, hubHeight: 50.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Woodward Mountain II",
    state: "TX",
    county: "Pecos County",
    year: 2001,
    capacity: 75.9,
    totalTurbines: 115,
    lon: -102.43129,
    lat: 30.961195,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "Gamesa", model: "G47-0.66", count: 111, capacityKW: 660.0, totalCapacityKW: 73260.0, hubHeight: 50.0, rotorDiameter: 47.0 },
      { manufacturer: "Vestas", model: "V47-0.66", count: 4, capacityKW: 660.0, totalCapacityKW: 2640.0, hubHeight: 65.0, rotorDiameter: 47.0 }
    ]
  },
  {
    name: "Yahoo Creek",
    state: "ID",
    county: "Twin Falls County",
    year: 2010,
    capacity: 21.0,
    totalTurbines: 14,
    lon: -115.006584,
    lat: 42.761696,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE1.5-82.5", count: 14, capacityKW: 1500.0, totalCapacityKW: 21000.0, hubHeight: 80.0, rotorDiameter: 82.5 }
    ]
  },
  {
    name: "Young Wind Project",
    state: "TX",
    county: "Young County",
    year: 2022,
    capacity: 499.14,
    totalTurbines: 177,
    lon: -98.919983,
    lat: 33.127728,
    interconnect: "ERCOT",
    turbineClasses: [
      { manufacturer: "GE Wind", model: "GE2.82-127", count: 177, capacityKW: 2820.0, totalCapacityKW: 499140.0, hubHeight: 114.0, rotorDiameter: 127.0 }
    ]
  },
  {
    name: "unknown Riverside County",
    state: "CA",
    county: "Riverside County",
    year: 2020,
    capacity: 27.6,
    totalTurbines: 8,
    lon: -116.557755,
    lat: 33.891106,
    interconnect: "Western",
    turbineClasses: [
      { manufacturer: "Vestas", model: "V-112", count: 1, capacityKW: 3450.0, totalCapacityKW: 3450.0, hubHeight: 91.5, rotorDiameter: 112.0 },
      { manufacturer: "Vestas", model: "V-117", count: 2, capacityKW: 3600.0, totalCapacityKW: 7200.0, hubHeight: 91.5, rotorDiameter: 117.0 }
    ]
  }
];
