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

import { ArrayLike } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Input ndarray.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output ndarray.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Additional ndarray arguments.
*/
type AdditionalArray<V> = typedndarray<V>;

/**
* ndarray arguments.
*/
type ListOfArrays<T, U, V> = [ InputArray<T>, OutputArray<U>, ...Array<AdditionalArray<V>> ];

/**
* ndarrays arguments passed to reduction function.
*/
type ReductionArrays<T, V> = [ InputArray<T>, ...Array<AdditionalArray<V>> ];

/**
* Callback invoked for each ndarray element.
*
* @returns output value
*/
type Nullary<W, ThisArg> = ( this: ThisArg ) => W;

/**
* Returns the results of the callback function.
*
* @param value - current array element
* @returns output value
*/
type Unary<T, W, ThisArg> = ( this: ThisArg, value: T ) => W;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @returns output value
*/
type Binary<T, W, ThisArg> = ( this: ThisArg, value: T, indices: Array<number> ) => W;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Ternary<T, W, ThisArg> = ( this: ThisArg, value: T, indices: Array<number>, arr: typedndarray<T> ) => W;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns output value
*/
type Callback<T, W, ThisArg> = Nullary<W, ThisArg> | Unary<T, W, ThisArg> | Binary<T, W, ThisArg> | Ternary<T, W, ThisArg>;

/**
* Unary reduction function.
*
* @param arrays - list of ndarrays
* @param clbk - callback function
* @returns reduction result
*/
type UnaryReductionFcn<T, U, W> = ( arrays: [ typedndarray<T> ], clbk: Callback<T, W, unknown> ) => U;

/**
* Unary reduction function.
*
* @param arrays - list of ndarrays
* @param options - function options
* @param clbk - callback function
* @returns reduction result
*/
type UnaryReductionFcnWithOptions<T, U, W> = ( arrays: [ typedndarray<T> ], options: Object, clbk: Callback<T, W, unknown> ) => U;

/**
* Reduction function.
*
* @param arrays - list of ndarrays
* @param clbk - callback function
* @returns reduction result
*/
type ReductionFcn<T, U, V, W> = ( arrays: ReductionArrays<T, V>, clbk: Callback<T, W, unknown> ) => U;

/**
* Reduction function.
*
* @param arrays - list of ndarrays
* @param options - function options
* @param clbk - callback function
* @returns reduction result
*/
type ReductionFcnWithOptions<T, U, V, W> = ( arrays: ReductionArrays<T, V>, options: Object, clbk: Callback<T, W, unknown> ) => U;

/**
* Reduction function.
*
* @param arrays - list of ndarrays
* @param options - function options
* @param clbk - callback function
* @returns reduction result
*/
type Reduction<T, U, V, W> = UnaryReductionFcn<T, U, W> | UnaryReductionFcnWithOptions<T, U, W> | ReductionFcn<T, U, V, W> | ReductionFcnWithOptions<T, U, V, W>;

/**
* Performs a reduction over a list of specified dimensions in an input ndarray according to a callback function and assigns results to a provided output ndarray.
*
* @param fcn - reduction function
* @param arrays - array-like object containing ndarrays
* @param dims - list of dimensions over which to perform a reduction
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var filled = require( '@stdlib/array/base/filled' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var everyBy = require( '@stdlib/ndarray/base/every-by' );
*
* function clbk( value ) {
*     return value > 0.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = filled( false, 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceSubarrayBy( everyBy, [ x, y ], [ 2, 3 ], clbk );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ true, false, true ] ]
*/
declare function unaryReduceSubarrayBy<T = unknown, U = unknown, V = unknown, W = unknown, ThisArg = unknown>( fcn: Reduction<T, U, V, W>, arrays: ListOfArrays<T, U, V>, dims: ArrayLike<number>, clbk: Callback<T, W, ThisArg>, thisArg?: ThisParameterType<Callback<T, W, ThisArg>> ): void;

/**
* Performs a reduction over a list of specified dimensions in an input ndarray according to a callback function and assigns results to a provided output ndarray.
*
* @param fcn - reduction function
* @param arrays - array-like object containing ndarrays
* @param dims - list of dimensions over which to perform a reduction
* @param options - function options
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var filled = require( '@stdlib/array/base/filled' );
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
* var everyBy = require( '@stdlib/ndarray/base/every-by' );
*
* function clbk( value ) {
*     return value > 0.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = filled( false, 3 );
*
* // Define the array shapes:
* var xsh = [ 1, 3, 2, 2 ];
* var ysh = [ 1, 3 ];
*
* // Define the array strides:
* var sx = [ 12, 4, 2, 1 ];
* var sy = [ 3, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
*
* // Create an input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': xsh,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* // Create an output ndarray-like object:
* var y = {
*     'dtype': 'generic',
*     'data': ybuf,
*     'shape': ysh,
*     'strides': sy,
*     'offset': oy,
*     'order': 'row-major'
* };
*
* // Perform a reduction:
* unaryReduceSubarrayBy( everyBy, [ x, y ], [ 2, 3 ], {}, clbk );
*
* var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
* // returns [ [ true, false, true ] ]
*/
declare function unaryReduceSubarrayBy<T = unknown, U = unknown, V = unknown, W = unknown, ThisArg = unknown>( fcn: Reduction<T, U, V, W>, arrays: ListOfArrays<T, U, V>, dims: ArrayLike<number>, options: Object, clbk: Callback<T, W, ThisArg>, thisArg?: ThisParameterType<Callback<T, W, ThisArg>> ): void;


// EXPORTS //

export = unaryReduceSubarrayBy;
