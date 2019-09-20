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
type Nullary = () => string | symbol;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @returns group key
*/
type Unary = ( value: any ) => string | symbol;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @param key - object key
* @returns group key
*/
type Binary = ( value: any, key: string | symbol ) => string | symbol;

/**
* Specifies which group a property belongs to.
*
* @param value - object value
* @param key - object key
* @returns group key
*/
type Indicator = Nullary | Unary | Binary;

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
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = groupOwn( obj, indicator );
* // e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/
declare function groupOwn( obj: any, indicator: Indicator ): any;

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
* @param options.returns - if `values`, values are returned; if `keys`, keys are returned; if `*`, both keys and values are returned (default: 'values')
* @param indicator - indicator function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = groupOwn( obj, indicator );
* // e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var opts = {
*     'returns': 'keys'
* };
* var out = groupOwn( obj, opts, indicator );
* // e.g., returns { 'b': [ 'a', 'b', 'd' ], 'f': [ 'c' ] }
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var opts = {
*     'returns': '*'
* };
* var out = groupOwn( obj, opts, indicator );
* // e.g., returns { 'b': [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], 'f': [ [ 'c', 'foo' ] ] }
*/
declare function groupOwn( obj: any, options: Options, indicator: Indicator ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = groupOwn;
