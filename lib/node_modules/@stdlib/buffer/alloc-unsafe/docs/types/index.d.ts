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

/// <reference types="node"/>

import { Buffer } from 'buffer';

/**
* Allocates a buffer having a specified number of bytes.
*
* ## Notes
*
* -   The underlying memory of returned `Buffer` instances is not initialized. Memory contents are unknown and may contain sensitive data.
* -   When the size is less than half the pool size (specified on the `Buffer` constructor), memory is allocated from the `Buffer` pool for faster allocation of new `Buffer` instances.
*
*
* @param size - number of bytes to allocate
* @throws must provide a nonnegative integer
* @returns new `Buffer` instance
*
* @example
* var buf = allocUnsafe( 10 );
* // returns <Buffer>
*/
declare function allocUnsafe( size: number ): Buffer;


// EXPORTS //

export = allocUnsafe;
