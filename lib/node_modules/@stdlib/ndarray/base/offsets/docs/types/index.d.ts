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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Returns the index offset specifying the underlying buffer index of the first iterated element for each ndarray in a provided list of ndarrays.
*
* @param arrays - list of ndarrays
* @returns index offsets
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 3, 3, 3 ] );
*
* var out = offsets( [ x ] );
* // returns [ 0 ]
*/
declare function offsets( arrays: ArrayLike<ndarray> ): Array<number>;


// EXPORTS //

export = offsets;
