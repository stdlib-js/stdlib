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
* Returns a boolean indicating which group an element in an collection belongs to.
*
* @returns boolean indicating whether an element in a collection should be placed in the first or second group
*/
type Nullary = () => boolean;

/**
* Returns a boolean indicating which group an element in an collection belongs to.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection should be placed in the first or second group
*/
type Unary = ( value: any ) => boolean;

/**
* Returns a boolean indicating which group an element in an collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection should be placed in the first or second group
*/
type Binary = ( value: any, index: number ) => boolean;

/**
* Returns a boolean indicating which group an element in an collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection should be placed in the first or second group
*/
type Predicate = Nullary | Unary | Binary;

/**
* Splits values into two groups according to a predicate function.
*
* ## Notes
*
* -   When invoked, the predicate function is provided two arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*
* -   If a predicate function returns a truthy value, a collection value is placed in the first group; otherwise, a collection value is placed in the second group.
*
* -   If provided an empty collection, the function returns an empty array.
*
*
* @param collection - input collection
* @param predicate - predicate function indicating which group an element in the input collection belongs to
* @returns group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateBy( arr, predicate );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*/
declare function bifurcateBy( collection: Collection, predicate: Predicate ): Array<Array<any>>; // tslint-disable-line max-line-length

/**
* Splits values into two groups according to a predicate function.
*
* ## Notes
*
* -   When invoked, the predicate function is provided two arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*
* -   If a predicate function returns a truthy value, a collection value is placed in the first group; otherwise, a collection value is placed in the second group.
*
* -   If provided an empty collection, the function returns an empty array.
*
*
* @param collection - input collection
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned (default: 'values')
* @param predicate - predicate function indicating which group an element in the input collection belongs to
* @returns group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': 'indices'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateBy( arr, opts, predicate );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/
declare function bifurcateBy( collection: Collection, options: Options, predicate: Predicate ): Array<Array<any>>; // tslint-disable-line max-line-length


// EXPORTS //

export = bifurcateBy;
