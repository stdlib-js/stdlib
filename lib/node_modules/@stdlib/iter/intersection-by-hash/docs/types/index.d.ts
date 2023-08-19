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
* Returns an iterator which returns the intersection of two or more iterators according to a hash function.
*
* ## Notes
*
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param hashFcn - hash function
* @param thisArg - hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
*
* var iter = iterIntersectionByHash( it1, it2, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersectionByHash( iter0: Iterator, iter1: Iterator, hashFcn: HashFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length

/**
* Returns an iterator which returns the intersection of three or more iterators according to a hash function.
*
* ## Notes
*
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param hashFcn - hash function
* @param thisArg - hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
* var it3 = array2iterator( [ 2, 2, 6, 1, 1 ] );
*
* var iter = iterIntersectionByHash( it1, it2, it3, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersectionByHash( iter0: Iterator, iter1: Iterator, iter2: Iterator, hashFcn: HashFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length

/**
* Returns an iterator which returns the intersection of four or more iterators according to a hash function.
*
* ## Notes
*
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param iter3 - fourth iterator
* @param hashFcn - hash function
* @param thisArg - hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
* var it3 = array2iterator( [ 2, 2, 6, 1, 1 ] );
* var it4 = array2iterator( [ 7, 8, 9, 2, 1 ] );
*
* var iter = iterIntersectionByHash( it1, it2, it3, it4, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersectionByHash( iter0: Iterator, iter1: Iterator, iter2: Iterator, iter3: Iterator, hashFcn: HashFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length

/**
* Returns an iterator which returns the intersection of five or more iterators according to a hash function.
*
* ## Notes
*
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param iter3 - fourth iterator
* @param iter4 - fifth iterator
* @param hashFcn - hash function
* @param thisArg - hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
* var it3 = array2iterator( [ 2, 2, 6, 1, 1 ] );
* var it4 = array2iterator( [ 7, 8, 9, 2, 1 ] );
* var it5 = array2iterator( [ 0, 2, 0, 1, 0 ] );
*
* var iter = iterIntersectionByHash( it1, it2, it3, it4, it5, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersectionByHash( iter0: Iterator, iter1: Iterator, iter2: Iterator, iter3: Iterator, iter4: Iterator, hashFcn: HashFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length

/**
* Returns an iterator which returns the intersection of two or more iterators according to a hash function.
*
* ## Notes
*
* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param args - subsequent iterators followed by a hash function and an optional hash function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
*
* var iter = iterIntersectionByHash( it1, it2, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersectionByHash( iter0: Iterator, iter1: Iterator, ...args: Array<any> ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterIntersectionByHash;
