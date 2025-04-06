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
* Returns the differential entropy of a Planck distribution.
*
* ## Notes
*
* -   If `lambda <= 0`, the function returns `NaN`.
*
* @param lambda - shape parameter
* @returns differential entropy
*
* @example
* var v = entropy( 0.1 );
* // returns ~3.3030
*
* @example
* var v = entropy( 1.5 );
* // returns ~0.6833
*
* @example
* var v = entropy( 2.9 );
* // returns ~0.2255
*
* @example
* var v = entropy( -1.1 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
declare function entropy( lambda: number ): number;


// EXPORTS //

export = entropy;
