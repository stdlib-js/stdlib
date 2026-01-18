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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Fills a one-dimensional ndarray with linearly spaced values over a specified interval.
*
* ## Notes
*
* -   The function expects the following ndarrays in order:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the start of the interval.
*     -   a zero-dimensional ndarray specifying the end of the interval.
*     -   a zero-dimensional ndarray specifying whether to include the end of the interval when writing values to the input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var x = new ndarray( 'generic', xbuf, [ 6 ], [ 1 ], 0, 'row-major' );
*
* var start = scalar2ndarray( 0.0, {
*    'dtype': 'generic'
* });
*
* var stop = scalar2ndarray( 100.0, {
*    'dtype': 'generic'
* });
*
* var endpoint = scalar2ndarray( true, {
*     'dtype': 'bool'
* });
*
* var out = glinspace( [ x, start, stop, endpoint ] );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*/
declare function glinspace<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T, typedndarray<number>, typedndarray<number>, typedndarray<boolean> ] ): T;


// EXPORTS //

export = glinspace;
