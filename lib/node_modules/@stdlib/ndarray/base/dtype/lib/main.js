/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Returns the data type of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @returns {string} data type
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ], {
*     'dtype': 'float64'
* });
*
* var dt = dtype( x );
* // returns 'float64'
*/
function dtype( x ) {
	return x.dtype;
}


// EXPORTS //

module.exports = dtype;
