/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

type Uncapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : S;

/**
* Uncapitalizes the first character of a string.
*
* @param str - input string
* @returns input string with first character converted to lowercase
*
* @example
* var out = uncapitalize( 'Last man standing' );
* // returns 'last man standing'
*
* @example
* var out = uncapitalize( 'Presidential election' );
* // returns 'presidential election'
*
* @example
* var out = uncapitalize( 'JavaScript' );
* // returns 'javaScript'
*
* @example
* var out = uncapitalize( 'Hidden Treasures' );
* // returns 'hidden Treasures'
*/
declare function uncapitalize<S extends string>( str: S ): Uncapitalize<S>;


// EXPORTS //

export = uncapitalize;
