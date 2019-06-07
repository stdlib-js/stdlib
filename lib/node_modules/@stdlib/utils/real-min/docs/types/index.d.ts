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
* Returns the smallest positive normal value capable of being represented by a numeric real type.
*
* ## Notes
*
* The following numeric real types are supported:
*
* -   `float64`: double-precision floating-point numbers
* -   `float32`: single-precision floating-point numbers
* -   `float16`: half-precision floating-point numbers
*
* @param dtype - numeric type
* @throws must provide a recognized numeric type
* @returns smallest positive normal value
*
* @example
* var m = realmin( 'float64' );
* // returns 2.2250738585072014e-308
*
* @example
* var m = realmin( 'float16' );
* // returns 0.00006103515625
*
* @example
* var m = realmin( 'float32' );
* // returns 1.1754943508222875e-38
*/
declare function realmin( dtype: string ): number;


// EXPORTS //

export = realmin;
