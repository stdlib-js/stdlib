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
* Returns the last `n` UTF-16 code units of a string.
*
* @param str - input string
* @param n - number of code units to return
* @returns output string
*
* @example
* var s = last( 'hello world', 1 );
* // returns 'd'
*
* @example
* var s = last( 'foo', 2 );
* // returns 'oo'
*
* @example
* var s = last( 'JavaScript', 6 );
* // returns 'Script'
*
* @example
* var s = last( 'foo bar', 10 );
* // returns 'foo bar'
*/
declare function last( str: string, n: number ): string;


// EXPORTS //

export = last;
