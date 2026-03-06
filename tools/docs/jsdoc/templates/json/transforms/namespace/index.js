'use strict';

/**
* Transforms a `namespace` doclet element.
*
* @param {Object} node - doclet element
* @returns {Object} filtered object
*/
function transform( node ) {
	return {
		'name': node.name,
		'description': node.description || '',
		'access': node.access || '',
		'virtual': !!node.virtual
	};
}


// EXPORTS //

module.exports = transform;
