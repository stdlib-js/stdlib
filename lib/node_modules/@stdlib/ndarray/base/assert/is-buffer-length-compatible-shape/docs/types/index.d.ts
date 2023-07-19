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
* Returns a boolean indicating if a buffer length is compatible with a provided shape array.
*
* @param len - buffer length
* @param shape - array shape
* @returns boolean indicating if a buffer length is compatible with a provided shape array
*
* @example
* var shape = [ 2, 2 ];
*
* var bool = isBufferLengthCompatibleShape( 4, shape );
* // returns true
*
* @example
* var shape = [ 2, 2 ];
*
* var bool = isBufferLengthCompatibleShape( 3, shape );
* // returns false
*/
declare function isBufferLengthCompatibleShape( len: number, shape: ArrayLike<number> ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = isBufferLengthCompatibleShape;
