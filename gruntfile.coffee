path = require('path')
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
        fix_module_ids:
            options:
                fixModuleId: (moduleId, fileName) -> pkg.module + ':' + fileName.split('/').slice(-2).join('/').replace(/\.js$/, '')
                fixModuleDepsId: (moduleId, fileName) -> pkg.module + ':' + path.join(path.dirname(fileName), moduleId).split('/').slice(-2).join('/').replace(/\.js$/, '')
                appendModuleId: false
            client:
                expand: true
                cwd: 'output/client'
                src: '**/*.js'
                dest: 'output/client'
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
                    plugins: ['transform-react-jsx', 'transform-es2015-modules-systemjs', 'transform-object-assign']
                expand: true
                cwd: '.'
                src: ['{client,common,lib}/*.{js,jsx}']
                dest: 'output/client'
                ext: '.js'
    grunt.registerTask 'default', ['clean', 'eslint', 'babel', 'fix_module_ids']
