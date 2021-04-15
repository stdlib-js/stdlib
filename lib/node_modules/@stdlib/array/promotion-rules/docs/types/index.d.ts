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
* Interface describing a promotion table.
*/
interface Table {
	// Table properties:
	[key: string]: string | number;
}

/**
* Returns the array data type with the smallest size and closest "kind" to which array data types can be safely cast.
*
* @param dtype1 - array data type
* @param dtype2 - array data type
* @returns promotion rule(s) or null
*
* @example
* var dt = promotionRules( 'float32', 'uint32' );
* // returns 'float64'
*
* @example
* var dt = promotionRules( 'float32', 'foo' );
* // returns null
*/
declare function promotionRules( dtype1: string, dtype2: string ): number | string | null; // tslint-disable-line max-line-length

/**
* Returns a type promotion table displaying array data types with the smallest size and closest "kind" to which array data types can be safely cast.
*
* @returns promotion rule table
*
* @example
* var table = promotionRules();
* // returns {...}
*/
declare function promotionRules(): Table;


// EXPORTS //

export = promotionRules;
