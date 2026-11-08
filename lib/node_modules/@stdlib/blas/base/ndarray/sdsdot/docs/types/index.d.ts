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

import { float32ndarray } from '@stdlib/types/ndarray';

/**
* Computes the dot product of two one-dimensional single-precision floating-point ndarrays with extended accumulation.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing a scalar constant.
*
* @param arrays - array-like object containing ndarrays
* @returns dot product
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Float32Vector( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Vector( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var scalar = scalar2ndarray( 10.0, {
*     'dtype': 'float32'
* });
*
* var z = sdsdot( [ x, y, scalar ] );
* // returns 5.0
*/
declare function sdsdot( arrays: [ float32ndarray, float32ndarray, float32ndarray ] ): number;


// EXPORTS //

export = sdsdot;
