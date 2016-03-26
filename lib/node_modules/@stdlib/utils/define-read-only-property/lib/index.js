'use strict';

/**
* FUNCTION: setReadOnly( obj, prop, value )
*	Defines a read-only property.
*
* @param {Object} obj - object on which to define the property
* @param {String} prop - property name
* @param {*} value - value to set
* @returns {Void}
*/
function setReadOnly( obj, prop, value ) {
	Object.defineProperty( obj, prop, {
		'value': value,
		'configurable': false,
		'writable': false,
		'enumerable': true
	});
} // end FUNCTION setReadOnly()


// EXPORTS //

module.exports = setReadOnly;
