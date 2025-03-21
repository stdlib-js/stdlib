/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Tests if two arguments have the same native class.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two arguments have the same native class
*
* @example
* var bool = isSameNativeClass( 3.14, new Number( 3.14 ) );
* // returns true
*
* @example
* var bool = isSameNativeClass( 'beep', 'boop' );
* // returns true
*
* @example
* var bool = isSameNativeClass( [], {} );
* // returns false
*/
declare function isSameNativeClass( a: any, b: any ): boolean;


// EXPORTS //

export = isSameNativeClass;
