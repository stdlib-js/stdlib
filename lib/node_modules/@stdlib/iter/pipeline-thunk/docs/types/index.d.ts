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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Iterator function
*
* @param iterator - input iterator
* @param ...args - function arguments
* @returns hash value
*/
type IteratorFunction = ( iterator: Iterator, ...args: Array<any> ) => any;

/**
* Invokes an iterator function with a provided iterator and previously provided iterator function arguments.
*
* @param iter - input iterator
* @throws must provide an iterator
* @returns iterator function result`
*/
type IteratorThunk = ( iter: Iterator ) => any;

/**
* Returns an iterator "thunk".
*
* @param iterFcn - iterator function
* @param args - function arguments
* @returns iterator "thunk"
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
* var iterSome = require( `@stdlib/iter/some` );
*
* var it = array2iterator( [ 0, 0, 1, 1, 1 ] );
*
* var thunk = iterThunk( iterSome, 3 );
*
* var bool = thunk( it );
* // returns true
*/
declare function iterThunk( iterFcn: IteratorFunction, ...args: Array<any> ): IteratorThunk;


// EXPORTS //

export = iterThunk;
