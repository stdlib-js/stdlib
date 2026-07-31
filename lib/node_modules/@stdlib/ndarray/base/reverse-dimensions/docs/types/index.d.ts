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

import { Collection } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns a view of an input ndarray in which the order of elements along specified dimensions is reversed.
*
* @param x - input array
* @param dims - indices of dimensions to reverse
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var y = reverseDimensions( x, [ 0, 1 ], false );
* // returns <ndarray>[ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
*/
declare function reverseDimensions<T extends ndarray = ndarray>( x: T, dims: Collection<number>, writable: boolean ): T;


// EXPORTS //

export = reverseDimensions;
