/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Interface describing `sincospif`.
*/
interface SinCosPif {
	/**
	* Simultaneously computes the sine and cosine of a single-precision floating-point number times π.
	*
	* ## Notes
	*
	* -   The function computes `sin(πx)` and `cos(πx)` more accurately than the obvious approach, especially for large `x`.
	*
	* @param x - input value
	* @returns two-element array containing sin(πx) and cos(πx)
	*
	* @example
	* var v = sincospif( 0.0 );
	* // returns <Float32Array>[ 0.0, 1.0 ]
	*
	* @example
	* var v = sincospif( 0.5 );
	* // returns <Float32Array>[ 1.0, 0.0 ]
	*
	* @example
	* var v = sincospif( 0.1 );
	* // returns <Float32Array>[ ~0.309, ~0.951 ]
	*
	* @example
	* var v = sincospif( NaN );
	* // returns <Float32Array>[ NaN, NaN ]
	*/
	( x: number ): Float32Array;

	/**
	* Simultaneously computes the sine and cosine of a single-precision floating-point number times π and assigns the results to a provided output array.
	*
	* ## Notes
	*
	* -   The function computes `sin(πx)` and `cos(πx)` more accurately than the obvious approach, especially for large `x`.
	*
	* @param x - input value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns two-element array containing sin(πx) and cos(πx)
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	*
	* var v = sincospif.assign( 0.0, out, 1, 0 );
	* // returns <Float32Array>[ 0.0, 1.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T extends Collection<number> = Collection<number>>( x: number, out: T, stride: number, offset: number ): T;
}

/**
* Simultaneously computes the sine and cosine of a single-precision floating-point number times π.
*
* ## Notes
*
* -   The function computes `sin(πx)` and `cos(πx)` more accurately than the obvious approach, especially for large `x`.
*
* @param x - input value
* @returns two-element array containing sin(πx) and cos(πx)
*
* @example
* var v = sincospif( 0.0 );
* // returns <Float32Array>[ 0.0, 1.0 ]
*
* @example
* var v = sincospif( 0.5 );
* // returns <Float32Array>[ 1.0, 0.0 ]
*
* @example
* var v = sincospif( 0.1 );
* // returns <Float32Array>[ ~0.309, ~0.951 ]
*
* @example
* var v = sincospif( NaN );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare var sincospif: SinCosPif;


// EXPORTS //

export = sincospif;
