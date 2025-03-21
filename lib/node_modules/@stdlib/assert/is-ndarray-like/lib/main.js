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

var ndarray = require( '@stdlib/ndarray/base/ctor' );


// MAIN //

/**
* Tests if a value is ndarray-like.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is ndarray-like
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isndarrayLike( arr );
* // returns true
*
* bool = isndarrayLike( [] );
* // returns false
*/
function isndarrayLike( v ) {
	return (
		v instanceof ndarray ||
		(
			v !== null &&
			typeof v === 'object' &&
			typeof v.data === 'object' &&
			typeof v.shape === 'object' &&
			typeof v.strides === 'object' &&
			typeof v.offset === 'number' &&
			typeof v.order === 'string' &&
			typeof v.ndims === 'number' &&
			typeof v.dtype === 'string' &&
			typeof v.length === 'number' &&
			typeof v.flags === 'object' &&
			typeof v.get === 'function' &&
			typeof v.set === 'function'
		)
	);
}


// EXPORTS //

module.exports = isndarrayLike;
