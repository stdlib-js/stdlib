/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Nullary callback.
*
* @returns result
*/
type NullaryCallback<ThisArg> = ( this: ThisArg ) => any;

/**
* Unary callback.
*
* @param x - current array element
* @returns result
*/
type UnaryFcn<T, ThisArg> = ( this: ThisArg, x: T ) => any;

/**
* Unary callback.
*
* @param x - current array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type UnaryArgsFcn<T, U, ThisArg> = ( this: ThisArg, x: T, index: number, arrays?: [ U ] ) => any;

/**
* Unary callback.
*
* @param x - current array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type UnaryCallback<T, U, ThisArg> = UnaryFcn<T, ThisArg> | UnaryArgsFcn<T, U, ThisArg>;

/**
* Binary callback.
*
* @param x - current first array element
* @param y - current second array element
* @returns result
*/
type BinaryFcn<T, V, ThisArg> = ( this: ThisArg, x: T, y: V ) => any;

/**
* Binary callback.
*
* @param x - current first array element
* @param y - current second array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type BinaryArgsFcn<T, U, V, W, ThisArg> = ( this: ThisArg, x: T, y: V, index: number, arrays?: [ U, W ] ) => any;

/**
* Binary callback.
*
* @param x - current first array element
* @param y - current second array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type BinaryCallback<T, U, V, W, ThisArg> = BinaryFcn<T, V, ThisArg> | BinaryArgsFcn<T, U, V, W, ThisArg>;

/**
* Ternary callback.
*
* @param x - current first array element
* @param y - current second array element
* @param z - current third array element
* @returns result
*/
type TernaryFcn<T, V, X, ThisArg> = ( this: ThisArg, x: T, y: V, z: X ) => any;

/**
* Ternary callback.
*
* @param x - current first array element
* @param y - current second array element
* @param z - current third array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type TernaryArgsFcn<T, U, V, W, X, Y, ThisArg> = ( this: ThisArg, x: T, y: V, z: X, index: number, arrays?: [ U, W, Y ] ) => any;

/**
* Ternary callback.
*
* @param x - current first array element
* @param y - current second array element
* @param z - current third array element
* @param index - current array element index
* @param arrays - input arrays
* @returns result
*/
type TernaryCallback<T, U, V, W, X, Y, ThisArg> = TernaryFcn<T, V, X, ThisArg> | TernaryArgsFcn<T, U, V, W, X, Y, ThisArg>;

/**
* Callback.
*
* @param args - callback arguments
* @returns results
*/
type Callback<ThisArg> = ( this: ThisArg, ...args: Array<unknown> ) => any;

/**
* Inserts the result of a callback function into a format string and prints the result.
*
* @param str - format string
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk() {
*     return 'beep';
* }
*
* logEachMap( '%s', clbk );
* // e.g., => 'beep\n'
*/
declare function logEachMap<ThisArg = unknown>( str: string, clbk: NullaryCallback<ThisArg>, thisArg?: ThisParameterType<NullaryCallback<ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* @param str - format string
* @param arg0 - input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( v ) {
*     return v * 2;
* }
*
* var x = [ 1, 2, 3 ];
*
* logEachMap( '%d', x, clbk );
* // e.g., => '2\n4\n6\n'
*/
declare function logEachMap<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( str: string, arg0: U, clbk: UnaryCallback<T, U, ThisArg>, thisArg?: ThisParameterType<UnaryCallback<T, U, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( v ) {
*     return v * 2;
* }
*
* logEachMap( '%d', 1, clbk );
* // e.g., => '2\n'
*/
declare function logEachMap<T = unknown, ThisArg = unknown>( str: string, arg0: T, clbk: UnaryCallback<T, [ T ], ThisArg>, thisArg?: ThisParameterType<UnaryCallback<T, [ T ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y ) {
*     return x + y;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d', x, y, clbk );
* // e.g., => '5\n7\n9\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	ThisArg = unknown
>( str: string, arg0: U, arg1: W, clbk: BinaryCallback<T, U, V, W, ThisArg>, thisArg?: ThisParameterType<BinaryCallback<T, U, V, W, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y ) {
*     return x + y;
* }
*
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d', 1, y, clbk );
* // e.g., => '5\n6\n7\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	ThisArg = unknown
>( str: string, arg0: T, arg1: W, clbk: BinaryCallback<T, [ T ], V, W, ThisArg>, thisArg?: ThisParameterType<BinaryCallback<T, [ T ], V, W, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y ) {
*     return x + y;
* }
*
* var x = [ 1, 2, 3 ];
*
* logEachMap( '%d', x, 1, clbk );
* // e.g., => '2\n3\n4\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	ThisArg = unknown
>( str: string, arg0: T, arg1: V, clbk: BinaryCallback<T, U, V, [ V ], ThisArg>, thisArg?: ThisParameterType<BinaryCallback<T, U, V, [ V ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y ) {
*     return x + y;
* }
*
* logEachMap( '%d', 1, 2, clbk );
* // e.g., => '3\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	ThisArg = unknown
>( str: string, arg0: T, arg1: V, clbk: BinaryCallback<T, [ T ], V, [ V ], ThisArg>, thisArg?: ThisParameterType<BinaryCallback<T, [ T ], V, [ V ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input array
* @param arg2 - third input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
* var z = [ 7, 8, 9 ];
*
* logEachMap( '%d', x, y, z, clbk );
* // e.g., => '12\n15\n18\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	X = unknown,
	Y extends InputArray<X> = InputArray<X>,
	ThisArg = unknown
>( str: string, arg0: U, arg1: W, arg2: Y, clbk: TernaryCallback<T, U, V, W, X, Y, ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, U, V, W, X, Y, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input array
* @param arg2 - third input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var y = [ 4, 5, 6 ];
* var z = [ 7, 8, 9 ];
*
* logEachMap( '%d', 1, y, z, clbk );
* // e.g., => '12\n14\n16\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	X = unknown,
	Y extends InputArray<X> = InputArray<X>,
	ThisArg = unknown
>( str: string, arg0: T, arg1: W, arg2: Y, clbk: TernaryCallback<T, [ T ], V, W, X, Y, ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, [ T ], V, W, X, Y, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input value
* @param arg2 - third input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var x = [ 1, 2, 3 ];
* var z = [ 7, 8, 9 ];
*
* logEachMap( '%d', x, 1, z, clbk );
* // e.g., => '9\n11\n13\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	X = unknown,
	Y extends InputArray<X> = InputArray<X>,
	ThisArg = unknown
>( str: string, arg0: U, arg1: V, arg2: Y, clbk: TernaryCallback<T, U, V, [ V ], X, Y, ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, U, V, [ V ], X, Y, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input array
* @param arg2 - third input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d', x, y, 1, clbk );
* // e.g., => '6\n8\n10\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	X = unknown,
	ThisArg = unknown
>( str: string, arg0: U, arg1: W, arg2: X, clbk: TernaryCallback<T, U, V, W, X, [ X ], ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, U, V, W, X, [ X ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input value
* @param arg2 - third input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var z = [ 7, 8, 9 ];
*
* logEachMap( '%d', 1, 2, z, clbk );
* // e.g., => '10\n11\n12\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	X = unknown,
	Y extends InputArray<X> = InputArray<X>,
	ThisArg = unknown
>( str: string, arg0: T, arg1: V, arg2: Y, clbk: TernaryCallback<T, [ T ], V, [ V ], X, Y, ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, [ T ], V, [ V ], X, Y, ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input value
* @param arg2 - third input array
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var y = [ 4, 5, 6 ];
*
* logEachMap( '%d', 1, y, 2, clbk );
* // e.g., => '7\n8\n9\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	W extends InputArray<V> = InputArray<V>,
	X = unknown,
	ThisArg = unknown
>( str: string, arg0: T, arg1: W, arg2: X, clbk: TernaryCallback<T, [ T ], V, W, X, [ X ], ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, [ T ], V, W, X, [ X ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input array
* @param arg1 - second input value
* @param arg2 - third input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var x = [ 1, 2, 3 ];
*
* logEachMap( '%d', x, 1, 2, clbk );
* // e.g., => '4\n5\n6\n'
*/
declare function logEachMap<
	T = unknown,
	U extends InputArray<T> = InputArray<T>,
	V = unknown,
	X = unknown,
	ThisArg = unknown
>( str: string, arg0: U, arg1: V, arg2: X, clbk: TernaryCallback<T, U, V, [ V ], X, [ X ], ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, U, V, [ V ], X, [ X ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input value
* @param arg2 - third input value
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* logEachMap( '%d', 1, 2, 3, clbk );
* // e.g., => '6\n'
*/
declare function logEachMap<
	T = unknown,
	V = unknown,
	X = unknown,
	ThisArg = unknown
>( str: string, arg0: T, arg1: V, arg2: X, clbk: TernaryCallback<T, [ T ], V, [ V ], X, [ X ], ThisArg>, thisArg?: ThisParameterType<TernaryCallback<T, [ T ], V, [ V ], X, [ X ], ThisArg>> ): void;

/**
* Inserts array element values and the result of a callback function into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param arg0 - first input value
* @param arg1 - second input value
* @param arg2 - third input value
* @param args - additional input values
*
* @example
* function clbk( x, y, z ) {
*     return x + y + z;
* }
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
* var z = [ 7, 8, 9 ];
*
* logEachMap( '%d', x, y, z, clbk );
* // e.g., => '12\n15\n18\n'
*/
declare function logEachMap( str: string, arg0: unknown, arg1: unknown, arg2: unknown, ...args: Array<unknown> ): void;


// EXPORTS //

export = logEachMap;
