/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the L2-norm of a vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {PositiveInteger} stride - stride length
* @returns {number} L2-norm
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var z = gnrm2( x.length, x, 1 );
* // returns 3.0
*/
function gnrm2( N, x, stride ) {
	return ndarray( N, x, stride, stride2offset( N, stride ) );
}


// EXPORTS //

module.exports = gnrm2;
