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
	if ( nodes[ 0 ].type ) {
		if ( nodes[ 0 ].type.names.length === 1 ) {
			type = nodes[ 0 ].type.names[ 0 ];
		} else {
			type = nodes[ 0 ].type.names;
		}
	} else {
		type = '';
	}
	desc = nodes[ 0 ].description || '';
	return {
		'type': type,
		'description': desc
	};
}


// EXPORTS //

module.exports = transform;
