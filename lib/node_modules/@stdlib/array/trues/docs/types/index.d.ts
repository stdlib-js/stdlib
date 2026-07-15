/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { BooleanArray } from '@stdlib/types/array';

/**
* Data type.
*/
type DataType = 'generic' | 'bool';

/**
* Creates an array filled with true values and having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = trues( 2, 'bool' );
* // returns <BooleanArray>[ true, true ]
*/
declare function trues( length: number, dtype: 'bool' ): BooleanArray;

/**
* Creates an array filled with true values and having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = trues( 2, 'generic' );
* // returns [ true, true ]
*/
declare function trues( length: number, dtype: 'generic' ): Array<true>;

/**
* Creates an array filled with true values and having a specified length.
*
* The function recognizes the following data types:
*
* -   `bool`: boolean values
* -   `generic`: generic JavaScript values
*
* @param length - array length
* @param dtype - data type (default: 'bool')
* @returns filled array
*
* @example
* var arr = trues( 2 );
* // returns <BooleanArray>[ true, true ]
*
* @example
* var arr = trues( 2, 'generic' );
* // returns [ true, true ]
*/
declare function trues( length: number, dtype?: DataType ): BooleanArray;


// EXPORTS //

export = trues;
