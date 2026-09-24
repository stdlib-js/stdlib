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
* Returns a read-only view of an input ndarray with singleton dimensions removed.
*
* @param x - input array
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
*     'ndmin': 5
* });
* // returns <ndarray>[ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ]
*
* var y = removeSingletonDimensions( x );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function removeSingletonDimensions<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U ): U;


// EXPORTS //

export = removeSingletonDimensions;
