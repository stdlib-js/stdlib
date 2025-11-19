/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Slices UTF-16 code units from a string.
*
* @param str - input string
* @param start - slice start index (inclusive)
* @param end - slice end index (exclusive)
* @returns output string
*
* @example
* var out = slice( 'last man standing', 1, 17 );
* // returns 'ast man standing'
*
* @example
* var out = slice( 'presidential election', 1, 21 );
* // returns 'residential election'
*
* @example
* var out = slice( 'JavaScript', 4, 10 );
* // returns 'Script'
*
* @example
* var out = slice( 'Hidden Treasures', 0, 6 );
* // returns 'Hidden'
*
* @example
* var out = slice( 'foo bar', 2, 7 );
* // returns 'ar'
*
* @example
* var out = slice( 'foo bar', -1, 7 );
* // returns 'r'
*/
declare function slice( str: string, start: number, end: number ): string;


// EXPORTS //

export = slice;
