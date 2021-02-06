const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


// Funcion para SASS

function css(){
    return src('src/scss/app.scss')
        .pipe( sass({
        outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
} 


function minificarcss(){
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
} 

function javascript(){
    return src('src/js/**/*.js')
    .pipe( concat('bundle.js') )
    .pipe( dest('./build/js'))
}

function imagenes(){
    return src('src/img/**/*')
    .pipe( imagemin())
    .pipe( dest( './build/img' ) ) 
    .pipe( notify( {message: 'Imagen Minificada'} ) );
}

function versionWebp(){
    return src('src/img/**/*')
    .pipe( webp() )
    .pipe( dest( './build/img'))
    .pipe( notify( {message: 'Webp Creado'} ) )
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css);  //Todas las carpeta y archivos de Scss
    watch('src/js/**/*.js', javascript);
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.versionWebp = versionWebp;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);