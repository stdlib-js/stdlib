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

import { typedndarray, DataType, Order, float64ndarray, float32ndarray, complex128ndarray, complex64ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, boolndarray, genericndarray } from '@stdlib/types/ndarray';
import { Complex64, Complex128 } from '@stdlib/types/complex';

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<V> = ( this: V ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, V> = ( this: V, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, V> = ( this: V, value: T, indices: Array<number> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, V> = ( this: V, value: T, indices: Array<number>, arr: typedndarray<T> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, V> = Nullary<V> | Unary<T, V> | Binary<T, V> | Ternary<T, V>;

/**
* Interface describing "base" function options.
*/
interface BaseOptions {
	/**
	* Index iteration order.
	*
	* ## Notes
	*
	* -   By default, the function iterates over elements according to the layout order of the provided ndarray. Accordingly, for row-major input ndarrays, the last dimension indices increment fastest. For column-major input ndarrays, the first dimension indices increment fastest. To override the inferred order and ensure that indices increment in a specific manner, regardless of the input ndarray's layout order, explicitly set the iteration order. Note, however, that iterating according to an order which does not match that of the input ndarray may, in some circumstances, result in performance degradation due to cache misses.
	*/
	order?: Order;
}

/**
* Interface describing function options.
*/
interface OrderOptions {
	/**
	* Index iteration order.
	*
	* ## Notes
	*
	* -   By default, the function iterates over elements according to the layout order of the provided ndarray. Accordingly, for row-major input ndarrays, the last dimension indices increment fastest. For column-major input ndarrays, the first dimension indices increment fastest. To override the inferred order and ensure that indices increment in a specific manner, regardless of the input ndarray's layout order, explicitly set the iteration order. Note, however, that iterating according to an order which does not match that of the input ndarray may, in some circumstances, result in performance degradation due to cache misses.
	*/
	order: Order;
}

/**
* Interface describing function options.
*/
interface Options extends BaseOptions {
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
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<V = unknown>( x: float64ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): float64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<V = unknown>( x: float32ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): float32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
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
* var y = reject( x, predicate );
* // returns <ndarray>
*/
declare function reject<V = unknown>( x: complex64ndarray, predicate: Predicate<Complex64, V>, thisArg?: ThisParameterType<Predicate<Complex64, V>> ): complex64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
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
* var y = reject( x, predicate );
* // returns <ndarray>
*/
declare function reject<V = unknown>( x: complex128ndarray, predicate: Predicate<Complex128, V>, thisArg?: ThisParameterType<Predicate<Complex128, V>> ): complex128ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int32Array = require( '@stdlib/array/int32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int32ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int16Array = require( '@stdlib/array/int16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int16ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int8Array = require( '@stdlib/array/int8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int8ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint32Array = require( '@stdlib/array/uint32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint32ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint16Array = require( '@stdlib/array/uint16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint16ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint8ndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint8cndarray, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint8cndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function predicate( v ) {
*     return !v;
* }
*
* var buffer = new BooleanArray( [ false, true, false, true, false, true, false, true, false, true, false, true ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'bool', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, predicate );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ true, true, true, true ]
*/
declare function reject<V = unknown>( x: boolndarray, predicate: Predicate<boolean, V>, thisArg?: ThisParameterType<Predicate<boolean, V>> ): boolndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = reject( x, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<T = unknown, V = unknown>( x: genericndarray<T>, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): genericndarray<T>;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<V = unknown>( x: float64ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): float64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'float32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<V = unknown>( x: float32ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): float32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
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
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, predicate );
* // returns <ndarray>
*/
declare function reject<V = unknown>( x: complex64ndarray, options: OrderOptions, predicate: Predicate<Complex64, V>, thisArg?: ThisParameterType<Predicate<Complex64, V>> ): complex64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
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
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, predicate );
* // returns <ndarray>
*/
declare function reject<V = unknown>( x: complex128ndarray, options: OrderOptions, predicate: Predicate<Complex128, V>, thisArg?: ThisParameterType<Predicate<Complex128, V>> ): complex128ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int32Array = require( '@stdlib/array/int32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int32ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int16Array = require( '@stdlib/array/int16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int16ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Int8Array = require( '@stdlib/array/int8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Int8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'int8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: int8ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): int8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint32Array = require( '@stdlib/array/uint32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint32ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint16Array = require( '@stdlib/array/uint16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint16ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint8ndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<V = unknown>( x: uint8cndarray, options: OrderOptions, predicate: Predicate<number, V>, thisArg?: ThisParameterType<Predicate<number, V>> ): uint8cndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function predicate( v ) {
*     return !v;
* }
*
* var buffer = new BooleanArray( [ false, true, false, true, false, true, false, true, false, true, false, true ] );
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'bool', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, predicate );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ true, true, true, true ]
*/
declare function reject<V = unknown>( x: boolndarray, options: OrderOptions, predicate: Predicate<boolean, V>, thisArg?: ThisParameterType<Predicate<boolean, V>> ): boolndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - function options
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
* var shape = [ 2, 3 ];
* var strides = [ 6, 1 ];
* var offset = 1;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'order': 'row-major'
* };
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<T = unknown, V = unknown>( x: genericndarray<T>, options: OrderOptions, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): genericndarray<T>;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Float64Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): float64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Float32Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): float32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
* }
*
* var buffer = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 1;
*
* var x = ndarray( 'complex128', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'complex128'
* };
* var y = reject( x, opts, predicate );
* // returns <ndarray>
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Complex128Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): complex128ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function predicate( z, idx ) {
*     return idx[ 0 ] > 0;
* }
*
* var buffer = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 1;
*
* var x = ndarray( 'complex128', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var opts = {
*     'dtype': 'complex64'
* };
* var y = reject( x, opts, predicate );
* // returns <ndarray>
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Complex64Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): complex64ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Int32Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): int32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Int16Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): int16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Int8Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): int8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Uint32Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): uint32ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Uint16Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): uint16ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Uint8Options, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): uint8ndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2, 4, 8, 10 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: Uint8COptions, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): uint8cndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ true, true, true, true ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: BoolOptions, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): boolndarray;

/**
* Returns a shallow copy of an ndarray containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input ndarray
* @param options - options
* @param options.dtype - output ndarray data type
* @param options.order - iteration order
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
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
* var y = reject( x, opts, isOdd );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 8.0, 10.0 ]
*/
declare function reject<T = unknown, V = unknown>( x: typedndarray<T>, options: GenericOptions, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): genericndarray<T>;


// EXPORTS //

export = reject;
