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

// TypeScript Version: 2.0

/**
* Splits a string into an array of sentences.
*
* @param str - input string
* @returns array of sentences
*
* @example
* var str = 'Hello World! How are you?';
* var out = sentencize( str );
* // returns [ 'Hello World!', 'How are you?' ]
*
* @example
* var str = '';
* var out = sentencize( str );
* // returns []
*
* @example
* var str = 'Hello Mrs. Maple, could you call me back?';
* var out = sentencize( str );
* // returns [ 'Hello Mrs. Maple, could you call me back?' ]
*/
declare function sentencize( str: string ): Array<string>;


// EXPORTS //

export = sentencize;
