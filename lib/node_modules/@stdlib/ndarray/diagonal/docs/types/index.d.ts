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
	* Diagonal offset (default: 0).
	*/
	k?: number;

	/**
	* Dimension indices defining the plane from which to extract the diagonal (default: [-2, -1]).
	*/
	dims?: Collection<number>;
}

/**
* Returns a read-only view of the diagonal of a matrix (or stack of matrices).
*
* ## Notes
*
* -   The order of the dimension indices contained in `options.dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
* -   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
* -   The diagonal offset `options.k` is interpreted as `column - row`. Accordingly, when `options.k = 0`, the function returns the main diagonal; when `options.k > 0`, the function returns the diagonal above the main diagonal; and when `options.k < 0`, the function returns the diagonal below the main diagonal.
*
* @param x - input array
* @param options - function options
* @param options.k - diagonal offset (default: 0)
* @param options.dims - dimension indices defining the plane from which to extract the diagonal (default: [-2, -1])
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ]
*
* var y = diagonal( x );
* // returns <ndarray>[ 1.0, 5.0, 9.0 ]
*/
declare function diagonal<T extends ndarray = ndarray>( x: T, options?: Options ): T;


// EXPORTS //

export = diagonal;
