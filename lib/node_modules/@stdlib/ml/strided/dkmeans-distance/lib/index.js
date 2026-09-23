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

/**
* Compute the distance between two double-precision floating-point strided arrays according to a specified distance metric.
*
* @module @stdlib/ml/strided/dkmeans-distance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dkmeansDistance = require( '@stdlib/ml/strided/dkmeans-distance' );
*
* var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, 1 );
* // returns 72.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dkmeansDistance = require( '@stdlib/ml/strided/dkmeans-distance' );
*
* var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var z = dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, 0 );
* // returns 72.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dkmeansDistance;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dkmeansDistance = main;
} else {
	dkmeansDistance = tmp;
}


// EXPORTS //

module.exports = dkmeansDistance;

// exports: { "ndarray": "dkmeansDistance.ndarray" }
