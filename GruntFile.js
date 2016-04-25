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
                    "public/css/style.css": ["css/*.css", "css/!*bootstrap.css", "font-awesome/css/*.min.css"]
                }
            }
        },
        autoprefixer: {
            single_file: {
                src: "public/css/style.css",
                dest: "public/css/style.css"
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-autoprefixer");

    grunt.registerTask("css", ["less", "cssmin", "autoprefixer"]);

    grunt.registerTask("default", ["jshint", "css"]);

};
