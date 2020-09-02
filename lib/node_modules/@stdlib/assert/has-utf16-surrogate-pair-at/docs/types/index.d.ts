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
* Tests if a position in a string marks the start of a UTF-16 surrogate pair.
*
* @param str - input string
* @param pos - position
* @throws first argument must be a string
* @throws second argument must be a nonnegative integer
* @throws position must be a valid index in string
* @returns boolean indicating if a position in a string marks the start of a UTF-16 surrogate pair
*
* @example
* var bool = hasUTF16SurrogatePairAt( '🌷', 0 );
* // returns true
*
* @example
* var bool = hasUTF16SurrogatePairAt( '🌷', 1 );
* // returns false
*/
declare function hasUTF16SurrogatePairAt( str: string, pos: number ): boolean;


// EXPORTS //

export = hasUTF16SurrogatePairAt;
