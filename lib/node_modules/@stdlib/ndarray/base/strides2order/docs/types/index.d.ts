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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Determines the order of a multidimensional array based on a provided stride array.
*
* @param strides - stride array
* @returns order
*
* @example
* var order = strides2order( [ 2, 1 ] );
* // returns 1
*
* @example
* var order = strides2order( [ 1, 2 ] );
* // returns 2
*
* @example
* var order = strides2order( [ 1, 1, 1 ] );
* // returns 3
*
* @example
* var order = strides2order( [ 2, 3, 1 ] );
* // returns 0
*/
declare function strides2order( strides: ArrayLike<number> ): number;


// EXPORTS //

export = strides2order;
