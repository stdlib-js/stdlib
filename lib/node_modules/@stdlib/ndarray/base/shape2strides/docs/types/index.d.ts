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
import { Order } from '@stdlib/types/ndarray';

/**
* Generates a stride array from an array shape.
*
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns array strides
*
* @example
* var s = shape2strides( [ 3, 2 ], 'row-major' );
* // returns [ 2, 1 ]
*
* s = shape2strides( [ 3, 2 ], 'column-major' );
* // returns [ 1, 3 ]
*/
declare function shape2strides( shape: ArrayLike<number>, order: Order ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = shape2strides;
