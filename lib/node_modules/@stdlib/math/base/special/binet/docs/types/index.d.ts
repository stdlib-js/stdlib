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
* Evaluates Binet's formula extended to real numbers.
*
* @param x - input value
* @returns real-valued result
*
* @example
* var y = binet( 0.0 );
* // returns 0.0
*
* @example
* var y = binet( 1.0 );
* // returns 1.0
*
* @example
* var y = binet( 2.0 );
* // returns 1.0
*
* @example
* var y = binet( 3.0 );
* // returns 2.0
*
* @example
* var y = binet( 4.0 );
* // returns 3.0
*
* @example
* var y = binet( 5.0 );
* // returns ~5.0
*
* @example
* var y = binet( 6.0 );
* // returns ~8.0
*
* @example
* var y = binet( NaN );
* // returns NaN
*
* @example
* var y = binet( 3.14 );
* // returns ~2.12
*
* @example
* var y = binet( -1.0 );
* // returns 1.0
*/
declare function binet( x: number ): number;


// EXPORTS //

export = binet;
