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

// TypeScript Version: 2.0

/**
* Computes the hypotenuse using the alpha max plus beta min algorithm.
*
* @param x - number
* @param y - number
* @returns hypotenuse
*/
type HypotFunction = ( x: number, y: number ) => number;

/**
* Interface for computing the hypotenuse using the alpha max plus beta min algorithm.
*/
interface Hypot {
	/**
	* Computes the hypotenuse using the alpha max plus beta min algorithm.
	*
	* @param x - number
	* @param y - number
	* @returns hypotenuse
	*
	* @example
	* var h = ampbm( -5.0, 12.0 );
	* // returns ~13.5
	*/
	( x: number, y: number ): number;

	/**
	* Returns a function to compute a hypotenuse using the alpha max plus beta min algorithm.
	*
	* @param alpha - alpha
	* @param beta - beta
	* @param nonnegative - boolean indicating whether input values are always nonnegative
	* @param ints - boolean indicating whether input values are always 32-bit integers
	* @returns function to compute a hypotenuse
	*
	* @example
	* var hypot = ampbm.factory( 1.0, 0.5 );
	* // returns <Function>
	*
	* var h = hypot( -5.0, 12.0 );
	* // returns 14.5
	*/
	factory( alpha: number, beta: number, nonnegative?: boolean, ints?: boolean ): HypotFunction; // tslint-disable-line max-line-length
}

/**
* Computes the hypotenuse using the alpha max plus beta min algorithm.
*
* @param x - number
* @param y - number
* @returns hypotenuse
*
* @example
* var h = ampbm( -5.0, 12.0 );
* // returns ~13.5
*
* @example
* var hypot = ampbm.factory( 1.0, 0.5 );
* // returns <Function>
*
* var h = hypot( -5.0, 12.0 );
* // returns 14.5
*/
declare var hypot: Hypot;


// EXPORTS //

export = hypot;
