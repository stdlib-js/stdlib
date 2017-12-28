'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;


// VARIABLES //

var etc = resolve( __dirname, '..', '..', '..' );
var config = join( etc, 'eslint', '.eslintrc.markdown.js' );
var eslint = resolve( etc, '..', 'tools', 'remark', 'plugins', 'remark-lint-eslint' );
var opts = {
	'config': config,
	'ignore': false,
	'useEslintrc': false
};


// MAIN //

/**
* Plugin.
*/
var plugin = [ [ require( eslint ).factory( opts ), [ 'error' ] ] ]; // eslint-disable-line stdlib/no-dynamic-require


// EXPORTS //

module.exports = plugin;
