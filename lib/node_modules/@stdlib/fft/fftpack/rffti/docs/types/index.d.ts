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

import { RealFloatingPointDataType, floatndarray } from '@stdlib/types/ndarray';

/**
* Output array.
*/
type OutputArray = floatndarray;

/**
* Interface defining options.
*/
interface Options {
	/**
	* Workspace data type.
	*/
	dtype?: RealFloatingPointDataType;
}

/**
* Interface for initializing a workspace ndarray.
*/
interface Rffti {
	/**
	* Returns an initialized one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
	*
	* @param n - sequence length
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var getDType = require( '@stdlib/ndarray/dtype' );
	*
	* var ws = rffti( 4 );
	* // returns <ndarray>
	*
	* var dt = String( getDType( ws ) );
	* // returns 'float64'
	*/
	( n: number, options?: Options ): OutputArray;

	/**
	* Initializes a provided one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
	*
	* @param workspace - workspace ndarray
	* @param n - sequence length
	* @returns input ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var ws = zeros( [ 42 ], { 'dtype': 'float64' } );
	*
	* var out = rffti.assign( ws, 4 );
	* // returns <ndarray>
	*
	* var bool = ( out === ws );
	* // returns true
	*/
	assign<T extends OutputArray = OutputArray>( workspace: T, n: number ): T;
}

/**
* Returns an initialized one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
*
* @param n - sequence length
* @param options - function options
* @returns output ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var ws = rffti( 4 );
* // returns <ndarray>
*
* var dt = String( getDType( ws ) );
* // returns 'float64'
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var ws = zeros( [ 42 ], { 'dtype': 'float64' } );
*
* var out = rffti.assign( ws, 4 );
* // returns <ndarray>
*
* var bool = ( out === ws );
* // returns true
*/
declare const rffti: Rffti;


// EXPORTS //

export = rffti;
