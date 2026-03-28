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

import { ComplexLike } from '@stdlib/types/complex';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Creates a zero-filled array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns zero-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var y = zerosLike( x );
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function zerosLike<T extends typedndarray<number | ComplexLike>>( x: T ): T;


// EXPORTS //

export = zerosLike;
