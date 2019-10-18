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
* Removes a list of words from a string.
*
* @param str - input string
* @param words - array of words to be removed
* @param ignoreCase - boolean indicating whether to perform a case-insensitive operation (default: false)
* @returns output string
*
* @example
* var str = 'beep boop Foo bar';
* var out = removeWords( str, [ 'boop', 'foo' ] );
* // returns 'beep  Foo bar'
*
* @example
* var str = 'beep boop Foo bar';
* var out = removeWords( str, [ 'boop', 'foo' ], true );
* // returns 'beep   bar'
*/
declare function removeWords( str: string, words: Array<string>, ignoreCase?: boolean ): string; // tslint-disable-line max-line-length


// EXPORTS //

export = removeWords;
