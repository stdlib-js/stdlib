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
* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two arguments are the same value
*
* @example
* var bool = isSameValue( true, true );
* // returns true
*
* @example
* var bool = isSameValue( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValue( {}, {} );
* // returns false
*
* @example
* var bool = isSameValue( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValue( -0.0, 0.0 );
* // returns false
*
* @example
* var bool = isSameValue( NaN, NaN );
* // returns true
*
* @example
* var bool = isSameValue( [], [] );
* // returns false
*/
declare function isSameValue( a: any, b: any ): boolean;


// EXPORTS //

export = isSameValue;
