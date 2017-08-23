'use strict';

var createElement = require( './../lib' );

var opts = {
	'className': 'eqn',
	'align': 'left',
	'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt',
	'label': 'eq:erf'
};

createElement( opts, done );

function done( error, out ) {
	if ( error ) {
		throw error;
	}
	console.log( out );
}
