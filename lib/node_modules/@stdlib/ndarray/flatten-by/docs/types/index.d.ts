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

/// <reference types="@stdlib/types"/>

import { typedndarray, genericndarray, Order, DataTypeMap } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Callback invoked for each ndarray element.
*
* @returns output value
*/
type Nullary<V, ThisArg> = ( this: ThisArg ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @returns output value
*/
type Unary<T, V, ThisArg> = ( this: ThisArg, value: T ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @returns output value
*/
type Binary<T, V, ThisArg> = ( this: ThisArg, value: T, indices: Array<number> ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Ternary<T, U, V, ThisArg> = ( this: ThisArg, value: T, indices: Array<number>, arr: U ) => V;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Callback<T, U, V, ThisArg> = Nullary<V, ThisArg> | Unary<T, V, ThisArg> | Binary<T, V, ThisArg> | Ternary<T, U, V, ThisArg>;

/**
* Interface defining "base" function options.
*/
interface BaseOptions {
	/**
	* Maximum number of dimensions to flatten.
	*
	* ## Notes
	*
	* -   By default, the function flattens all input ndarray dimensions.
	*/
	depth?: number;

	/**
	* Order in which input ndarray elements should be flattened.
	*
	* ## Notes
	*
	* -   The following orders are supported:
	*
	*     -   **row-major**: flatten in lexicographic order.
	*     -   **column-major**: flatten in colexicographic order.
	*     -   **same**: flatten according to the stated order of the input ndarray.
	*     -   **any**: flatten according to the physical layout of the input ndarray data in memory, regardless of the stated order of the input ndarray.
	*
	* -   Default: 'row-major'.
	*/
	order?: Order | 'same' | 'any';
}

/**
* Function options.
*/
type Options<U> = BaseOptions & {
	/**
	* Output ndarray data type.
	*/
	dtype: U;
};

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var y = flattenBy( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function flattenBy<T extends typedndarray<number> = typedndarray<number>, ThisArg = unknown>( x: T, fcn: Callback<number, T, number, ThisArg>, thisArg?: ThisParameterType<Callback<number, T, number, ThisArg>> ): T;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function identity( value ) {
*     return value;
* }
*
* var buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var shape = [ 1, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex64', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var y = flattenBy( x, identity );
* // returns <ndarray>
*/
declare function flattenBy<T extends ComplexLike = ComplexLike, U extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( x: U, fcn: Callback<T, U, T, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, T, ThisArg>> ): U;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function invert( value ) {
*     return !value;
* }
*
* var buffer = new BooleanArray( [ true, false, true, false, true, false ] );
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var y = flattenBy( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ false, true, false, true, false, true ]
*/
declare function flattenBy<T extends typedndarray<boolean> = typedndarray<boolean>, ThisArg = unknown>( x: T, fcn: Callback<boolean, T, boolean, ThisArg>, thisArg?: ThisParameterType<Callback<boolean, T, boolean, ThisArg>> ): T;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var y = flattenBy( x, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function flattenBy<T = unknown, U extends genericndarray<T> = genericndarray<T>, V = unknown, W extends genericndarray<V> = genericndarray<V>, ThisArg = unknown>( x: U, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): W;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var opts = {
*      'depth': 2
* };
*
* var y = flattenBy( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function flattenBy<T extends typedndarray<number> = typedndarray<number>, ThisArg = unknown>( x: T, options: BaseOptions, fcn: Callback<number, T, number, ThisArg>, thisArg?: ThisParameterType<Callback<number, T, number, ThisArg>> ): T;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function identity( value ) {
*     return value;
* }
*
* var buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var shape = [ 1, 3 ];
* var strides = [ 3, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex64', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var opts = {
*      'depth': 1
* };
*
* var y = flattenBy( x, opts, identity );
* // returns <ndarray>
*/
declare function flattenBy<T extends ComplexLike = ComplexLike, U extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( x: U, options: BaseOptions, fcn: Callback<T, U, T, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, T, ThisArg>> ): U;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function invert( value ) {
*     return !value;
* }
*
* var buffer = new BooleanArray( [ true, false, true, false, true, false ] );
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var opts = {
*     'depth': 2
* };
*
* var y = flattenBy( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ false, true, false, true, false, true ]
*/
declare function flattenBy<T extends typedndarray<boolean> = typedndarray<boolean>, ThisArg = unknown>( x: T, options: BaseOptions, fcn: Callback<boolean, T, boolean, ThisArg>, thisArg?: ThisParameterType<Callback<boolean, T, boolean, ThisArg>> ): T;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var opts = {
*     'depth': 2
* };
*
* var y = flattenBy( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function flattenBy<T = unknown, U extends genericndarray<T> = genericndarray<T>, V = unknown, W extends genericndarray<V> = genericndarray<V>, ThisArg = unknown>( x: U, options: BaseOptions, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): W;

/**
* Flattens an ndarray according to a callback function.
*
* @param x - input ndarray
* @param options - function options
* @param options.depth - maximum number of dimensions to flatten
* @param options.order - order in which input ndarray elements should be flattened
* @param options.dtype - output ndarray data type
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* function scale( value ) {
*     return value * 2.0;
* }
*
* var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var shape = [ 3, 1, 2 ];
* var strides = [ 2, 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // return <ndarray>
*
* var opts = {
*      'depth': 2
* };
*
* var y = flattenBy( x, opts, scale );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function flattenBy<T = unknown, U extends typedndarray<T> | genericndarray<T> = typedndarray<T>, V = unknown, W extends keyof DataTypeMap<T> = 'generic', ThisArg = unknown>( x: U, options: Options<W>, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): DataTypeMap<V>[W];


// EXPORTS //

export = flattenBy;
