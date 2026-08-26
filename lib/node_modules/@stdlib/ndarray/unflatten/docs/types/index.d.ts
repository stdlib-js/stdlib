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

import { typedndarray } from '@stdlib/types/ndarray';
import { Collection } from '@stdlib/types/array';

/**
* Returns a read-only view of an input ndarray in which a specified dimension is expanded over multiple dimensions.
*
* @param x - input array
* @param dim - dimension to be unflattened
* @param sizes - new shape of the unflattened dimension
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* var y = unflatten( x, 0, [ 2, 3 ] );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ]
*/
declare function unflatten<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, dim: number, sizes: Collection<number> ): U;


// EXPORTS //

export = unflatten;
