/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { TypedIterator, TypedIterableIterator } from '@stdlib/types/iter';
import { typedndarray } from '@stdlib/types/ndarray';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether returned views should be read-only (default: true).
	*
	* ## Notes
	*
	* -   If the input array is read-only, setting this option to `false` raises an exception.
	*/
	readonly?: boolean;
}

/**
* Returns an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.
*
* ## Notes
*
* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices). A dimension index equal to `null` indicates that all values along the respective dimension are included in the returned ndarray.
*
* @param x - input array
* @param options - function options
* @param options.readonly - boolean indicating whether returned views should be read-only
* @returns iterator
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var iter = nditerMatrixEntries( x );
*
* var v = iter.next().value;
* // returns [...]
*
* var idx = v[ 0 ];
* // returns [ 0, null, null ]
*
* var mat = ndarray2array( v[ 1 ] );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* v = iter.next().value;
* // returns [...]
*
* idx = v[ 0 ];
* // returns [ 1, null, null ]
*
* mat = ndarray2array( v[ 1 ] );
* // returns [ [ 5, 6 ], [ 7, 8 ] ]
*
* // ...
*/
declare function nditerMatrixEntries<T = unknown>( x: typedndarray<T>, options?: Options ): Iterator<[ Array<number | null>, typedndarray<T> ]>;


// EXPORTS //

export = nditerMatrixEntries;
