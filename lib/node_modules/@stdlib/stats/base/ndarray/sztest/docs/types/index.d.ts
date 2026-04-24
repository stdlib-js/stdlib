/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { float32ndarray, int8ndarray, ndarray } from '@stdlib/types/ndarray';

/**
* Computes a one-sample Z-test for a one-dimensional single-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays in order:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional output ndarray containing a results object.
*     -   a zero-dimensional ndarray specifying the alternative hypothesis.
*     -   a zero-dimensional ndarray specifying the significance level.
*     -   a zero-dimensional ndarray specifying the mean under the null hypothesis.
*     -   a zero-dimensional ndarray specifying the known standard deviation.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float32Results = require( '@stdlib/stats/base/ztest/one-sample/results/float32' );
* var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var Float32Array = require( '@stdlib/array/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var opts = {
*     'dtype': 'float32'
* };
*
* // Define a one-dimensional input ndarray:
* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
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
* var ResultsArray = structFactory( Float32Results );
* var out = new ndarray( Float32Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
*
* // Perform a Z-test:
* var v = sztest( [ x, out, alt, alpha, mu, sigma ] );
* // returns <ResultsArray>
*
* console.log( v.get().toString() );
*/
declare function sztest<T extends ndarray>( arrays: [ float32ndarray, T, int8ndarray, float32ndarray, float32ndarray, float32ndarray ] ): T;


// EXPORTS //

export = sztest;
