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

// FUNCTIONS //

/**
* Returns an ndarray buffer element.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @returns {*} element
*/
function getIndexed( buf, idx ) {
	return buf[ idx ];
}

/**
* Returns an ndarray buffer element using an accessor method.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @returns {*} element
*/
function getAccessor( buf, idx ) {
	return buf.get( idx );
}

/**
* Sets an ndarray buffer element.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @param {*} value - value to set
*/
function setIndexed( buf, idx, value ) {
	buf[ idx ] = value;
}

/**
* Sets an ndarray buffer element using an accessor method.
*
* @private
* @param {Collection} buf - data buffer
* @param {NonNegativeInteger} idx - element index
* @param {*} value - value to set
*/
function setAccessor( buf, idx, value ) {
	buf.set( value, idx );
}


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
function copy( x ) {
	var xbuf;
	var bool;

	xbuf = x.data;
	bool = Boolean( xbuf.get && xbuf.set ); // Note: intentional weak check, as don't explicitly check for functions for (perhaps marginally) better performance.
	return {
		'dtype': x.dtype,
		'data': xbuf,
		'shape': x.shape,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessors': bool,
		'getter': ( bool ) ? getAccessor : getIndexed,
		'setter': ( bool ) ? setAccessor : setIndexed
	};
}


// EXPORTS //

module.exports = copy;
