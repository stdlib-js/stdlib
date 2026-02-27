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
* Interface describing function options.
*/
interface Options {
	/**
	* Index of dimension to reverse. Default: `-1`.
	*/
	dim?: number;
}

/**
* Returns a new ndarray where the order of elements of an input ndarray along a specified dimension is reversed.
*
* @param x - input array
* @param options - function options
* @param options.dim - index of dimension to reverse
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = toReversedDimension( x );
* // returns <ndarray>[ [ 2.0, 1.0 ], [ 4.0, 3.0 ] ]
*/
declare function toReversedDimension<T extends ndarray>( x: T, options?: Options ): T;


// EXPORTS //

export = toReversedDimension;
