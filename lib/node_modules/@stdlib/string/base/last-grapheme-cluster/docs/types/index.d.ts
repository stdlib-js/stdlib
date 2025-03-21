/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Returns the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
*
* @param str - input string
* @param n - number of grapheme clusters to return
* @returns output string
*
* @example
* var out = last( 'Hello World', 1 );
* // returns 'd'
*
* @example
* var out = last( 'Evening', 3 );
* // returns 'ing'
*
* @example
* var out = last( 'JavaScript', 6 );
* // returns 'Script'
*
* @example
* var out = last( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐰🐸'
*
* @example
* var out = last( 'foo bar', 5 );
* // returns 'o bar'
*/
declare function last( str: string, n: number ): string;


// EXPORTS //

export = last;
