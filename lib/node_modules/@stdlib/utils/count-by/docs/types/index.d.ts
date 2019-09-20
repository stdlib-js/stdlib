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
* Specifies which group an element in the input collection belongs to.
*
* @returns object key
*/
type Nullary = () => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @returns object key
*/
type Unary = ( value: any ) => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns object key
*/
type Binary = ( value: any, index: number ) => string | symbol;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns object key
*/
type Indicator = Nullary | Unary | Binary;

/**
* Groups values according to an indicator function and returns group counts.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty collection, the function returns an empty object.
*
* @param collection - input collection
* @param indicator - indicator function specifying which group an element in the input collection belongs to
* @returns counts
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = countBy( arr, indicator );
* // returns { 'b': 3, 'f': 1 }
*/
declare function countBy( collection: Collection, indicator: Indicator ): any;

/**
* Groups values according to an indicator function and returns group counts.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty collection, the function returns an empty object.
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param indicator - indicator function specifying which group an element in the input collection belongs to
* @returns counts
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = countBy( arr, indicator );
* // returns { 'b': 3, 'f': 1 }
*/
declare function countBy( collection: Collection, options: Options, indicator: Indicator ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = countBy;
