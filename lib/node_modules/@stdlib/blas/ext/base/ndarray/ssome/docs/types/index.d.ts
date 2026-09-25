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

import { float32ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Tests whether a one-dimensional single-precision floating-point ndarray contains at least `k` truthy elements.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the minimum number of truthy elements.
*
* -   The function explicitly treats `NaN` values as falsy.
*
* @param arrays - array-like object containing ndarrays
* @returns boolean indicating whether the input ndarray contains at least `k` truthy elements
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float32Vector( [ 0.0, 0.0, 1.0, 2.0 ] );
*
* var k = scalar2ndarray( 2, {
*     'dtype': 'generic'
* });
*
* var v = ssome( [ x, k ] );
* // returns true
*/
declare function ssome( arrays: [ float32ndarray, typedndarray<number> ] ): boolean;


// EXPORTS //

export = ssome;
