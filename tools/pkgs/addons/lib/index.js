'use strict';

/**
* Find add-ons.
*
* @module @stdlib/tools/pkgs/addons
*
* @example
* var findAddons = require( '@stdlib/tools/pkgs/addons' );
*
* findAddons( clbk );
*
* function clbk( error, pkgs ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( pkgs );
* }
*
* @example
* var findAddons = require( '@stdlib/tools/pkgs/addons' );
*
* var pkgs = findAddons.sync();
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var findAddons = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( findAddons, 'sync', sync );


// EXPORTS //

module.exports = findAddons;
