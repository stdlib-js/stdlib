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
* Returns the enumeration constant associated with a matrix orientation.
*
* ## Notes
*
* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROWS == 0`). Instead, the function should be used in an opaque manner.
*
* @param value - matrix orientation string
* @returns enumeration constant
*
* @example
* var v = str2enum( 'rows' );
* // returns <number>
*/
declare function str2enum( value: string ): number | null;


// EXPORTS //

export = str2enum;
