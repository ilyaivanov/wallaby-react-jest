module.exports = function (wallaby) {

    return {
        files: ['src/**/*.tsx'],

        tests: [
            '__tests__/*.tsx',
            '__tests__/*.ts'
        ],

        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony'
            }
        },
        compilers: {
            '**/*.tsx': wallaby.compilers.typeScript({
                jsx: 'React'
            }),
            '**/*.ts': wallaby.compilers.typeScript(),
            "**/*.js*": wallaby.compilers.babel({
                presets: ["react", "es2015"],
                plugins: ["transform-object-rest-spread"]
            })
        },
        testFramework: 'jest'

        // Use bootstrap function
        //setup: function (wallaby) {
        //  wallaby.testFramework.configure({
        //    // https://facebook.github.io/jest/docs/api.html#config-options
        //  });
        //}
    };
};
