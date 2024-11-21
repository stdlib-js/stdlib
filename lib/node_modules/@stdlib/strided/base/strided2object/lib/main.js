/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );


// MAIN //

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - array stride
* @param {NonNegativeInteger} offset - index offset
* @returns {Object} output object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( 5 );
*
* var obj = strided2object( x.length, x, 1, 0 );
* // returns {...}
*
* var dt = obj.dtype;
* // returns 'float64'
*
* var len = obj.length;
* // returns 5
*
* var data = obj.data;
* // returns <Float64Array>
*
* var sx = obj.stride;
* // returns 1
*
* var ox = obj.offset;
* // returns 0
*/
function strided2object( N, x, stride, offset ) {
	var obj = arraylike2object( x );
	obj.length = ( N > 0 ) ? N : 0;
	obj.stride = stride;
	obj.offset = offset;
	return obj;
}


// EXPORTS //

module.exports = strided2object;
