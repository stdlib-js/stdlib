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

import { Iterator } from '@stdlib/types/iter';

/**
* Checks whether an iterated value passes a test.
*
* @returns boolean indicating whether an iterated value passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @returns boolean indicating whether an iterated value passes a test
*/
type Unary = ( value: any ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param i - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Binary = ( value: any, i: number ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param i - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Predicate = Nullary | Unary | Binary;

/**
* Tests whether every iterated value passes a test implemented by a predicate function.
*
* @param iterator - input iterator
* @param predicate - predicate function
* @param thisArg - execution context
* @returns boolean indicating whether every iterated value passes a test implemented by a predicate function
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function predicate( v ) {
*     return ( v > 0 );
* }
*
* var it = array2iterator( [ 1, 1, 1, 1, 1 ] );
*
* var bool = iterEveryBy( it, predicate );
* // returns true
*/
declare function iterEveryBy( iterator: Iterator, predicate: Predicate, thisArg?: any ): boolean;


// EXPORTS //

export = iterEveryBy;
