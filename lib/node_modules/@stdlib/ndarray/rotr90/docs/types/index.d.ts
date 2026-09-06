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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns a read-only view of a matrix (or a stack of matrices) rotated 90 degrees clockwise.
*
* @param x - input array
* @param k - number of times to rotate by 90 degrees
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ]
*
* var y = rotr90( x, 1 );
* // returns <ndarray>[ [ 4.0, 1.0 ], [ 5.0, 2.0 ], [ 6.0, 3.0 ] ]
*/
declare function rotr90<T extends ndarray = ndarray>( x: T, k: number ): T;


// EXPORTS //

export = rotr90;
