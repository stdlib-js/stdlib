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

import { NumericArray } from '@stdlib/types/array';

interface SinCosf {
	/**
	* Simultaneously computes the sine and cosine of a single-precision floating-point number (in radians).
	*
	* @param x - input value (in radians)
	* @returns sine and cosine
	*
	* @example
	* var v = sincosf( 0.0 );
	* // returns [ ~0.0, ~1.0 ]
	*
	* @example
	* var v = sincosf( 3.141592653589793/2.0 );
	* // returns [ ~1.0, ~0.0 ]
	*
	* @example
	* var v = sincosf( -3.141592653589793/6.0 );
	* // returns [ ~-0.5, ~0.866 ]
	*
	* @example
	* var v = sincosf( NaN );
	* // returns [ NaN, NaN ]
	*/
	( x: number ): Array<number>;

	/**
	* Simultaneously computes the sine and cosine of a single-precision floating-point number (in radians) and assigns the results to a provided output array.
	*
	* @param x - input value (in radians)
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns sine and cosine
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	*
	* var v = sincosf.assign( 0.0, out, 1, 0 );
	* // return <Float32Array>[ ~0.0, ~1.0 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T extends NumericArray>( x: number, out: T, stride: number, offset: number ): T;
}

/**
* Simultaneously computes the sine and cosine of a single-precision floating-point number (in radians).
*
* @param x - input value (in radians)
* @returns sine and cosine
*
* @example
* var v = sincosf( 0.0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = sincosf( 3.141592653589793/2.0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = sincosf( -3.141592653589793/6.0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = sincosf( NaN );
* // returns [ NaN, NaN ]
*/
declare var sincosf: SinCosf;


// EXPORTS //

export = sincosf;
