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

import { float32ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Returns the first index of a search element in a one-dimensional single-precision floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing the search element.
*     -   a zero-dimensional ndarray containing the index from which to begin searching.
*
* @param arrays - array-like object containing ndarrays
* @returns index
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float32Vector( [ 1.0, 3.0, 4.0, 2.0 ] );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = sindexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/
declare function sindexOf( arrays: [ float32ndarray, typedndarray<number>, typedndarray<number> ] ): number;


// EXPORTS //

export = sindexOf;
