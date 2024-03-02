/**
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

import { Collection } from '@stdlib/types/object';

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
 * Checks whether all own and inherited properties in an object pass a test implemented by a predicate function.
 *
 * @param obj - The object to iterate over.
 * @param predicate - The test function to apply to each property.
 * @param thisArg - Optional execution context for the predicate function.
 * @returns boolean indicating whether all properties pass the test.
 *
 * @throws TypeError if `obj` is not an object or if `predicate` is not a function.
 */
declare function everyInBy<T, U>(
	obj: object,
	predicate: Predicate<T, U>,
	thisArg?: ThisParameterType<Predicate<T, U>>
): boolean;


// EXPORTS //

export = everyInBy;
