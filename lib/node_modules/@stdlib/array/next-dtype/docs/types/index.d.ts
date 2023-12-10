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
* Table mapping data types to the next larger data type of the same kind.
*/
interface Table {
	/**
	* Mapping of a data type to the next larger data type of the same kind.
	*/
	[key: string]: DataType | number;
}

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'float64' );
* // returns -1
*/
declare function nextDataType( dtype: 'float64' ): number;

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'float32' );
* // returns 'float64'
*/
declare function nextDataType( dtype: 'float32' ): 'float64';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'int32' );
* // returns -1
*/
declare function nextDataType( dtype: 'int32' ): number; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'int16' );
* // returns 'int32'
*/
declare function nextDataType( dtype: 'int16' ): 'int32';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'int8' );
* // returns 'int16'
*/
declare function nextDataType( dtype: 'int8' ): 'int16';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'uint32' );
* // returns -1
*/
declare function nextDataType( dtype: 'uint32' ): number; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'uint16' );
* // returns 'uint32'
*/
declare function nextDataType( dtype: 'uint16' ): 'uint32';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'uint8' );
* // returns 'uint16'
*/
declare function nextDataType( dtype: 'uint8' ): 'uint16';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'uint8c' );
* // returns 'uint16'
*/
declare function nextDataType( dtype: 'uint8c' ): 'uint16'; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'generic' );
* // returns -1
*/
declare function nextDataType( dtype: 'generic' ): number; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'complex128' );
* // returns -1
*/
declare function nextDataType( dtype: 'complex128' ): number; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'complex64' );
* // returns 'complex128'
*/
declare function nextDataType( dtype: 'complex64' ): 'complex128';

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'complex64' );
* // returns 'complex128'
*/
declare function nextDataType( dtype: DataType ): DataType | number;

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
* -   If provided an unrecognized data type, the function returns `null`.
*
* @param dtype - array data type
* @returns next larger data type
*
* @example
* var dt = nextDataType( 'float' );
* // returns null
*/
declare function nextDataType( dtype: string ): null;

/**
* Returns the next larger array data type of the same kind.
*
* ## Notes
*
* -   If not provided a data type, the function returns a table.
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
* -   If provided an unrecognized data type, the function returns `null`.
*
* @param dtype - array data type
* @returns next larger data type(s) or null
*
* @example
* var table = nextDataType();
* // returns {...}
*
* @example
* var dt = nextDataType( 'float32' );
* // returns 'float64'
*/
declare function nextDataType( dtype?: DataType ): Table;


// EXPORTS //

export = nextDataType;
