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
	'complex128': setComplex128,
	'complex64': setComplex64,
	'default': setArrayLike
};


// FUNCTIONS //

/**
* Sets an element in a `Complex128Array`.
*
* @private
* @param {Complex128Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {(Collection|Complex|ComplexArray)} value - value(s)
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var arr = new Complex128Array( [ 1, 2, 3, 4 ] );
*
* setComplex128( arr, 1, new Complex128( 10.0, 11.0 ) );
* var v = arr.get( 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 11.0
*/
function setComplex128( arr, idx, value ) {
	arr.set( value, idx );
}

/**
* Sets an element in a `Complex64Array`.
*
* @private
* @param {Complex64Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {(Collection|Complex|ComplexArray)} value - value(s)
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* setComplex64( arr, 1, new Complex64( 10.0, 11.0 ) );
* var v = arr.get( 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns 11.0
*/
function setComplex64( arr, idx, value ) {
	arr.set( value, idx );
}

/**
* Sets an element in an array-like object supporting the get/set protocol.
*
* @private
* @param {Collection} arr - input array
* @param {NonNegativeInteger} idx - element index
* @param {(Collection|Complex|ComplexArray)} value - value(s)
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* function get( idx ) {
*    return arr[ idx ];
* }
*
* function set( value, idx ) {
*    arr[ idx ] = value;
* }
*
* arr.get = get;
* arr.set = set;
*
* setArrayLike( arr, 2, 10 );
*
* var v = arr[ 2 ];
* // returns 10
*/
function setArrayLike( arr, idx, value ) {
	arr.set( value, idx );
}


// MAIN //

/**
* Returns an accessor function for setting an element in an array-like object supporting the get/set protocol.
*
* @param {string} dtype - array dtype
* @returns {Function} accessor
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var dtype = require( '@stdlib/array/dtype' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var set = setter( dtype( arr ) );
* set( arr, 1, new Complex64( 10.0, 11.0 ) );
*
* var v = arr.get( 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns 11.0
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
