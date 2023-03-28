/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_NULLARY_DISPATCH_OBJECT_H
#define STDLIB_NDARRAY_BASE_NULLARY_DISPATCH_OBJECT_H

#include "stdlib/ndarray/base/nullary/typedefs.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Structure for grouping nullary function dispatch information.
*
* @example
* #include "stdlib/ndarray/base/nullary/b.h"
* #include <stdlib.h>
* #include <stdio.h>
*
* ndarrayNullaryFcn functions[] = {
*     stdlib_ndarray_b_0d,
*     stdlib_ndarray_b_1d,
*     stdlib_ndarray_b_2d,
*     stdlib_ndarray_b_3d,
*     stdlib_ndarray_b_4d,
*     stdlib_ndarray_b_5d,
*     stdlib_ndarray_b_6d,
*     stdlib_ndarray_b_7d,
*     stdlib_ndarray_b_8d,
*     stdlib_ndarray_b_9d,
*     stdlib_ndarray_b_10d
*     stdlib_ndarray_b_nd
* };

* ndarrayNullaryFcn blocked_functions[] = {
*     stdlib_ndarray_b_2d_blocked,
*     stdlib_ndarray_b_3d_blocked,
*     stdlib_ndarray_b_4d_blocked,
*     stdlib_ndarray_b_5d_blocked,
*     stdlib_ndarray_b_6d_blocked,
*     stdlib_ndarray_b_7d_blocked,
*     stdlib_ndarray_b_8d_blocked,
*     stdlib_ndarray_b_9d_blocked,
*     stdlib_ndarray_b_10d_blocked
* };
*
* ndarrayNullaryDispatchObject obj = {
*     functions,
*     12,
*     blocked_functions
*     9
* };
*
* // ...
*/
struct ndarrayNullaryDispatchObject {
	// Array containing nullary ndarray functions for performing element-wise computation:
	ndarrayNullaryFcn *functions;

	// Number of nullary ndarray functions:
	int32_t nfunctions;

	// Array containing nullary ndarray functions for performing element-wise computation using loop blocking:
	ndarrayNullaryFcn *blocked_functions;

	// Number of blocked nullary ndarray functions:
	int32_t nblockedfunctions;
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_NULLARY_DISPATCH_OBJECT_H
