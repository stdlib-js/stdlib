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

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U, V> = ( this: U, value: T, index: number, arr: V ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U, V> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U, V>;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, -3.0, 4.0 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Float64Array>[ -2.0, -3.0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Float64Array, predicate: Predicate<T, U, Float64Array>, thisArg?: ThisParameterType<Predicate<T, U, Float64Array>> ): Float64Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, -3.0, 4.0 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Float32Array>[ -2.0, -3.0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Float32Array, predicate: Predicate<T, U, Float32Array>, thisArg?: ThisParameterType<Predicate<T, U, Float32Array>> ): Float32Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, -2, -3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Int32Array>[ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: Int32Array, predicate: Predicate<T, U, Int32Array>, thisArg?: ThisParameterType<Predicate<T, U, Int32Array>> ): Int32Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, -2, -3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Int16Array>[ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: Int16Array, predicate: Predicate<T, U, Int16Array>, thisArg?: ThisParameterType<Predicate<T, U, Int16Array>> ): Int16Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, -2, -3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Int8Array>[ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: Int8Array, predicate: Predicate<T, U, Int8Array>, thisArg?: ThisParameterType<Predicate<T, U, Int8Array>> ): Int8Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 0, 1, 2, 3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Uint32Array>[ 0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Uint32Array, predicate: Predicate<T, U, Uint32Array>, thisArg?: ThisParameterType<Predicate<T, U, Uint32Array>> ): Uint32Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 0, 1, 2, 3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Uint16Array>[ 0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Uint16Array, predicate: Predicate<T, U, Uint16Array>, thisArg?: ThisParameterType<Predicate<T, U, Uint16Array>> ): Uint16Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 0, 1, 2, 3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Uint8Array>[ 0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Uint8Array, predicate: Predicate<T, U, Uint8Array>, thisArg?: ThisParameterType<Predicate<T, U, Uint8Array>> ): Uint8Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 0, 1, 2, 3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns <Uint8ClampedArray>[ 0 ]
*/
declare function reject<T = unknown, U = unknown>( x: Uint8ClampedArray, predicate: Predicate<T, U, Uint8ClampedArray>, thisArg?: ThisParameterType<Predicate<T, U, Uint8ClampedArray>> ): Uint8ClampedArray;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* function predicate( v ) {
*     return ( isPositiveNumber( real( v ) ) && isPositiveNumber( imag( v ) ) );
* }
*
* var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0 ] );
*
* var out = reject( x, predicate );
* // returns <Complex128Array>
*/
declare function reject<T = unknown, U = unknown>( x: Complex128Array, predicate: Predicate<T, U, Complex128Array>, thisArg?: ThisParameterType<Predicate<T, U, Complex128Array>> ): Complex128Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* function predicate( v ) {
*     return ( isPositiveNumber( realf( v ) ) && isPositiveNumber( imagf( v ) ) );
* }
*
* var x = new Complex64Array( [ 1.0, -2.0, 3.0, 4.0 ] );
*
* var out = reject( x, predicate );
* // returns <Complex64Array>
*/
declare function reject<T = unknown, U = unknown>( x: Complex64Array, predicate: Predicate<T, U, Complex64Array>, thisArg?: ThisParameterType<Predicate<T, U, Complex64Array>> ): Complex64Array;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var x = [ 1, -2, -3, 4 ];
*
* var out = reject( x, isPositiveNumber );
* // returns [ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: Array<T>, predicate: Predicate<T, U, Array<T>>, thisArg?: ThisParameterType<Predicate<T, U, Array<T>>> ): Array<T>;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, -2, -3, 4 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns [ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: AccessorArrayLike<T>, predicate: Predicate<T, U, AccessorArrayLike<T>>, thisArg?: ThisParameterType<Predicate<T, U, AccessorArrayLike<T>>> ): Array<T>;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var x = [ 1, -2, -3, 4 ];
*
* var out = reject( x, isPositiveNumber );
* // returns [ -2, -3 ]
*/
declare function reject<T = unknown, U = unknown>( x: Collection<T>, predicate: Predicate<T, U, Collection<T>>, thisArg?: ThisParameterType<Predicate<T, U, Collection<T>>> ): Array<T>;


// EXPORTS //

export = reject;
