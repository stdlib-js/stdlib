/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Returns the next extended grapheme cluster break in a string after a specified position.
*
* @param str - input string
* @param fromIndex - position (default: 0)
* @throws first argument must be a string
* @throws second argument must be an integer
* @returns next grapheme break position
*
* @example
* var out = nextGraphemeClusterBreak( 'अनुच्छेद', 1 );
* // returns 3
*
* out = nextGraphemeClusterBreak( '🌷' );
* // returns -1
*/
declare function nextGraphemeClusterBreak( str: string, fromIndex?: number ): number; // tslint:disable-line:max-line-length


// EXPORTS //

export = nextGraphemeClusterBreak;
