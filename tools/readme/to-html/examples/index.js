'use strict';

var resolve = require( 'path' ).resolve;
var convert = require( './../lib' );

var fpath = resolve( __dirname, '..', 'README.md' );
var opts = {
	'title': 'Beep',
	'source': 'https://github.com/stdlib-js/stdlib/develop/tools/pkg/readme-to-html/lib/index.js',
	'append': '<script type="text/javascript">console.log("Beep!");</script>'
};

convert( fpath, opts, onFinish );

function onFinish( error, html ) {
	if ( error ) {
		throw error;
	}
	console.log( html );
}
