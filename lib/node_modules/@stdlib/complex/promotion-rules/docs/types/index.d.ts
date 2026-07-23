/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { ComplexFloatingPointDataType } from '@stdlib/types/complex';

/**
* Real number data types.
*/
type RealDataTypes = 'float64' | 'float32' | 'int32' | 'int16' | 'int8' | 'uint32' | 'uint16' | 'uint8' | 'uint8c';

/**
* Number data types.
*/
type DataType = RealDataTypes | ComplexFloatingPointDataType;

/**
* Interface describing a promotion table.
*/
interface Table {
	/**
	* Data type promotion rules.
	*/
	[key: string]: DataType | number;
}

/**
* Promotion rule.
*/
type PromotionRule = DataType | number;

/**
* Returns the complex number data type with the smallest size and closest "kind" to which data types can be safely cast.
*
* @param dtype1 - data type
* @param dtype2 - data type
* @returns promotion rule
*
* @example
* var dt = promotionRules( 'complex128', 'complex64' );
* // returns 'complex128'
*
* @example
* var dt = promotionRules( 'complex128', 'foo' );
* // returns null
*/
declare function promotionRules( dtype1: DataType, dtype2: DataType ): PromotionRule;

/**
* Returns the complex number data type with the smallest size and closest "kind" to which data types can be safely cast.
*
* @param dtype1 - data type
* @param dtype2 - data type
* @returns promotion rule
*
* @example
* var dt = promotionRules( 'complex128', 'foo' );
* // returns null
*
* @example
* var dt = promotionRules( 'bar', 'complex128' );
* // returns null
*
* @example
* var dt = promotionRules( 'bar', 'foo' );
* // returns null
*/
declare function promotionRules( dtype1: string, dtype2: string ): null;

/**
* Returns a type promotion table displaying complex number data types with the smallest size and closest "kind" to which data types can be safely cast.
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
