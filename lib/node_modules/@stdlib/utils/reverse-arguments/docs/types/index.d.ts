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
* Returns a function that invokes a provided function with arguments in reverse order.
*
* @param fcn - input function
* @param thisArg - function context
* @returns reverse arguments function
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* var bar = reverseArguments( foo );
*
* var out = bar( 1, 2, 3 );
* // returns [ 3, 2, 1 ]
*/
declare function reverseArguments( fcn: Function, thisArg?: any ): Function;


// EXPORTS //

export = reverseArguments;
