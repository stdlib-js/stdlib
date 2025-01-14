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
* Specifies which group a property belongs to.
*
* @returns group key
*/
type Nullary<K extends string | symbol> = () => K;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @returns group key
*/
type Unary<V, K extends string | symbol> = ( value: V ) => K;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @param key - object key
* @returns group key
*/
type Binary<V, K extends string | symbol> = ( value: V, key: string ) => K;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @param key - object key
* @returns group key
*/
type Indicator<V, K extends string | symbol> = Nullary<K> | Unary<V, K> | Binary<V, K>;

/**
* Groups an object's own property values according to an indicator function.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: object value
*     -   `key`: object key
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty object, the function returns an empty object.
*
* -   The function iterates over an object's own properties.
*
* -   Key iteration order is **not** guaranteed, and, thus, result order is **not** guaranteed.
*
* @param obj - input object
* @param indicator - indicator function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'apple',
*     'b': 'banana',
*     'c': 'cherry',
*     'd': 'date'
* };
* var out = groupOwn( obj, indicator );
* // e.g., returns { 'a': [ 'apple' ], 'b': [ 'banana' ], 'c': [ 'cherry' ], 'd': [ 'date' ] }
*/
declare function groupOwn<T extends object, K extends string | symbol>(
	obj: T,
	indicator: Indicator<T[keyof T], K>
): { [P in K]: Array<T[keyof T]> };

/**
* Groups an object's own property values according to an indicator function.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: object value
*     -   `key`: object key
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty object, the function returns an empty object.
*
* -   The function iterates over an object's own properties.
*
* -   Key iteration order is **not** guaranteed, and, thus, result order is **not** guaranteed.
*
* @param obj - input object
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned (default: 'values')
* @param indicator - indicator function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'apple',
*     'b': 'banana',
*     'c': 'cherry',
*     'd': 'date'
* };
* var opts = {
*     'returns': 'indices'
* };
* var out = groupOwn( obj, opts, indicator );
* // e.g., returns { 'a': [ 'a' ], 'b': [ 'b' ], 'c': [ 'c' ], 'd': [ 'd' ] }
*/
declare function groupOwn<T extends object, K extends string | symbol>(
	obj: T,
	options: Options & { returns: 'indices' },
	indicator: Indicator<T[keyof T], K>
): { [P in K]: Array<keyof T> };

/**
* Groups an object's own property values according to an indicator function.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: object value
*     -   `key`: object key
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty object, the function returns an empty object.
*
* -   The function iterates over an object's own properties.
*
* -   Key iteration order is **not** guaranteed, and, thus, result order is **not** guaranteed.
*
* @param obj - input object
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned (default: 'values')
* @param indicator - indicator function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'apple',
*     'b': 'banana',
*     'c': 'cherry',
*     'd': 'date'
* };
* var opts = {
*     'returns': '*'
* };
* var out = groupOwn( obj, opts, indicator );
* // e.g., returns { 'a': [ [ 'a', 'apple' ] ], 'b': [ [ 'b', 'banana' ] ], 'c': [ [ 'c', 'cherry' ] ], 'd': [ [ 'd', 'date' ] ] }
*/
declare function groupOwn<T extends object, K extends string | symbol>(
	obj: T,
	options: Options & { returns: '*' },
	indicator: Indicator<T[keyof T], K>
): { [P in K]: Array<[keyof T, T[keyof T]]> };

/**
* Groups an object's own property values according to an indicator function.
*
* ## Notes
*
* -   When invoked, the indicator function is provided two arguments:
*
*     -   `value`: object value
*     -   `key`: object key
*
* -   The value returned by an indicator function should be a value which can be serialized as an object key.
*
* -   If provided an empty object, the function returns an empty object.
*
* -   The function iterates over an object's own properties.
*
* -   Key iteration order is **not** guaranteed, and, thus, result order is **not** guaranteed.
*
* @param obj - input object
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned (default: 'values')
* @param indicator - indicator function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'apple',
*     'b': 'banana',
*     'c': 'cherry',
*     'd': 'date'
* };
* var opts = {
*     'returns': 'values'
* };
* var out = groupOwn( obj, opts, indicator );
* // e.g., returns { 'a': [ 'apple' ], 'b': [ 'banana' ], 'c': [ 'cherry' ], 'd': [ 'date' ] }
*/
declare function groupOwn<T extends object, K extends string | symbol>(
	obj: T,
	options: Options & { returns?: 'values' },
	indicator: Indicator<T[keyof T], K>
): { [P in K]: Array<T[keyof T]> };


// EXPORTS //

export = groupOwn;
