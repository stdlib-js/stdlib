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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.
*
* @param shape - array shape
* @param strides - stride array
* @param offset - index offset
* @returns linear indices
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 10, 1 ];
* var offset = 10;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 10, 109 ]
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -10, -1 ];
* var offset = 99;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 0, 99 ]
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 1, 10 ];
* var offset = 10;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 10, 109 ]
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -1, -10 ];
* var offset = 99;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 0, 99 ]
*/
declare function minmaxViewBufferIndex( shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = minmaxViewBufferIndex;
