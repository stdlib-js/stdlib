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
* Converts an ndarray to a generic array (which may include nested arrays).
*
* @param x - input ndarray
* @returns array (which may include nested arrays)
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* var out = ndarray2array( arr );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function ndarray2array( x: ndarray ): Array<any>;


// EXPORTS //

export = ndarray2array;
