module.exports = function (wallaby) {

    return {
        files: ['src/**/*.js'],

        tests: ['__tests__/*.js'],

        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony'
            }
        },
        compilers: {
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
