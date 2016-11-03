'use strict';

var menu = require( './../lib' );

var opts = {
	'title': 'stdlib',
	'url': '/',
	'mount': '/@stdlib/'
};

menu( opts, clbk );

function clbk( error, results ) {
	if ( error ) {
		throw error;
	}
	console.log( results.html );
}
