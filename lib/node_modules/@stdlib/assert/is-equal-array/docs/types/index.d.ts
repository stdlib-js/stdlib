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
* Tests if two arguments are both generic arrays and have equal values.
*
* ## Notes
*
* -   The function performs strict equality comparison; thus, the function treats `-0` and `+0` as equal and `NaNs` as distinct.
*
* @param v1 - first input value
* @param v2 - second input value
* @returns boolean indicating whether two arguments are equal
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 3.0 ];
*
* var out = isEqualArray( x, y );
* // returns true
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 4.0 ];
*
* var out = isEqualArray( x, y );
* // returns false
*/
declare function isEqualArray( v1: any, v2: any ): boolean;


// EXPORTS //

export = isEqualArray;
