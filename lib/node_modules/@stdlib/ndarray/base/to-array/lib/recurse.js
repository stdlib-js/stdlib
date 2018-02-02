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

// MAIN //

/**
* Recursively converts an ndarray to a generic array.
*
* @private
* @param {(ArrayLikeObject|TypedArray|Buffer)} buffer - data buffer
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - array strides
* @param {NonNegativeInteger} offset - index offset
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {NonNegativeInteger} dim - dimension
* @returns {(Array|Array<Array>)} output array
*/
function recurse( buffer, shape, strides, offset, order, dim ) {
	var stride;
	var item;
	var out;
	var n;
	var i;

	if ( dim >= shape.length ) {
		return buffer[ offset ];
	}
	out = [];

	n = shape[ dim ];
	stride = strides[ dim ];

	for ( i = 0; i < n; i++ ) {
		item = recurse( buffer, shape, strides, offset, order, dim+1 );
		out.push( item );
		offset += stride;
	}
	return out;
}


// EXPORTS //

module.exports = recurse;
