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

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

/**
* Invokes a callback once for each (visual) character of a string.
*
* ## Notes
*
* -   When invoked, the input function is provided three arguments:
*
*     -   `value`: visual character
*     -   `index`: starting character index
*     -   `inpStr`: input string
*
* @param str - input string
* @param clbk - function to invoke
* @param thisArg - execution context
* @returns input string
*
* @example
* function log( value, index, inpStr ) {
*     console.log( '%s: %d', index, value );
* }
*
* var testStr = 'presidential election';
*
* forEach( testStr, log );
*/
declare function forEach( str: string, clbk: Function, thisArg?: any ): string;


// EXPORTS //

export = forEach;
