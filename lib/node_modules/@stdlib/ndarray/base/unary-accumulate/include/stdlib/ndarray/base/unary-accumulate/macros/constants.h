/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_CONSTANTS_H
#define STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_CONSTANTS_H

// Define a default block size in units of bytes (Note: 64b is a common cache line size. How applicable the common cache line size is here is debatable, given that, depending on the associated stride(s), the innermost loop may not iterate over adjacent elements. The primary goal is to have a block size in which all data within a block can always fit in (L1) cache, regardless of cache size (i.e., cache-oblivious). For reference, a common L1 cache size is 32kB per core. For best performance, block sizes should be tuned based on system hardware; however, such tuning is not readily available to us here. Without obvious better alternatives, 64b has some theoretical (and practical) underpinning, and it should be good enough for most inputs, especially for ndarrays with near contiguity.):
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_BLOCK_SIZE_IN_BYTES 64

// Define a default block size in units of elements (Note: 64 bytes / 8 bytes per element; i.e., default element size is same as a double):
#define STDLIB_NDARRAY_UNARY_ACCUMULATE_BLOCK_SIZE_IN_ELEMENTS 8

#endif // !STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_MACROS_CONSTANTS_H
