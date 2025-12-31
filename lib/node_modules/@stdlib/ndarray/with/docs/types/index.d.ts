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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Returns a new ndarray with the element at a specified index replaced by a provided value.
*
* @param x - input ndarray
* @param indices - indices of the element to replace
* @param value - value to set
* @returns output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, order  );
*
* var out = ndarrayWith( x, [ 0, 0 ], 5 );
* // returns <ndarray>
*
* var v = out.get( 0, 0 );
* // returns 5
*/
declare function ndarrayWith<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: typedndarray<T>, indices: Array<number>, value: T ): U;


// EXPORTS //

export = ndarrayWith;
