/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/array';

/**
* Returns accessed values.
*
* @returns accessed values
*/
type NullaryCallback<T, U, V> = ( this: V ) => [ T, U ] | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @returns accessed values
*/
type UnaryCallback<X, Y, T, U, V> = ( this: V, values: [ X, Y ] ) => [ T, U ] | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @returns accessed values
*/
type BinaryCallback<X, Y, T, U, V> = ( this: V, values: [ X, Y ], idx: number ) => [ T, U ] | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed values
*/
type TernaryCallback<X, Y, T, U, V> = ( this: V, values: [ X, Y ], idx: number, indices: [ number, number, number ] ) => [ T, U ] | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type QuaternaryCallback<X, Y, Z, T, U, V> = ( this: V, values: [ X, Y ], idx: number, indices: [ number, number, number ], arrays: [ Collection<X>, Collection<Y>, Collection<Z> ] ) => [ T, U ] | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Callback<X, Y, Z, T, U, V> = NullaryCallback<T, U, V> | UnaryCallback<X, Y, T, U, V> | BinaryCallback<X, Y, T, U, V> | TernaryCallback<X, Y, T, U, V> | QuaternaryCallback<X, Y, Z, T, U, V>;

/**
* Callback invoked for each pair of indexed strided array elements retrieved via a callback function.
*
* @param v1 - strided array element
* @param v2 - strided array element
* @returns result
*/
type Binary<T, U, Z> = ( v1: T, v2: U ) => Z;

/**
* Interface describing `mapBy2`.
*/
interface Routine {
	/**
	* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply to callback return values
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*/
	<X = unknown, Y = unknown, Z = unknown, T = unknown, U = unknown, V = unknown>( N: number, x: Collection<X>, strideX: number, y: Collection<Y>, strideY: number, z: Collection<Z>, strideZ: number, fcn: Binary<T, U, Z>, clbk: Callback<X, Y, Z, T, U, V>, thisArg?: ThisParameterType<Callback<X, Y, Z, T, U, V>> ): Collection<Z>;

	/**
	* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @param fcn - binary function to apply to callback return values
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*/
	ndarray<X = unknown, Y = unknown, Z = unknown, T = unknown, U = unknown, V = unknown>( N: number, x: Collection<X>, strideX: number, offsetX: number, y: Collection<Y>, strideY: number, offsetY: number, z: Collection<Z>, strideZ: number, offsetZ: number, fcn: Binary<T, U, Z>, clbk: Callback<X, Y, Z, T, U, V>, thisArg?: ThisParameterType<Callback<X, Y, Z, T, U, V>> ): Collection<Z>;
}

/**
* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - input array
* @param strideY - `y` stride length
* @param z - destination array
* @param strideZ - `z` stride length
* @param fcn - binary function to apply to callback return values
* @param clbk - callback function which returns an array-like object containing two values
* @param thisArg - callback execution context
* @returns `z`
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/
declare var mapBy2: Routine;


// EXPORTS //

export = mapBy2;
