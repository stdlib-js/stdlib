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
* Returns a new ndarray where a matrix (or a stack of matrices) is rotated 90 degrees clockwise.
*
* @param x - input array
* @param k - number of times to rotate by 90 degrees
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = toRotr90( x, 1 );
* // returns <ndarray>[ [ 3, 1 ], [ 4, 2 ] ]
*/
declare function toRotr90<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, k: number ): U;


// EXPORTS //

export = toRotr90;
