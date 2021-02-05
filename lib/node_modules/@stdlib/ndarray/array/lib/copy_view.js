/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MODULES //

var bufferCtors = require( '@stdlib/ndarray/base/buffer-ctors' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );


// FUNCTIONS //

/**
* Copies a "generic" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @returns {Array} output data buffer
*/
function generic( arr ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( arr.get( i ) );
	}
	return out;
}

/**
* Copies a "binary" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @returns {Array} output data buffer
*/
function binary( arr ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = allocUnsafe( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = arr.get( i );
	}
	return out;
}

/**
* Copies a "typed" ndarray view.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {string} dtype - data type
* @returns {Array} output data buffer
*/
function typed( arr, dtype ) {
	var ctor;
	var len;
	var out;
	var i;

	ctor = bufferCtors( dtype );
	len = arr.length;
	out = new ctor( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = arr.get( i );
	}
	return out;
}


// MAIN //

/**
* Copies an ndarray view to a data buffer.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {string} dtype - data type
* @returns {(Array|TypedArray|Buffer)} output data buffer
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0 ];
* var shape = [ 3 ];
* var strides = [ -1 ];
* var vec = ndarray( 'generic', buffer, shape, strides, 2, 'row-major' );
*
* var b = copyView( vec, 'float64' );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
function copyView( arr, dtype ) {
	// TODO: handle complex number dtypes!!
	if ( dtype === 'generic') {
		return generic( arr );
	}
	if ( dtype === 'binary' ) {
		return binary( arr );
	}
	return typed( arr, dtype );
}


// EXPORTS //

module.exports = copyView;
