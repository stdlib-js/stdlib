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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Array1D, Array2D, Array3D, Array4D, Array5D, Array6D, Array7D, Array8D, Array9D, Array10D } from '@stdlib/types/array';
import { Shape, Shape1D, Shape2D, Shape3D, Shape4D, Shape5D, Shape6D, Shape7D, Shape8D, Shape9D, Shape10D } from '@stdlib/types/ndarray';

/**
* Unary callback.
*
* @param value - input value
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Applies a unary callback to elements in a one-dimensional nested input array and assigns results to elements in a one-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ 10.0, 10.0 ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array1D<T>, Array1D<U> ], shape: Shape1D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a two-dimensional nested input array and assigns results to elements in a two-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array2D<T>, Array2D<U> ], shape: Shape2D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a three-dimensional nested input array and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array3D<T>, Array3D<U> ], shape: Shape3D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a four-dimensional nested input array and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array4D<T>, Array4D<U> ], shape: Shape4D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a five-dimensional nested input array and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array5D<T>, Array5D<U> ], shape: Shape5D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a six-dimensional nested input array and assigns results to elements in a six-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array6D<T>, Array6D<U> ], shape: Shape6D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a seven-dimensional nested input array and assigns results to elements in a seven-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array7D<T>, Array7D<U> ], shape: Shape7D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in an eight-dimensional nested input array and assigns results to elements in an eight-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array8D<T>, Array8D<U> ], shape: Shape8D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a nine-dimensional nested input array and assigns results to elements in a nine-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array9D<T>, Array9D<U> ], shape: Shape9D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in a ten-dimensional nested input array and assigns results to elements in a ten-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array10D<T>, Array10D<U> ], shape: Shape10D, fcn: Unary<T, U> ): void;

/**
* Applies a unary callback to elements in an n-dimensional nested input array and assigns results to elements in an n-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var onesnd = require( `@stdlib/array/base/onesnd` );
* var zerosnd = require( `@stdlib/array/base/zerosnd` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ [ [ [ [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ] ] ] ] ] ] ] ]
*/
declare function unarynd<T = unknown, U = unknown>( arrays: [ Array<T>, Array<U> ], shape: Shape, fcn: Unary<T, U> ): void;


// EXPORTS //

export = unarynd;
