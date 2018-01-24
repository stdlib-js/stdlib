'use strict';

/**
* Transforms a `member` doclet element.
*
* @param {Object} node - doclet element
* @returns {Object} filtered object
*/
function transform( node ) {
	var type;
	if ( node.type ) {
		if ( node.type.length === 1 ) {
			type = node.type[ 0 ];
		} else {
			type = node.type;
		}
	} else {
		type = '';
	}
	return {
		'name': node.name,
		'description': node.description || '',
		'type': type,
		'access': node.access || '',
		'virtual': !!node.virtual
	};
}


// EXPORTS //

module.exports = transform;
