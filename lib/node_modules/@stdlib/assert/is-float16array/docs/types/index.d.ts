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
* Tests if a value is a Float16Array.
*
* @param value - value to test
* @returns boolean indicating whether value is a Float16Array
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var bool = isFloat16Array( new Float16Array( 10 ) );
* // returns true
*
* @example
* var bool = isFloat16Array( [] );
* // returns false
*/
declare function isFloat16Array( value: any ): boolean; // TODO: replace with `value is Float16Array` once `array/float16` added


// EXPORTS //

export = isFloat16Array;
