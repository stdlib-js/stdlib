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
import { ComplexLike } from '@stdlib/types/complex';
import { typedndarray, complexndarray, genericndarray, DataType, Order } from '@stdlib/types/ndarray';

/**
* Interface defining common options.
*/
interface BaseOptions {
	/**
	* Specifies whether an array is row-major (C-style) or column-major (Fortran-style). Default: 'row-major'.
	*/
	order?: Order;

	/**
	* Boolean indicating whether an array should be read-only. Default: false.
	*/
	readonly?: boolean;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Broadcasts a scalar value to an ndarray of a specified shape.
*
* @param value - scalar value
* @param shape - shape of output ndarray
* @param options - options
* @returns ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = broadcastScalar( 1.0, [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*/
declare function broadcastScalar( value: number, shape: ArrayLike<number>, options?: Options ): typedndarray<number>; // TODO: improve type specificity here, as when `options.dtype` is a supported dtype, we always return an ndarray having that dtype. Likely will need to use a type map.

/**
* Broadcasts a scalar value to an ndarray of a specified shape.
*
* ## Notes
*
* -   If provided a number, the function returns an ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param shape - shape of output ndarray
* @param options - options
* @returns ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var Complex64 = require( '@stdlib/complex/float64/ctor' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = broadcastScalar( v, [ 2, 2 ], {
*     'dtype': 'complex64'
* });
* // returns <ndarray>[ [ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 1.0, 2.0 ] ], [ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 1.0, 2.0 ] ] ]
*
* var dt = String( getDType( x ) );
* // returns 'complex64'
*/
declare function broadcastScalar( value: number | ComplexLike, shape: ArrayLike<number>, options?: Options ): complexndarray;

/**
* Broadcasts a scalar value to an ndarray of a specified shape.
*
* ## Notes
*
* -   If a `dtype` option is not provided and `value`
*
*     -   is a number, the default data type is the default real-valued floating-point data type.
*     -   is a boolean, the default data type is the default boolean data type.
*     -   is a complex number object of a known complex data type, the data type is the same as the provided value.
*     -   is a complex number object of an unknown complex data type, the default data type is the default complex-valued floating-point data type.
*     -   is any other value type, the default data type is `'generic'`.
*
* @param value - scalar value
* @param shape - shape of output ndarray
* @param options - options
* @returns ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = broadcastScalar( 1.0, [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*/
declare function broadcastScalar<T = unknown>( value: T, shape: ArrayLike<number>, options?: Options ): genericndarray<T>;


// EXPORTS //

export = broadcastScalar;
