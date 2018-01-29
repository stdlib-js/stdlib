'use strict';

var licenses = require( './../../licenses/lib' );
var infer = require( './../lib' );

var pattern = '{readme*,licen[cs]e*,copying*}';

licenses( onResults );

function onResults( error, results ) {
	if ( error ) {
		throw error;
	}
	infer( results, pattern, onInfer );
}

function onInfer( error, results ) {
	if ( error ) {
		throw error;
	}
	console.dir( results );
}
