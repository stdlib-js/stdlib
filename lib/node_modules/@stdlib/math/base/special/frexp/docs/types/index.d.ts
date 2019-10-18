/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* ## Notes
*
* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
*
* @param out - output array
* @param x - input value
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var out = new Float64Array( 2 );
*
* var y = frexp( out, 4.0 );
* // returns <Float64Array>[ 0.5, 3 ]
*
* var bool = ( y === out );
* // returns true
*/
declare function frexp( out: Collection, x: number ): Collection;

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* ## Notes
*
* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
*
* @param x - input value
* @returns output array
*
* @example
* var out = frexp( 4.0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexp( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexp( -0.0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexp( NaN );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexp( Infinity );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexp( -Infinity );
* // returns [ -Infinity , 0 ]
*/
declare function frexp( x: number ): Collection;


// EXPORTS //

export = frexp;
