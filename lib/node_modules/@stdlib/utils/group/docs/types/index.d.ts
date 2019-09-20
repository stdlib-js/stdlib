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
	* If `'values'`, values are returned; if `'indices'`, indices are returned; if `'*'`, both indices and values are returned.
	*/
	returns?: 'values' | 'indices' | '*';
}

/**
* Groups values as arrays associated with distinct keys.
*
* ## Notes
*
* -   If provided an empty collection, the function returns an empty object.
*
* @param collection - collection to group
* @param groups - collection defining which group an element in the input collection belongs to
* @throws first and last arguments must be the same length
* @returns group results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var out = group( arr, groups );
* // returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
*/
declare function group( collection: Collection, groups: Collection ): any; // tslint-disable-line max-line-length

/**
* Groups values as arrays associated with distinct keys.
*
* ## Notes
*
* -   If provided an empty collection, the function returns an empty object.
*
* @param collection - collection to group
* @param options - function options
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
* @param groups - collection defining which group an element in the input collection belongs to
* @throws first and last arguments must be the same length
* @returns group results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var opts = {
*     'returns': 'indices'
* };
*
* var out = group( arr, opts, groups );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var opts = {
*     'returns': '*'
* };
*
* var out = group( arr, opts, groups );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
declare function group( collection: Collection, options: Options, groups: Collection ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = group;
