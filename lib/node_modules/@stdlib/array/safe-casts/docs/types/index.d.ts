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

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/array';

/**
* Table mapping data types to a list of data types to which data types can be safely cast.
*/
interface Table {
	/**
	* Mapping of a data type to a list of data types to which a data type can be safely cast.
	*/
	[key: string]: CastingTable;
}

/**
* Table mapping a data type to a list of data types to which a data type can be safely cast.
*/
interface CastingTable {
	/**
	* Value indicating whether a data type can be safely cast to another data type.
	*/
	[key: string]: number;
}

/**
* Returns a list of array data types to which a provided array data type can be safely cast.
*
* @param dtype - array data type
* @returns list of array data types
*
* @example
* var list = safeCasts( 'float32' );
* // returns [...]
*/
declare function safeCasts( dtype: DataType ): Array<DataType>;

/**
* Returns a list of array data types to which a provided array data type can be safely cast.
*
* ## Notes
*
* -   If provided an unrecognized array data type, the function returns `null`.
*
* @param dtype - array data type
* @returns list of array data types
*
* @example
* var list = safeCasts( 'float' );
* // returns null
*/
declare function safeCasts( dtype: string ): null;

/**
* Returns a list of array data types to which a provided array data type can be safely cast.
*
* ## Notes
*
* -   If not provided an array data type, the function returns a casting table.
* -   If provided an unrecognized array data type, the function returns `null`.
*
* @param dtype - array data type
* @returns a casting table, a list of array data types, or null
*
* @example
* var table = safeCasts();
* // returns {...}
*
* @example
* var list = safeCasts( 'float32' );
* // returns [...]
*
* @example
* var list = safeCasts( 'float' );
* // returns null
*/
declare function safeCasts( dtype?: string ): Table;


// EXPORTS //

export = safeCasts;
