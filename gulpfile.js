const { series, src, dest, watch } = require('gulp');
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

function watchArchivos(){
    watch('src/scss/app.scss', css);
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;