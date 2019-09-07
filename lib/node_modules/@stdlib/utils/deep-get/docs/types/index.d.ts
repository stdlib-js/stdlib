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
	* Key path separator.
	*/
	sep?: string;
}

/**
* Returns a nested property value.
*
* @param obj - input object
* @returns nested property value
*/
type Unary = ( obj: any ) => any;

/**
* Interface for retrieving nested property values.
*/
interface DeepGet {
	/**
	* Returns a nested property value.
	*
	* @param obj - input object
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @returns nested property value
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var val = deepGet( obj, 'a.b.c' );
	* // returns 'd'
	*
	* @example
	* var arr = [
	*     { 'a': [ {'x': 5} ] },
	*     { 'a': [ {'x': 10} ] }
	* ];
	* var val = deepGet( arr, '1.a.0.x' );
	* // returns 10
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var val = deepGet( obj, ['a','b','c'] );
	* // returns 'd'
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var val = deepGet( obj, 'a/b/c', {
	*     'sep': '/'
	* });
	* // returns 'd'
	*/
	( obj: any, path: string | Array<string>, options?: Options ): any;

	/**
	* Returns a function for retrieving a nested property value.
	*
	* @param path - key path
	* @param options - function options
	* @param options.sep - key path separator (default: '.')
	* @returns deep get factory
	*
	* @example
	* var dget = deepGet.factory( 'a/b/c', {
	*     'sep': '/'
	* });
	*/
	factory( path: string | Array<string>, options?: Options ): Unary;
}

/**
* Returns a nested property value.
*
* @param obj - input object
* @param path - key path
* @param options - function options
* @param options.sep - key path separator (default: '.')
* @returns nested property value
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
*
* var val = deepGet( obj, 'a.b.c' );
* // returns 'd'
*
* @example
* var dget = deepGet.factory( 'a/b/c', {
*     'sep': '/'
* });
*
* var obj = { 'a': { 'b': { 'c': 'd' } } };
*
* var val = dget( obj );
* // returns 'd'
*/
declare var deepGet: DeepGet;


// EXPORTS //

export = deepGet;
