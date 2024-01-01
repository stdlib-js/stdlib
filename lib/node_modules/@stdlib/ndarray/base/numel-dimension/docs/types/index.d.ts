/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns the size (i.e., number of elements) of a specified dimension for a provided ndarray.
*
* @param x - input ndarray
* @param dim - dimension index
* @returns dimension size
*
* @example
* var zeros = require( `@stdlib/ndarray/zeros` );
*
* var d = numelDimension( zeros( [ 4, 2, 3 ] ), 0 );
* // returns 4
*/
declare function numelDimension( x: ndarray, dim: number ): number;


// EXPORTS //

export = numelDimension;
