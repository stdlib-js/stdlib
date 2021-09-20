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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

/**
* Returns the part of a string after the last occurrence of a specified substring.
*
* @param str - input string
* @param search - search value
* @param fromIndex - index of last character to be considered beginning of a match (default: `str.length`)
* @returns substring
*
* @example
* var out = substringAfterLast( 'beep boop', 'b' );
* // returns 'oop'
*
* @example
* var out = substringAfterLast( 'beep boop', 'o' );
* // returns 'p'
*
* @example
* var out = substringAfterLast( 'Hello World', 'o' );
* // returns 'rld'
*
* @example
* var out = substringAfterLast( 'Hello World', '!' );
* // returns ''
*
* @example
* var out = substringAfterLast( 'Hello World', '' );
* // returns ''
*
* @example
* var out = substringAfterLast( 'beep boop baz', 'p b', 6 );
* // returns 'oop baz'
*/
declare function substringAfterLast( str: string,  search: string, fromIndex?: number ): string; // tslint:disable-line:max-line-length


// EXPORTS //

export = substringAfterLast;
