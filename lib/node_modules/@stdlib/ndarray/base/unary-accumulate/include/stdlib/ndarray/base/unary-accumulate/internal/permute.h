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

#ifndef STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_INTERNAL_PERMUTE_H
#define STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_INTERNAL_PERMUTE_H

#include <stdint.h>

/**
* Permutes an input array according to a provided index array.
*/
void stdlib_ndarray_base_unary_accumulate_internal_permute( const int64_t n, const int64_t *arr, const int64_t *idx, int64_t *out );

#endif // !STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_INTERNAL_PERMUTE_H
