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

import { Collection } from '@stdlib/types/array';

/**
* Returns the complement of a list of array indices.
*
* @param N - array length
* @param indices - list of indices
* @returns indices complement
*
* @example
* var idx = indicesComplement( 5, [ 1, 3 ] );
* // returns [ 0, 2, 4 ]
*/
declare function indicesComplement( N: number, indices: Collection<number> ): Array<number>;


// EXPORTS //

export = indicesComplement;
