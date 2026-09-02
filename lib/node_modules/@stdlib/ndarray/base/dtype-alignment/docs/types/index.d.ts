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
* Interface describing an object mapping data type strings to alignments (in bytes).
*/
interface Table {
	// Table properties:
	[key: string]: number;
}

/**
* Returns the alignment for an underlying array data type.
*
* @param dtype - data type value
* @returns alignment (in bytes)
*
* @example
* var out = dtypeAlignment( 'float64' );
* // returns 8
*
* out = dtypeAlignment( 'generic' );
* // returns null
*/
declare function dtypeAlignment( dtype: any ): number | null;

/**
* Returns an object mapping data type strings to alignments.
*
* @returns object mapping data type strings to alignments
*
* @example
* var obj = dtypeAlignment();
* // returns {...}
*/
declare function dtypeAlignment(): Table;


// EXPORTS //

export = dtypeAlignment;
