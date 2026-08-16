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

import { float64ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Returns the first index of an element in a one-dimensional double-precision floating-point ndarray which is not equal to a specified search element.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the search element.
*
* @param arrays - array-like object containing ndarrays
* @returns index
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float64Vector( [ 1.0, 1.0, 3.0 ] );
*
* var searchElement = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* var v = dindexOfNotEqual( [ x, searchElement ] );
* // returns 2
*/
declare function dindexOfNotEqual( arrays: [ float64ndarray, typedndarray<number> ] ): number;


// EXPORTS //

export = dindexOfNotEqual;
