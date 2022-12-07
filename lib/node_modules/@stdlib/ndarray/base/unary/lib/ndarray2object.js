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

var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorGetter = require( '@stdlib/array/base/accessor-getter' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var getter = require( '@stdlib/array/base/getter' );
var setter = require( '@stdlib/array/base/setter' );


// MAIN //

/**
* Copies ndarray meta-data to an object likely to have the same "hidden" shape.
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that loop iteration functions are provided consistent argument "shapes".
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @returns {Object} object containing ndarray meta data
*/
function ndarray2object( x ) {
	var xbuf;
	var bool;
	var dt;

	xbuf = x.data;
	dt = x.dtype;

	bool = isAccessorArray( xbuf );

	return {
		'dtype': dt,
		'data': xbuf,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessorProtocol': bool,
		'accessors': ( bool ) ?
			[ accessorGetter( dt ), accessorSetter( dt ) ] :
			[ getter( dt ), setter( dt ) ]
	};
}


// EXPORTS //

module.exports = ndarray2object;
