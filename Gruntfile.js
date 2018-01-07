module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // configure clean to delete files and folders -----------------------------------
        clean: {
            options: {force: true},
            lib: ['demo/client/lib'],
            jsTemplate: ['src/js/*.template.js'],
            scripts: ['dist/js'],
            scss: ['src/css/*', 'dist/css']
        },
        // configure eslint to validate js files -----------------------------------
        eslint: {
            options: {
                configFile: ".eslintrc.json",
                fix: true
            },
            src: ['src/js/**/*.js']
        },
        // configure compass to compiles scss files to css files -----------------------------------
        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    specify: 'src/scss/angularOpenSource.scss',
                    cssDir: 'src/css',
                    assetCacheBuster: false
                }

            }
        },
        // configure ngtemplates to cache html templates  ------------------------------------
        ngtemplates: {
            image_slider: {
                options: {
                    module: 'templateCacher',
                    standalone: true
                },
                cwd: 'src',
                src: 'view/*.html',
                dest: 'src/js/angularOpenSource.templates.js'

            }
        },
        // configure concat to concat various files together ------------------------------------
        concat: {
            options: {
                force: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: [
                    'src/js/angularOpenSource.js',
                    'src/js/angularOpenSource.templates.js',
                    'src/js/angularOpenSource.directive.js',
                    'src/js/angularOpenSource.controller.js'
                ],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        // configure uglify to minify js files ------------------------------------
        uglify: {
            options: {
                sourceMap: true,
                beautify: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            jsminify: {
                src: ['dist/js/<%= pkg.name %>.js'],
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            css: {
                src: 'src/css/*.css',
                dest: 'dist/css/<%= pkg.name %>.css'
            },
            lib: {
                expand: true,
                cwd: 'dist/',
                src: ['**'],
                dest: 'demo/lib/',
            },
        },
        // configure cssmin to minify css files ------------------------------------
        cssmin: {
            cssminify: {
                src: 'dist/css/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['clean', 'eslint', 'compass', 'ngtemplates', 'concat', 'uglify', 'copy:css', 'cssmin', 'copy:lib', 'readme_generator']
            },
            scripts: {
                files: ['src/js/*.js', '!src/js/image_slider.template.js', 'src/view/*.html'],
                tasks: ['clean:scripts', 'clean:jsTemplate', 'clean:lib', 'eslint', 'ngtemplates', 'concat', 'uglify', 'copy:lib']
            },
            scss: {
                files: ['src/scss/*.scss'],
                tasks: ['clean:scss', 'clean:lib', 'compass', 'copy:css', 'cssmin', 'copy:lib'],
            },
            readme: {
                files: ['readme/**/*.md','CHANGELOG.md'],
                tasks: ['readme_generator:my_generator'],
            }
        },


        readme_generator: {
            my_generator: {
                options: {
                    readme_folder: "readme",
                    output: "README.md",
                    table_of_contents: true,
                    toc_extra_links: [],
                    generate_changelog: false,
                    changelog_folder: "changelogs",
                    changelog_version_prefix: null,
                    changelog_insert_before: null,
                    banner: null,
                    has_travis: false,
                    github_username: "sukheja-varun",
                    travis_branch: "develop",
                    generate_footer: false,
                    generate_title: true,
                    package_title: null,
                    package_name: null,
                    package_desc: null,
                    informative: true,
                    h1: "#",
                    h2: "##",
                    back_to_top_custom: null
                },
                order: {
                    // Title of the piece and the File name goes here
                    // "Filename" : "Title"
                    "features.md": "Features",
                    "prerequisites.md": "Prerequisites",
                    "installation.md": "Installation",
                    "setup.md": "Setup",
                    "run.md": "Run Application",
                    "code.md": "Code",
                    "../CHANGELOG.md": "Changelog",
                    "legal.md": "License",
                }
            }
        }


    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-readme-generator');

    // ===========================================================================
    // CREATE TASKS ==============================================================
    // ===========================================================================
    grunt.registerTask('default', [
        'clean',
        'eslint',
        'compass',
        'ngtemplates',
        'concat',
        'uglify',
        'copy:css',
        'cssmin',
        'copy:lib',
        'readme_generator',
        'watch'
    ]);
};