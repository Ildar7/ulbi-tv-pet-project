const path = require('path');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.modules = [
            path.resolve(__dirname, '../../src'), // Приоритетная папка
            'node_modules', // Затем искать в node_modules
        ];
        return config;
    },
};
