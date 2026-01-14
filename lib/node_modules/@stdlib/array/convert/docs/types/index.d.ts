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

import { Collection, DataTypeMap } from '@stdlib/types/array';

/**
* Converts an array to an array of a different data type.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convert<T, U extends keyof DataTypeMap<T>>( x: Collection<T>, dtype: U ): DataTypeMap<T>[U];


// EXPORTS //

export = convert;
