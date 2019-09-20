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
* Returns a boolean indicating which group an object's own and inherited property values belongs to.
*
* @returns boolean indicating whether a property value should be placed in the first or second group
*/
type Nullary = () => boolean;

/**
* Returns a boolean indicating which group an object's own and inherited property values belongs to.
*
* @param value - object value
* @returns boolean indicating whether a property value should be placed in the first or second group
*/
type Unary = ( value: any ) => boolean;

/**
* Returns a boolean indicating which group an object's own and inherited property values belongs to.
*
* @param value - object value
* @param key - object key
* @returns boolean indicating whether a property value should be placed in the first or second group
*/
type Binary = ( value: any, key: string | symbol ) => boolean;

/**
* Returns a boolean indicating which group an object's own and inherited property values belongs to.
*
* @param value - object value
* @param key - object key
* @returns boolean indicating whether a property value should be placed in the first or second group
*/
type Predicate = Nullary | Unary | Binary;

/**
* Splits an object's own property values into two groups according to a predicate function.
*
* @param obj - input object
* @param predicate - predicate function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = bifurcateOwn( obj, predicate );
* // e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
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
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
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
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/
declare function bifurcateOwn( obj: any, predicate: Predicate ): Array<Array<any>>; // tslint-disable-line max-line-length

/**
* Splits an object's own property values into two groups according to a predicate function.
*
* @param obj - input object
* @param options - function options
* @param options.thisArg - execution context
* @param options.returns - if `'values'`, values are returned; if `'keys'`, keys are returned; if `'*'`, both keys and values are returned
* @param predicate - predicate function indicating which group an element in the input object belongs to
* @returns group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop',
*     'c': 'foo',
*     'd': 'bar'
* };
* var out = bifurcateOwn( obj, predicate );
* // e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
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
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
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
* var out = bifurcateOwn( obj, opts, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/
declare function bifurcateOwn( obj: any, options: Options, predicate: Predicate ): Array<Array<any>>; // tslint-disable-line max-line-length


// EXPORTS //

export = bifurcateOwn;
