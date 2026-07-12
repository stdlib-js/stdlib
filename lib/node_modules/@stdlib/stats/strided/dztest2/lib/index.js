/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Compute a two-sample Z-test for two double-precision floating-point strided arrays.
*
* @module @stdlib/stats/strided/dztest2
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var dztest2 = require( '@stdlib/stats/strided/dztest2' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
*
* var results = new Results();
* var out = dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var dztest2 = require( '@stdlib/stats/strided/dztest2' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
*
* var results = new Results();
* var out = dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dztest2;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dztest2 = main;
} else {
	dztest2 = tmp;
}


// EXPORTS //

module.exports = dztest2;

// exports: { "ndarray": "dztest2.ndarray" }
