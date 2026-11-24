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
* Returns a data type that results from applying promotion rules to a provided list of data types.
*
* ## Notes
*
* -   The function returns `null` if provided data types which cannot be safely cast to a promoted data type.
*
* @param dtypes - list of data types
* @returns result
*
* @example
* var dt = promoteDataTypes( [ 'float32', 'float64' ] );
* // returns 'float64'
*
* @example
* var dt = promoteDataTypes( [ 'binary', 'complex128' ] );
* // returns null
*/
declare function promoteDataTypes( dtypes: ArrayLike<DataType> ): DataType | null;


// EXPORTS //

export = promoteDataTypes;
