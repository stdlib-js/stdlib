'use strict';

/**
* Transforms `returns` doclet elements.
*
* @param {Object[]} nodes - doclet elements
* @returns {Object} filtered object
*/
function transform( nodes ) {
	var type;
	var desc;
	if ( nodes.type ) {
		if ( nodes.type.names.length === 1 ) {
			type = nodes.type.names[ 0 ];
		} else {
			type = nodes.type.names;
		}
	} else {
		type = '';
	}
	desc = nodes.description || '';
	return {
		'type': type,
		'description': desc
	};
}


// EXPORTS //

module.exports = transform;
