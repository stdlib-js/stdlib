/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { NumericAndGenericDataTypeMap } from '@stdlib/types/array';

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type (default: 'float64')
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2 );
* // returns <Float64Array>[ 1.0, 2.0 ]
*
* @example
* var arr = oneTo( 2, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneTo<T extends keyof NumericAndGenericDataTypeMap<number> = 'float64'>( n: number, dtype?: T ): NumericAndGenericDataTypeMap<number>[T];


// EXPORTS //

export = oneTo;
