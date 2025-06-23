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

import { typedndarray, float64ndarray, float32ndarray, complex128ndarray, complex64ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, boolndarray, genericndarray } from '@stdlib/types/ndarray';
import { Complex64, Complex128 } from '@stdlib/types/complex';

/**
* Callback invoked for each ndarray element.
*/
type Nullary<V> = ( this: V ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
*/
type Unary<T, V> = ( this: V, value: T ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
*/
type Binary<T, V> = ( this: V, value: T, indices: Array<number> ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
*/
type Ternary<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: U ) => void;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
*/
type Callback<T, U, V> = Nullary<V> | Unary<T, V> | Binary<T, V> | Ternary<T, U, V>;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: float64ndarray, fcn: Callback<number, float64ndarray, V>, thisArg?: ThisParameterType<Callback<number, float64ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: float32ndarray, fcn: Callback<number, float32ndarray, V>, thisArg?: ThisParameterType<Callback<number, float32ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: int32ndarray, fcn: Callback<number, int32ndarray, V>, thisArg?: ThisParameterType<Callback<number, int32ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: int16ndarray, fcn: Callback<number, int16ndarray, V>, thisArg?: ThisParameterType<Callback<number, int16ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Int8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: int8ndarray, fcn: Callback<number, int8ndarray, V>, thisArg?: ThisParameterType<Callback<number, int8ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Uint32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint32', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: uint32ndarray, fcn: Callback<number, uint32ndarray, V>, thisArg?: ThisParameterType<Callback<number, uint32ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Uint16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint16', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: uint16ndarray, fcn: Callback<number, uint16ndarray, V>, thisArg?: ThisParameterType<Callback<number, uint16ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Uint8Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: uint8ndarray, fcn: Callback<number, uint8ndarray, V>, thisArg?: ThisParameterType<Callback<number, uint8ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: uint8cndarray, fcn: Callback<number, uint8cndarray, V>, thisArg?: ThisParameterType<Callback<number, uint8cndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex128', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: complex128ndarray, fcn: Callback<Complex128, complex128ndarray, V>, thisArg?: ThisParameterType<Callback<Complex128, complex128ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: complex64ndarray, fcn: Callback<Complex64, complex64ndarray, V>, thisArg?: ThisParameterType<Callback<Complex64, complex64ndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = new BooleanArray( [ true, false, true, false, true, false, true, false, true, false, true, false ] );
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'bool', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<V = unknown>( x: boolndarray, fcn: Callback<boolean, boolndarray, V>, thisArg?: ThisParameterType<Callback<boolean, boolndarray, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<T = unknown, V = unknown>( x: genericndarray<T>, fcn: Callback<T, genericndarray<T>, V>, thisArg?: ThisParameterType<Callback<T, genericndarray<T>, V>> ): void;

/**
* Invokes a callback function once for each ndarray element.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var log = require( '@stdlib/console/log' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
* var shape = [ 2, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* // Apply the callback function:
* forEach( x, naryFunction( log, 1 ) );
*/
declare function forEach<T = unknown, V = unknown>( x: typedndarray<T>, fcn: Callback<T, typedndarray<T>, V>, thisArg?: ThisParameterType<Callback<T, typedndarray<T>, V>> ): void;


// EXPORTS //

export = forEach;
