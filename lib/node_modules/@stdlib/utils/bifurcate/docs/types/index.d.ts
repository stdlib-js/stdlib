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
* Splits values into two groups.
*
* ## Notes
*
* -   If an element in `filter` is truthy, then the corresponding element in the input collection belongs to the first group; otherwise, the collection element belongs to the second group.
* -   If provided an empty collection, the function returns an empty array.
*
* @param collection - input collection
* @param filter - collection indicating which group an element in the input collection belongs to
* @throws first and last arguments must be the same length
* @returns results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcate( arr, filter );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*/
declare function bifurcate( collection: Collection, filter: Collection ): Array<Array<any>> | Array<any>; // tslint-disable-line max-line-length

/**
* Splits values into two groups.
*
* ## Notes
*
* -   If an element in `filter` is truthy, then the corresponding element in the input collection belongs to the first group; otherwise, the collection element belongs to the second group.
* -   If provided an empty collection, the function returns an empty array.
*
* @param collection - input collection
* @param options - function options
* @param options.returns - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned (default: 'values')
* @param filter - collection indicating which group an element in the input collection belongs to
* @throws first and last arguments must be the same length
* @returns results
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': 'indices'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*
* @example
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var opts = {
*     'returns': '*'
* };
*
* var out = bifurcate( arr, opts, filter );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/
declare function bifurcate( collection: Collection, options: Options, filter: Collection ): Array<Array<any>> | Array<any>; // tslint-disable-line max-line-length


// EXPORTS //

export = bifurcate;
