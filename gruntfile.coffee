module.exports = (grunt) -> 
    pkg = grunt.file.readJSON('package.json')
    require('load-grunt-tasks') grunt
    require('time-grunt') grunt
    grunt.initConfig
        pkg: pkg
        clean:
            all: ['output']
        eslint:
            options:
                configFile: '.eslintrc'
            all:[ '{server,client,common}/*.{js,jsx}']
        watch:
            js:
                files: '{server,client,common}/*.{js,jsx}'
                tasks: 'default'
        babel:
            options:
                presets: ['es2015']
            server:
                options:
                    plugins: ['transform-react-jsx', 'transform-es2015-modules-commonjs', 'transform-object-assign']
                expand: true
                cwd: '.'
                src: ['{server,common,lib}/*.{js,jsx}']
                dest: 'output/server'
                ext: '.js'
            client:
                options:
                    moduleIds: true,
                    getModuleId: (moduleName) -> return pkg.module + ':' + moduleName
                    plugins: ['transform-react-jsx', 'transform-es2015-modules-systemjs', 'transform-object-assign']
                expand: true
                cwd: '.'
                src: ['{client,common,lib}/*.{js,jsx}']
                dest: 'output/client'
                ext: '.js'
    grunt.registerTask 'default', ['clean', 'eslint', 'babel']