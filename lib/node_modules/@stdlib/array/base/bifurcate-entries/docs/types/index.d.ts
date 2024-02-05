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
* Group results.
*/
type Results<T> = [ Array<[ number, T ]>, Array<[ number, T ]> ];

/**
* Splits array element entries into two groups.
*
* @param x - input array
* @param filter - array indicating which group an element in the input array belongs to
* @returns results
*
* @example
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcateEntries( arr, filter );
* // returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
*/
declare function bifurcateEntries<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, filter: Collection | AccessorArrayLike<any> ): Results<T>; // eslint-disable-line @typescript-eslint/no-explicit-any


// EXPORTS //

export = bifurcateEntries;
