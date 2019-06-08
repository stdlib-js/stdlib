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
* Returns the minimum value of a specified numeric type.
*
* ## Notes
*
* The following numeric types are supported:
*
* -   `float64`: double-precision floating-point numbers
* -   `float32`: single-precision floating-point numbers
* -   `float16`: half-precision floating-point numbers
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to 0-255
*
* @param dtype - numeric type
* @throws must provide a recognized numeric type
* @returns minimum value
*
* @example
* var m = typemin( 'int8' );
* // returns -128
*
* @example
* var m = typemin( 'uint8' );
* // returns 0
*
* @example
* var m = typemin( 'int16' );
* // returns -32768
*/
declare function typemin( dtype: string ): number;


// EXPORTS //

export = typemin;
