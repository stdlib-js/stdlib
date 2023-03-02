/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Inteface describing `drotg`.
*/
interface Routine {
	/**
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @returns output array
	*
	* @example
	* var out = drotg( 0.0, 2.0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* @example
	* var out = drotg( 6.0, -8.0 );
	* // returns <Float64Array>[ 10.0, ~-1.666, -0.6, 0.8 ]
	*/
	( a: number, b: number ): Float64Array;

	/**
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @param out - output array
	* @param stride - index increment
	* @param offset - starting index
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var out = new Float64Array( 4 );
	*
	* var y = drotg.assign( 0.0, 2.0, out, 1, 0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	assign( a: number, b: number, out: Float64Array, stride: number, offset: number ): Float64Array; // tslint-disable-line max-line-length
}

/**
* Constructs a Givens plane rotation.
*
* @param a - rotational elimination parameter
* @param b - rotational elimination parameter
* @returns output array
*
* @example
* var out = drotg( 0.0, 2.0 );
* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var out = new Float64Array( 4 );
* var y = drotg.assign( 0.0, 2.0, out, 1, 0 );
* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
*
* var bool = ( y === out );
* // returns true
*/
declare var drotg: Routine;


// EXPORTS //

export = drotg;
