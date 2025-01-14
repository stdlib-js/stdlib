/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/* eslint-disable max-lines */

import { typedndarray, DataType, float64ndarray, float32ndarray, complex128ndarray, complex64ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, boolndarray, genericndarray } from '@stdlib/types/ndarray';
import { Complex64, Complex128, ComplexLike } from '@stdlib/types/complex';

/**
* Callback invoked for each ndarray element.
*
* @returns output value
*/
type Nullary<V, W> = ( this: W ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @returns output value
*/
type Unary<T, V, W> = ( this: W, value: T ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @returns output value
*/
type Binary<T, V, W> = ( this: W, value: T, indices: Array<number> ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Ternary<T, U, V, W> = ( this: W, value: T, indices: Array<number>, arr: U ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Callback<T, U, V, W> = Nullary<V, W> | Unary<T, V, W> | Binary<T,V, W> | Ternary<T, U, V, W>;

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: DataType;
}

/**
* Interface describing function options.
*/
interface Float64Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'float64';
}

/**
* Interface describing function options.
*/
interface Float32Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'float32';
}

/**
* Interface describing function options.
*/
interface Complex128Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'complex128';
}

/**
* Interface describing function options.
*/
interface Complex64Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'complex64';
}

/**
* Interface describing function options.
*/
interface Int32Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'int32';
}

/**
* Interface describing function options.
*/
interface Int16Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'int16';
}

/**
* Interface describing function options.
*/
interface Int8Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'int8';
}

/**
* Interface describing function options.
*/
interface Uint32Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'uint32';
}

/**
* Interface describing function options.
*/
interface Uint16Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'uint16';
}

/**
* Interface describing function options.
*/
interface Uint8Options extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'uint8';
}

/**
* Interface describing function options.
*/
interface Uint8COptions extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'uint8c';
}

/**
* Interface describing function options.
*/
interface BoolOptions extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'bool';
}

/**
* Interface describing function options.
*/
interface GenericOptions extends Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   This option overrides using the input ndarray's inferred data type.
	*/
	dtype?: 'generic';
}

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
declare function map<W = unknown>( x: float64ndarray, fcn: Callback<number, float64ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, float64ndarray, number, W>> ): float64ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
declare function map<W = unknown>( x: float32ndarray, fcn: Callback<number, float32ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, float32ndarray, number, W>> ): float32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function identity( z ) {
*     return z;
* }
*
* var buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, identity );
* // returns <ndarray>
*/
declare function map<W = unknown>( x: complex64ndarray, fcn: Callback<Complex64, complex64ndarray, ComplexLike, W>, thisArg?: ThisParameterType<Callback<Complex64, complex64ndarray, ComplexLike, W>> ): complex64ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function identity( z ) {
*     return z;
* }
*
* var buffer = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex128', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, identity );
* // returns <ndarray>
*/
declare function map<W = unknown>( x: complex128ndarray, fcn: Callback<Complex128, complex128ndarray, ComplexLike, W>, thisArg?: ThisParameterType<Callback<Complex128, complex128ndarray, ComplexLike, W>> ): complex128ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: int32ndarray, fcn: Callback<number, int32ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, int32ndarray, number, W>> ): int32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: int16ndarray, fcn: Callback<number, int16ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, int16ndarray, number, W>> ): int16ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Int8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: int8ndarray, fcn: Callback<number, int8ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, int8ndarray, number, W>> ): int8ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Uint32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: uint32ndarray, fcn: Callback<number, uint32ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, uint32ndarray, number, W>> ): uint32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Uint16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: uint16ndarray, fcn: Callback<number, uint16ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, uint16ndarray, number, W>> ): uint16ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Uint8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: uint8ndarray, fcn: Callback<number, uint8ndarray, number, W>, thisArg?: ThisParameterType<Callback<number, uint8ndarray, number, W>> ): uint8ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10;
* }
*
* var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<W = unknown>( x: uint8cndarray, fcn: Callback<number, uint8cndarray, number, W>, thisArg?: ThisParameterType<Callback<number, uint8cndarray, number, W>> ): uint8cndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function invert( v ) {
*     return !v;
* }
*
* var buffer = new BooleanArray( [ false, false, false, false, false, false, false, false, false, false, false, false ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'bool', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, invert );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ true, true, true ], [ true, true, true ] ]
*/
declare function map<W = unknown>( x: boolndarray, fcn: Callback<boolean, boolndarray, boolean, W>, thisArg?: ThisParameterType<Callback<boolean, boolndarray, boolean, W>> ): boolndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = map( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
declare function map<T = unknown, V = unknown, W = unknown>( x: genericndarray<T>, fcn: Callback<T, genericndarray<T>, V, W>, thisArg?: ThisParameterType<Callback<T, genericndarray<T>, V, W>> ): genericndarray<V>;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'float64'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Float64Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): float64ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'float32'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20.0, 30.0, 40.0 ], [ 80.0, 90.0, 100.0 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Float32Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): float32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* function toComplex( z ) {
*     return new Complex128( z, 0.0 );
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'complex128'
* };
* var y = map( x, opts, toComplex );
* // returns <ndarray>
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Complex128Options, fcn: Callback<T, typedndarray<T>, ComplexLike, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, ComplexLike, W>> ): complex128ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* function toComplex( z ) {
*     return new Complex64( z, 0.0 );
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'complex64'
* };
* var y = map( x, opts, toComplex );
* // returns <ndarray>
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Complex64Options, fcn: Callback<T, typedndarray<T>, ComplexLike, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, ComplexLike, W>> ): complex64ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'int32'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Int32Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): int32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'int16'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Int16Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): int16ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'int8'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Int8Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): int8ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'uint32'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Uint32Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): uint32ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'uint16'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Uint16Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): uint16ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'uint8'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Uint8Options, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): uint8ndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'uint8c'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: Uint8COptions, fcn: Callback<T, typedndarray<T>, number, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, number, W>> ): uint8cndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var Boolean = require( '@stdlib/boolean/ctor' );
*
* function toBoolean( z ) {
*     return Boolean( z );
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'bool'
* };
* var y = map( x, opts, toBoolean );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ true, true, true ], [ true, true, true ] ]
*/
declare function map<T = unknown, W = unknown>( x: typedndarray<T>, options: BoolOptions, fcn: Callback<T, typedndarray<T>, boolean, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, boolean, W>> ): boolndarray;

/**
* Applies a callback function to elements in an input ndarray and assigns results to elements in a new output ndarray.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( z ) {
*     return z * 10.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'generic'
* };
* var y = map( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 20, 30, 40 ], [ 80, 90, 100 ] ]
*/
declare function map<T = unknown, V = unknown, W = unknown>( x: typedndarray<T>, options: GenericOptions, fcn: Callback<T, typedndarray<T>, V, W>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, V, W>> ): genericndarray<V>;


// EXPORTS //

export = map;
