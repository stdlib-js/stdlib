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
import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, genericndarray, boolndarray, DataType, Order, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, BooleanDataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Interface defining common options.
*/
interface BaseOptions {
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
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface defining options when `dtype` is `'float64'`.
*/
interface Float64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Float64DataType;
}

/**
* Interface defining options when `dtype` is `'float32'`.
*/
interface Float32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Float32DataType;
}

/**
* Interface defining options when `dtype` is `'complex128'`.
*/
interface Complex128Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Complex128DataType;
}

/**
* Interface defining options when `dtype` is `'complex64'`.
*/
interface Complex64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Complex64DataType;
}

/**
* Interface defining options when `dtype` is `'bool'`.
*/
interface BoolOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: BooleanDataType;
}

/**
* Interface defining options when `dtype` is `'int32'`.
*/
interface Int32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int32DataType;
}

/**
* Interface defining options when `dtype` is `'int16'`.
*/
interface Int16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int16DataType;
}

/**
* Interface defining options when `dtype` is `'int8'`.
*/
interface Int8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Int8DataType;
}

/**
* Interface defining options when `dtype` is `'uint32'`.
*/
interface Uint32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint32DataType;
}

/**
* Interface defining options when `dtype` is `'uint16'`.
*/
interface Uint16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint16DataType;
}

/**
* Interface defining options when `dtype` is `'uint8'`.
*/
interface Uint8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint8DataType;
}

/**
* Interface defining options when `dtype` is `'uint8c'`.
*/
interface Uint8cOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: Uint8cDataType;
}

/**
* Interface defining options when `dtype` is `'generic'`.
*/
interface GenericOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: GenericDataType;
}

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'float64'
*/
declare function scalar2ndarrayLike( x: float64ndarray, value: number, options?: BaseOptions ): float64ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'float64'
* });
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'float64'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Float64Options ): float64ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'float32'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'float32'
*/
declare function scalar2ndarrayLike( x: float32ndarray, value: number, options?: BaseOptions ): float32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'float32'
* });
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'float32'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Float32Options ): float32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'complex128'
*/
declare function scalar2ndarrayLike( x: complex128ndarray, value: number | ComplexLike, options?: BaseOptions ): complex128ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'complex128'
* });
* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'complex128'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number | ComplexLike, options: Complex128Options ): complex128ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ <Complex64>[ 1.0, 0.0 ] ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'complex64'
*/
declare function scalar2ndarrayLike( x: complex64ndarray, value: number | ComplexLike, options?: BaseOptions ): complex64ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'complex64'
* });
* // returns <ndarray>[ <Complex64>[ 1.0, 0.0 ] ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'complex64'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number | ComplexLike, options: Complex64Options ): complex64ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'bool'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, true );
* // returns <ndarray>[ true ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'bool'
*/
declare function scalar2ndarrayLike( x: boolndarray, value: boolean, options?: BaseOptions ): boolndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, true, {
*    'dtype': 'bool'
* });
* // returns <ndarray>[ true ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'bool'
*/
declare function scalar2ndarrayLike( x: ndarray, value: boolean, options: BoolOptions ): boolndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'int32'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int32'
*/
declare function scalar2ndarrayLike( x: int32ndarray, value: number, options?: BaseOptions ): int32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'int32'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int32'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Int32Options ): int32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'int16'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int16'
*/
declare function scalar2ndarrayLike( x: int16ndarray, value: number, options?: BaseOptions ): int16ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'int16'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int16'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Int16Options ): int16ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'int8'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int8'
*/
declare function scalar2ndarrayLike( x: int8ndarray, value: number, options?: BaseOptions ): int8ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'int8'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'int8'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Int8Options ): int8ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'uint32'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint32'
*/
declare function scalar2ndarrayLike( x: uint32ndarray, value: number, options?: BaseOptions ): uint32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'uint32'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint32'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Uint32Options ): uint32ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'uint16'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint16'
*/
declare function scalar2ndarrayLike( x: uint16ndarray, value: number, options?: BaseOptions ): uint16ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'uint16'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint16'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Uint16Options ): uint16ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'uint8'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint8'
*/
declare function scalar2ndarrayLike( x: uint8ndarray, value: number, options?: BaseOptions ): uint8ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'uint8'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint8'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Uint8Options ): uint8ndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint8c'
*/
declare function scalar2ndarrayLike( x: uint8cndarray, value: number, options?: BaseOptions ): uint8cndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*    'dtype': 'uint8c'
* });
* // returns <ndarray>[ 1 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'uint8c'
*/
declare function scalar2ndarrayLike( x: ndarray, value: number, options: Uint8cOptions ): uint8cndarray;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ], {
*    'dtype': 'generic'
* });
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'generic'
*/
declare function scalar2ndarrayLike<T = unknown>( x: genericndarray<any>, value: T, options?: BaseOptions ): genericndarray<T>;

/**
* Converts a scalar value to a zero-dimensional ndarray having the same data type as a provided ndarray.
*
* @param x - input ndarray
* @param value - scalar value
* @param options - function options
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2 ] );
* // returns <ndarray>
*
* var out = scalar2ndarrayLike( x, 1.0, {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ 1.0 ]
*
* var sh = getShape( out );
* // returns []
*
* var dt = String( getDType( out ) );
* // returns 'generic'
*/
declare function scalar2ndarrayLike<T = unknown>( x: ndarray, value: T, options?: GenericOptions ): genericndarray<T>;


// EXPORTS //

export = scalar2ndarrayLike;
