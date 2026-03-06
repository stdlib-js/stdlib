/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// VARIABLES //

var SETTERS = {
	'float64': setFloat64,
	'float32': setFloat32,
	'int32': setInt32,
	'int16': setInt16,
	'int8': setInt8,
	'uint32': setUint32,
	'uint16': setUint16,
	'uint8': setUint8,
	'uint8c': setUint8c,
	'generic': setGeneric,
	'default': setArrayLike
};


// FUNCTIONS //

/**
* Sets an element in a `Float64Array`.
*
* @private
* @param {Float64Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( 4 );
*
* setFloat64( arr, 2, 3.0 );
*
* var v = arr[ 2 ];
* // returns 3.0
*/
function setFloat64( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a `Float32Array`.
*
* @private
* @param {Float32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array( 4 );
*
* setFloat32( arr, 2, 3.0 );
*
* var v = arr[ 2 ];
* // returns 3.0
*/
function setFloat32( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in an `Int32Array`.
*
* @private
* @param {Int32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var arr = new Int32Array( 4 );
*
* setInt32( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setInt32( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in an `Int16Array`.
*
* @private
* @param {Int16Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var arr = new Int16Array( 4 );
*
* setInt16( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setInt16( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in an `Int8Array`.
*
* @private
* @param {Int8Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var arr = new Int8Array( 4 );
*
* setInt8( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setInt8( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a `Uint32Array`.
*
* @private
* @param {Uint32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var arr = new Uint32Array( 4 );
*
* setUint32( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setUint32( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a `Uint16Array`.
*
* @private
* @param {Uint16Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var arr = new Uint16Array( 4 );
*
* setUint16( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setUint16( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a `Uint8Array`.
*
* @private
* @param {Uint8Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var arr = new Uint8Array( 4 );
*
* setUint8( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setUint8( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a `Uint8ClampedArray`.
*
* @private
* @param {Uint8ClampedArray} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {number} value - value to set
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var arr = new Uint8ClampedArray( 4 );
*
* setUint8c( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setUint8c( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in a generic `Array`.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {*} value - value to set
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* setGeneric( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setGeneric( arr, idx, value ) {
	arr[ idx ] = value;
}

/**
* Sets an element in an indexed array-like object.
*
* @private
* @param {Collection} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {*} value - value to set
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* setArrayLike( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setArrayLike( arr, idx, value ) {
	arr[ idx ] = value;
}


// MAIN //

/**
* Returns an accessor function for setting an element in an indexed array-like object.
*
* @param {string} dtype - array dtype
* @returns {Function} accessor
*
* @example
* var dtype = require( '@stdlib/array/dtype' );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var set = setter( dtype( arr ) );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
function setter( dtype ) {
	var f = SETTERS[ dtype ];
	if ( typeof f === 'function' ) {
		return f;
	}
	return SETTERS.default;
}


// EXPORTS //

module.exports = setter;
