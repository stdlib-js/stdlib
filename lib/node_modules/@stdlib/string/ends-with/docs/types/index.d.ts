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

/**
* Test if a string ends with the characters of another string.
*
* @param str - input string
* @param search - search string
* @param len - substring length (default: str.length)
* @returns boolean indicating if the input string ends with the search string
*
* @example
* var bool = endsWith( 'Remember the story I used to tell you when you were a boy?', 'boy?' );
* // returns true
*
* @example
* var bool = endsWith( 'Remember the story I used to tell you when you were a boy?', 'Boy?' );
* // returns false
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be' );
* // returns false
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', 19 );
* // returns true
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', -23 );
* // returns true
*/
declare function endsWith( str: string, search: string, len?: number ): boolean; // tslint:disable-line:max-line-length


// EXPORTS //

export = endsWith;
