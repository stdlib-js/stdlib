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
* Tests if a value is an alphagram (i.e., a sequence of characters arranged in alphabetical order).
*
* ## Notes
*
* -   The function first checks that an input value is a string before validating that the value is an alphagram. For non-string values, the function returns `false`.
*
* @param value - value to test
* @returns boolean indicating if a value is an alphagram
*
* @example
* var out = isAlphagram( 'beep' );
* // returns true
*
* @example
* var out = isAlphagram( new String( 'beep' ) );
* // returns true
*
* @example
* var out = isAlphagram( 'zba' );
* // returns false
*
* @example
* var out = isAlphagram( '' );
* // returns false
*
* @example
* var out = isAlphagram( 123 );
* // returns false
*/
declare function isAlphagram( value: any ): boolean;


// EXPORTS //

export = isAlphagram;
