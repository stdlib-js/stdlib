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

var GETTERS = {
	'float64': getFloat64,
	'float32': getFloat32,
	'int32': getInt32,
	'int16': getInt16,
	'int8': getInt8,
	'uint32': getUint32,
	'uint16': getUint16,
	'uint8': getUint8,
	'uint8c': getUint8c,
	'generic': getGeneric,
	'default': getArrayLike
};


// FUNCTIONS //

/**
* Returns an element from a `Float64Array`.
*
* @private
* @param {Float64Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1, 2, 3, 4 ] );
*
* var v = getFloat64( arr, 2 );
* // returns 3.0
*/
function getFloat64( arr, idx ) {
	return arr[ idx ];
}

/**
* Returns an element from a `Float32Array`.
*
* @private
* @param {Float32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array( [ 1, 2, 3, 4 ] );
*
* var v = getFloat32( arr, 2 );
* // returns 3.0
*/
function getFloat32( arr, idx ) {
	return arr[ idx ];
}

/**
* Returns an element from an `Int32Array`.
*
* @private
* @param {Int32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var v = getInt32( arr, 2 );
* // returns 3
*/
function getInt32( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from an `Int16Array`.
*
* @private
* @param {Int16Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var v = getInt16( arr, 2 );
* // returns 3
*/
function getInt16( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from an `Int8Array`.
*
* @private
* @param {Int8Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var v = getInt8( arr, 2 );
* // returns 3
*/
function getInt8( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from a `Uint32Array`.
*
* @private
* @param {Uint32Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var arr = new Uint32Array( [ 1, 2, 3, 4 ] );
*
* var v = getUint32( arr, 2 );
* // returns 3
*/
function getUint32( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from a `Uint16Array`.
*
* @private
* @param {Uint16Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var arr = new Uint16Array( [ 1, 2, 3, 4 ] );
*
* var v = getUint16( arr, 2 );
* // returns 3
*/
function getUint16( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from a `Uint8Array`.
*
* @private
* @param {Uint8Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var arr = new Uint8Array( [ 1, 2, 3, 4 ] );
*
* var v = getUint8( arr, 2 );
* // returns 3
*/
function getUint8( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from a `Uint8ClampedArray`.
*
* @private
* @param {Uint8ClampedArray} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var arr = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
*
* var v = getUint8c( arr, 2 );
* // returns 3
*/
function getUint8c( arr, idx ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	return arr[ idx ];
}

/**
* Returns an element from a generic `Array`.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {*} element value
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var v = getGeneric( arr, 2 );
* // returns 3
*/
function getGeneric( arr, idx ) {
	return arr[ idx ];
}

/**
* Returns an element from an indexed array-like object.
*
* @private
* @param {Collection} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {*} element value
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var v = getArrayLike( arr, 2 );
* // returns 3
*/
function getArrayLike( arr, idx ) {
	return arr[ idx ];
}


// MAIN //

/**
* Returns an accessor function for retrieving an element from an indexed array-like object.
*
* @param {string} dtype - array dtype
* @returns {Function} accessor
*
* @example
* var dtype = require( '@stdlib/array/dtype' );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var get = getter( dtype( arr ) );
* var v = get( arr, 2 );
* // returns 3
*/
function getter( dtype ) {
	var f = GETTERS[ dtype ];
	if ( typeof f === 'function' ) {
		return f;
	}
	return GETTERS.default;
}


// EXPORTS //

module.exports = getter;
