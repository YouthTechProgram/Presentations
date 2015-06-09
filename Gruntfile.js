module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
		sass: {
            dist: {
                options: {
					loadPath: [
						'_resources/lib-bourbon/bourbon.scss'
					],
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'sample.css': 'sample.scss'
                }
            }
        },
	});
	
	grunt.registerTask('default', [ 'sass' ]);
};