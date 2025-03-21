'use strict';

// MODULES //

var transformReturns = require( './returns.js' );
var transformExamples = require( './examples.js' );
var transformParams = require( './params.js' );


// MAIN //

/**
* Transforms a `event` doclet element.
*
* @param {Object} node - doclet element
* @returns {Object} filtered object
*/
function transform( node ) {
	var out;

	out = {
		'name': node.name,
		'description': node.description || '',
		'access': node.access || '',
		'virtual': !!node.virtual
	};
	if ( node.returns ) {
		out.returns = transformReturns( node.returns );
	}
	if ( node.examples ) {
		out.examples = transformExamples( node.examples );
	} else {
		out.examples = [];
	}
	if ( node.params ) {
		out.parameters = transformParams( node.params );
	} else {
		out.parameters = [];
	}
	return out;
}


// EXPORTS //

module.exports = transform;
