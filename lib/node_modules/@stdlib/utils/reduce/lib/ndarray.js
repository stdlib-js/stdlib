/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Applies a function against an accumulator and each element in an array and returns the accumulated result.
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.ref - reference to original input ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeInteger} x.length - number of elements
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - accessors for accessing data buffer elements
* @param {*} initial - initial value
* @param {Function} fcn - function to apply
* @param {*} thisArg - function execution context
* @returns {*} accumulated result
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var cadd = require( '@stdlib/math/base/ops/cadd' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
*
* // Create a data buffer:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Define a getter:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* // Create the input ndarray-like object:
* var x = {
*     'ref': null,
*     'dtype': 'complex64',
*     'data': xbuf,
*     'length': 4,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter ]
* };
* x.ref = x;
*
* // Compute the sum:
* var v = reduce( x, new Complex64( 0.0, 0.0 ), naryFunction( cadd, 2 ) );
*
* var re = realf( v );
* // returns 16.0
*
* var im = imagf( v );
* // returns 20.0
*/
function reduce( x, initial, fcn, thisArg ) {
	var xbuf;
	var ordx;
	var acc;
	var len;
	var get;
	var ref;
	var shx;
	var sx;
	var ox;
	var ix;
	var i;

	// Cache the total number of elements over which to iterate:
	len = x.length;

	// Cache the input array shape:
	shx = x.shape;

	// Cache reference to the input ndarray data buffer:
	xbuf = x.data;

	// Cache reference to the stride array:
	sx = x.strides;

	// Cache the index of the first indexed element:
	ox = x.offset;

	// Cache the array order:
	ordx = x.order;

	// Cache the element accessor:
	get = x.accessors[ 0 ];

	// Cache the reference to the original input array:
	ref = x.ref;

	// Check for a zero-dimensional array...
	if ( shx.length === 0 ) {
		return fcn.call( thisArg, initial, get( xbuf, ox ), 0, ref );
	}
	// Iterate over each element based on the linear **view** index, regardless as to how the data is stored in memory (note: this has negative performance implications for non-contiguous ndarrays due to a lack of data locality)...
	acc = initial;
	for ( i = 0; i < len; i++ ) {
		ix = vind2bind( shx, sx, ox, ordx, i, MODE );
		acc = fcn.call( thisArg, acc, get( xbuf, ix ), i, ref );
	}
	return acc;
}


// EXPORTS //

module.exports = reduce;
