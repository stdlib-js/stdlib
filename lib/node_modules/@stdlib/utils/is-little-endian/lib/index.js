'use strict';

// MODULES //

var ctors = require( './ctors.js' );


// IS LITTLE ENDIAN //

/**
* FUNCTION: isLittleEndian()
*	Returns a boolean indicating if an environment is little endian.
*
* @returns {Boolean} boolean indicating if an environment is little endian
*/
function isLittleEndian() {
	var uint16_view;
	var uint8_view;

	uint16_view = new ctors[ 'uint16' ]( 1 );

	// Set the uint16 view to a value having distinguishable lower and higher order words.
	// 4660 => 0x1234 => 0x12 0x34 => '00010010 00110100' => (0x12,0x34) == (18,52)
	uint16_view[ 0 ] = 0x1234;

	// Create a uint8 view on top of the uint16 buffer:
	uint8_view = new ctors[ 'uint8' ]( uint16_view.buffer );

	// If little endian, the least significant byte will be first...
	return ( uint8_view[ 0 ] === 0x34 );
} // end FUNCTION isLittleEndian()


// EXPORTS //

module.exports = isLittleEndian();
