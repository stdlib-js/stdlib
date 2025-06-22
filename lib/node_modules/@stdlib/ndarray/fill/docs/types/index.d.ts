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

import { typedndarray, complexndarray, genericndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Fills an input ndarray with a specified value.
*
* ## Notes
*
* -   If `value` is a number, the function fills an input ndarray with a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
* -   A `value` must be able to safely cast to the input ndarray data type. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
*
* @param x - input ndarray
* @param value - scalar value
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'complex128'
* });
*
* fill( x, 10.0 );
*
* console.log( getData( x ) );
* // => <Complex128Array>[ 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0 ]
*/
declare function fill<T extends complexndarray>( x: T, value: number | ComplexLike ): T;

/**
* Fills an input ndarray with a specified value.
*
* ## Notes
*
* -   A `value` must be able to safely cast to the input ndarray data type. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
*
* @param x - input ndarray
* @param value - scalar value
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'generic'
* });
*
* fill( x, 10.0 );
*
* console.log( getData( x ) );
* // => [ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
declare function fill<T = unknown, U extends genericndarray<T> = genericndarray<T>>( x: U, value: T ): U;

/**
* Fills an input ndarray with a specified value.
*
* ## Notes
*
* -   A `value` must be able to safely cast to the input ndarray data type. Scalar values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input ndarray).
*
* @param x - input ndarray
* @param value - scalar value
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'float64'
* });
*
* fill( x, 10.0 );
*
* console.log( getData( x ) );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
declare function fill<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, value: T ): U;


// EXPORTS //

export = fill;
