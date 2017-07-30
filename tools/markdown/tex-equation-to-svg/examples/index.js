'use strict';

var tex2svg = require( './../lib' );

var eqn = '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt.';

tex2svg( eqn, done );

function done( error, svg ) {
	if ( error ) {
		throw error;
	}
	console.log( svg );
}
