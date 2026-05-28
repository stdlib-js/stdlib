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

import { ComplexLike } from '@stdlib/types/complex';
import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, genericndarray, boolndarray, Shape, DataType, Order, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, BooleanDataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface BaseOptions {
	/**
	* Output array shape.
	*/
	shape?: Shape;

	/**
	* Specifies whether an array is row-major (C-style) or column-major (Fortran-style).
	*/
	order?: Order;

	/**
	* Boolean indicating whether an array should be read-only. Default: false.
	*/
	readonly?: boolean;
}

/**
* Interface defining function options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface defining function options.
*/
interface Float64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Float64DataType;
}

/**
* Interface defining function options.
*/
interface Float32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Float32DataType;
}

/**
* Interface defining function options.
*/
interface Complex128Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Complex128DataType;
}

/**
* Interface defining function options.
*/
interface Complex64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Complex64DataType;
}

/**
* Interface defining function options.
*/
interface BoolOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: BooleanDataType;
}

/**
* Interface defining function options.
*/
interface Int32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int32DataType;
}

/**
* Interface defining function options.
*/
interface Int16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int16DataType;
}

/**
* Interface defining function options.
*/
interface Int8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int8DataType;
}

/**
* Interface defining function options.
*/
interface Uint32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint32DataType;
}

/**
* Interface defining function options.
*/
interface Uint16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint16DataType;
}

/**
* Interface defining function options.
*/
interface Uint8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint8DataType;
}

/**
* Interface defining function options.
*/
interface Uint8cOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint8cDataType;
}

/**
* Interface defining function options.
*/
interface GenericOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: GenericDataType;
}

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var y = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function broadcastScalarLike( x: float64ndarray, value: number, options?: BaseOptions ): float64ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'float64'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Float64Options ): float64ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'float32'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: float32ndarray, value: number, options?: BaseOptions ): float32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'float32'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Float32Options ): float32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: complex128ndarray, value: number | ComplexLike, options?: BaseOptions ): complex128ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'complex128'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number | ComplexLike, options: Complex128Options ): complex128ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: complex64ndarray, value: number | ComplexLike, options?: BaseOptions ): complex64ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'complex64'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number | ComplexLike, options: Complex64Options ): complex64ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'bool'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, true );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: boolndarray, value: boolean, options?: BaseOptions ): boolndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, true, {
*    'dtype': 'bool'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: boolean, options: BoolOptions ): boolndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'int32'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: int32ndarray, value: number, options?: BaseOptions ): int32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'int32'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Int32Options ): int32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'int16'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: int16ndarray, value: number, options?: BaseOptions ): int16ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'int16'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Int16Options ): int16ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'int8'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: int8ndarray, value: number, options?: BaseOptions ): int8ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'int8'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Int8Options ): int8ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'uint32'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: uint32ndarray, value: number, options?: BaseOptions ): uint32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'uint32'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Uint32Options ): uint32ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'uint16'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: uint16ndarray, value: number, options?: BaseOptions ): uint16ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'uint16'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Uint16Options ): uint16ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'uint8'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: uint8ndarray, value: number, options?: BaseOptions ): uint8ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'uint8'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Uint8Options ): uint8ndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: uint8cndarray, value: number, options?: BaseOptions ): uint8cndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'uint8c'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike( x: ndarray, value: number, options: Uint8cOptions ): uint8cndarray;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'generic'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike<T = unknown>( x: genericndarray<any>, value: T, options?: BaseOptions ): genericndarray<T>;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ] );
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0, {
*    'dtype': 'generic'
* });
* // returns <ndarray>
*/
declare function broadcastScalarLike<T = unknown>( x: ndarray, value: T, options?: GenericOptions ): genericndarray<T>;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns ndarray
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*    'dtype': 'generic'
* });
* // returns <ndarray>
*
* var out = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>
*/
declare function broadcastScalarLike<T = unknown>( x: ndarray, value: T, options?: Options ): ndarray;


// EXPORTS //

export = broadcastScalarLike;
