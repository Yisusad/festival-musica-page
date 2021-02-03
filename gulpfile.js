const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');

// Funcion para SASS

function css(){
    return src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('./build/css') )
} 

function minificarcss(){
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
} 

exports.css = css;
exports.minificarcss = minificarcss;