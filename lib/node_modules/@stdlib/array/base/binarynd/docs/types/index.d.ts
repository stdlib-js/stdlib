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
* Binary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @returns result
*/
type Binary<T, U, V> = ( v1: T, v2: U ) => V;

/**
* Applies a binary callback to elements in two one-dimensional nested input arrays and assigns results to elements in a one-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ 2.0, 2.0 ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array1D<T>, Array1D<U>, Array1D<V> ], shape: Shape1D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array2D<T>, Array2D<U>, Array2D<V> ], shape: Shape2D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array3D<T>, Array3D<U>, Array3D<V> ], shape: Shape3D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array4D<T>, Array4D<U>, Array4D<V> ], shape: Shape4D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array5D<T>, Array5D<U>, Array5D<V> ], shape: Shape5D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two six-dimensional nested input arrays and assigns results to elements in a six-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array6D<T>, Array6D<U>, Array6D<V> ], shape: Shape6D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two seven-dimensional nested input arrays and assigns results to elements in a seven-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array7D<T>, Array7D<U>, Array7D<V> ], shape: Shape7D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two eight-dimensional nested input arrays and assigns results to elements in an eight-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array8D<T>, Array8D<U>, Array8D<V> ], shape: Shape8D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two nine-dimensional nested input arrays and assigns results to elements in a nine-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array9D<T>, Array9D<U>, Array9D<V> ], shape: Shape9D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two ten-dimensional nested input arrays and assigns results to elements in a ten-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array10D<T>, Array10D<U>, Array10D<V> ], shape: Shape10D, fcn: Binary<T, U, V> ): void;

/**
* Applies a binary callback to elements in two n-dimensional nested input arrays and assigns results to elements in an n-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ [ [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ] ] ] ] ] ] ]
*/
declare function binarynd<T = unknown, U = unknown, V = unknown>( arrays: [ Array<T>, Array<U>, Array<V> ], shape: Shape, fcn: Binary<T, U, V> ): void;


// EXPORTS //

export = binarynd;
