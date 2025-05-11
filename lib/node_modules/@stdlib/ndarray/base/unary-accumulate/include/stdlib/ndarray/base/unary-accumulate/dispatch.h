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

#ifndef STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_DISPATCH_H
#define STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_DISPATCH_H

#include "stdlib/ndarray/base/unary-accumulate/dispatch_object.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Dispatches to a ndarray function according to the dimensionality of provided ndarray arguments.
*/
int8_t stdlib_ndarray_unary_accumulate_dispatch( const struct ndarrayUnaryAccumulateDispatchObject *obj, struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_ACCUMULATE_DISPATCH_H
