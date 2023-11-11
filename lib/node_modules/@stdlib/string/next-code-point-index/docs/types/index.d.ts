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
* Returns the position of the next Unicode code point in a string after a specified position.
*
* @param str - input string
* @param fromIndex - position (default: 0)
* @throws first argument must be a string
* @throws second argument must be an integer
* @returns next code point position
*
* @example
* var out = nextCodePointIndex( '𐒻𐓟𐒻𐓟', 0 );
* // returns 2
*
* out = nextCodePointIndex( '🌷' );
* // returns -1
*/
declare function nextCodePointIndex( str: string, fromIndex?: number ): number;


// EXPORTS //

export = nextCodePointIndex;
