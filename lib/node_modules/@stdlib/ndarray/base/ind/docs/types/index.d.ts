/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Mode } from '@stdlib/types/ndarray';

/**
* Resolves an index.
*
* @param idx - input index
* @param max - maximum index
* @returns index
*/
type IndexFcn = ( idx: number, max: number ) => number;

/**
* Interface describing the main export.
*/
interface Routine {
	/**
	* Returns an index given an index mode.
	*
	* @param idx - index
	* @param max - maximum index
	* @param mode - specifies how to handle an index outside the interval `[0,max]`
	* @returns index
	*
	* @example
	* var idx = ind( 2, 9, 'clamp' );
	* // returns 2
	*
	* idx = ind( 10, 9, 'clamp' );
	* // returns 9
	*
	* idx = ind( -1, 9, 'clamp' );
	* // returns 0
	*
	* @example
	* var idx = ind( 2, 9, 'wrap' );
	* // returns 2
	*
	* idx = ind( 10, 9, 'wrap' );
	* // returns 0
	*
	* idx = ind( -1, 9, 'wrap' );
	* // returns 9
	*
	* @example
	* var idx = ind( 2, 9, 'throw' );
	* // returns 2
	*
	* idx = ind( 10, 9, 'throw' );
	* // throws <RangeError>
	*
	* idx = ind( -1, 9, 'throw' );
	* // throws <RangeError>
	*
	* @example
	* var idx = ind( 2, 9, 'normalize' );
	* // returns 2
	*
	* idx = ind( -5, 9, 'normalize' );
	* // returns 5
	*
	* idx = ind( -20, 9, 'normalize' );
	* // throws <RangeError>
	*/
	( idx: number, max: number, mode: Mode ): number;

	/**
	* Returns a function for returning an index according to a provided index mode.
	*
	* @param {string} mode - specifies how to handle an out-of-bounds index
	* @returns {Function} function for returning an index
	*
	* @example
	* var ind = ind.factory( 'clamp' );
	*
	* var idx = ind( 2, 9 );
	* // returns 2
	*
	* idx = ind( 10, 9 );
	* // returns 9
	*
	* idx = ind( -1, 9 );
	* // returns 0
	*
	* @example
	* var ind = ind.factory( 'wrap' );
	*
	* var idx = ind( 2, 9 );
	* // returns 2
	*
	* idx = ind( 10, 9 );
	* // returns 0
	*
	* idx = ind( -1, 9 );
	* // returns 9
	*
	* @example
	* var ind = ind.factory( 'throw' );
	*
	* var idx = ind( 2, 9 );
	* // returns 2
	*
	* idx = ind( 10, 9 );
	* // throws <RangeError>
	*
	* idx = ind( -1, 9 );
	* // throws <RangeError>
	*
	* @example
	* var ind = ind.factory( 'normalize' );
	*
	* var idx = ind( 1, 10 );
	* // returns 1
	*
	* idx = ind( -4, 10 );
	* // returns 7
	*
	* idx = ind( -100, 10 );
	* // throws <RangeError>
	*/
	factory( mode: Mode ): IndexFcn;
}

/**
* Returns an index given an index mode.
*
* @param idx - index
* @param max - maximum index
* @param mode - specifies how to handle an index outside the interval `[0,max]`
* @returns index
*
* @example
* var idx = ind( 2, 9, 'clamp' );
* // returns 2
*
* idx = ind( 10, 9, 'clamp' );
* // returns 9
*
* idx = ind( -1, 9, 'clamp' );
* // returns 0
*
* @example
* var idx = ind( 2, 9, 'wrap' );
* // returns 2
*
* idx = ind( 10, 9, 'wrap' );
* // returns 0
*
* idx = ind( -1, 9, 'wrap' );
* // returns 9
*
* @example
* var idx = ind( 2, 9, 'throw' );
* // returns 2
*
* idx = ind( 10, 9, 'throw' );
* // throws <RangeError>
*
* idx = ind( -1, 9, 'throw' );
* // throws <RangeError>
*
* @example
* var idx = ind( 2, 9, 'normalize' );
* // returns 2
*
* idx = ind( -5, 9, 'normalize' );
* // returns 5
*
* idx = ind( -20, 9, 'normalize' );
* // throws <RangeError>
*
* @example
* var fcn = ind.factory( 'clamp' );
*
* var idx = fcn( 2, 9 );
* // returns 2
*
* idx = fcn( 10, 9 );
* // returns 9
*
* idx = fcn( -1, 9 );
* // returns 0
*/
declare var ind: Routine;


// EXPORTS //

export = ind;
