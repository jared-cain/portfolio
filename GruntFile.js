module.exports = function(grunt) {


    grunt.initConfig({

        jshint: {
            files: ["*.js"],
            options: {
                esnext: true,
                globals: {
                    jQuery: true
                }
            }
        },
        less: {
            production: {
                files: {
                    "public/css/style.css": ["less/*.less"]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "public/css/style.css": ["css/*.css", "css/!*bootstrap.css", "node_modules/node-snackbar/dist/snackbar.min.css"]
                }
            }
        },
        autoprefixer: {
            single_file: {
                src: "public/css/style.css",
                dest: "public/css/style.css"
            }
        },
        browserify: {
			client: {
				src: ["app-client.js"],
				dest: "public/js/bundle.js"
			}
		},
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 4,
                },
                files: [{
                    expand: true,
                    src: ['img/**/*.jpg', 'img/*.jpg'],
                    dest: 'public/'
                }]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-imagemin");

    grunt.registerTask("css", ["less", "cssmin", "autoprefixer"]);
    grunt.registerTask("js", ["browserify"]);

    grunt.registerTask("default", ["jshint", "css", "js"]);

    grunt.registerTask("heroku", ["css", "js", "imagemin"]);

};
