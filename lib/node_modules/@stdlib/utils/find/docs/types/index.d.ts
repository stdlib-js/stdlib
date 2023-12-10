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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Interface defining base function options.
*/
interface BaseOptions {
	/**
	* Limits the number of returned elements.
	*/
	k?: number;
}

/**
* Interface defining function options when returning indices.
*/
interface IndicesOptions extends BaseOptions {
	/**
	* Specifies that indices should be returned.
	*/
	returns: 'indices';
}

/**
* Interface defining function options when returning values.
*/
interface ValuesOptions extends BaseOptions {
	/**
	* Specifies that indices should be returned.
	*/
	returns: 'values';
}

/**
* Interface defining function options when returning indices and values.
*/
interface IndicesAndValuesOptions extends BaseOptions {
	/**
	* Specifies that indices and values should be returned.
	*/
	returns: '*';
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
type Unary<T> = ( value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary<T> = ( value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Ternary<T> = ( value: T, index: number, collection: Collection<T> ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Callback<T> = Nullary | Unary<T> | Binary<T> | Ternary<T>;

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of indices
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns [ 0, 2, 3 ]
*
* @example
* function condition( val ) {
*     return val > 1000;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var vals = find( data, condition );
* // returns []
*/
declare function find<T = unknown>( arr: Collection<T> | string, clbk: Callback<T> ): Array<number>;

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param options - function options
* @param options.k - limits the number of returned elements (default: arr.length)
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'indices')
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of indices
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': 2,
*     'returns': 'indices'
* };
* var vals = find( data, opts, condition );
* // returns [ 0, 2 ]
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': 'indices'
* };
* var vals = find( data, opts, condition );
* // returns [ 3, 2 ]
*/
declare function find<T = unknown>( arr: Collection<T> | string, options: IndicesOptions | BaseOptions, clbk: Callback<T> ): Array<number>;

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param options - function options
* @param options.k - limits the number of returned elements (default: arr.length)
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'indices')
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of values
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': 2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 30, 50 ]
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': 'values'
* };
* var vals = find( data, opts, condition );
* // returns [ 60, 50 ]
*/
declare function find<T = unknown>( arr: Collection<T> | string, options: ValuesOptions, clbk: Callback<T> ): Array<T>;

/**
* Finds elements in an array-like object that satisfy a test condition.
*
* @param arr - object from which elements will be tested
* @param options - function options
* @param options.k - limits the number of returned elements (default: arr.length)
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'indices')
* @param clbk - function invoked for each array element. If the return value is truthy, the value is considered to have satisfied the test condition.
* @returns array of index-value pairs
*
* @example
* function condition( val ) {
*     return val > 20;
* }
*
* var data = [ 30, 20, 50, 60, 10 ];
* var opts = {
*     'k': -2,
*     'returns': '*'
* };
* var vals = find( data, opts, condition );
* // returns [ [3, 60], [2, 50] ]
*/
declare function find<T = unknown>( arr: Collection<T> | string, options: IndicesAndValuesOptions, clbk: Callback<T> ): Array<[ number, T ]>;


// EXPORTS //

export = find;
