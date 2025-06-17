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

#ifndef STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_TYPEDEFS_H
#define STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_TYPEDEFS_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/**
* Function pointer type for an ndarray accumulation function.
*
* ## Note
*
* -   This must match the definition of an `ndarrayFcn` found in `@stdlib/ndarray/base/function-object`.
*
* @param arrays   array containing pointers to input and output ndarrays
* @param data     function "data" (e.g., a callback)
* @return         status code
*/
typedef int8_t (*ndarrayUnaryAccumulateFcn)( struct ndarray *arrays[], void *data );

#endif // !STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_TYPEDEFS_H
