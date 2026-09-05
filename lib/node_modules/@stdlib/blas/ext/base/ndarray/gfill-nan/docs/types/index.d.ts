/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Replaces elements in a one-dimensional ndarray equal to `NaN` with a specified scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the scalar constant.
*     -   a zero-dimensional ndarray containing the starting index (inclusive).
*     -   a zero-dimensional ndarray containing the ending index (exclusive).
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ NaN, -2.0, 3.0, NaN, 4.0, -6.0 ], 'generic' );
*
* var alpha = scalar2ndarray( 0.0, {
*     'dtype': 'generic'
* });
*
* var start = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var end = scalar2ndarray( 2, {
*     'dtype': 'generic'
* });
*
* var out = gfillNaN( [ x, alpha, start, end ] );
* // returns <ndarray>[ 0.0, -2.0, 3.0, NaN, 4.0, -6.0 ]
*/
declare function gfillNaN<T = unknown, U = unknown, V extends typedndarray<T | U> = typedndarray<T | U>>( arrays: [ V, typedndarray<U>, typedndarray<number>, typedndarray<number> ] ): V;


// EXPORTS //

export = gfillNaN;
