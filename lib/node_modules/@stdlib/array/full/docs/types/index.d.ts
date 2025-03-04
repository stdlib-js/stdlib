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

import { DataTypeMap } from '@stdlib/types/array';

/**
* Creates a filled array having a specified length.
*
* @param length - array length
* @param value - fill value
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var arr = full( 2, 1.0 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = full( 2, 1.0, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
declare function full<T, U extends keyof DataTypeMap<number> = 'float64'>( length: number, value: T, dtype?: U ): DataTypeMap<T>[U];


// EXPORTS //

export = full;
