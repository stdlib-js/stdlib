/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var zeros = require( '@stdlib/array/base/zeros' );
var assign = require( './assign.js' );


// MAIN //

/**
* Expands a dimension over multiple dimensions.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {integer} dim - dimension to be unflattened
* @param {NonNegativeIntegerArray} sizes - new shape of the unflattened dimension
* @throws {RangeError} second argument is out-of-bounds
* @throws {RangeError} product of the sizes must be equal to the size of the dimension to be unflattened
* @returns {NonNegativeIntegerArray} unflattened shape
*
* @example
* var sh = unflattenShape( [ 6, 2, 1 ], 0, [ 3, 2 ] );
* // returns [ 3, 2, 2, 1 ]
*/
function unflattenShape( shape, dim, sizes ) {
	var out = zeros( shape.length + sizes.length - 1 );
	assign( shape, dim, sizes, out );
	return out;
}


// EXPORTS //

module.exports = unflattenShape;
