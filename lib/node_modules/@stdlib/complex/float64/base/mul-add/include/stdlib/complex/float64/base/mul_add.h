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

#ifndef STDLIB_COMPLEX_FLOAT64_BASE_MUL_ADD_H
#define STDLIB_COMPLEX_FLOAT64_BASE_MUL_ADD_H

#include "stdlib/complex/float64/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
*/
stdlib_complex128_t stdlib_base_complex128_muladd( const stdlib_complex128_t alpha, const stdlib_complex128_t x, const stdlib_complex128_t y );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_COMPLEX_FLOAT64_BASE_MUL_ADD_H
