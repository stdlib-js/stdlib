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
import { Mode, Order } from '@stdlib/types/ndarray';

/**
* Converts a linear index in an array view to a linear index in an underlying data buffer.
*
* @param shape - array shape
* @param strides - stride array
* @param offset - location of the first indexed value **based** on the stride array
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param idx - linear index in an array view
* @param mode - specifies how to handle a linear index which exceeds array dimensions
* @throws linear index must not exceed array dimensions
* @returns linear index in an underlying data buffer
*
* @example
* var shape = [ 3, 3 ];
* var strides = [ -3, 1 ];
* var offset = 6;
* var order = 'row-major';
* var mode = 'throw';
*
* var ind = vind2bind( shape, strides, offset, order, 1, mode );
* // returns 7
*/
declare function vind2bind( shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, order: Order, idx: number, mode: Mode ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = vind2bind;
