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
* Generates a linearly spaced numeric array using a provided increment.
*
* @param x1 - first array value
* @param x2 - array element bound
* @param increment - increment (default: 1)
* @throws length of created array must be less than `4294967295` (`2**32 - 1`)
* @returns linearly spaced numeric array
*
* @example
* var arr = incrspace( 0, 11, 2 );
* // returns [ 0, 2, 4, 6, 8, 10 ]
*/
declare function incrspace( x1: number, x2: number, increment?: number ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = incrspace;
