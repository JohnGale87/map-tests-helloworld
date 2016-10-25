({
    baseUrl: '../js',
    paths: {
    	jquery: '../libs/jquery-2.1.4.min',
    	cartodb: '../libs/cartodb.min'
    },
    shim: {
    	cartodb: {
    		deps: ['jquery'],
    		exports: 'cartodb'
    	}
    },
    optimize: 'uglify2',
    uglify2: {
    	output: {
    		beautify: true,
    		indent: 4
    	},
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: false,
        mangle: false
    }
})