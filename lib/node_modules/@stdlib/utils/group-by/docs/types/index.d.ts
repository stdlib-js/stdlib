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
interface BaseOptions<T, U> {
	/**
	* Execution context.
	*/
	thisArg?: ThisParameterType<Indicator<T, U>>;
}

/**
* Interface defining function options when returning indices.
*/
interface IndicesOptions<T, U> extends BaseOptions<T, U> {
	/**
	* Specifies that indices should be returned.
	*/
	returns: 'indices';
}

/**
* Interface defining function options when returning values.
*/
interface ValuesOptions<T, U> extends BaseOptions<T, U> {
	/**
	* Specifies that values should be returned.
	*/
	returns: 'values';
}

/**
* Interface defining function options when returning indices and values.
*/
interface IndicesAndValuesOptions<T, U> extends BaseOptions<T, U> {
	/**
	* Specifies that indices and values should be returned.
	*/
	returns: '*';
}

/**
* Object key.
*/
type Key = string | symbol | number;

/**
* Specifies which group an element in the input collection belongs to.
*
* @returns object key
*/
type Nullary<U> = ( this: U ) => Key;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @returns object key
*/
type Unary<T, U> = ( this: U, value: T ) => Key;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns object key
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => Key;

/**
* Specifies which group an element in the input collection belongs to.
*
* @param value - collection value
* @param index - collection index
* @returns object key
*/
type Indicator<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U>;

/**
* Interface describing returned indices results.
*/
interface IndicesResults {
	/**
	* Object properties.
	*/
	[key: Key]: Array<number>;
}

/**
* Interface describing returned values results.
*/
interface ValuesResults<T> {
	/**
	* Object properties.
	*/
	[key: Key]: Array<T>;
}

/**
* Interface describing returned indices and values results.
*/
interface IndicesAndValuesResults<T> {
	/**
	* Object properties.
	*/
	[key: Key]: Array<[ number, T ]>;
}

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
declare function groupBy<T = unknown, U = unknown>( collection: Collection<T>, indicator: Indicator<T, U> ): ValuesResults<T>; // tslint:disable-line:no-unnecessary-generics

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
*/
declare function groupBy<T = unknown, U = unknown>( collection: Collection<T>, options: IndicesOptions<T, U>, indicator: Indicator<T, U> ): IndicesResults;

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
*     'returns': 'values'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/
declare function groupBy<T = unknown, U = unknown>( collection: Collection<T>, options: ValuesOptions<T, U> | BaseOptions<T, U>, indicator: Indicator<T, U> ): ValuesResults<T>;

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
*     'returns': '*'
* };
* var out = groupBy( arr, opts, indicator );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
declare function groupBy<T = unknown, U = unknown>( collection: Collection<T>, options: IndicesAndValuesOptions<T, U>, indicator: Indicator<T, U> ): IndicesAndValuesResults<T>;


// EXPORTS //

export = groupBy;
