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

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Creates a string from a sequence of Unicode code points.
*
* @param pts - sequence of code points
* @throws a code point must be a nonnegative integer
* @throws must provide a valid Unicode code point
* @returns created string
*
* @example
* var str = fromCodePoint( [ 9731 ] );
* // returns '☃'
*/
declare function fromCodePoint( pts: ArrayLike<number> ): string;

/**
* Creates a string from a sequence of Unicode code points.
*
* ## Notes
*
* -   In addition to multiple arguments, the function also supports providing an array-like object as a single argument containing a sequence of Unicode code points.
*
* @param pt - sequence of code points
* @throws must provide either an array-like object of code points or one or more code points as separate arguments
* @throws a code point must be a nonnegative integer
* @throws must provide a valid Unicode code point
* @returns created string
*
* @example
* var str = fromCodePoint( 9731 );
* // returns '☃'
*/
declare function fromCodePoint( ...pt: Array<number> ): string;


// EXPORTS //

export = fromCodePoint;
