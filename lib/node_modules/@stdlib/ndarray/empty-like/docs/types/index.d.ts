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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Shape, Order, Mode, ndarray, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, boolndarray, genericndarray, complex128ndarray, complex64ndarray, DataType, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, BooleanDataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Array shape.
	*
	* ## Notes
	*
	* -   If provided, this option overrides the input array's inferred shape.
	*/
	shape?: Shape | number;

	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*
	* ## Notes
	*
	* -   If provided, this option overrides the input array's inferred order.
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
* Interface describing function options.
*/
interface Float64Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Float64DataType;
}

/**
* Interface describing function options.
*/
interface Float32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Float32DataType;
}

/**
* Interface describing function options.
*/
interface Complex128Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Complex128DataType;
}

/**
* Interface describing function options.
*/
interface Complex64Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Complex64DataType;
}

/**
* Interface describing function options.
*/
interface Int32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Int32DataType;
}

/**
* Interface describing function options.
*/
interface Int16Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Int16DataType;
}

/**
* Interface describing function options.
*/
interface Int8Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Int8DataType;
}

/**
* Interface describing function options.
*/
interface Uint32Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Uint32DataType;
}

/**
* Interface describing function options.
*/
interface Uint16Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Uint16DataType;
}

/**
* Interface describing function options.
*/
interface Uint8Options extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Uint8DataType;
}

/**
* Interface describing function options.
*/
interface Uint8COptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: Uint8cDataType;
}

/**
* Interface describing function options.
*/
interface BoolOptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: BooleanDataType;
}

/**
* Interface describing function options.
*/
interface GenericOptions extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: GenericDataType;
}

/**
* Interface describing function options.
*/
interface OptionsWithDType extends Options {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: DataType;
}

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function emptyLike( x: genericndarray<any>, options?: Options ): genericndarray<number>;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function emptyLike<T extends typedndarray<unknown>>( x: T, options?: Options ): T;

/**
* Creates an uninitialized double-precision floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = emptyLike( x, {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function emptyLike( x: ndarray, options: Float64Options ): float64ndarray;

/**
* Creates an uninitialized single-precision floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'float32'
*/
declare function emptyLike( x: ndarray, options: Float32Options ): float32ndarray;

/**
* Creates an uninitialized double-precision complex floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'complex128'
*/
declare function emptyLike( x: ndarray, options: Complex128Options ): complex128ndarray;

/**
* Creates an uninitialized single-precision complex floating-point array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'complex64'
*/
declare function emptyLike( x: ndarray, options: Complex64Options ): complex64ndarray;

/**
* Creates an uninitialized 32-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'int32'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'int32'
*/
declare function emptyLike( x: ndarray, options: Int32Options ): int32ndarray;

/**
* Creates an uninitialized 16-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'int16'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'int16'
*/
declare function emptyLike( x: ndarray, options: Int16Options ): int16ndarray;

/**
* Creates an uninitialized 8-bit signed integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'int8'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'int8'
*/
declare function emptyLike( x: ndarray, options: Int8Options ): int8ndarray;

/**
* Creates an uninitialized 32-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'uint32'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'uint32'
*/
declare function emptyLike( x: ndarray, options: Uint32Options ): uint32ndarray;

/**
* Creates an uninitialized 16-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'uint16'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'uint16'
*/
declare function emptyLike( x: ndarray, options: Uint16Options ): uint16ndarray;

/**
* Creates an uninitialized 8-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'uint8'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'uint8'
*/
declare function emptyLike( x: ndarray, options: Uint8Options ): uint8ndarray;

/**
* Creates an uninitialized clamped 8-bit unsigned integer array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'uint8c'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'uint8c'
*/
declare function emptyLike( x: ndarray, options: Uint8COptions ): uint8cndarray;

/**
* Creates an uninitialized boolean array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'bool'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'bool'
*/
declare function emptyLike( x: ndarray, options: BoolOptions ): boolndarray;

/**
* Creates an uninitialized generic array having the same shape as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x, {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function emptyLike( x: ndarray, options: GenericOptions ): genericndarray<number>;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.shape - output array shape
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ], {
*     'dtype': 'float64'
* });
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function emptyLike( x: ndarray, options?: Options | OptionsWithDType ): typedndarray<number>;


// EXPORTS //

export = emptyLike;
