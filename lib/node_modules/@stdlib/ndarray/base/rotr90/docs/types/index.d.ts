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
* Rotates a matrix (or a stack of matrices) 90 degrees clockwise.
*
* @param x - input array
* @param k - number of times to rotate by 90 degrees
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = rotr90( x, 1, false );
* // returns <ndarray>[ [ 3, 1 ], [ 4, 2 ] ]
*/
declare function rotr90<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, k: number, writable: boolean ): U;


// EXPORTS //

export = rotr90;
