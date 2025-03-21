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

import { Collection } from '@stdlib/types/array';
import { Shape, Order } from '@stdlib/types/ndarray';

/**
* Interface describing `nextCartesianIndex`.
*/
interface Routine {
	/**
	* Returns the next Cartesian index (i.e., set of subscripts/dimension indices).
	*
	* ## Notes
	*
	* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
	* -   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.
	*
	* @param shape - array shape
	* @param order - iteration order
	* @param idx - current dimension indices
	* @param dim - index of the dimension from which to start incrementing (inclusive)
	* @returns updated dimension indices
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], 0 );
	* // returns [ 3 ]
	*
	* @example
	* var shape = [ 2, 2, 2 ];
	*
	* var idx = nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1 );
	* // returns [ 0, 1, 0 ]
	*
	* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 0, 1, 1 ]
	*
	* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 0, 0 ]
	*
	* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 0, 1 ]
	*
	* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 1, 0 ]
	*
	* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
	* // returns [ 1, 1, 1 ]
	*
	* @example
	* var shape = [];
	* var idx = nextCartesianIndex( shape, 'row-major', [], 0 );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], -10 );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex( shape, 'column-major', [ 2 ], 10 );
	* // returns null
	*/
	( shape: Shape, order: Order, idx: Collection<number>, dim: number ): Array<number> | null;

	/**
	* Returns the next Cartesian index (i.e., set of subscripts/dimension indices) and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
	* -   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.
	*
	* @param shape - array shape
	* @param order - iteration order
	* @param idx - current dimension indices
	* @param dim - index of the dimension from which to start incrementing (inclusive)
	* @param out - output array
	* @returns update dimension indices
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex.assign( shape, 'row-major', [ 2 ], 0, [ 0 ] );
	* // returns [ 3 ]
	*
	* @example
	* var shape = [ 2, 2, 2 ];
	*
	* var out = [ 0, 0, 0 ];
	* var idx = nextCartesianIndex.assign( shape, 'row-major', [ 0, 0, 1 ], -1, out );
	* // returns [ 0, 1, 0 ]
	*
	* idx = nextCartesianIndex.assign( shape, 'row-major', idx, -1, out );
	* // returns [ 0, 1, 1 ]
	*
	* idx = nextCartesianIndex.assign( shape, 'row-major', idx, -1, out );
	* // returns [ 1, 0, 0 ]
	*
	* idx = nextCartesianIndex.assign( shape, 'row-major', idx, -1, out );
	* // returns [ 1, 0, 1 ]
	*
	* idx = nextCartesianIndex.assign( shape, 'row-major', idx, -1, out );
	* // returns [ 1, 1, 0 ]
	*
	* idx = nextCartesianIndex.assign( shape, 'row-major', idx, -1, out );
	* // returns [ 1, 1, 1 ]
	*
	* @example
	* var shape = [];
	* var idx = nextCartesianIndex.assign( shape, 'row-major', [], 0, [] );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex.assign( shape, 'row-major', [ 2 ], -10, [ 0 ] );
	* // returns null
	*
	* @example
	* var shape = [ 12 ];
	* var idx = nextCartesianIndex.assign( shape, 'column-major', [ 2 ], 10, [ 0 ] );
	* // returns null
	*/
	assign<T = unknown>( shape: Shape, order: Order, idx: Collection<number>, dim: number, out: Collection<T> ): Collection<T | number> | null;
}

/**
* Returns the next Cartesian index (i.e., set of subscripts/dimension indices).
*
* ## Notes
*
* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
* -   If provided an empty shape (i.e., a shape corresponding to a zero-dimensional ndarray) or a dimension index `dim` which is out-of-bounds, the function returns `null`.
*
* @param shape - array shape
* @param order - iteration order
* @param idx - current dimension indices
* @param dim - index of the dimension from which to start incrementing (inclusive)
* @returns updated dimension indices
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], 0 );
* // returns [ 3 ]
*
* @example
* var shape = [ 2, 2, 2 ];
*
* var idx = nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1 );
* // returns [ 0, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 0, 1, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 1 ]
*
* @example
* var shape = [];
* var idx = nextCartesianIndex( shape, 'row-major', [], 0 );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], -10 );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'column-major', [ 2 ], 10 );
* // returns null
*/
declare var nextCartesianIndex: Routine;


// EXPORTS //

export = nextCartesianIndex;
