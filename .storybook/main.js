const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.js',
        '../src/**/*.stories.tsx'
    ],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    include: [
                        path.resolve(__dirname, '../src/stories')
                    ]
                }
            },
        }
    ]
}