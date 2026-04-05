import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-wind-farm-fleet',
    version: '0.0.2',
    icon: '⚡️',
    title: 'US Wind Farm Fleet',
    description: 'View real-time estimated power output for 1,600+ US wind farms based on current wind conditions.',
    author: 'Your Name',
    desktopUI: 'rhpane',
    mobileUI: 'fullscreen',
    desktopWidth: 640,
    routerPath: '/wind-farm-fleet',
    listenToSingleclick: false,
    addToContextmenu: false,
};

export default config;
