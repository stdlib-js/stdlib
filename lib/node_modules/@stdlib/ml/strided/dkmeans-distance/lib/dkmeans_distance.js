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

var format = require( '@stdlib/string/format' );
var TABLE = require( './metrics.js' );


// MAIN //

/**
* Computes the distance between two double-precision floating-point strided arrays according to a specified distance metric.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {string} metric - distance metric
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @throws {TypeError} second argument must be a supported distance metric
* @returns {number} distance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, 1 );
* // returns 72.0
*/
function dkmeansDistance( N, metric, x, strideX, y, strideY ) {
	var dist = TABLE[ metric ] || null;
	if ( dist === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a supported distance metric. Value: `%s`.', metric ) );
	}
	return dist( N, x, strideX, y, strideY );
}


// EXPORTS //

module.exports = dkmeansDistance;
