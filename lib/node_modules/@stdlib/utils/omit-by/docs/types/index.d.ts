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

// TypeScript Version: 2.0

/**
* Checks whether an iterated property passes a test.
*
* @returns boolean indicating whether an iterated property passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an iterated property passes a test.
*
* @param key - iteration key
* @returns boolean indicating whether an iterated property passes a test
*/
type Unary<K> = ( key: K ) => boolean;

/**
* Checks whether an iterated property passes a test.
*
* @param key - iteration key
* @param value - property value
* @returns boolean indicating whether an iterated property passes a test
*/
type Binary<K, V> = ( key: K, value: V ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param key - iteration key
* @param value - property value
* @returns boolean indicating whether an iterated property passes a test
*/
type Predicate<K, V> = Nullary | Unary<K> | Binary<K, V>;

/**
* Returns a partial object copy excluding properties for which a predicate returns a truthy value.
*
* ## Notes
*
* -   The function returns a shallow copy.
* -   The function only copies own properties. Hence, the function never copies inherited properties.
*
* @param obj - source object
* @param predicate - predicate function
* @returns new object
*
* @example
* function predicate( key, value ) {
*     return ( value > 1 );
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = omitBy( obj1, predicate );
* // returns { 'a': 1 }
*/
declare function omitBy<T extends object>(
	obj: T,
	predicate: Predicate<keyof T, T[keyof T]>
): Partial<T>;


// EXPORTS //

export = omitBy;
