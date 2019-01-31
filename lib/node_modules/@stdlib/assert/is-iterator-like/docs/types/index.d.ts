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

interface Iterator {
	/**
	* Returns an iterator protocol-compliant object containing the next iterated value (if one exists) and a boolean flag indicating whether the iterator is finished.
	*
	* @returns iterator protocol-compliant object
	*/
	next(): IteratorResult;
}

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
* Tests if a value is iterator-like.
*
* @param value - value to test
* @returns boolean indicating whether value is iterator-like
*
* @example
* var it = {
*     'next': function noop() {}
* };
* var bool = isIteratorLike( it );
* // returns true
*
* @example
* var bool = isIteratorLike( {} );
* // returns false
*
* @example
* var bool = isIteratorLike( null );
* // returns false
*/
declare function isIteratorLike( value: any ): boolean;


// EXPORTS //

export = isIteratorLike;
