let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss');

mix.setPublicPath('dist')
    .js('resources/js/tool.js', 'js')
    .sass('resources/sass/tool.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.js')],
    });
