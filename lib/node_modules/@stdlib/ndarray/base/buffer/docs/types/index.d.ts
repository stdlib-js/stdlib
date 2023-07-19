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

import { Buffer } from 'buffer';
import { TypedArray } from '@stdlib/types/array';
import { DataType } from '@stdlib/types/ndarray';

/**
* Array or typed array.
*/
type ArrayOrBufferOrTypedArray = Array<any> | TypedArray | Buffer | null;

/**
* Returns a zero-filled contiguous linear ndarray data buffer.
*
* @param dtype - data type
* @param size - buffer size
* @returns data buffer
*
* @example
* var buf = buffer( 'float64', 3 );
* // returns <Float64Array>[ 0.0, 0.0, 0.0 ]
*/
declare function buffer( dtype: DataType, size: number ): ArrayOrBufferOrTypedArray; // tslint-disable-line max-line-length


// EXPORTS //

export = buffer;
