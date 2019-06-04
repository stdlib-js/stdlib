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
* Tests if a value is iterable-like.
*
* ## Notes
*
* -   In order to be iterable, an object must implement the @@iterator method, which, when called, returns an iterator protocol-compliant object.
* -   An iterator protocol-compliant object is an object having a `next` method which adheres to the iterator protocol.
* -   As full iterator compliance is impossible to achieve without evaluating an iterator, this function checks *only* for interface compliance.
* -   In environments lacking Symbol.iterator support, this function always returns `false`.
*
* @param value - value to test
* @returns boolean indicating whether a value is iterable-like
*
* @example
* var bool = isIterableLike( [] );
* // returns <boolean>
*
* @example
* var bool = isIterableLike( {} );
* // returns false
*
* @example
* var bool = isIterableLike( null );
* // returns false
*/
declare function isIterableLike( value: any ): boolean;


// EXPORTS //

export = isIterableLike;
