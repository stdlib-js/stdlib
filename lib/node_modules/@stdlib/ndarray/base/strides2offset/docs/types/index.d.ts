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
* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
*
* @param shape - array shape
* @param strides - stride array
* @returns offset
*
* @example
* var shape = [ 2, 3, 10 ];
* var strides = [ 30, -10, 1 ];
*
* var offset = strides2offset( shape, strides );
* // returns 20
*/
declare function strides2offset( shape: ArrayLike<number>, strides: ArrayLike<number> ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = strides2offset;
