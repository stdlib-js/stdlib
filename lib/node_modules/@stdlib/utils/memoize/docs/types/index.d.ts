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
* Returns a memoized function.
*
* ## Notes
*
* -   The function does not set the `length` property of the returned function. Accordingly, the returned function `length` is always zero.
* -   The evaluation context is always `null`.
* -   The function serializes provided arguments as a string and stores results using the string as an identifier. To use a custom hash function, provide a hash function argument.
*
* @param fcn - function to memoize
* @param hashFunction - function to map a set of arguments to a single value identifying that set
* @returns memoized function
*
* @example
* function factorial( n ) {
*     var prod;
*     var i;
*     prod = 1;
*     for ( i = n; i > 1; i-- ) {
*         prod *= i;
*     }
*     return prod;
* }
*
* var memoized = memoize( factorial );
*
* var v = memoized( 5 );
* // returns 120
*
* v = memoized( 5 );
* // returns 120
*/
declare function memoize( fcn: Function, hashFunction?: Function ): Function;


// EXPORTS //

export = memoize;
