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

// TypeScript Version: 2.0

/**
* Tests if two arguments have the same type.
*
* ## Notes
*
* -   The function uses the `typeof` operator to test for the same type.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two arguments have the same type
*
* @example
* var bool = isSameType( true, true );
* // returns true
*
* @example
* var bool = isSameType( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameType( {}, [] );
* // returns true
*
* @example
* var bool = isSameType( NaN, NaN );
* // returns true
*
* @example
* var bool = isSameType( 0.0, '0.0' );
* // returns false
*/
declare function isSameType( a: any, b: any ): boolean;


// EXPORTS //

export = isSameType;
