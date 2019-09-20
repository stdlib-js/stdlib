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
	* Boolean indicating whether to create a path if the key path does not already exist.
	*/
	create?: boolean;

	/**
	* Key path separator.
	*/
	sep?: string;
}

/**
* Sets a nested property.
*
* @param obj - input object
* @param value - value to set
* @returns boolean indicating if the property was successfully set
*/
type Unary = ( obj: any, value: any ) => boolean;

/**
* Interface for setting nested property values.
*/
interface DeepSet {
	/**
	* Sets a nested property value.
	*
	* @param obj - input object
	* @param path - key path
	* @param value - value to set
	* @param options - function options
	* @param options.create - boolean indicating whether to create a path if the key path does not already exist (default: false)
	* @param options.sep - key path separator (default: '.')
	* @returns boolean indicating if the property was successfully set
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepSet( obj, 'a.b.c', 'woot' );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepSet( obj, 'a.beep.c', 'boop' );
	* // returns false
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepSet( null, 'a.beep.c', 'boop' );
	* // returns false
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* bool = deepSet( 'bap', 'a.beep.c', 'boop' );
	* // returns false
	*
	* @example
	* var arr = [
	*     { 'a': [ {'x': 5} ] },
	*     { 'a': [ {'x': 10} ] }
	* ];
	* var bool = deepSet( arr, '1.a.0.x', 25 );
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepSet( obj, 'a/b/c', 'beep', {
	*     'sep': '/'
	* });
	* // returns true
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepSet( obj, 'a.e.c', 'boop', {
	*     'create': true
	* });
	* // returns true
	*/
	( obj: any, path: string | Array<string>, value: any, options?: Options ): boolean; // tslint-disable-line max-line-length

	/**
	* Creates a reusable deep set function.
	*
	* @param path - key path
	* @param options - function options
	* @param options.create - boolean indicating whether to create a path if the key path does not already exist (default: false)
	* @param options.sep - key path separator (default: '.')
	* @returns deep set function
	*
	* @example
	* var dset = deepSet.factory( 'a/b/c', {
	*     'create': true,
	*     'sep': '/'
	* });
	*/
	factory( path: string | Array<string>, options?: Options ): Unary;
}

/**
* Sets a nested property value.
*
* @param obj - input object
* @param path - key path
* @param value - value to set
* @param options - function options
* @param options.create - boolean indicating whether to create a path if the key path does not already exist (default: false)
* @param options.sep - key path separator (default: '.')
* @returns boolean indicating if the property was successfully set
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepSet( obj, 'a.b.c', 'woot' );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepSet( obj, 'a.beep.c', 'boop' );
* // returns false
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepSet( null, 'a.beep.c', 'boop' );
* // returns false
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* bool = deepSet( 'bap', 'a.beep.c', 'boop' );
* // returns false
*
* @example
* var arr = [
*     { 'a': [ {'x': 5} ] },
*     { 'a': [ {'x': 10} ] }
* ];
* var bool = deepSet( arr, '1.a.0.x', 25 );
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepSet( obj, 'a/b/c', 'beep', {
*     'sep': '/'
* });
* // returns true
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var bool = deepSet( obj, 'a.e.c', 'boop', {
*     'create': true
* });
* // returns true
*/
declare var deepSet: DeepSet;


// EXPORTS //

export = deepSet;
