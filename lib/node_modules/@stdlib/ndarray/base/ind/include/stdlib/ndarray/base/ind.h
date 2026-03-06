/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_IND_H
#define STDLIB_NDARRAY_BASE_IND_H

#include "stdlib/ndarray/index_modes.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Returns an index given an index mode.
*/
int64_t stdlib_ndarray_ind( const int64_t idx, const int64_t max, const enum STDLIB_NDARRAY_INDEX_MODE mode );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_IND_H
