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

import { genericndarray } from '@stdlib/types/ndarray';

/**
* Creates a null-filled ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns null-filled ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var y = nullsLike( x );
* // returns <ndarray>[ [ null, null ], [ null, null ] ]
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*
* dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function nullsLike( x: genericndarray<unknown> ): genericndarray<null>;


// EXPORTS //

export = nullsLike;
