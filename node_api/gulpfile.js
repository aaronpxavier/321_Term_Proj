'use strict'

var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
var fs = require('fs');

var remote_conn = JSON.parse(fs.readFileSync('remote_conn.json', 'utf8'));

var config = {
    host: remote_conn.host,
    port: remote_conn.port,
    username: remote_conn.user,
    password: remote_conn.pass
};

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
});


gulp.task('deploy', function () {
    return gulp
        .src(['dist/**/*', 'package.json'])
        .pipe(gulpSSH.dest('app/dist'))

;});


gulp.task('deploy2', function () {
    return gulpSSH
        .shell(['cd ~/  && chmod -R 700 app', 'cd ~/app && mv dist/package.json ./', 'npm install --production', 'pm2 restart server'], {filePath: 'shell.log'})
        .pipe(gulp.dest('logs'))
});
