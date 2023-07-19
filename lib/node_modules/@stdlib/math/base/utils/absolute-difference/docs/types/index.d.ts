/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Computes the absolute difference.
*
* @param x - first number
* @param y - second number
* @returns absolute difference
*
* @example
* var d = absoluteDifference( 2.0, 5.0 );
* // returns 3.0
*
* @example
* var d = absoluteDifference( -1.0, 3.14 );
* // returns ~4.14
*
* @example
* var d = absoluteDifference( 10.1, -2.05 );
* // returns ~12.15
*
* @example
* var d = absoluteDifference( -0.0, 0.0 );
* // returns +0.0
*
* @example
* var d = absoluteDifference( NaN, 5.0 );
* // returns NaN
*
* @example
* var d = absoluteDifference( Infinity, -Infinity  );
* // returns Infinity
*
* @example
* var d = absoluteDifference( Infinity, Infinity  );
* // returns NaN
*/
declare function absoluteDifference( x: number, y: number ): number;


// EXPORTS //

export = absoluteDifference;
