'use strict';

var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var plugin = require( './../lib' );

// Define paths to ESLint config files:
var config = resolve( __dirname, '..', '..', '..', '..', '..', 'etc', 'eslint', '.eslintrc.markdown.js' );
var ignore = resolve( __dirname, '..', '..', '..', '..', '..', 'etc', 'eslint', '.eslintignore' );

// Load a Markdown file:
var fpath = join( __dirname, 'fixtures', 'file.md' );
var file = readFileSync( fpath );

// Define plugin options:
var opts = {
	'config': config,
	'ignorePath': ignore
};

// Lint code blocks:
var out = remark().use( plugin, opts ).processSync( file.toString() ); // eslint-disable-line no-sync

console.log( out );
