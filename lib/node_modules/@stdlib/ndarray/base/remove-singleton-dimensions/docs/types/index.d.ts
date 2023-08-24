/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Returns an array without singleton dimensions.
*
* ## Notes
*
* -   If a provided ndarray does not have any singleton dimensions, the function returns the provided ndarray unchanged.
* -   If a provided ndarray does have singleton dimensions, the function returns a new ndarray view.
*
* @param x - input array
* @returns squeezed array
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
*     'ndmin': 5
* });
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 1, 1, 1, 2, 2 ]
*
* var y = removeSingletonDimensions( x );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 2, 2 ]
*
* var v = y.get( 0, 0 );
* // returns 1
*
* v = y.get( 0, 1 );
* // returns 2
*
* v = y.get( 1, 0 );
* // returns 3
*
* v = y.get( 1, 1 );
* // returns 4
*/
declare function removeSingletonDimensions( x: ndarray ): ndarray;


// EXPORTS //

export = removeSingletonDimensions;
