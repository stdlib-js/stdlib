/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Removes consecutive duplicated values.
*
* ## Notes
*
* -   The function mutates the input array.
*
* @param x - input array
* @param limit - number of allowed consecutive duplicates
* @param equalNaNs - boolean indicating whether NaNs should be considered equal
* @returns input array
*
* @example
* var x = [ 1, 1, 2, 3, 3 ];
*
* var y = dedupe( x, 1, false );
* // returns [ 1, 2, 3 ]
*
* var bool = ( x === y );
* // returns true
*
* @example
* var x = [ 1, 1, 1, 2, 1, 1, 3, 3 ];
*
* var y = dedupe( x, 2, false );
* // returns [ 1, 1, 2, 1, 1, 3, 3 ]
*
* var bool = ( x === y );
* // returns true
*/
declare function dedupe<T = unknown>( x: Array<T>, limit: number, equalNaNs: boolean ): Array<T>;


// EXPORTS //

export = dedupe;
