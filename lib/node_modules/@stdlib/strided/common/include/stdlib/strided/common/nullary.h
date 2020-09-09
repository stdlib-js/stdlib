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

/**
* Header file containing function declarations for strided array functions which apply a nullary callback.
*/
#ifndef STDLIB_STRIDED_COMMON_NULLARY_H
#define STDLIB_STRIDED_COMMON_NULLARY_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a nullary callback returning double-precision floating-point numbers and assigns results to elements in a strided output array.
*/
void stdlib_strided_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning single-precision floating-point numbers and assigns results to elements in a strided output array.
*/
void stdlib_strided_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning double-precision floating-point numbers, casts results to single-precision floating-point format, and assigns results to elements in a strided output array.
*/
void stdlib_strided_f_as_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning unsigned 32-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_I( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning signed 32-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning unsigned 16-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_H( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning signed 16-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_h( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning unsigned 8-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_B( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

/**
* Applies a nullary callback returning signed 8-bit integers and assigns results to elements in a strided output array.
*/
void stdlib_strided_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_COMMON_NULLARY_H
