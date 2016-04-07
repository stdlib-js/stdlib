'use strict';

// MODULES //

var transforms = require( './transforms' );


// VARIABLES //

var map = {
	'namespace': 'namespaces',
	'mixin': 'mixins',
	'function': 'functions',
	'member': 'properties',
	'event': 'events',
	'class': 'classes'
};

var recurse = {
	'namespace': true,
	'mixin': true,
	'function': false,
	'member': true,
	'event': false,
	'class': true
};


// TRANSFORM //

/**
* Recursively transforms doclet nodes.
*
* @param {Object} parentNode - parent doclet node
* @param {Object[]} childNodes - array of child nodes
* @param {String} parentLongName - long form of a parent name
* @returns {Void}
*/
function transform( parentNode, childNodes, parentLongname ) {
	var node;
	var tmp;
	var key;
	var out;
	var fcn;
	var i;

	// Filter for child nodes...
	tmp = [];
	for ( i = 0; i < childNodes.length; i++ ) {
		if ( childNodes[ i ].memberof === parentLongname ) {
			tmp.push( childNodes[ i ] );
		}
	}
	childNodes = tmp;
	if ( childNodes.length === 0 ) {
		return;
	}
	// For each child node, apply a transformation...
	for ( i = 0; i < childNodes.length; i++ ) {
		node = childNodes[ i ];

		// Apply a transform...
		fcn = transforms[ node.kind ];
		if ( fcn === void 0 ) {
			continue;
		}
		out = fcn( node );

		// Cache the transformed node...
		key = map[ node.kind ];
		tmp = parentNode[ key ];
		if ( tmp === void 0 ) {
			tmp = [];
			parentNode[ key ] = tmp;
		}
		tmp.push( out );

		// Check if we need to recurse...
		if ( recurse[ node.kind ] ) {
			transform( out, childNodes, node.longname );
		}
	}
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
