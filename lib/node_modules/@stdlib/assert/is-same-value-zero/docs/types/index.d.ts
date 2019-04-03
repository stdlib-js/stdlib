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
* Tests if two arguments are the same value.
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `NaNs` as the same.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two arguments are the same value
*
* @example
* var bool = isSameValueZero( true, true );
* // returns true
*
* @example
* var bool = isSameValueZero( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValueZero( {}, {} );
* // returns false
*
* @example
* var bool = isSameValueZero( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( -0.0, 0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( NaN, NaN );
* // returns true
*
* @example
* var bool = isSameValueZero( [], [] );
* // returns false
*/
declare function isSameValueZero( a: any, b: any ): boolean;


// EXPORTS //

export = isSameValueZero;
