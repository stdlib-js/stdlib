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
* Concatenates two strings.
*
* @param str1 - first string
* @param str2 - second string
* @returns concatenated string
*
* @example
* var out = concat( 'beep', 'boop' );
* // returns 'beepboop'
*/
declare function concat<S1 extends string, S2 extends string>( str1: S1, str2: S2 ): `${S1}${S2}`;


// EXPORTS //

export = concat;
