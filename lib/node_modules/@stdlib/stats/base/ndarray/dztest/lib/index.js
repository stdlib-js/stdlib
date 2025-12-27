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
* Compute a one-sample Z-test for a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/stats/base/ndarray/dztest
*
* @example
* var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
* var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var dztest = require( '@stdlib/stats/base/ndarray/dztest' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* // Define a one-dimensional input ndarray:
* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* // Specify the alternative hypothesis:
* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
*     'dtype': 'int8'
* });
*
* // Specify the significance level:
* var alpha = scalar2ndarray( 0.05, opts );
*
* // Specify the mean value under the null hypothesis:
* var mu = scalar2ndarray( 0.0, opts );
*
* // Specify the known standard deviation:
* var sigma = scalar2ndarray( 1.0, opts );
*
* // Create a zero-dimensional results ndarray:
* var ResultsArray = structFactory( Float64Results );
* var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
*
* // Perform a Z-test:
* var v = dztest( [ x, out, alt, alpha, mu, sigma ] );
* // returns <ResultsArray>
*
* console.log( v.get().toString() );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
