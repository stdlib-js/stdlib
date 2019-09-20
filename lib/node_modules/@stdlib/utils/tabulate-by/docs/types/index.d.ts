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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Execution context.
	*/
	thisArg?: any;
}

/**
* Three-element array holding a unique value, the value count, and the frequency percentage.
*/
type TableEntry = [ any, number, number ];

/**
* Specifies which group an element in the input collection belongs to.
*
* @returns frequency table value
*/
type Nullary = () => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @returns frequency table value
*/
type Unary = ( value: any ) => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns frequency table value
*/
type Binary = ( value: any, index: number ) => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns frequency table value
*/
type Indicator = Nullary | Unary | Binary;

/**
* Generates a frequency table according to a provided function.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     - `value`: collection value
*     - `index`: collection index
*
* -   The output is an array of arrays. Each sub-array corresponds to a unique value in the input collection and is structured as follows:
*
*     -   0: unique value
*     -   1: value count
*     -   2: frequency percentage
*
* -   If provided an empty collection, the function returns an empty array.
*
*
* @param collection - input collection
* @param indicator - function whose return values are used to populate the output frequency table
* @returns frequency table
*
* @example
* function indicator( value ) {
*     return value[ 0 ];
* }
*
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulateBy( arr, indicator );
* // returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
*/
declare function tabulateBy( collection: Collection, indicator: Indicator ): Array<TableEntry>; // tslint-disable-line max-line-length

/**
* Generates a frequency table according to a provided function.
*
* ## Notes
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     - `value`: collection value
*     - `index`: collection index
*
* -   The output is an array of arrays. Each sub-array corresponds to a unique value in the input collection and is structured as follows:
*
*     -   0: unique value
*     -   1: value count
*     -   2: frequency percentage
*
* -   If provided an empty collection, the function returns an empty array.
*
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param indicator - function whose return values are used to populate the output frequency table
* @returns frequency table
*
* @example
* function indicator( value ) {
*     return value[ 0 ];
* }
*
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var opts = {
*     'thisArg': {}
* };
* var out = tabulateBy( arr, opts, indicator );
* // returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
*/
declare function tabulateBy( collection: Collection, options: Options, indicator: Indicator ): Array<TableEntry>; // tslint-disable-line max-line-length


// EXPORTS //

export = tabulateBy;
