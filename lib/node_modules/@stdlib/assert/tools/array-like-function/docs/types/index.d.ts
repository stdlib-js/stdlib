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
* Predicate function.
*
* @param elem - array element
* @returns test result
*/
type PredicateFunction = ( elem: any ) => boolean;

/**
* Returns a function which tests if every element in an array-like object passes a test condition.
*
* ## Notes
*
* -   The predicate function should accept a single argument: an element from an array-like object. If the element satisfies a test condition, the function should return `true`; otherwise, the function should return `false`.
* -   Given an input array-like object, the returned function returns `true` if all elements pass the test and `false` otherwise.
* -   The returned function returns `false` if provided an empty array-like object.
* -   The returned function returns `false` is not provided an array-like object.
*
* @param predicate - function to apply
* @returns an array-like object function
*
* @example
* var isOdd = require( `@stdlib/assert/is-odd` );
*
* var arr1 = [ 1, 3, 5, 7 ];
* var arr2 = [ 3, 5, 8 ];
*
* var validate = arraylikefcn( isOdd );
*
* var bool = validate( arr1 );
* // returns true
*
* bool = validate( arr2 );
* // returns false
*/
declare function arraylikefcn( predicate: PredicateFunction ): Function;


// EXPORTS //

export = arraylikefcn;
