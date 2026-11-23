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

import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Interface describing `string2words`.
*/
interface StringToWords {
	/**
	* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words.
	*
	* @param str - string representation of a 64-bit unsigned integer
	* @param radix - radix (base) to use for string conversion (2-36)
	* @returns output array
	*
	* @example
	* var out = string2words( '1234', 10 );
	* // returns [ 0, 1234 ]
	*
	* out = string2words( '18446744073709551615', 10 );
	* // returns [ 4294967295, 4294967295 ]
	*
	* out = string2words( 'ffffffffffffffff', 16 );
	* // returns [ 4294967295, 4294967295 ]
	*
	* out = string2words( '3w5e11264sgsf', 36 );
	* // returns [ 4294967295, 4294967295 ]
	*/
	( str: string, radix: number ): [ number, number ];

	/**
	* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words and assigns results to a provided output array.
	*
	* @param str - string representation of a 64-bit unsigned integer
	* @param radix - radix (base) to use for string conversion (2-36)
	* @param out - output array
	* @param stride - stride length
	* @param offset - starting index
	* @returns output array
	*
	* @example
	* var Uint32Array = require( '@stdlib/array/uint32' );
	*
	* var out = new Uint32Array( 2 );
	* // returns <Uint32Array>[ 0, 0 ]
	*
	* var w = string2words.assign( 'ffffffffffffffff', 16, out, 1, 0 );
	* // returns <Uint32Array>[ 4294967295, 4294967295 ]
	*
	* var bool = ( w === out );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( str: string, radix: number, out: T, stride: number, offset: number ): T;
}

/**
* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words.
*
* @param str - string representation of a 64-bit unsigned integer
* @param radix - radix (base) to use for string conversion (2-36)
* @returns output array
*
* @example
* var out = string2words( '1234', 10 );
* // returns [ 0, 1234 ]
*
* out = string2words( '18446744073709551615', 10 );
* // returns [ 4294967295, 4294967295 ]
*
* out = string2words( 'ffffffffffffffff', 16 );
* // returns [ 4294967295, 4294967295 ]
*
* out = string2words( '3w5e11264sgsf', 36 );
* // returns [ 4294967295, 4294967295 ]
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var out = new Uint32Array( 2 );
* // returns <Uint32Array>[ 0, 0 ]
*
* var w = string2words.assign( 'ffffffffffffffff', 16, out, 1, 0 );
* // returns <Uint32Array>[ 4294967295, 4294967295 ]
*
* var bool = ( w === out );
* // returns true
*/
declare var string2words: StringToWords;


// EXPORTS //

export = string2words;
