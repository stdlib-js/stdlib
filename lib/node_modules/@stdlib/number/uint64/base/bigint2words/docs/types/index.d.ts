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
* Interface describing `bigint2words`.
*/
interface BigIntToWords {
	/**
	* Splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer.
	*
	* @param value - integer value in the range [0, 2^64-1]
	* @returns high and low words as 32-bit unsigned integers
	*
	* @example
	* var BigInt = require( '@stdlib/bigint/ctor' );
	*
	* var out = bigint2words( BigInt( 1234 ) );
	* // returns [ 0, 1234 ]
	*
	* out = bigint2words( BigInt( 0x100000000 ) );
	* // returns [ 1, 0 ]
	*
	* out = bigint2words( BigInt( '18446744073709551615' ) );
	* // returns [ 4294967295, 4294967295 ]
	*/
	( value: bigint ): [ number, number ];

	/**
	* Splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer and assigns results to a provided output array.
	*
	* @param value - integer value in the range [0, 2^64-1]
	* @param out - output array
	* @param stride - stride length
	* @param offset - starting index
	* @returns output array
	*
	* @example
	* var Uint32Array = require( '@stdlib/array/uint32' );
	* var BigInt = require( '@stdlib/bigint/ctor' );
	*
	* var out = new Uint32Array( 2 );
	* // returns <Uint32Array>[ 0, 0 ]
	*
	* var w = bigint2words.assign( BigInt( '18446744073709551615' ), out, 1, 0 );
	* // returns <Uint32Array>[ 4294967295, 4294967295 ]
	*
	* var bool = ( w === out );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( value: bigint, out: T, stride: number, offset: number ): T;
}

/**
* Splits a bigint into the high and low 32-bit words of a 64-bit unsigned integer.
*
* @param value - integer value in the range [0, 2^64-1]
* @returns high and low words as 32-bit unsigned integers
*
* @example
* var BigInt = require( '@stdlib/bigint/ctor' );
*
* var out = bigint2words( BigInt( 1234 ) );
* // returns [ 0, 1234 ]
*
* out = bigint2words( BigInt( 0x100000000 ) );
* // returns [ 1, 0 ]
*
* out = bigint2words( BigInt( '18446744073709551615' ) );
* // returns [ 4294967295, 4294967295 ]
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
* var BigInt = require( '@stdlib/bigint/ctor' );
*
* var out = new Uint32Array( 2 );
* // returns <Uint32Array>[ 0, 0 ]
*
* var w = bigint2words.assign( BigInt( '18446744073709551615' ), out, 1, 0 );
* // returns <Uint32Array>[ 4294967295, 4294967295 ]
*
* var bool = ( w === out );
* // returns true
*/
declare var bigint2words: BigIntToWords;


// EXPORTS //

export = bigint2words;
