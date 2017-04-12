'use strict';

// MODULES //

var hasOwn = require( '@stdlib/assert/has-own-property' );


// FUNCTIONS //

/**
* Filters a `params` doclet element.
*
* @private
* @param {Object} node - doclet element
* @returns {Object} filtered object
*/
function filter( node ) {
	var isNullable;
	var isOptional;
	var type;
	var desc;
	var val;

	if ( node.type ) {
		if ( node.type.names.length === 1 ) {
			type = node.type.names[ 0 ];
		} else {
			type = node.type.names;
		}
	} else {
		type = '';
	}
	desc = node.description || '';
	if ( hasOwn.call( node, 'defaultvalue' ) ) {
		val = node.defaultvalue;
	} else {
		val = '';
	}
	if ( typeof node.optional === 'boolean' ) {
		isOptional = node.optional;
	} else {
		isOptional = '';
	}
	if ( typeof node.nullable === 'boolean' ) {
		isNullable = node.nullable;
	} else {
		isNullable = '';
	}
	return {
		'name': node.name,
		'type': type,
		'description': desc,
		'default': val,
		'optional': isOptional,
		'nullable': isNullable
	};
} // end FUNCTION filter()


// MAIN //

/**
* Transforms `params` doclet elements.
*
* @param {Object[]} nodes - doclet elements
* @returns {Object[]} filtered objects
*/
function transform( nodes ) {
	var out;
	var i;

	out = new Array( nodes.length );
	for ( i = 0; i < nodes.length; i++ ) {
		out[ i ] = filter( nodes[ i ] );
	}
	return out;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
