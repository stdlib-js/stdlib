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
* Interface describing an object mapping data type strings to descriptions.
*/
interface Table {
	// Table properties:
	[key: string]: string;
}

/**
* Returns the description for a provided data type.
*
* @param dtype - data type
* @returns data type description
*
* @example
* var desc = dtypeDesc( 'float64' );
* // returns '...'
*
* desc = dtypeDesc( 'generic' );
* // returns '...'
*/
declare function dtypeDesc( dtype: string ): string | null;

/**
* Returns an object mapping data type strings to descriptions.
*
* @returns object mapping data type strings to descriptions
*
* @example
* var obj = dtypeDesc();
* // returns {...}
*/
declare function dtypeDesc(): Table;


// EXPORTS //

export = dtypeDesc;
