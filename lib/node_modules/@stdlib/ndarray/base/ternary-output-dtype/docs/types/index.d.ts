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

import { DataType, OutputPolicy } from '@stdlib/types/ndarray';

/**
* Resolves the output ndarray data type for a ternary function.
*
* @param xdtype - first input ndarray data type
* @param ydtype - second input ndarray data type
* @param zdtype - third input ndarray data type
* @param policy - output ndarray data type policy
* @returns output ndarray data type
*
* @example
* var dt = outputDataType( 'float64', 'float32', 'float32', 'complex_floating_point' );
* // returns <DataType>
*/
declare function outputDataType( xdtype: DataType, ydtype: DataType, zdtype: DataType, policy: OutputPolicy | DataType ): DataType;


// EXPORTS //

export = outputDataType;
