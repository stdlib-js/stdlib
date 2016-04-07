'use strict';

// MODULES //

var transformExamples = require( './examples.js' );
var transformParams = require( './params.js' );


// TRANSFORM //

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
		'extends': node.augments || [],
		'fires': node.fires || '',
		'constructor': {
			'name': node.name,
			'description': node.description
		},
		'access': node.access || '',
		'virtual': !!node.virtual
	};
	if ( node.examples ) {
		out.constructor.examples = transformExamples( node.examples );
	} else {
		out.constructor.examples = [];
	}
	if ( node.params ) {
		out.constructor.parameters = transformParams( node.params );
	} else {
		out.constructor.parameters = [];
	}
	return out;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
