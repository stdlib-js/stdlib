/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var without = require( '@stdlib/array/base/without' );
var wrap = require( './callback_wrapper.js' );


// MAIN //

/**
* Performs a reduction over an input ndarray according to a callback function and assigns results to a provided output ndarray.
*
* @private
* @param {Function} fcn - reduction function
* @param {Array<Object>} arrays - ndarrays
* @param {NonNegativeIntegerArray} ibuf - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - list of loop dimensions
* @param {NonNegativeIntegerArray} cdims - list of "core" dimensions
* @param {Options} opts - function options
* @param {boolean} hasOpts - boolean indicating whether to pass an options argument to a reduction function
* @param {Function} clbk - callback function
* @param {thisArg} thisArg - callback execution context
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
* var Float64Array = require( '@stdlib/array/float64' );
* var filled = require( '@stdlib/array/base/filled' );
* var zeros = require( '@stdlib/array/base/zeros' );
* var base = require( '@stdlib/ndarray/base/every-by' );
*
* function clbk( value ) {
*     return value > 0.0;
* }
*
* // Create data buffers:
* var xbuf = toAccessorArray( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ) );
* var ybuf = toAccessorArray( filled( false, 1 ) );
*
* // Define the array shapes:
* var xsh = [ 2, 2 ];
* var ysh = [];
*
* // Define the array strides:
* var sx = [ 6, 1 ];
* var sy = [ 0 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major',
*     'accessors': accessors( ybuf ).accessors
* };
*
* // Create a workspace array for storing iteration indices:
* var ibuf = zeros( xsh.length );
*
* // Define the loop and core dimensions:
* var ldims = [];
* var cdims = [ 0, 1 ];
*
* // Perform a reduction:
* unary0d( base, [ x, y ], ibuf, ldims, cdims, {}, false, clbk, {} );
*
* var v = y.data.get( 0 );
* // returns true
*/
function unary0d( fcn, arrays, ibuf, ldims, cdims, opts, hasOpts, clbk, thisArg ) {
	var ybuf;
	var arr;
	var y;
	var f;

	y = arrays[ 1 ];
	ybuf = y.data;

	f = wrap( arrays[ 0 ].ref, ibuf, ldims, [], cdims, clbk, thisArg );
	arr = without( arrays, 1 );
	if ( hasOpts ) {
		y.accessors[ 1 ]( ybuf, y.offset, fcn( arr, opts, f ) );
	} else {
		y.accessors[ 1 ]( ybuf, y.offset, fcn( arr, f ) );
	}
}


// EXPORTS //

module.exports = unary0d;
