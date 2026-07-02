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
* Slices a string based on Unicode code point indices.
*
* @param str - input string
* @param start - the `ith` Unicode code point to start a slice (inclusive)
* @param end - the `jth` Unicode code point to end a slice (exclusive)
* @returns output string
*
* @example
* var out = sliceCodePoints( 'Hello 👋 World', 1, 3 );
* // returns 'el'
*
* @example
* var out = sliceCodePoints( '👋👋👋', 1, 2 );
* // returns '👋'
*/
declare function sliceCodePoints( str: string, start: number, end: number ): string;


// EXPORTS //

export = sliceCodePoints;
