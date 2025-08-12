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

import { Collection } from '@stdlib/types/array';

/**
* Interface describing `kernelSincosf`.
*/
interface KernelSincosf {
	/**
	* Simultaneously computes the sine and cosine of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format.
	*
	* @param x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
	* @returns output array
	*
	* @example
	* var parts = kernelSincosf( 0.0 );
	* // returns [ ~0.0, ~1.0 ]
	*/
	( x: number ): [ number, number ];

	/**
	* Simultaneously computes the sine and cosine of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format, and stores the results in a provided output array.
	*
	* @param x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	*
	* var sc = kernelSincosf.assign( 0.0, out, 1, 0 );
	* // returns <Float32Array>[ ~0.0, ~1.0 ]
	*
	* var bool = ( sc === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
}

/**
* Simultaneously computes the sine and cosine of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format.
*
* @param x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @returns output array
*
* @example
* var sc = kernelSincosf( 0.0 );
* // returns [ ~0.0, ~1.0 ]
*/
declare var kernelSincosf: KernelSincosf;


// EXPORTS //

export = kernelSincosf;
