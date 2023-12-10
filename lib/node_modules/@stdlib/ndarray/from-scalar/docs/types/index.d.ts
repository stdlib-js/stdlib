/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType, Order } from '@stdlib/types/ndarray';

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
* Interface defining options when `dtype` is `'float64'`.
*/
interface Float64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'float64';
}

/**
* Interface defining options when `dtype` is `'float32'`.
*/
interface Float32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'float32';
}

/**
* Interface defining options when `dtype` is `'complex128'`.
*/
interface Complex128Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'complex128';
}

/**
* Interface defining options when `dtype` is `'complex64'`.
*/
interface Complex64Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'complex64';
}

/**
* Interface defining options when `dtype` is `'int32'`.
*/
interface Int32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'int32';
}

/**
* Interface defining options when `dtype` is `'int16'`.
*/
interface Int16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'int16';
}

/**
* Interface defining options when `dtype` is `'int8'`.
*/
interface Int8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'int8';
}

/**
* Interface defining options when `dtype` is `'uint32'`.
*/
interface Uint32Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'uint32';
}

/**
* Interface defining options when `dtype` is `'uint16'`.
*/
interface Uint16Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'uint16';
}

/**
* Interface defining options when `dtype` is `'uint8'`.
*/
interface Uint8Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'uint8';
}

/**
* Interface defining options when `dtype` is `'uint8c'`.
*/
interface Uint8cOptions extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype: 'uint8c';
}

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, options: Float64Options ): float64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float32'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, options: Float32Options ): float32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, {
*     'dtype': 'complex128'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'complex128'
*
* var v = x.get();
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*/
declare function scalar2ndarray( value: number | ComplexLike, options: Complex128Options ): complex128ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var Complex64 = require( `@stdlib/complex/float64` );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, {
*     'dtype': 'complex64'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'complex64'
*
* var v = x.get();
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*/
declare function scalar2ndarray( value: number | ComplexLike, options: Complex64Options ): complex64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': int32'
* };
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Int32Options ): int32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': int16'
* };
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Int16Options ): int16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': int8' )
* }
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Int8Options ): int8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': uint32'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Uint32Options ): uint32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': uint16'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Uint16Options ): uint16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': uint8'
* };
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Uint8Options ): uint8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, {
*     'dtype': uint8c'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint8c'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, options: Uint8cOptions ): uint8cndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If a `dtype` option is not provided and `value`
*
*     -   is a `number`, the default data type is `'float64'`.
*     -   is a complex number object, the default data type is `'complex128'`.
*     -   is any other value type, the default data type is `'generic'`.
*
* @param value - scalar value
* @param options - options
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, {
*     'dtype': generic'
* });
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'generic'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: any, options?: Options ): ndarray;


// EXPORTS //

export = scalar2ndarray;
