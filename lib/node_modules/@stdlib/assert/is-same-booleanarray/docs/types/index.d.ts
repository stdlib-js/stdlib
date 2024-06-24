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
* Tests if two arguments are both BooleanArrays and have the same values.
*
* @param v1 - first input value
* @param v2 - second input value
* @returns boolean indicating whether two arguments are the same
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, false, false, true ] );
*
* var out = isSameBooleanArray( x, y );
* // returns true
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, true, false, false ] );
*
* var out = isSameBooleanArray( x, y );
* // returns false
*/
declare function isSameBooleanArray( v1: any, v2: any ): boolean;


// EXPORTS //

export = isSameBooleanArray;
