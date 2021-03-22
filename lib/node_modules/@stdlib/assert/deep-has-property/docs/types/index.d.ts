/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
	* Key path separator (default: '.').
	*/
	sep?: string;
}

/**
* Returns a boolean indicating whether an object has a nested key path, either own or inherited.
*
* @param value - value to test
* @returns boolean indicating whether an object has a nested property
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasProp( obj );
*/
type HasFunction = ( value: any ) => boolean;

/**
* Interface for testing whether an object contains a nested key path.
*/
interface DeepHasProp {
	/**
	* Tests whether an object contains a nested key path, either own or inherited.
	*
	* ## Notes
	*
	* -   Value arguments other than `null` or `undefined` are coerced to objects.
	* -   Key path array elements are coerced to strings.
	*
	* @param value - value to test
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @throws must provide valid options
	* @returns boolean indicating whether an object has a nested property
	*
	* @example
	* function Foo() {
	*     return this;
	* }
	* Foo.prototype.b = {
	*     'c': 'd'
	* };
	*
	* var obj = {
	*     'a': new Foo()
	* };
	*
	* var bool = deepHasProp( obj, 'a.b.c' );
	* // returns true
	*
	* @example
	* var arr = [
	*     {
	*         'a': [
	*             {
	*                 'b': [
	*                     { 'c': 'd' },
	*                     { 'e': 'f' }
	*                 ]
	*             }
	*         ]
	*     }
	* ];
	* var bool = deepHasProp( arr, '0.a.0.b.0.c' );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepHasProp( obj, [ 'a', 'b', 'c' ] );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepHasProp( obj, 'a/b/c', {
	*     'sep': '/'
	* });
	* // returns true
	*/
	( value: any, path: string | Array<string>, options?: Options ): boolean;

	/**
	* Returns a function which tests whether an object has a nested key path, either own or inherited.
	*
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @throws must provide valid options
	* @returns function which tests whether an object has a nested key path
	*
	* @example
	* var has = factory( 'a/b/c', {
	*     'sep': '/'
	* });
	*/
	factory( path: string | Array<string>, options?: Options ): HasFunction;
}

/**
* Tests whether an object contains a nested key path, either own or inherited.
*
* @param value - value to test
* @param path - key path
* @param options - function options
* @param options.sep - key path separator (default: '.')
* @throws must provide valid options
* @returns boolean indicating whether an object has a nested property
*
* @example
* function Foo() {
*     return this;
* }
* Foo.prototype.b = {
*     'c': 'd'
* };
*
* var obj = {
*     'a': new Foo()
* };
*
* var bool = deepHasProp( obj, 'a.b.c' );
* // returns true
*
* @example
* var arr = [
*     {
*         'a': [
*             {
*                 'b': [
*                     { 'c': 'd' },
*                     { 'e': 'f' }
*                 ]
*             }
*         ]
*     }
* ];
* var bool = deepHasProp( arr, '0.a.0.b.0.c' );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasProp( obj, [ 'a', 'b', 'c' ] );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepHasProp( obj, 'a/b/c', {
*     'sep': '/'
* });
* // returns true
*/
declare var deepHasProp: DeepHasProp;


// EXPORTS //

export = deepHasProp;
