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
	* Limits the number of returned elements.
	*/
	k?: number;

	/**
	* If `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned.
	*/
	returns?: 'values' | 'indices' | '*';
}

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type Unary = ( value: any ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary = ( value: any, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Tertiary = ( value: any, index: number, collection: Collection ) => boolean; // tslint-disable-line max-line-length

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Callback = Nullary | Unary | Binary | Tertiary;

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of indices, element values, or arrays of index-value pairs
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns [ 0, 2, 3 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns []
*
* function condition( val ) {
*     return val > 1000;
* }
*/
declare function find( arr: Collection, clbk: Callback ): Array<any> | Array<[ number, any ]>; // tslint-disable-line max-line-length

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param options - function options
* @param options.k - limits the number of returned elements (default: arr.length)
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'indices')
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of indices, element values, or arrays of index-value pairs
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': 2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 30, 50 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 60, 50 ]
*
* function condition( val ) {
*     return val > 20;
* }
*
* @example
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': '*'
* };
* var vals = find( data, opts, condition );
* // returns [ [3, 60], [2, 50] ]
*
* function condition( val ) {
*     return val > 20;
* }
*/
declare function find( arr: Collection | string, options: Options, clbk: Callback ): Array<any> | Array<[ number, any ]>; // tslint-disable-line max-line-length


// EXPORTS //

export = find;
