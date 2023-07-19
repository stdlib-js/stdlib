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
/// <reference types="node"/>

import { ArrayLike } from '@stdlib/types/array';
import { Order } from '@stdlib/types/ndarray';
import { Buffer } from 'buffer';


/**
* Converts an ndarray buffer to a generic array (which may include nested arrays).
*
* @param buffer - data buffer
* @param shape - array shape
* @param strides - array strides
* @param offset - index offset
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns array (which may include nested arrays)
*
* @example
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray2array( buffer, shape, strides, offset, order );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function ndarray2array( buffer: ArrayLike<any> | Buffer, shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, order: Order ): Array<any>; // tslint-disable-line max-line-length


// EXPORTS //

export = ndarray2array;
