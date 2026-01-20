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

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/ndarray';

/**
* Returns a boolean indicating whether a scalar value can be safely cast or, for floating-point data types, downcast to specified ndarray data type.
*
* @param value - scalar value
* @param dtype - ndarray data type
* @returns boolean indicating whether a scalar value can be safely cast
*
* @example
* var bool = isScalarMostlySafeCompatible( 3.0, 'float64' );
* // returns true
*
* @example
* var bool = isScalarMostlySafeCompatible( 3.14, 'int32' );
* // returns false
*
* @example
* var bool = isScalarMostlySafeCompatible( -1, 'uint32' );
* // returns false
*/
declare function isScalarMostlySafeCompatible( value: unknown, dtype: DataType ): boolean;


// EXPORTS //

export = isScalarMostlySafeCompatible;
