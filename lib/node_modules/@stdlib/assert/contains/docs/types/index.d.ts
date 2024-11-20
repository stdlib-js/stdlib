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

import { ArrayLike } from '@stdlib/types/array';

/**
* Tests if an array-like value contains a search value.
*
* ## Notes
*
* -   When `val` is a string, the function checks whether the characters of the search string are found in the input string. The search is case-sensitive.
* -   When `val` is an array-like object, the function checks whether the input array contains an element strictly equal to the specified search value.
* -   For strings, this function is modeled after `String.prototype.includes`, part of the ECMAScript 6 specification. This function is different from a call to `String.prototype.includes.call` insofar as type-checking is performed for all arguments.
* -   The function does not distinguish between positive and negative zero.
* -   If `position < 0`, the search is performed for the entire input array or string.
*
* @param val - input value
* @param searchValue - search value
* @param position - position at which to start searching for `searchValue` (default: 0)
* @throws second argument must be a primitive string primitive when the first argument is a string
* @returns boolean indicating whether one value contains another
*
* @example
* var bool = contains( 'last man standing', 'stand' );
* // returns true
*
* @example
* var bool = contains( [ 1, 2, 3, 4 ], 2 );
* // returns true
*
* @example
* var bool = contains( 'presidential election', 'president' );
* // returns true
*
* @example
* var bool = contains( [ NaN, 2, 3, 4 ], NaN );
* // returns true
*
* @example
* var bool = contains( 'javaScript', 'js' );
* // returns false
*
* @example
* var bool = contains( [ 1, 2, 3, {} ], {} );
* // returns false
*
* @example
* var bool = contains( 'Hidden Treasures', '' );
* // returns true
*/
declare function contains( val: ArrayLike<any>, searchValue: any, position?: number ): boolean;


// EXPORTS //

export = contains;
