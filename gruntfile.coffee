module.exports = (grunt) -> 
    pkg = grunt.file.readJSON('package.json')
    require('load-grunt-tasks') grunt
    require('time-grunt') grunt
    grunt.initConfig
        pkg: pkg
        clean:
            all: 'es5'
        eslint:
            options:
                configFile: '.eslintrc'
            widget: 'widget/*.js'
        watch:
            js:
                files: '{libs,widget}/*.js'
                tasks: 'default'
        babel:
            options:
                plugins: ['transform-react-jsx', 'transform-es2015-modules-systemjs', 'transform-object-assign']
                presets: ['es2015']
                moduleIds: true,
                getModuleId: (moduleName) -> return pkg.module + '/' + moduleName
            widget:
                expand: true
                cwd: 'widget'
                src: '*.js'
                dest: 'es5'
            libs:
                expand: true
                cwd: 'libs'
                src: '*.js'
                dest: 'es5'
    grunt.registerTask 'default', ['clean', 'eslint','babel']