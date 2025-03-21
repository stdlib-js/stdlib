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

interface IteratorResult {
	/**
	* Iterated value (if one exists).
	*/
	value?: any;

	/**
	* Boolean flag indicating whether the iterator is finished.
	*/
	done: boolean;
}

/**
* Fluent interface iterator class.
*/
declare class FluentIterator {
	/**
	* Fluent interface iterator constructor.
	*
	* @param iterator - source iterator
	* @returns a "fluent" iterator
	*/
	constructor( iterator: Iterator );

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value (if one exists) and a boolean flag indicating whether the iterator is finished.
	*
	* @returns iterator protocol-compliant object
	*/
	next(): IteratorResult;

	/**
	* Finishes an iterator.
	*
	* @param value - value to return
	* @returns iterator protocol-compliant object
	*/
	return?( value?: any ): IteratorResult;
}

/**
* Returns a constructor for creating a fluent interface for chaining together iterator methods.
*
* ## Notes
*
* -   We assume that each provided iterator function has the following function signature:
*
*     ```text
*     function iterFcn( iterator[, ...args] ) {...}
*     ```
*
*     where `iterator` is an input iterator and `args` are additional iterator function arguments (if any).
*
*
* @param methods - an object mapping method names to iterator functions
* @throws object property values must be functions
* @returns constructor
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterHead = require( '@stdlib/iter/head' );
* var iterSome = require( '@stdlib/iter/some' );
*
* // Create a "fluent" interface:
* var FluentIterator = iterFlow({
*     'head': iterHead,
*     'some': iterSome
* });
*
* // Create a source iterator:
* var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );
*
* // Create a new iterator:
* var it = new FluentIterator( arr );
*
* var bool = it.head( 5 ).some( 3 );
* // returns true
*
* // Create another source iterator:
* arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );
*
* // Create a new iterator:
* it = new FluentIterator( arr );
*
* bool = it.head( 5 ).some( 3 );
* // returns false
*/
declare function iterFlow( methods: any ): typeof FluentIterator;


// EXPORTS //

export = iterFlow;
