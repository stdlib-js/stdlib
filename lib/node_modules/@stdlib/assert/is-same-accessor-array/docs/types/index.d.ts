/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Tests if two arguments are both accessor arrays and have the same values.
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
*
* @param v1 - first input value
* @param v2 - second input value
* @returns boolean indicating whether two arguments are accessor arrays with the same content
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1, 2, 1, 2 ] );
* var y = new Complex128Array( [ 1, 2, 1, 2 ] );
* var out = isSameAccessorArray( x, y );
* // returns true
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1, 2, 1, 2 ] );
* var y = new Complex128Array( [ 2, 1, 2, 1 ] );
* var out = isSameAccessorArray( x, y );
* // returns false
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1, 2, 1, 2 ] );
* var y = [ 1, 2, 3 ];
* var out = isSameAccessorArray( x, y );
* // returns false
*/
declare function isSameAccessorArray( v1: any, v2: any ): boolean;


// EXPORTS //

export = isSameAccessorArray;
