'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;


// VARIABLES //

var etc = resolve( __dirname, '..', '..', '..' );
var config = join( etc, 'eslint', '.eslintrc.markdown.js' );
var ignore = join( etc, 'eslint', '.eslintignore' );
var eslint = resolve( etc, '..', 'tools', 'remark', 'plugins', 'remark-lint-eslint' );


// MAIN //

/**
* Plugin.
*/
var plugin = [
	[
		require( eslint ),
		{
			'config': config,
			'ignorePath': ignore
		}
	]
];


// EXPORTS //

module.exports = plugin;
