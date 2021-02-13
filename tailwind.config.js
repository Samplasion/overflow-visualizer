module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#fdf2cf",
                    200: "#fbe59f",
                    300: "#f9d96f",
                    400: "#f7cc3f",
                    500: "#f5bf0f",
                    600: "#c4990c",
                    700: "#937309",
                    800: "#624c06",
                    900: "#312603"
                }
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './public/index.html',
        ],
        // Options passed to PurgeCSS
        options: {
            // Whitelist specific selectors by name
            // safelist: [],
        },
    },
}
