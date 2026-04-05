<div class="plugin__mobile-header">
    {title}
</div>
<section class="plugin__content">
    <div
        class="plugin__title plugin__title--chevron-back"
        on:click={() => bcast.emit('rqstOpen', 'menu')}
    >
        {title}
    </div>

    {#if dataError}
        <div class="data-error">
            <p>⚠️ Failed to load wind farm data.</p>
            <p>Please check your connection and reload.</p>
        </div>
    {:else if !dataReady}
        <div class="data-loading">
            <div class="loading-spinner"></div>
            <p>Loading wind farm data…</p>
        </div>
    {:else}
    <div class="turbine-plugin">
        <!-- Farm Count & Status -->
        <div class="header-section">
            <div class="farm-count">
                <span class="count-value">{filteredFarms.length}</span>
                <span class="count-label">Wind Farms</span>
            </div>
            <div class="status-indicator">
                {#if isLoading}
                    <span class="loading">Updating...</span>
                {:else}
                    <span class="ready">Live</span>
                {/if}
            </div>
        </div>

        <!-- Interconnect Filter -->
        <div class="filter-section">
            <span class="filter-label">Interconnect</span>
            <div class="filter-btn-group">
                <div class="filter-btn" class:filter-btn-active={selectedInterconnect === 'All'} on:click={() => setInterconnect('All')}>All</div>
                <div class="filter-btn" class:filter-btn-active={selectedInterconnect === 'Eastern'} on:click={() => setInterconnect('Eastern')}>Eastern</div>
                <div class="filter-btn" class:filter-btn-active={selectedInterconnect === 'Western'} on:click={() => setInterconnect('Western')}>Western</div>
                <div class="filter-btn" class:filter-btn-active={selectedInterconnect === 'ERCOT'} on:click={() => setInterconnect('ERCOT')}>ERCOT</div>
            </div>
        </div>

        <!-- Mapped Production Stats -->
        <div class="mapped-production-section">
            <div class="section-label">Mapped Production</div>
            <div class="mapped-production-stats">
                <div class="mapped-production-item">
                    <span class="mapped-production-value">{Math.round(visibleCapacity).toLocaleString()}</span>
                    <span class="mapped-production-label">Installed MWs</span>
                </div>
                <div class="mapped-production-item">
                    <span class="mapped-production-value">{visibleFarmCount.toLocaleString()}</span>
                    <span class="mapped-production-label">Number of Farms</span>
                </div>
                <div class="mapped-production-item">
                    <span class="mapped-production-value">{Math.round(visibleEstimatedOutput).toLocaleString()}</span>
                    <span class="mapped-production-label">Expected MW</span>
                </div>
            </div>
        </div>

        <!-- Selected Farm Info -->
        {#if selectedFarm}
            <div class="selected-farm">
                <div class="section-label">Selected Farm</div>
                <div class="farm-details">
                    <h3 class="farm-name">{selectedFarm.name}</h3>
                    <div class="farm-location">
                        {selectedFarm.county || 'Offshore'}, {selectedFarm.state || 'USA'}
                    </div>
                    
                    <div class="farm-specs">
                        <div class="spec-row">
                            <span class="spec-label">Nameplate Capacity</span>
                            <span class="spec-value">{selectedFarm.capacity.toFixed(1)} MW</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Total Turbines</span>
                            <span class="spec-value">{selectedFarm.totalTurbines}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Turbine Types</span>
                            <span class="spec-value">{selectedFarm.turbineClasses.length}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Year Commissioned</span>
                            <span class="spec-value">{selectedFarm.year || 'N/A'}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Interconnect</span>
                            <span class="spec-value interconnect-badge {selectedFarm.interconnect.toLowerCase()}">{selectedFarm.interconnect}</span>
                        </div>
                    </div>

                    <!-- Site-Level Power Data -->
                    {#if selectedFarmData}
                        <div class="farm-production">
                            <div class="production-header">Site-Level Output</div>
                            <div class="production-stats">
                                <div class="stat">
                                    <span class="stat-value">{selectedFarmData.windSpeed.toFixed(1)}</span>
                                    <span class="stat-unit">m/s wind</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">{formatPower(selectedFarmData.totalPower)}</span>
                                    <span class="stat-unit">{selectedFarmData.totalPower >= 1000 ? 'MW' : 'kW'}</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">{selectedFarmData.capacityFactor.toFixed(1)}%</span>
                                    <span class="stat-unit">capacity</span>
                                </div>
                            </div>
                            <div class="capacity-bar">
                                <div class="capacity-fill" style="width: {selectedFarmData.capacityFactor}%; background: {selectedFarmData.color};"></div>
                            </div>
                            <div class="production-status {selectedFarmData.statusClass}">
                                {selectedFarmData.status}
                            </div>
                        </div>

                        <!-- Turbine Class Breakdown -->
                        <div class="turbine-breakdown">
                            <div class="production-header">Output by Turbine Type</div>
                            {#each selectedFarmData.turbineClassOutputs as tcOutput}
                                <div class="turbine-class-card">
                                    <div class="tc-header">
                                        <span class="tc-model">{tcOutput.manufacturer} {tcOutput.model}</span>
                                        <span class="tc-count">{tcOutput.count} units</span>
                                    </div>
                                    <div class="tc-specs">
                                        <span class="tc-spec">{(tcOutput.capacityKW / 1000).toFixed(1)} MW each</span>
                                        <span class="tc-spec-divider">Ã¢â‚¬Â¢</span>
                                        <span class="tc-spec">{(tcOutput.totalCapacityKW / 1000).toFixed(1)} MW total</span>
                                    </div>
                                    <div class="tc-output">
                                        <div class="tc-output-row">
                                            <span class="tc-output-label">Per Turbine</span>
                                            <span class="tc-output-value">{formatPowerCompact(tcOutput.powerPerTurbine)}</span>
                                        </div>
                                        <div class="tc-output-row">
                                            <span class="tc-output-label">Class Total</span>
                                            <span class="tc-output-value tc-output-total">{formatPowerCompact(tcOutput.totalPower)}</span>
                                        </div>
                                    </div>
                                    <div class="tc-capacity-bar">
                                        <div class="tc-capacity-fill" style="width: {tcOutput.capacityFactor}%; background: {tcOutput.color};"></div>
                                    </div>
                                    <div class="tc-capacity-label">{tcOutput.capacityFactor.toFixed(1)}% capacity</div>
                                </div>
                            {/each}
                        </div>

                        <!-- Dynamic Power Curve Chart (per primary turbine type) -->
                        <div class="chart-section">
                            <div class="section-label">Power Curve{chartHasMatch ? '' : ' (Generic)'}: {chartLabel}</div>
                            <div class="power-chart">
                                <svg viewBox="0 0 300 150" class="chart-svg">
                                    <!-- Grid lines -->
                                    <line x1="40" y1="10" x2="40" y2="120" stroke="#444" stroke-width="1"/>
                                    <line x1="40" y1="120" x2="290" y2="120" stroke="#444" stroke-width="1"/>
                                    
                                    <!-- Horizontal grid lines -->
                                    <line x1="40" y1="65" x2="290" y2="65" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>
                                    <line x1="40" y1="37" x2="290" y2="37" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>
                                    
                                    <!-- Y-axis labels (dynamic based on turbine rated power) -->
                                    <text x="35" y="15" text-anchor="end" class="axis-label">{(chartMaxKW / 1000).toFixed(1)}MW</text>
                                    <text x="35" y="67" text-anchor="end" class="axis-label">{(chartMaxKW / 2000).toFixed(1)}</text>
                                    <text x="35" y="123" text-anchor="end" class="axis-label">0</text>
                                    
                                    <!-- X-axis labels -->
                                    <text x="40" y="135" text-anchor="middle" class="axis-label">0</text>
                                    <text x="115" y="135" text-anchor="middle" class="axis-label">10</text>
                                    <text x="190" y="135" text-anchor="middle" class="axis-label">20</text>
                                    <text x="265" y="135" text-anchor="middle" class="axis-label">30</text>
                                    <text x="165" y="148" text-anchor="middle" class="axis-label">Wind Speed (m/s)</text>
                                    
                                    <!-- Power curve path -->
                                    <path d={chartPath} fill="none" stroke="#4CAF50" stroke-width="2"/>
                                    
                                    <!-- Current operating point -->
                                    {#if selectedFarmData.windSpeed <= 30}
                                        <!-- Vertical line from point to x-axis -->
                                        <line 
                                            x1={40 + (selectedFarmData.windSpeed / 30) * 250}
                                            y1={chartOperatingY}
                                            x2={40 + (selectedFarmData.windSpeed / 30) * 250}
                                            y2="120"
                                            stroke="#FF9800"
                                            stroke-width="1"
                                            stroke-dasharray="3,3"
                                        />
                                        <!-- Horizontal line from point to y-axis -->
                                        <line 
                                            x1="40"
                                            y1={chartOperatingY}
                                            x2={40 + (selectedFarmData.windSpeed / 30) * 250}
                                            y2={chartOperatingY}
                                            stroke="#FF9800"
                                            stroke-width="1"
                                            stroke-dasharray="3,3"
                                        />
                                        <!-- Operating point -->
                                        <circle 
                                            cx={40 + (selectedFarmData.windSpeed / 30) * 250} 
                                            cy={chartOperatingY} 
                                            r="6" 
                                            fill="#FF9800"
                                            stroke="#fff"
                                            stroke-width="2"
                                        />
                                    {/if}
                                </svg>
                            </div>
                        </div>
                    {:else}
                        <div class="farm-production">
                            <div class="production-header">Current Conditions</div>
                            <div class="loading-data">Fetching wind data...</div>
                        </div>
                    {/if}

                    <button class="close-btn" on:click={() => selectedFarm = null}>
                        Close
                    </button>
                </div>
            </div>
        {:else}
            <!-- Instructions when no farm selected -->
            <div class="instructions">
                <div class="section-label">Instructions</div>
                <p>Click on any farm marker to view details and estimated power output.</p>
                <p class="note">Power calculations use model-specific power curves for 240 turbine types.</p>
            </div>
        {/if}
    </div>
    {/if}
</section>

<script lang="ts">
    import bcast from '@windy/broadcast';
    import { map } from '@windy/map';
    import { getLatLonInterpolator } from '@windy/interpolator';
    import store from '@windy/store';
    import { wind2obj } from '@windy/utils';
    import { onDestroy, onMount } from 'svelte';
    
    import config from './pluginConfig';
    import { WIND_FARMS, setWindFarms, type WindFarm, type TurbineClass } from './farmData';
    import { 
        getPowerOutput, 
        getTurbinePowerOutput,
        getOperationalStatus,
        getPowerCurve,
        hasPowerCurve,
        setPowerCurveDb,
        type PowerCurvePoint
    } from './powerCurve';

    // ── Data loading state ────────────────────────────────────────────────────
    const DATA_BASE_URL = 'https://chasepeterson.github.io/Windy-Wind-Farm-Plugin';
    let dataReady = false;
    let dataError = false;

    async function loadPluginData(): Promise<void> {
        try {
            const [farmsRes, curvesRes] = await Promise.all([
                fetch(`${DATA_BASE_URL}/farmData.json`),
                fetch(`${DATA_BASE_URL}/powerCurveDb.json`)
            ]);
            if (!farmsRes.ok || !curvesRes.ok) throw new Error('Failed to fetch data');
            const [farms, curves] = await Promise.all([farmsRes.json(), curvesRes.json()]);
            setWindFarms(farms);
            setPowerCurveDb(curves);
            dataReady = true;
        } catch (e) {
            console.error('Wind Farm Plugin: failed to load data', e);
            dataError = true;
        }
    }

    const { title } = config;

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // PRE-COMPUTED LOOKUP TABLES (built once at load time)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    // Power lookup: 0.0 to 30.0 m/s in 0.1 steps Ã¢â€ â€™ 301 entries
    // Uses V112 reference curve for fast marker coloring
    const POWER_LUT = new Float32Array(301);
    for (let i = 0; i <= 300; i++) {
        POWER_LUT[i] = getPowerOutput(i / 10);
    }
    function lookupPower(windSpeed: number): number {
        const idx = Math.round(windSpeed * 10);
        if (idx < 0) return 0;
        if (idx > 300) return 0;
        return POWER_LUT[idx];
    }

    // Color lookup: 0Ã¢â‚¬â€œ100% capacity factor Ã¢â€ â€™ 101 pre-built color strings
    const COLOR_LUT: string[] = new Array(101);
    const COLOR_CUTOUT = '#a10b0b';
    const COLOR_IDLE = '#c4c3c2';
    (() => {
        for (let cf = 0; cf <= 100; cf++) {
            if (cf >= 97) {
                COLOR_LUT[cf] = COLOR_CUTOUT;
            } else {
                const t = cf / 97;
                const r = Math.round(253 - t * 75);
                const g = Math.round(222 - t * 136);
                const b = Math.round(193 - t * 193);
                COLOR_LUT[cf] = `rgb(${r},${g},${b})`;
            }
        }
    })();
    function lookupColor(capacityFactor: number, windSpeed: number): string {
        if (windSpeed > 25) return COLOR_CUTOUT;
        if (capacityFactor <= 0 && windSpeed < 5) return COLOR_IDLE;
        const idx = Math.min(Math.max(Math.round(capacityFactor), 0), 100);
        return COLOR_LUT[idx];
    }

    // Pre-index farms by interconnect for O(1) filter switching
    const FARM_INDICES_BY_INTERCONNECT: Record<string, number[]> = { All: [], Eastern: [], Western: [], ERCOT: [] };
    WIND_FARMS.forEach((farm, index) => {
        FARM_INDICES_BY_INTERCONNECT.All.push(index);
        FARM_INDICES_BY_INTERCONNECT[farm.interconnect].push(index);
    });

    // Pre-compute marker radii with piecewise scaling:
    //   20 MW  â†’  3 px
    //  200 MW  â†’  8 px
    // 1500 MW  â†’ 14 px
    const FARM_MARKER_RADII: Float32Array = new Float32Array(WIND_FARMS.length);
    (() => {
        const logA = Math.log(20), logB = Math.log(200), logC = Math.log(1500);
        WIND_FARMS.forEach((farm, i) => {
            const cap = Math.min(Math.max(farm.capacity, 20), 1500);
            const lc = Math.log(cap);
            if (lc <= logB) {
                FARM_MARKER_RADII[i] = 3 + ((lc - logA) / (logB - logA)) * 5;
            } else {
                FARM_MARKER_RADII[i] = 8 + ((lc - logB) / (logC - logB)) * 6;
            }
        });
    })();

    // Pre-compute capacity ratios for marker power scaling
    const FARM_CAPACITY_RATIO: Float32Array = new Float32Array(WIND_FARMS.length);
    WIND_FARMS.forEach((farm, i) => {
        FARM_CAPACITY_RATIO[i] = farm.capacity / 3;
    });
    const FARM_CAPACITY_KW_INV: Float32Array = new Float32Array(WIND_FARMS.length);
    WIND_FARMS.forEach((farm, i) => {
        FARM_CAPACITY_KW_INV[i] = farm.capacity > 0 ? 100 / (farm.capacity * 1000) : 0;
    });

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // INTERCONNECT FILTER
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    let selectedInterconnect = 'All';
    let filteredFarms = WIND_FARMS;
    let activeIndices: number[] = FARM_INDICES_BY_INTERCONNECT.All;

    function setInterconnect(value) {
        if (value === selectedInterconnect) return;
        selectedInterconnect = value;
        activeIndices = FARM_INDICES_BY_INTERCONNECT[value];
        filteredFarms = selectedInterconnect === 'All'
            ? WIND_FARMS
            : WIND_FARMS.filter(f => f.interconnect === selectedInterconnect);
        // Remove all markers and re-render
        farmMarkers.forEach(marker => marker.remove());
        farmMarkers.clear();
        selectedFarm = null;
        selectedFarmData = null;
        updateAllFarmMarkers();
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // STATE
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    interface TurbineClassOutput {
        manufacturer: string;
        model: string;
        count: number;
        capacityKW: number;
        totalCapacityKW: number;
        powerPerTurbine: number;
        totalPower: number;
        capacityFactor: number;
        color: string;
    }

    let selectedFarm: WindFarm | null = null;
    let selectedFarmData: {
        windSpeed: number;
        windDir: number;
        totalPower: number;
        capacityFactor: number;
        status: string;
        statusClass: string;
        color: string;
        turbineClassOutputs: TurbineClassOutput[];
    } | null = null;
    
    let farmMarkers: Map<number, L.CircleMarker> = new Map();

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // DYNAMIC POWER CURVE CHART STATE
    // Shows the actual power curve for the primary turbine
    // type (by total capacity) in the selected farm.
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    let chartPath: string = '';
    let chartLabel: string = 'Generic';
    let chartMaxKW: number = 3000;
    let chartHasMatch: boolean = false;
    let chartOperatingY: number = 120;

    /**
     * Rebuild the SVG path for the power curve chart whenever
     * the selected farm changes.  Picks the "primary" turbine class
     * (the one contributing the most installed capacity) and renders
     * its model-specific curve if one exists, otherwise a generic
     * V112 curve scaled to the turbine's rated power.
     */
    function updateChartCurve(): void {
        let curve: PowerCurvePoint[];
        let maxKW: number;

        if (selectedFarm && selectedFarm.turbineClasses.length > 0) {
            // Pick the turbine class with the largest total installed capacity
            const primaryTC = selectedFarm.turbineClasses.reduce((a, b) =>
                b.totalCapacityKW > a.totalCapacityKW ? b : a
            );
            const mfr = primaryTC.manufacturer;
            const mdl = primaryTC.model;

            chartHasMatch = hasPowerCurve(mfr, mdl);
            curve = getPowerCurve(mfr, mdl, primaryTC.capacityKW);
            maxKW = primaryTC.capacityKW;

            // Ensure Y-axis covers the actual curve peak
            for (let i = 0; i < curve.length; i++) {
                if (curve[i].power > maxKW) maxKW = curve[i].power;
            }
            chartMaxKW = maxKW;
            chartLabel = chartHasMatch
                ? `${mfr} ${mdl}`
                : `Generic (${mfr} ${mdl})`;
        } else {
            chartMaxKW = 3000;
            chartLabel = 'Generic';
            chartHasMatch = false;
            maxKW = 3000;
            curve = getPowerCurve('', '', 3000);
        }

        // Build SVG path in one pass
        let path = 'M';
        for (let i = 0; i < curve.length; i++) {
            const pt = curve[i];
            const x = 40 + (pt.windSpeed / 30) * 250;
            const y = 120 - (pt.power / maxKW) * 110;
            if (i > 0) path += ' L';
            path += x.toFixed(1) + ' ' + y.toFixed(1);
        }
        chartPath = path;
    }

    // Reactive: recompute the operating-point Y position on the chart
    // whenever wind data or farm selection changes.
    $: if (selectedFarm && selectedFarmData) {
        const primaryTC = selectedFarm.turbineClasses.reduce((a, b) =>
            b.totalCapacityKW > a.totalCapacityKW ? b : a
        );
        const tcOutput = selectedFarmData.turbineClassOutputs.find(t => t.model === primaryTC.model);
        const cf = tcOutput ? tcOutput.capacityFactor : selectedFarmData.capacityFactor;
        const powerKW = (cf / 100) * primaryTC.capacityKW;
        chartOperatingY = 120 - (powerKW / chartMaxKW) * 110;
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // FORECAST-STATE-KEYED CACHE  (LRU, up to 32 frames)
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    interface CacheFrame {
        windSpeed: Float32Array;
        power: Float32Array;
        color: string[];
        has: Uint8Array;
    }

    const MAX_CACHED_FRAMES = 32;
    const frameCache: Map<string, CacheFrame> = new Map();
    const frameCacheOrder: string[] = [];
    let activeFrame: CacheFrame | null = null;
    let activeCacheKey: string = '';

    function buildCacheKey(): string {
        const ts = store.get('timestamp');
        const product = store.get('product');
        const level = store.get('level');
        return `${ts}|${product}|${level}`;
    }

    function getOrCreateFrame(key: string): CacheFrame {
        let frame = frameCache.get(key);
        if (frame) {
            const idx = frameCacheOrder.indexOf(key);
            if (idx >= 0) frameCacheOrder.splice(idx, 1);
            frameCacheOrder.push(key);
            return frame;
        }
        if (frameCacheOrder.length >= MAX_CACHED_FRAMES) {
            const evict = frameCacheOrder.shift()!;
            frameCache.delete(evict);
        }
        frame = {
            windSpeed: new Float32Array(WIND_FARMS.length),
            power: new Float32Array(WIND_FARMS.length),
            color: new Array(WIND_FARMS.length).fill('#c4c3c2'),
            has: new Uint8Array(WIND_FARMS.length),
        };
        frameCache.set(key, frame);
        frameCacheOrder.push(key);
        return frame;
    }

    function setActiveFrame() {
        activeCacheKey = buildCacheKey();
        activeFrame = getOrCreateFrame(activeCacheKey);
    }

    function invalidateCache() {
        frameCache.clear();
        frameCacheOrder.length = 0;
        activeFrame = null;
        activeCacheKey = '';
    }

    let isLoading = false;
    let updateInterval: number | null = null;
    
    let visibleFarmCount = 0;
    let visibleCapacity = 0;
    let visibleEstimatedOutput = 0;

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // HELPER FUNCTIONS
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    function getStatusClass(windSpeed: number, capacityFactor: number): string {
        if (windSpeed < 3) return 'status-idle';
        if (windSpeed > 25) return 'status-shutdown';
        if (capacityFactor >= 97) return 'status-rated';
        return 'status-operating';
    }

    function formatPower(power: number): string {
        if (power >= 1000) return (power / 1000).toFixed(1);
        return power.toFixed(0);
    }

    function formatPowerCompact(power: number): string {
        if (power >= 1000) return (power / 1000).toFixed(2) + ' MW';
        return power.toFixed(0) + ' kW';
    }

    /**
     * Calculate per-turbine-class power output for the selected farm.
     * Uses model-specific power curves from the 240-model database.
     */
    function calculateFarmPower(farm: WindFarm, windSpeed: number): {
        totalPower: number;
        turbineClassOutputs: TurbineClassOutput[];
    } {
        const turbineClassOutputs: TurbineClassOutput[] = [];
        let totalPower = 0;

        for (const tc of farm.turbineClasses) {
            const powerPerTurbine = getTurbinePowerOutput(windSpeed, tc.manufacturer, tc.model, tc.capacityKW);
            const classTotalPower = powerPerTurbine * tc.count;
            const cf = tc.totalCapacityKW > 0 ? (classTotalPower / tc.totalCapacityKW) * 100 : 0;
            
            turbineClassOutputs.push({
                manufacturer: tc.manufacturer,
                model: tc.model,
                count: tc.count,
                capacityKW: tc.capacityKW,
                totalCapacityKW: tc.totalCapacityKW,
                powerPerTurbine,
                totalPower: classTotalPower,
                capacityFactor: cf,
                color: lookupColor(cf, windSpeed)
            });
            totalPower += classTotalPower;
        }
        return { totalPower, turbineClassOutputs };
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // MARKER MANAGEMENT
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    function createMarkerForFarm(index: number, farm: WindFarm, color: string = '#c4c3c2'): L.CircleMarker {
        const marker = new L.CircleMarker({ lat: farm.lat, lng: farm.lon }, {
            radius: FARM_MARKER_RADII[index],
            fillColor: color,
            fillOpacity: 0.8,
            color: '#fff',
            weight: 0.5,
            opacity: 0.6
        });
        marker.on('click', () => selectFarm(farm));
        marker.addTo(map);
        return marker;
    }

    function getVisibleIndices(): number[] {
        const bounds = map.getBounds();
        const sw = bounds.getSouthWest();
        const ne = bounds.getNorthEast();
        const sLat = sw.lat, wLng = sw.lng, nLat = ne.lat, eLng = ne.lng;
        
        const visible: number[] = [];
        const indices = activeIndices;
        
        for (let i = 0, len = indices.length; i < len; i++) {
            const idx = indices[i];
            const farm = WIND_FARMS[idx];
            const lat = farm.lat, lng = farm.lon;
            if (lat >= sLat && lat <= nLat && lng >= wLng && lng <= eLng) {
                visible.push(idx);
            }
        }
        return visible;
    }

    function syncMarkers(visibleIndices: number[]): void {
        const visibleSet = new Set(visibleIndices);
        
        farmMarkers.forEach((marker, index) => {
            if (!visibleSet.has(index)) {
                marker.remove();
                farmMarkers.delete(index);
            }
        });
        
        for (let i = 0, len = visibleIndices.length; i < len; i++) {
            const idx = visibleIndices[i];
            if (!farmMarkers.has(idx)) {
                const farm = WIND_FARMS[idx];
                const color = (activeFrame && activeFrame.has[idx]) ? activeFrame.color[idx] : '#c4c3c2';
                farmMarkers.set(idx, createMarkerForFarm(idx, farm, color));
            }
        }
    }

    function updateStatsFromCache(visibleIndices: number[]): void {
        let count = visibleIndices.length;
        let totalCap = 0;
        let totalPow = 0;
        const frame = activeFrame;
        
        for (let i = 0, len = visibleIndices.length; i < len; i++) {
            const idx = visibleIndices[i];
            totalCap += WIND_FARMS[idx].capacity;
            if (frame && frame.has[idx]) {
                totalPow += frame.power[idx];
            }
        }
        
        visibleFarmCount = count;
        visibleCapacity = totalCap;
        visibleEstimatedOutput = totalPow / 1000;
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // WIND DATA UPDATES
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    function selectFarm(farm: WindFarm) {
        selectedFarm = farm;
        selectedFarmData = null;
        updateChartCurve();          // Ã¢â€ Â rebuild chart for this farm's primary turbine
        updateFarmWindData(farm);
    }

    async function updateFarmWindData(farm: WindFarm) {
        try {
            const interpolator = await getLatLonInterpolator();
            if (!interpolator) return;

            if (store.get('overlay') !== 'wind') {
                store.set('overlay', 'wind');
                setTimeout(() => updateFarmWindData(farm), 500);
                return;
            }

            const result = await interpolator({ lat: farm.lat, lon: farm.lon });
            if (Array.isArray(result)) {
                const { dir, wind } = wind2obj(result);
                const { totalPower, turbineClassOutputs } = calculateFarmPower(farm, wind);
                const cf = (totalPower / (farm.capacity * 1000)) * 100;
                const color = lookupColor(cf, wind);
                
                selectedFarmData = {
                    windSpeed: wind,
                    windDir: dir,
                    totalPower,
                    capacityFactor: cf,
                    status: getOperationalStatus(wind),
                    statusClass: getStatusClass(wind, cf),
                    color,
                    turbineClassOutputs
                };
            }
        } catch (err) {
            console.error('Wind plugin: Error in updateFarmWindData', err);
        }
    }

    // Cancellation counter
    let updateGeneration = 0;

    async function updateAllFarmMarkers() {
        const thisGen = ++updateGeneration;
        isLoading = true;
        
        const visibleIndices = getVisibleIndices();
        syncMarkers(visibleIndices);
        
        setActiveFrame();
        const frame = activeFrame!;
        
        // Ã¢â€â‚¬Ã¢â€â‚¬ CACHE HIT PATH Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
        let allCached = true;
        for (let i = 0; i < visibleIndices.length; i++) {
            if (!frame.has[visibleIndices[i]]) { allCached = false; break; }
        }
        
        if (allCached && visibleIndices.length > 0) {
            let totalVisiblePower = 0;
            let totalVisibleCapacity = 0;
            
            for (let i = 0; i < visibleIndices.length; i++) {
                const idx = visibleIndices[i];
                totalVisibleCapacity += WIND_FARMS[idx].capacity;
                totalVisiblePower += frame.power[idx];
                
                const marker = farmMarkers.get(idx);
                if (marker) marker.setStyle({ fillColor: frame.color[idx] });
            }
            
            visibleFarmCount = visibleIndices.length;
            visibleCapacity = totalVisibleCapacity;
            visibleEstimatedOutput = totalVisiblePower / 1000;
            isLoading = false;
            
            if (selectedFarm) updateFarmWindData(selectedFarm);
            return;
        }
        
        // Ã¢â€â‚¬Ã¢â€â‚¬ CACHE MISS PATH Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
        const interpolator = await getLatLonInterpolator();
        if (!interpolator || thisGen !== updateGeneration) {
            isLoading = false;
            return;
        }

        if (store.get('overlay') !== 'wind') {
            isLoading = false;
            setTimeout(() => updateAllFarmMarkers(), 500);
            return;
        }
        
        const uncachedIndices: number[] = [];
        for (let i = 0; i < visibleIndices.length; i++) {
            const idx = visibleIndices[i];
            if (!frame.has[idx]) uncachedIndices.push(idx);
        }
        
        // Process uncached farms in batches
        const BATCH = 80;
        for (let bStart = 0; bStart < uncachedIndices.length; bStart += BATCH) {
            if (thisGen !== updateGeneration) return;
            
            const bEnd = Math.min(bStart + BATCH, uncachedIndices.length);
            const batchIndices = uncachedIndices.slice(bStart, bEnd);
            
            const results = await Promise.all(
                batchIndices.map(idx => {
                    const f = WIND_FARMS[idx];
                    return interpolator({ lat: f.lat, lon: f.lon });
                })
            );
            
            if (thisGen !== updateGeneration) return;
            
            for (let i = 0; i < batchIndices.length; i++) {
                const idx = batchIndices[i];
                const result = results[i];
                
                if (!Array.isArray(result)) continue;
                
                const { wind } = wind2obj(result);
                // Marker coloring uses V112 LUT (fast approximation)
                const refPower = lookupPower(wind);
                const farmPower = refPower * FARM_CAPACITY_RATIO[idx];
                const cf = farmPower * FARM_CAPACITY_KW_INV[idx];
                const color = lookupColor(cf, wind);
                
                const marker = farmMarkers.get(idx);
                if (marker) marker.setStyle({ fillColor: color });
                
                frame.windSpeed[idx] = wind;
                frame.power[idx] = farmPower;
                frame.color[idx] = color;
                frame.has[idx] = 1;
            }
        }
        
        if (thisGen !== updateGeneration) return;
        
        let totalVisiblePower = 0;
        let totalVisibleCapacity = 0;
        for (let i = 0; i < visibleIndices.length; i++) {
            const idx = visibleIndices[i];
            totalVisibleCapacity += WIND_FARMS[idx].capacity;
            if (frame.has[idx]) totalVisiblePower += frame.power[idx];
        }
        
        visibleFarmCount = visibleIndices.length;
        visibleCapacity = totalVisibleCapacity;
        visibleEstimatedOutput = totalVisiblePower / 1000;
        
        isLoading = false;

        if (selectedFarm) {
            updateFarmWindData(selectedFarm);
        }
    }

    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
    // EVENT HANDLING & LIFECYCLE
    // Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â

    function handleRedrawFinished() {
        debouncedUpdate();
    }
    
    let dataChangeTimeout: number | null = null;
    function handleDataChange() {
        setActiveFrame();
        
        const vis = getVisibleIndices();
        const frame = activeFrame!;
        
        let allCached = vis.length > 0;
        for (let i = 0; i < vis.length; i++) {
            if (!frame.has[vis[i]]) { allCached = false; break; }
        }
        
        if (allCached) {
            let totalPow = 0, totalCap = 0;
            for (let i = 0; i < vis.length; i++) {
                const idx = vis[i];
                totalCap += WIND_FARMS[idx].capacity;
                totalPow += frame.power[idx];
                const marker = farmMarkers.get(idx);
                if (marker) marker.setStyle({ fillColor: frame.color[idx] });
            }
            visibleFarmCount = vis.length;
            visibleCapacity = totalCap;
            visibleEstimatedOutput = totalPow / 1000;
            isLoading = false;
            if (selectedFarm) updateFarmWindData(selectedFarm);
            return;
        }
        
        if (dataChangeTimeout) clearTimeout(dataChangeTimeout);
        dataChangeTimeout = window.setTimeout(() => {
            updateAllFarmMarkers();
        }, 150);
    }

    let updateTimeout: number | null = null;
    function debouncedUpdate() {
        if (updateTimeout) clearTimeout(updateTimeout);
        updateTimeout = window.setTimeout(() => {
            updateAllFarmMarkers();
        }, 200);
    }

    function handleMapMove() {
        const key = buildCacheKey();
        if (key !== activeCacheKey) setActiveFrame();
        
        const vis = getVisibleIndices();
        syncMarkers(vis);
        updateStatsFromCache(vis);
        debouncedUpdate();
    }

    export const onopen = () => {
        store.set('overlay', 'wind');
        setTimeout(() => updateAllFarmMarkers(), 500);
        updateInterval = window.setInterval(() => {
            invalidateCache();
            updateAllFarmMarkers();
        }, 30000);
    };

    export const onclose = () => {
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }
    };

    onMount(async () => {
        // Load farm + power curve data from GitHub Pages before rendering
        await loadPluginData();

        const vis = getVisibleIndices();
        syncMarkers(vis);
        updateStatsFromCache(vis);
        
        bcast.on('redrawFinished', handleRedrawFinished);
        bcast.on('paramsChanged', handleDataChange);
        map.on('moveend', handleMapMove);
        map.on('zoomend', handleMapMove);
        
        store.on('timestamp', handleDataChange);
        store.on('product', handleDataChange);
        store.on('level', handleDataChange);
        
        setTimeout(() => updateAllFarmMarkers(), 500);
    });

    onDestroy(() => {
        bcast.off('redrawFinished', handleRedrawFinished);
        bcast.off('paramsChanged', handleDataChange);
        map.off('moveend', handleMapMove);
        map.off('zoomend', handleMapMove);
        store.off('timestamp', handleDataChange);
        store.off('product', handleDataChange);
        store.off('level', handleDataChange);
        farmMarkers.forEach(marker => marker.remove());
        farmMarkers.clear();
        if (updateInterval) clearInterval(updateInterval);
        if (updateTimeout) clearTimeout(updateTimeout);
        if (dataChangeTimeout) clearTimeout(dataChangeTimeout);
    });
</script>

<style>
    .turbine-plugin {
        padding: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #444;
    }

    .farm-count {
        display: flex;
        align-items: baseline;
        gap: 8px;
    }

    .count-value {
        font-size: 28px;
        font-weight: bold;
        color: #4CAF50;
    }

    .count-label {
        font-size: 14px;
        color: #888;
    }

    .status-indicator {
        font-size: 11px;
    }

    .loading {
        color: #FF9800;
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .ready {
        color: #4CAF50;
        font-weight: 600;
    }

    .section-label {
        font-size: 13px;
        color: #888;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .selected-farm {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 12px;
    }

    .farm-details {
        margin-top: 0;
    }

    .farm-name {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        margin: 0 0 4px 0;
    }

    .farm-location {
        font-size: 12px;
        color: #888;
        margin-bottom: 12px;
    }

    .farm-specs {
        margin-bottom: 12px;
    }

    .spec-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        border-bottom: 1px solid #2a2a2a;
    }

    .spec-label {
        font-size: 12px;
        color: #888;
    }

    .spec-value {
        font-size: 12px;
        color: #fff;
        font-weight: 500;
    }

    .farm-production {
        background: #222;
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 12px;
    }

    .production-header {
        font-size: 12px;
        color: #888;
        margin-bottom: 8px;
    }

    .production-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .stat {
        text-align: center;
    }

    .stat-value {
        font-size: 20px;
        font-weight: bold;
        color: #4CAF50;
        display: block;
    }

    .stat-unit {
        font-size: 10px;
        color: #888;
    }

    .capacity-bar {
        height: 6px;
        background: #333;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 6px;
    }

    .capacity-fill {
        height: 100%;
        border-radius: 3px;
        transition: width 0.3s ease, background 0.3s ease;
    }

    .production-status {
        font-size: 11px;
        text-align: center;
        padding: 4px;
        border-radius: 3px;
    }

    .status-idle {
        background: rgba(150, 150, 150, 0.2);
        color: #999;
    }

    .status-operating {
        background: rgba(76, 175, 80, 0.2);
        color: #4CAF50;
    }

    .status-rated {
        background: rgba(255, 152, 0, 0.2);
        color: #FF9800;
    }

    .status-shutdown {
        background: rgba(244, 67, 54, 0.2);
        color: #f44336;
    }

    .loading-data {
        font-size: 12px;
        color: #888;
        text-align: center;
        padding: 20px;
        animation: pulse 1.5s infinite;
    }

    .turbine-breakdown {
        background: #222;
        border-radius: 6px;
        padding: 10px;
        margin-bottom: 12px;
    }

    .turbine-class-card {
        background: #2a2a2a;
        border-radius: 4px;
        padding: 10px;
        margin-top: 8px;
        border-left: 3px solid #4CAF50;
    }

    .tc-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }

    .tc-model {
        font-size: 12px;
        font-weight: 600;
        color: #fff;
    }

    .tc-count {
        font-size: 10px;
        color: #888;
        background: #333;
        padding: 2px 6px;
        border-radius: 3px;
    }

    .tc-specs {
        font-size: 10px;
        color: #666;
        margin-bottom: 8px;
    }

    .tc-spec-divider {
        margin: 0 6px;
    }

    .tc-output {
        margin-bottom: 6px;
    }

    .tc-output-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px 0;
    }

    .tc-output-label {
        font-size: 10px;
        color: #888;
    }

    .tc-output-value {
        font-size: 11px;
        color: #4CAF50;
        font-weight: 500;
    }

    .tc-output-total {
        font-size: 13px;
        font-weight: 600;
    }

    .tc-capacity-bar {
        height: 4px;
        background: #333;
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 4px;
    }

    .tc-capacity-fill {
        height: 100%;
        border-radius: 2px;
        transition: width 0.3s ease, background 0.3s ease;
    }

    .tc-capacity-label {
        font-size: 9px;
        color: #666;
        text-align: right;
    }

    .chart-section {
        margin-top: 12px;
    }

    .power-chart {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 10px;
    }

    .chart-svg {
        width: 100%;
        height: auto;
    }

    .axis-label {
        font-size: 9px;
        fill: #888;
    }

    .close-btn {
        width: 100%;
        padding: 8px;
        background: #333;
        border: none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        transition: background 0.2s;
        margin-top: 12px;
    }

    .close-btn:hover {
        background: #444;
    }

    .instructions {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 15px;
    }

    .instructions p {
        margin: 0 0 8px 0;
        font-size: 12px;
        color: #bbb;
        line-height: 1.4;
    }

    .instructions .note {
        font-size: 11px;
        color: #666;
        font-style: italic;
    }

    .mapped-production-section {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 24px 18px;
        margin-bottom: 20px;
    }

    .mapped-production-section .section-label {
        font-size: 18px;
        margin-bottom: 18px;
    }

    .mapped-production-stats {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    }

    .mapped-production-item {
        text-align: center;
        padding: 8px 5px;
    }

    .mapped-production-value {
        font-size: 36px;
        font-weight: bold;
        color: #4CAF50;
        display: block;
        margin-bottom: 6px;
    }

    .mapped-production-label {
        font-size: 14px;
        color: #888;
        line-height: 1.3;
    }

    .filter-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 15px;
        padding: 10px 12px;
        background: #1a1a1a;
        border-radius: 8px;
    }

    .filter-label {
        font-size: 12px;
        color: #888;
        margin: 0;
    }

    .filter-btn-group {
        display: flex;
        gap: 0;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid #444;
    }

    .filter-btn {
        flex: 1;
        padding: 6px 4px;
        background: #2a2a2a;
        color: #888;
        font-size: 11px;
        text-align: center;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
        border-right: 1px solid #444;
        user-select: none;
    }

    .filter-btn:last-child {
        border-right: none;
    }

    .filter-btn:hover {
        background: #333;
        color: #ccc;
    }

    .filter-btn-active {
        background: #4CAF50 !important;
        color: #fff !important;
        font-weight: 600;
    }

    .interconnect-badge {
        padding: 2px 8px;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 600;
    }

    .interconnect-badge.eastern {
        background: rgba(66, 133, 244, 0.2);
        color: #6ea8fe;
    }

    .interconnect-badge.western {
        background: rgba(76, 175, 80, 0.2);
        color: #81c784;
    }

    .interconnect-badge.ercot {
        background: rgba(255, 152, 0, 0.2);
        color: #ffb74d;
    }

    :global(.farm-tooltip) {
        background: rgba(0,0,0,0.8) !important;
        border: 1px solid #444 !important;
        color: #fff !important;
        font-size: 11px !important;
        padding: 4px 8px !important;
        border-radius: 4px !important;
    }

    :global(.farm-tooltip::before) {
        border-top-color: rgba(0,0,0,0.8) !important;
    }

    .data-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        color: #aaa;
        font-size: 13px;
        gap: 12px;
    }

    .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #444;
        border-top-color: #4CAF50;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .data-error {
        padding: 20px;
        color: #ff6b6b;
        font-size: 13px;
        text-align: center;
    }
</style>
