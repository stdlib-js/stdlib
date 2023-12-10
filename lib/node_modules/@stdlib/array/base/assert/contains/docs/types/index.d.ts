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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Unary function which tests whether an array contains a provided search value.
*
* @param value - search value
* @returns boolean indicating whether an array contains a search value
*/
type Unary = ( x: any ) => boolean;

/**
* Interface for testing whether an array contains a provided search value.
*/
interface Contains {
	/**
	* Tests if an array contains a provided search value.
	*
	* @param x - input array
	* @param value - search value
	* @returns boolean indicating if an array contains a search value
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = contains( x, 2 );
	* // returns true
	*/
	( x: Collection, value: any ): boolean;

	/**
	* Returns a function to test if an array contains a provided search value.
	*
	* @param x - input array
	* @returns function to test if an array contains a search value
	*
	* @example
	* var fcn = contains.factory( [ 1, 2, 3 ] );
	*
	* var bool = fcn( 2 );
	* // returns true
	*/
	factory( x: Collection ): Unary;
}

/**
* Tests if an array contains a provided search value.
*
* @param x - input array
* @param value - search value
* @returns boolean indicating if an array contains a search value
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = contains( x, 2 );
* // returns true
*
* @example
* var x = [ 1, 2, 3 ];
*
* var fcn = contains.factory( x );
* // returns <Function>
*
* var out = fcn( 2 );
* // returns true
*/
declare var contains: Contains;


// EXPORTS //

export = contains;
