/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Object key.
*/
type Key = string | symbol | number;

/**
* Interface describing returned group results.
*/
interface EntriesResults<T> {
	/**
	* Object properties.
	*/
	[key: Key]: Array<[ number, T ]>;
}

/**
* Groups element entries as arrays associated with distinct keys.
*
* @param x - input array
* @param groups - array defining which group an element in the input array belongs to
* @returns group results
*
* @example
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var out = groupEntries( x, groups );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
declare function groupEntries<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, groups: Collection<Key> | AccessorArrayLike<Key> ): EntriesResults<T>;


// EXPORTS //

export = groupEntries;
