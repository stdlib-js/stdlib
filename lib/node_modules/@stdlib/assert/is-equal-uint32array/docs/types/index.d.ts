/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Tests if two arguments are both Uint32Arrays and have equal values.
*
* @param v1 - first input value
* @param v2 - second input value
* @returns boolean indicating whether two arguments are equal
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
* var y = new Uint32Array( [ 1, 2, 3 ] );
*
* var out = isEqualUint32Array( x, y );
* // returns true
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
* var y = new Uint32Array( [ 1, 2, 4 ] );
*
* var out = isEqualUint32Array( x, y );
* // returns false
*/
declare function isEqualUint32Array( v1: any, v2: any ): boolean;


// EXPORTS //

export = isEqualUint32Array;
