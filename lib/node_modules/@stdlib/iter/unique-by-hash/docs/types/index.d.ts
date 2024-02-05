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

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Hash function.
*
* @param value - iterated value
* @returns hash value
*/
type HashFunction = ( value?: any ) => any;

/**
* Returns an iterator which returns unique values according to a hash function.
*
* ## Notes
*
* -   A returned iterator internally buffers unique hashes and, thus, has `O(N)` memory requirements.
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param hashFcn - hash function
* @param thisArg - hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var iter = iterUniqueByHash( array2iterator( [ 1, 2, 1, 2, 4 ] ), hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.ne
*/
declare function iterUniqueByHash( iterator: Iterator, hashFcn: HashFunction, thisArg?: any ): Iterator;


// EXPORTS //

export = iterUniqueByHash;
