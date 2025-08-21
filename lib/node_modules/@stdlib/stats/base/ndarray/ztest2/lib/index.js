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
* Compute a two-sample Z-test for two one-dimensional ndarrays.
*
* @module @stdlib/stats/base/ndarray/ztest2
*
* @example
* var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ztest2 = require( '@stdlib/stats/base/ndarray/ztest2' );
*
* var opts = {
*     'dtype': 'generic'
* };
*
* // Define one-dimensional input ndarrays:
* var xbuf = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var x = new ndarray( opts.dtype, xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
* var y = new ndarray( opts.dtype, ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* // Specify the alternative hypothesis:
* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
*     'dtype': 'int8'
* });
*
* // Specify the significance level:
* var alpha = scalar2ndarray( 0.05, opts );
*
* // Specify the difference in means under the null hypothesis:
* var diff = scalar2ndarray( 0.0, opts );
*
* // Specify the known standard deviations:
* var sigmax = scalar2ndarray( 1.0, opts );
* var sigmay = scalar2ndarray( 2.0, opts );
*
* // Create a zero-dimensional results ndarray:
* var ResultsArray = structFactory( Float64Results );
* var out = new ndarray( 'generic', new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
*
* // Perform a Z-test:
* var v = ztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
* // returns <ResultsArray>
*
* console.log( v.get().toString() );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
