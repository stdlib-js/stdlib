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

import { Collection } from '@stdlib/types/object';

/**
* One-dimensional array.
*/
type Array1D<T> = Collection<T>;

/**
* Two-dimensional array.
*/
type Array2D<T> = Array<Array1D<T>>;

/**
* Three-dimensional array.
*/
type Array3D<T> = Array<Array2D<T>>;

/**
* Four-dimensional array.
*/
type Array4D<T> = Array<Array3D<T>>;

/**
* Five-dimensional array.
*/
type Array5D<T> = Array<Array4D<T>>;

/**
* Six-dimensional array.
*/
type Array6D<T> = Array<Array5D<T>>;

/**
* Seven-dimensional array.
*/
type Array7D<T> = Array<Array6D<T>>;

/**
* Eight-dimensional array.
*/
type Array8D<T> = Array<Array7D<T>>;

/**
* Nine-dimensional array.
*/
type Array9D<T> = Array<Array8D<T>>;

/**
* Ten-dimensional array.
*/
type Array10D<T> = Array<Array9D<T>>;

/**
* n-dimensional nested array.
*/
type ArrayND<T> = Array1D<T> | Array2D<T> | Array3D<T> | Array4D<T> | Array5D<T> | Array6D<T> | Array7D<T> | Array8D<T> | Array9D<T> | Array10D<T>; // WARNING: arbitrarily limited to 10 dimensions, which should be fine for most practical purposes

/**
* Interface describing `flatten`.
*/
interface Flatten {
	/**
	* Flattens an n-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown>( x: ArrayND<T>, shape: Collection<number>, colexicographic: boolean ): Array<T>;

	/**
	* Flattens an n-dimensional nested array and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten.assign( x, [ 2, 2 ], false, new Float64Array( 4 ), 1, 0 );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten.assign( x, [ 2, 2 ], true, new Float64Array( 4 ), 1, 0 );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown>( x: ArrayND<T>, shape: Collection<number>, colexicographic: boolean, out: Collection<U>, stride: number, offset: number ): Collection<T | U>;
}

/**
* Flattens an n-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param x - input array
* @param shape - array shape
* @param colexicographic - specifies whether to flatten array values in colexicographic order
* @returns flattened array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
declare var flatten: Flatten;


// EXPORTS //

export = flatten;
