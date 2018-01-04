'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;


// VARIABLES //

var etc = resolve( __dirname, '..', '..', '..' );
var lint = resolve( etc, '..', 'lib', 'node_modules', '@stdlib', '_tools', 'remark', 'plugins', 'remark-lint-equations' );


// MAIN //

/**
* Plugin.
*/
var plugin = [ [ require( lint ), [ 'error' ] ] ]; // eslint-disable-line stdlib/no-dynamic-require


// EXPORTS //

module.exports = plugin;
