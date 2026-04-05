/**
 * Wind Turbine Power Curve Library
 * POWER_CURVE_DB is loaded at runtime from GitHub Pages JSON.
 */

interface PowerCurveEntry {
  p: number[];
  c: number;
  r: number;
}

export interface PowerCurvePoint {
  windSpeed: number;
  power: number;
}

export interface TurbineSpecs {
    model: string;
    manufacturer: string;
    ratedPower: number;
    rotorDiameter?: number;
    cutInSpeed: number;
    ratedSpeed: number;
    cutOutSpeed: number;
}

// ─── Reference curve (Vestas V112/3000) ─────────────────────────────────────
export const VESTAS_V112_POWER_CURVE: PowerCurvePoint[] = [
    { windSpeed: 0.0, power: 0 },{ windSpeed: 0.5, power: 0 },
    { windSpeed: 1.0, power: 0 },{ windSpeed: 1.5, power: 0 },
    { windSpeed: 2.0, power: 0 },{ windSpeed: 2.5, power: 0 },
    { windSpeed: 3.0, power: 0 },{ windSpeed: 3.5, power: 36 },
    { windSpeed: 4.0, power: 76 },{ windSpeed: 4.5, power: 134 },
    { windSpeed: 5.0, power: 192 },{ windSpeed: 5.5, power: 269 },
    { windSpeed: 6.0, power: 346 },{ windSpeed: 6.5, power: 465 },
    { windSpeed: 7.0, power: 584 },{ windSpeed: 7.5, power: 737 },
    { windSpeed: 8.0, power: 890 },{ windSpeed: 8.5, power: 1098 },
    { windSpeed: 9.0, power: 1306 },{ windSpeed: 9.5, power: 1514 },
    { windSpeed: 10.0, power: 1722 },{ windSpeed: 10.5, power: 1942 },
    { windSpeed: 11.0, power: 2162 },{ windSpeed: 11.5, power: 2352 },
    { windSpeed: 12.0, power: 2542 },{ windSpeed: 12.5, power: 2701 },
    { windSpeed: 13.0, power: 2860 },{ windSpeed: 13.5, power: 2930 },
    { windSpeed: 14.0, power: 2970 },{ windSpeed: 14.5, power: 2983 },
    { windSpeed: 15.0, power: 2995 },{ windSpeed: 15.5, power: 3000 },
    { windSpeed: 16.0, power: 3000 },{ windSpeed: 16.5, power: 3000 },
    { windSpeed: 17.0, power: 3000 },{ windSpeed: 17.5, power: 3000 },
    { windSpeed: 18.0, power: 3000 },{ windSpeed: 18.5, power: 3000 },
    { windSpeed: 19.0, power: 3000 },{ windSpeed: 19.5, power: 3000 },
    { windSpeed: 20.0, power: 3000 },{ windSpeed: 20.5, power: 3000 },
    { windSpeed: 21.0, power: 3000 },{ windSpeed: 21.5, power: 3000 },
    { windSpeed: 22.0, power: 3000 },{ windSpeed: 22.5, power: 3000 },
    { windSpeed: 23.0, power: 3000 },{ windSpeed: 23.5, power: 3000 },
    { windSpeed: 24.0, power: 3000 },{ windSpeed: 24.5, power: 3000 },
    { windSpeed: 25.0, power: 3000 },{ windSpeed: 25.5, power: 0 },
    { windSpeed: 26.0, power: 0 },{ windSpeed: 26.5, power: 0 },
    { windSpeed: 27.0, power: 0 },{ windSpeed: 27.5, power: 0 },
    { windSpeed: 28.0, power: 0 },{ windSpeed: 28.5, power: 0 },
    { windSpeed: 29.0, power: 0 },{ windSpeed: 29.5, power: 0 },
];

export const VESTAS_V112_SPECS: TurbineSpecs = {
    model: 'V112/3000', manufacturer: 'Vestas', ratedPower: 3000,
    rotorDiameter: 112, cutInSpeed: 3.0, ratedSpeed: 12.0, cutOutSpeed: 25.0,
};

// ─── Runtime DB (populated by setPowerCurveDb) ───────────────────────────────
let POWER_CURVE_DB: Record<string, PowerCurveEntry> = {};

export function setPowerCurveDb(db: Record<string, PowerCurveEntry>): void {
    POWER_CURVE_DB = db;
    curvePointsCache.clear();
}

const curvePointsCache: Map<string, PowerCurvePoint[]> = new Map();

function dbKey(manufacturer: string, model: string): string {
    return `${manufacturer}|${model}`;
}

function entryToPoints(entry: PowerCurveEntry): PowerCurvePoint[] {
    return entry.p.map((power, i) => ({ windSpeed: i * 0.5, power }));
}

function lookupEntry(manufacturer: string, model: string): PowerCurveEntry | null {
    return POWER_CURVE_DB[dbKey(manufacturer, model)] ?? null;
}

export function hasPowerCurve(manufacturer: string, model: string): boolean {
    return dbKey(manufacturer, model) in POWER_CURVE_DB;
}

export function getRatedPower(manufacturer: string, model: string): number | null {
    const entry = lookupEntry(manufacturer, model);
    return entry ? entry.r : null;
}

export function getCutOutSpeed(manufacturer: string, model: string): number {
    const entry = lookupEntry(manufacturer, model);
    return entry ? entry.c : 25.0;
}

export function getPowerCurve(
    manufacturer: string, model: string, ratedCapacityKW?: number
): PowerCurvePoint[] {
    const key = dbKey(manufacturer, model);
    if (curvePointsCache.has(key)) return curvePointsCache.get(key)!;
    const entry = lookupEntry(manufacturer, model);
    if (entry) {
        const points = entryToPoints(entry);
        curvePointsCache.set(key, points);
        return points;
    }
    if (ratedCapacityKW && ratedCapacityKW !== VESTAS_V112_SPECS.ratedPower) {
        const scale = ratedCapacityKW / VESTAS_V112_SPECS.ratedPower;
        const scaled = VESTAS_V112_POWER_CURVE.map(pt => ({
            windSpeed: pt.windSpeed, power: Math.round(pt.power * scale)
        }));
        curvePointsCache.set(`${key}@${ratedCapacityKW}`, scaled);
        return scaled;
    }
    return VESTAS_V112_POWER_CURVE;
}

export function interpolatePowerCurve(windSpeed: number, powerCurve: PowerCurvePoint[]): number {
    if (windSpeed < 0 || windSpeed > 29.5) return 0;
    const lowerIndex = Math.floor(windSpeed * 2);
    const upperIndex = Math.min(lowerIndex + 1, powerCurve.length - 1);
    if (lowerIndex >= powerCurve.length - 1) return powerCurve[powerCurve.length - 1].power;
    const lowerPoint = powerCurve[lowerIndex];
    const upperPoint = powerCurve[upperIndex];
    const denom = upperPoint.windSpeed - lowerPoint.windSpeed;
    if (denom === 0) return lowerPoint.power;
    return Math.round(lowerPoint.power + ((windSpeed - lowerPoint.windSpeed) / denom) * (upperPoint.power - lowerPoint.power));
}

export function interpolateFromEntry(windSpeed: number, entry: PowerCurveEntry): number {
    if (windSpeed < 0 || windSpeed > 30) return 0;
    const idx = windSpeed * 2;
    const lo = Math.floor(idx);
    const hi = Math.min(lo + 1, 60);
    if (lo >= 60) return entry.p[60];
    return Math.round(entry.p[lo] + (idx - lo) * (entry.p[hi] - entry.p[lo]));
}

export function getPowerOutput(windSpeed: number): number {
    return interpolatePowerCurve(windSpeed, VESTAS_V112_POWER_CURVE);
}

export function getTurbinePowerOutput(
    windSpeed: number, manufacturer: string, model: string, ratedCapacityKW: number
): number {
    const entry = lookupEntry(manufacturer, model);
    if (entry) return interpolateFromEntry(windSpeed, entry);
    return Math.round(interpolatePowerCurve(windSpeed, VESTAS_V112_POWER_CURVE) * (ratedCapacityKW / VESTAS_V112_SPECS.ratedPower));
}

export function getCapacityFactor(power: number, ratedPower: number = VESTAS_V112_SPECS.ratedPower): number {
    return (power / ratedPower) * 100;
}

export function getOperationalStatus(windSpeed: number, manufacturer?: string, model?: string): string {
    const cutOut = (manufacturer && model) ? getCutOutSpeed(manufacturer, model) : 25.0;
    if (windSpeed < 3.0) return 'Below cut-in speed';
    if (windSpeed > cutOut) return 'Above cut-out (shutdown)';
    if (windSpeed >= cutOut - 1) return 'At rated power';
    return 'Operating';
}

export function generatePowerCurvePath(
    powerCurve: PowerCurvePoint[], maxPowerKW: number,
    chartWidth = 250, chartHeight = 110, xOffset = 40, yOffset = 10
): string {
    return powerCurve.map((pt, i) => {
        const x = xOffset + (pt.windSpeed / 30) * chartWidth;
        const y = (yOffset + chartHeight) - (pt.power / maxPowerKW) * chartHeight;
        return `${i === 0 ? 'M' : ' L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join('');
}
