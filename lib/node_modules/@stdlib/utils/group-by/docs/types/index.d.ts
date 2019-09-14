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

	/**
	* If `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned.
	*/
	returns?: 'values' | 'indices' | '*';
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
* Groups values according to an indicator function.
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
* @param collection - collection to group
* @param indicator - indicator function specifying which group an element in the input collection belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupBy( arr, indicator );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/
declare function groupBy( collection: Collection, indicator: Indicator ): any; // tslint-disable-line max-line-length

/**
* Groups values according to an indicator function.
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
* @param collection - collection to group
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
* @param indicator - indicator function specifying which group an element in the input collection belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': 'indices'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': '*'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
declare function groupBy( collection: Collection, options: Options, indicator: Indicator ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = groupBy;
