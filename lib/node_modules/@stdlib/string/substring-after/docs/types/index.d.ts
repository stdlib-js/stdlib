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
* Returns the part of a string after a specified substring.
*
* @param str - input string
* @param search - search string
* @param fromIndex - index at which to start the search (default: 0)
* @returns substring
*
* @example
* var out = substringAfter( 'Hello, world!', ', ' );
* // returns 'world!'
*
* @example
* var out = substringAfter( 'beep boop', 'beep' );
* // returns ' boop'
*
* @example
* var out = substringAfter( 'beep boop', 'boop' );
* // returns ''
*
* @example
* var out = substringAfter( 'beep boop', 'xyz' );
* // returns ''
*
* @example
* var out = substringAfter( 'beep boop', 'beep', 5 );
* // returns ''
*
* @example
* var out = substringAfter( 'beep boop beep baz', 'beep', 5 );
* // returns ' baz'
*/
declare function substringAfter( str: string, search: string, fromIndex?: number ): string; // tslint:disable-line:max-line-length


// EXPORTS //

export = substringAfter;
