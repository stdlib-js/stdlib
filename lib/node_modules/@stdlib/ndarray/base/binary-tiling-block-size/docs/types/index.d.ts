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
* Returns a loop block size for multi-dimensional array tiled loops.
*
* @param dtypeX - first input array data type
* @param dtypeY - second input array data type
* @param dtypeZ - output array data type
* @returns block size (in units of elements)
*
* @example
* var bsize = binaryBlockSize( 'float64', 'float64', 'float64' );
* // returns <number>
*/
declare function binaryBlockSize( dtypeX: string, dtypeY: string, dtypeZ: string ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = binaryBlockSize;
