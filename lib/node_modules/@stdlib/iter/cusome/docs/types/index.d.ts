/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Returns an iterator which cumulatively tests whether at least `n` iterated values are truthy.
*
* @param iterator - source iterator
* @param n - minimum number of truthy elements
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it = iterCuSome( array2iterator( [ false, false, false, true, true, false ] ), 2 );
*
* var v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns true
*
* v = it.next().value;
* // returns true
*
* // ..
*/
declare function iterCuSome( iterator: Iterator, n: number ): Iterator;


// EXPORTS //

export = iterCuSome;
