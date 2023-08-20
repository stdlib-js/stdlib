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

// TypeScript Version: 4.1

/**
* Tokenize a string.
*
* @param str - input string
* @param keepWhitespace - boolean indicating whether whitespace characters should be returned as part of the token array (default: false)
* @returns array of tokens
*
* @example
* var str = 'Hello World!';
* var out = tokenize( str );
* // returns [ 'Hello', 'World', '!' ]
*
* @example
* var str = '';
* var out = tokenize( str );
* // returns []
*
* @example
* var str = 'Hello Mrs. Maple, could you call me back?';
* var out = tokenize( str );
* // returns [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ]
*/
declare function tokenize( str: string, keepWhitespace?: boolean ): Array<string>; // tslint-disable-line max-length


// EXPORTS //

export = tokenize;
