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
* Normalizes an index to the interval `[0,max]`.
*
* ## Notes
*
* -   If provided an out-of-bounds index, the function returns `-1`.
*
* @param idx - index
* @param max - maximum index
* @returns index
*
* @example
* var idx = normalizeIndex( -2, 10 );
* // returns 9
*
* idx = normalizeIndex( 15, 10 );
* // returns -1
*
* idx = normalizeIndex( 5, 10 );
* // returns 5
*/
declare function normalizeIndex( idx: number, max: number ): number;


// EXPORTS //

export = normalizeIndex;
