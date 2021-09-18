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
* Returns the part of a string before the last occurrence of a specified substring.
*
* @param str - input string
* @param search - search value
* @returns substring
*
* @example
* var out = substringBeforeLast( 'abcba', 'b' );
* // returns 'abc'
*
* @example
* var out = substringBeforeLast( 'Hello World, my friend!', ' ' );
* // returns 'Hello World, my'
*
* @example
* var out = substringBeforeLast( 'abcba', ' ' );
* // returns 'abcba'
*
* @example
* var out = substringBeforeLast( 'abcba', '' );
* // returns 'abcba'
*/
declare function substringBeforeLast( str: string, search: string ): string;


// EXPORTS //

export = substringBeforeLast;
