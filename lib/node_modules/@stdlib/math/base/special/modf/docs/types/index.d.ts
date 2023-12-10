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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
 * Interface describing `modf`.
 */
interface Modf {
	/**
	* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var parts = modf( 3.14 );
	* // returns [ 3.0, 0.14000000000000012 ]
	*/
	( x: number ): Array<number>;

	/**
	* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
	*
	* @param x - input value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var out = new Float64Array( 2 );
	*
	* var parts = modf.assign( 3.14, out, 1, 0 );
	* // returns <Float64Array>[ 3.0, 0.14000000000000012 ]
	*
	* var bool = ( parts === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
}

/**
* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
*
* @param x - input value
* @returns output array
*
* @example
* var parts = modf( 3.14 );
* // returns [ 3.0, 0.14000000000000012 ]
*/
declare var modf: Modf;


// EXPORTS //

export = modf;
