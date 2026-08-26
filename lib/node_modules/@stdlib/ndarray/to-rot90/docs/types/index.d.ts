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
import { Collection } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Number of times to rotate by 90 degrees (default: 1).
	*/
	k?: number;

	/**
	* Dimension indices defining the plane of rotation (default: [-2, -1]).
	*/
	dims?: Collection<number>;
}

/**
* Returns a new ndarray where an input ndarray is rotated 90 degrees in a specified plane.
*
* ## Notes
*
* -   If `options.k > 0`, the function rotates the plane from the first specified dimension toward the second specified dimension. This means that, for a two-dimensional ndarray and `options.dims = [0, 1]`, the function rotates the plane counterclockwise.
* -   If `options.k < 0`, the function rotates the plane from the second specified dimension toward the first specified dimension. This means that, for a two-dimensional ndarray and `options.dims = [0, 1]`, the function rotates the plane clockwise.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
*
* @param x - input array
* @param options - function options
* @param options.k - number of times to rotate by 90 degrees (default: 1)
* @param options.dims - dimension indices defining the plane of rotation (default: [-2, -1])
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = toRot90( x );
* // returns <ndarray>[ [ 2.0, 4.0 ], [ 1.0, 3.0 ] ]
*/
declare function toRot90<T extends ndarray = ndarray>( x: T, options?: Options ): T;


// EXPORTS //

export = toRot90;
