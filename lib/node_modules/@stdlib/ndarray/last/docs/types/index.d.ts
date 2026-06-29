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
* Interface defining function options.
*/
interface Options {
	/**
	* List of dimensions over which to perform the operation.
	*/
	dims?: Collection<number>;
}

/**
* Returns a read-only view of the last element (or subarray) along one or more ndarray dimensions.
*
* ## Notes
*
* -   By default, the function performs the operation over all dimensions and thus returns the last element of the input ndarray as a zero-dimensional ndarray.
* -   If provided an empty `dims` array, the function returns a read-only view of the input ndarray.
*
* @param x - input ndarray
* @param options - function options
* @param options.dims - list of dimensions over which to perform the operation
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var v = last( x );
* // returns <ndarray>[ 4.0 ]
*
* v = last( x, {
*     'dims': [ -1 ]
* });
* // returns <ndarray>[ 2.0, 4.0 ]
*
* v = last( x, {
*     'dims': [ -2 ]
* });
* // returns <ndarray>[ 3.0, 4.0 ]
*/
declare function last<T extends ndarray>( x: T, options?: Options ): T;


// EXPORTS //

export = last;
