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

/**
* Returns a boolean indicating if an array is column-major contiguous.
*
* @param shape - array shape
* @param strides - stride array
* @param offset - index offset
* @returns boolean indicating if an array is column-major contiguous
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 1, 2 ];
* var offset = 0;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns true
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 1, -2 ];
* var offset = 2;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns false
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 2 ];
* var offset = 0;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns false
*/
declare function isColumnMajorContiguous( shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = isColumnMajorContiguous;
