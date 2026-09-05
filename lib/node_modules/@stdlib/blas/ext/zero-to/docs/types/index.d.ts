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

import { ArrayLike } from '@stdlib/types/array';
import { NumericAndGenericDataType as DataType, typedndarray, genericndarray, Mode, Order } from '@stdlib/types/ndarray';

/**
* Output array.
*/
type OutputArray = typedndarray<number> | genericndarray<number>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output ndarray data type.
	*/
	dtype?: DataType;

	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*/
	order?: Order;

	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw']).
	*/
	submode?: Array<Mode>;
}

/**
* Interface for performing an operation on an ndarray.
*/
interface ZeroTo {
	/**
	* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from zero along one or more ndarray dimensions.
	*
	* @param shape - array shape
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var out = zeroTo( [ 2, 3 ] );
	* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
	*/
	( shape: number | ArrayLike<number>, options?: Options ): OutputArray;

	/**
	* Fills an ndarray with linearly spaced numeric elements which increment by 1 starting from zero along one or more ndarray dimensions.
	*
	* ## Notes
	*
	* -   The input ndarray is filled **in-place** (i.e., the input ndarray is **mutated**).
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var x = zeros( [ 2, 3 ] );
	* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
	*
	* var out = zeroTo.assign( x );
	* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	assign<T extends OutputArray = OutputArray>( x: T, options?: BaseOptions ): T;
}

/**
* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from zero along one or more ndarray dimensions.
*
* @param shape - array shape
* @param options - function options
* @returns output ndarray
*
* @example
* var out = zeroTo( [ 2, 3 ] );
* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = zeroTo.assign( x );
* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
*
* var bool = ( out === x );
* // returns true
*/
declare const zeroTo: ZeroTo;


// EXPORTS //

export = zeroTo;
