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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Copies an input ndarray to a new ndarray having the same shape and data type.
*
* ## Notes
*
* -   The function performs a full copy in which an ndarray's underlying data is copied to a new underlying data buffer.
*
* @param x - input array
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var y = copy( x );
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*/
declare function copy<T extends ndarray = ndarray>( x: T ): T;


// EXPORTS //

export = copy;
