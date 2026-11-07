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

import { Complex64 } from '@stdlib/types/complex';
import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Interface for computing the inverse of a single-precision complex floating-point number.
*/
interface Cinvf {
	/**
	* Computes the inverse of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var v = cinvf( new Complex64( 2.0, 4.0 ) );
	* // returns <Complex64>[ ~0.1, ~-0.2 ]
	*/
	( z: Complex64 ): Complex64;

	/**
	* Computes the inverse of a single-precision complex floating-point number and assigns results to a provided output array.
	*
	* @param re - real component
	* @param im - imaginary component
	* @param out - output array
	* @param strideOut - stride length
	* @param offsetOut - starting index
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	* var v = cinvf.assign( 2.0, 4.0, out, 1, 0 );
	* // returns <Float32Array>[ ~0.1, ~-0.2 ]
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( re: number, im: number, out: T, strideOut: number, offsetOut: number ): T;

	/**
	* Computes the inverse of a single-precision complex floating-point number stored in a real-valued strided array view and assigns results to a provided strided output array.
	*
	* @param z - complex number view
	* @param strideZ - stride length for `z`
	* @param offsetZ - starting index for `z`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var z = new Float32Array( [ 2.0, 4.0 ] );
	*
	* var out = cinvf.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 );
	* // returns <Float32Array>[ ~0.1, ~-0.2 ]
	*/
	strided<T extends NumericArray | Collection<number>, U extends NumericArray | Collection<number>>( z: T, strideZ: number, offsetZ: number, out: U, strideOut: number, offsetOut: number ): U;
}

/**
* Computes the inverse of a single-precision complex floating-point number.
*
* @param z - complex number
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var v = cinvf( new Complex64( 2.0, 4.0 ) );
* // returns <Complex64>[ ~0.1, ~-0.2 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var out = new Float32Array( 2 );
* var v = cinvf.assign( 2.0, 4.0, out, 1, 0 );
* // returns <Float32Array>[ ~0.1, ~-0.2 ]
*
* var bool = ( out === v );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var z = new Float32Array( [ 2.0, 4.0 ] );
*
* var out = cinvf.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ ~0.1, ~-0.2 ]
*/
declare var cinvf: Cinvf;


// EXPORTS //

export = cinvf;
