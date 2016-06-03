/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/demo',
    'app/demo/shared',
    'app/demo/base',
    'app/demo/base/color',
    'app/demo/color',
    'app/demo/+hero',
    'app/demo/+base',
    'app/demo/+base/+color',
    'app/demo/+color',
    'app/demo/+base/+font',
    'app/demo/+base/+list',
    'app/demo/+ui',
    'app/demo/+widget',
    'app/demo/+ui/+list',
    'app/demo/+ui/+uilist',
    'app/demo/+base/+baselist',
    'app/demo/+widget/+widgetlist',
    'app/demo/+ui/+botton',
    'app/demo/+ui/+list-cmp',
    'app/demo/+ui/+dialog',
    'app/demo/+ui/+menu',
    'app/demo/shared/header',
    'app/demo/shared/list',
    'app/home',
];
var cliSystemConfigPackages = {
    'gfui': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
    }
};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'angular2': 'vendor/@angular',
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'gfui': 'vendor/gfui',
        'islider.js/build/iSlider': 'vendor/islider.js/build/iSlider.js',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map