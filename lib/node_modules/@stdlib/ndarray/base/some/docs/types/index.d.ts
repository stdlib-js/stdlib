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

import { ndarray, typedndarray, genericndarray } from '@stdlib/types/ndarray';

/**
* Tests whether at least `n` elements in an ndarray are truthy.
*
* @param arrays - array-like object containing an input ndarray and a zero-dimensional ndarray specifying the minimum number of elements in the input ndarray that must be truthy
* @returns boolean indicating whether `n` elements pass a test
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var n = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* // Test elements:
* var out = some( [ x, n ] );
* // returns true
*/
declare function some( arrays: [ ndarray, typedndarray<number> | genericndarray<number> ] ): boolean;


// EXPORTS //

export = some;
