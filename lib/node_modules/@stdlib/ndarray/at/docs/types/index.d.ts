/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { realndarray, genericndarray, typedndarray, complex128ndarray, complex64ndarray } from '@stdlib/types/ndarray';
import { Complex128, Complex64 } from '@stdlib/types/complex';

/**
* Returns an ndarray element.
*
* ## Notes
*
* -   The number of index arguments must equal the number of ndarray dimensions.
* -   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
* -   If provided out-of-bounds indices, the function always returns `undefined`.
*
* @param x - input ndarray
* @param indices - index arguments
* @returns ndarray element
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns 0
*
* v = at( x, 5, 5 );
* // returns undefined
*/
declare function at( x: realndarray, ...indices: Array<number> ): number | void;

/**
* Returns an ndarray element.
*
* ## Notes
*
* -   The number of index arguments must equal the number of ndarray dimensions.
* -   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
* -   If provided out-of-bounds indices, the function always returns `undefined`.
*
* @param x - input ndarray
* @param indices - index arguments
* @returns ndarray element
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ], {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns <Complex128>
*
* v = at( x, 5, 5 );
* // returns undefined
*/
declare function at( x: complex128ndarray, ...indices: Array<number> ): Complex128 | void;

/**
* Returns an ndarray element.
*
* ## Notes
*
* -   The number of index arguments must equal the number of ndarray dimensions.
* -   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
* -   If provided out-of-bounds indices, the function always returns `undefined`.
*
* @param x - input ndarray
* @param indices - index arguments
* @returns ndarray element
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ], {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns <Complex64>
*
* v = at( x, 5, 5 );
* // returns undefined
*/
declare function at( x: complex64ndarray, ...indices: Array<number> ): Complex64 | void;

/**
* Returns an ndarray element.
*
* ## Notes
*
* -   The number of index arguments must equal the number of ndarray dimensions.
* -   Negative indices are resolved relative to the last element along the respective dimension, with the last element corresponding to `-1`.
* -   If provided out-of-bounds indices, the function always returns `undefined`.
*
* @param x - input ndarray
* @param indices - index arguments
* @returns ndarray element
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns 0
*
* v = at( x, 5, 5 );
* // returns undefined
*/
declare function at<T = unknown>( x: genericndarray<T> | typedndarray<T>, ...indices: Array<number> ): T | void;


// EXPORTS //

export = at;
