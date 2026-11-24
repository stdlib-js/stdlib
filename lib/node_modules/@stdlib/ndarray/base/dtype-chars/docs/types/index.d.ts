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

import { DataTypeKind } from '@stdlib/types/ndarray';

/**
* Returns a list of ndarray data type single letter character abbreviations.
*
* @param kind - data type kind
* @returns list of ndarray data type single letter character abbreviations
*
* @example
* var list = dtypeChars();
* // returns [...]
*
* @example
* var list = dtypeChars( 'floating_point' );
* // returns [...]
*/
declare function dtypeChars( kind?: DataTypeKind ): Array<string>;


// EXPORTS //

export = dtypeChars;
