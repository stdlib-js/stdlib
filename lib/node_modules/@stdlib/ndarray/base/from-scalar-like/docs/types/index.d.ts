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

import { typedndarray, genericndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T> | genericndarray<T>;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = getShape( y );
* // returns []
*
* var dt = String( getDType( y ) );
* // returns 'float64'
*
* var v = y.get();
* // returns 1.0
*/
declare function scalar2ndarrayLike<T = unknown, U extends InputArray<T> = InputArray<T>>( x: U, value: T ): U;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var v = new Complex128( 1.0, 2.0 );
*
* var y = scalar2ndarrayLike( x, v );
* // returns <ndarray>
*
* var sh = getShape( y );
* // returns []
*
* var dt = String( getDType( y ) );
* // returns 'complex128'
*
* var v = y.get();
* // returns <Complex128>[ 1.0, 2.0 ]
*/
declare function scalar2ndarrayLike<T extends typedndarray<ComplexLike> = typedndarray<ComplexLike>>( x: T, value: number ): T;


// EXPORTS //

export = scalar2ndarrayLike;
