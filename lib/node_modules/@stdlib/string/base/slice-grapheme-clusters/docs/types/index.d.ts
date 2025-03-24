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
* Slices a string based on grapheme cluster (i.e., user-perceived character) indices.
*
* @param str - input string
* @param start - the `ith` grapheme cluster to start a slice (inclusive)
* @param end - the `jth` grapheme cluster to end a slice (exclusive)
* @returns output string
*
* @example
* var out = sliceGraphemeClusters( 'Hello World', 0, 5 );
* // returns 'Hello'
*
* out = sliceGraphemeClusters( '👋👋👋', 0, 2 );
* // returns '👋👋'
*
* out = sliceGraphemeClusters( 'अनुच्छेद', 1, 3 );
* // returns 'नुच्'
*
* out = sliceGraphemeClusters( 'Hello World', -5, -1 );
* // returns 'Worl'
*/
declare function sliceGraphemeClusters( str: string, start: number, end: number ): string;


// EXPORTS //

export = sliceGraphemeClusters;
