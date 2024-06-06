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

// MODULES //

var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array.
*
* @private
* @param {Object} x - object containing meta data for the first input ndarray
* @param {string} x.ref - reference to original input ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeInteger} x.length - number of elements
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - accessors for accessing data buffer elements
* @param {Object} y - object containing meta data for the second input ndarray
* @param {string} y.ref - reference to original input ndarray-like object
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeInteger} y.length - number of elements
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} y.accessors - accessors for accessing data buffer elements
* @param {Object} z - object containing output ndarray meta data
* @param {string} z.dtype - data type
* @param {Collection} z.data - data buffer
* @param {NonNegativeInteger} z.length - number of elements
* @param {NonNegativeIntegerArray} z.shape - dimensions
* @param {IntegerArray} z.strides - stride lengths
* @param {NonNegativeInteger} z.offset - index offset
* @param {string} z.order - specifies whether `z` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} z.accessors - accessors for accessing data buffer elements
* @param {Function} fcn - function to apply
* @param {*} thisArg - function execution context
* @returns {void}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/math/base/ops/caddf' );
*
* // Create data buffers:
* var xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var ybuf = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var zbuf = new Complex64Array( 4 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 1 ];
* var sy = [ 2, 1 ];
* var sz = [ 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Define getters and setters:
* function getter( buf, idx ) {
*     return buf.get( idx );
* }
*
* function setter( buf, idx, value ) {
*     buf.set( value, idx );
* }
*
* // Create the input and output ndarray-like objects:
* var x = {
*     'ref': null,
*     'dtype': 'complex64',
*     'data': xbuf,
*     'length': 4,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
* x.ref = x;
*
* var y = {
*     'ref': null,
*     'dtype': 'complex64',
*     'data': ybuf,
*     'length': 4,
*     'shape': shape,
*     'strides': sy,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
* y.ref = y;
*
* var z = {
*     'ref': null,
*     'dtype': 'complex64',
*     'data': zbuf,
*     'length': 4,
*     'shape': shape,
*     'strides': sz,
*     'offset': oz,
*     'order': 'row-major',
*     'accessors': [ getter, setter ]
* };
*
* // Apply the function:
* map2Right( x, y, z, naryFunction( add, 2 ) );
*
* var v = z.data.get( 0 );
*
* var re = realf( v );
* // returns 2.0
*
* var im = imagf( v );
* // returns 3.0
*/
function map2Right( x, y, z, fcn, thisArg ) {
	var xbuf;
	var ybuf;
	var zbuf;
	var ordx;
	var ordy;
	var ordz;
	var xget;
	var yget;
	var zset;
	var xref;
	var yref;
	var shx;
	var shy;
	var shz;
	var len;
	var sx;
	var sy;
	var sz;
	var ox;
	var oy;
	var oz;
	var ix;
	var iy;
	var iz;
	var i;

	// Cache the total number of elements over which to iterate:
	len = x.length;

	// Cache the array shapes:
	shx = x.shape;
	shy = y.shape;
	shz = z.shape;

	// Cache references to the input and output ndarray data buffers:
	xbuf = x.data;
	ybuf = y.data;
	zbuf = z.data;

	// Cache references to the respective stride arrays:
	sx = x.strides;
	sy = y.strides;
	sz = z.strides;

	// Cache the indices of the first indexed elements in the respective ndarrays:
	ox = x.offset;
	oy = y.offset;
	oz = z.offset;

	// Cache the respective array orders:
	ordx = x.order;
	ordy = y.order;
	ordz = z.order;

	// Cache accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	zset = z.accessors[ 1 ];

	// Cache references to the original input arrays:
	xref = x.ref;
	yref = y.ref;

	// Check for a zero-dimensional array...
	if ( shx.length === 0 && shy.length === 0 ) {
		zset( zbuf, oz, fcn.call( thisArg, xget( xbuf, ox ), yget( ybuf, oy ), 0, [ xref, yref ] ) ); // eslint-disable-line max-len
		return;
	}
	// Iterate over the arrays based on the linear **view** index, regardless as to how the data is stored in memory (note: this has negative performance implications for non-contiguous ndarrays due to a lack of data locality)...
	for ( i = len-1; i >= 0; i-- ) {
		ix = vind2bind( shx, sx, ox, ordx, i, MODE );
		iy = vind2bind( shy, sy, oy, ordy, i, MODE );
		iz = vind2bind( shz, sz, oz, ordz, i, MODE );
		zset( zbuf, iz, fcn.call( thisArg, xget( xbuf, ix ), yget( ybuf, iy ), i, [ xref, yref ] ) ); // eslint-disable-line max-len
	}
}


// EXPORTS //

module.exports = map2Right;
