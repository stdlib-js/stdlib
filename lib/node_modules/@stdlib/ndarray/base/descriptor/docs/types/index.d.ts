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

import { Collection } from '@stdlib/types/array';
import { DataType, Order, Shape, Strides, Descriptor } from '@stdlib/types/ndarray';
import { Buffer } from 'buffer';

/**
* Returns a plain object describing how to interpret a data buffer as an n-dimensional array.
*
* @param dtype - data type
* @param buffer - data buffer
* @param shape - array shape
* @param strides - array strides
* @param offset - index offset
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ndarray descriptor
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = descriptor( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns {...}
*/
declare function descriptor( dtype: DataType, buffer: Collection | Buffer, shape: Shape, strides: Strides, offset: number, order: Order ): Descriptor;


// EXPORTS //

export = descriptor;
