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

import { DataType, InputCastingPolicy } from '@stdlib/types/ndarray';

/**
* Resolves the input ndarray casting data type for a unary function.
*
* @param idtype - input ndarray data type
* @param odtype - output ndarray data type
* @param policy - input ndarray casting data type policy
* @returns input ndarray casting data type
*
* @example
* var dt = outputDataType( 'float64', 'float64', 'none' );
* // returns <string>
*/
declare function outputDataType( idtype: DataType, odtype: DataType, policy: InputCastingPolicy | DataType ): DataType;


// EXPORTS //

export = outputDataType;
