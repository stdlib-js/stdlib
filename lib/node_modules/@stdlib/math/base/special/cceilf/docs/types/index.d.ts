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

import { Complex64 } from '@stdlib/types/complex';
import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Interface for rounding each component of a single-precision complex floating-point number toward positive infinity.
*/
interface Cceilf {
	/**
	* Rounds each component of a single-precision complex floating-point number toward positive infinity.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var v = cceilf( new Complex64( -1.5, 2.5 ) );
	* // returns <Complex64>[ -1.0, 3.0 ]
	*/
	( z: Complex64 ): Complex64;

	/**
	* Rounds each component of a single-precision complex floating-point number toward positive infinity and assigns results to a provided output array.
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
	* var v = cceilf.assign( -1.5, 2.5, out, 1, 0 );
	* // returns <Float32Array>[ -1.0, 3.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( re: number, im: number, out: T, strideOut: number, offsetOut: number ): T;

	/**
	* Rounds each component of a single-precision complex floating-point number stored in a real-valued strided array view toward positive infinity and assigns results to a provided strided output array.
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
	* var z = new Float32Array( [ -1.5, 2.5 ] );
	*
	* var out = cceilf.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 );
	* // returns <Float32Array>[ -1.0, 3.0 ]
	*/
	strided<T extends NumericArray | Collection<number>, U extends NumericArray | Collection<number>>( z: T, strideZ: number, offsetZ: number, out: U, strideOut: number, offsetOut: number ): U;
}

/**
* Rounds each component of a single-precision complex floating-point number toward positive infinity.
*
* @param z - complex number
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var v = cceilf( new Complex64( -1.5, 2.5 ) );
* // returns <Complex64>[ -1.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var out = new Float32Array( 2 );
* var v = cceilf.assign( -1.5, 2.5, out, 1, 0 );
* // returns <Float32Array>[ -1.0, 3.0 ]
*
* var bool = ( out === v );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var z = new Float32Array( [ -1.5, 2.5 ] );
*
* var out = cceilf.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 );
* // returns <Float32Array>[ -1.0, 3.0 ]
*/
declare var cceilf: Cceilf;


// EXPORTS //

export = cceilf;
