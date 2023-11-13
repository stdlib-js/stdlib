/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Truncates the middle UTF-16 code units of a string to return a string having a specified length.
*
* @param str - input string
* @param len - output string length (including sequence)
* @param seq - custom replacement sequence
* @returns truncated string
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 5, '...' );
* // returns 'b...p'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 5, '>>>' );
* // returns 'b>>>p'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 10, '...' );
* // returns 'beep boop'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 0, '...' );
* // returns ''
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 2, '...' );
* // returns '..'
*/
declare function truncateMiddle( str: string, len: number, seq: string ): string;


// EXPORTS //

export = truncateMiddle;
