/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Interface describing function options.
*/
interface Options {
	/**
	* Maximum number of iterations.
	*/
	iter?: number;

	/**
	* Tolerance at which to terminate further evaluation of the continued fraction.
	*/
	tol?: number;

	/**
	* Specifies the type of result to return.
	*/
	returns?: 'terms' | 'convergents' | '*';
}

/**
* Returns an iterator which generates a list of all continued fraction terms which can be obtained given the precision of `x`.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param x - input value
* @param options - function options
* @param options.iter - maximum number of iterations (default: 1e308)
* @param options.tol - tolerance at which to terminate further evaluation of the continued fraction (default: floating-point epsilon)
* @param options.returns - specifies the type of result to return (default: 'terms')
* @throws `iter` option must be a nonnegative integer
* @throws `tol` option must be a positive finite number
* @returns iterator
*
* @example
* var iter = iterContinuedFractionSeq( 3.245 );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 12
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterContinuedFractionSeq( x: number, options?: Options ): Iterator;


// EXPORTS //

export = iterContinuedFractionSeq;
