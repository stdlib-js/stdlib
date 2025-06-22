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

#ifndef STDLIB_COMPLEX_FLOAT64_BASE_SCALE_H
#define STDLIB_COMPLEX_FLOAT64_BASE_SCALE_H

#include "stdlib/complex/float64/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
*/
stdlib_complex128_t stdlib_base_complex128_scale( const double alpha, const stdlib_complex128_t z );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_COMPLEX_FLOAT64_BASE_SCALE_H
