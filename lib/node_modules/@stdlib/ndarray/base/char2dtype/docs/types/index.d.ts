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

// TypeScript Version: 4.1

/**
* Interface describing an object mapping single letter character abbreviations to data type strings.
*/
interface Table {
	// Table properties:
	[key: string]: string;
}

/**
* Returns the data type string associated with a provided single letter character abbreviation.
*
* @param ch - single letter character abbreviation
* @returns data type string (or null)
*
* @example
* var out = char2dtype( 'd' );
* // returns 'float64'
*
* out = char2dtype( '{' );
* // returns null
*/
declare function char2dtype( ch: string ): string | null;

/**
* Returns an object mapping single letter character abbreviations to data type strings.
*
* @returns object mapping single letter character abbreviations to data type strings
*
* @example
* var out = char2dtype();
* // returns {...}
*/
declare function char2dtype(): Table;


// EXPORTS //

export = char2dtype;
