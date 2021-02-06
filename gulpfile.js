const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades Css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades Js
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

// Funcion para SASS

function css(){
    return src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass())
        .pipe( postcss( [autoprefixer(), cssnano()] ))
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./build/css') )
} 

/**function minificarcss(){
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}  
**/

function javascript(){
    return src('src/js/**/*.js')
    .pipe( sourcemaps.init())
    .pipe( concat('bundle.js') )
    .pipe( terser() )
    .pipe(sourcemaps.write('.'))
    .pipe( rename({ suffix: '.min' }))
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
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.versionWebp = versionWebp;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);