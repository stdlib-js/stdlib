/**
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

#ifndef STDLIB_NDARRAY_BASE_UNARY_X_X_H
#define STDLIB_NDARRAY_BASE_UNARY_X_X_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning booleans to an boolean input ndarray and assigns results to elements in an boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a zero-dimensional boolean input ndarray and assigns results to elements in a zero-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a one-dimensional boolean input ndarray and assigns results to elements in a one-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a two-dimensional boolean input ndarray and assigns results to elements in a two-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a two-dimensional boolean input ndarray and assigns results to elements in a two-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a three-dimensional boolean input ndarray and assigns results to elements in a three-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a three-dimensional boolean input ndarray and assigns results to elements in a three-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a four-dimensional boolean input ndarray and assigns results to elements in a four-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a four-dimensional boolean input ndarray and assigns results to elements in a four-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a five-dimensional boolean input ndarray and assigns results to elements in a five-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a five-dimensional boolean input ndarray and assigns results to elements in a five-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a six-dimensional boolean input ndarray and assigns results to elements in a six-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a six-dimensional boolean input ndarray and assigns results to elements in a six-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a seven-dimensional boolean input ndarray and assigns results to elements in a seven-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a seven-dimensional boolean input ndarray and assigns results to elements in a seven-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to an eight-dimensional boolean input ndarray and assigns results to elements in an eight-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to an eight-dimensional boolean input ndarray and assigns results to elements in an eight-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a nine-dimensional boolean input ndarray and assigns results to elements in a nine-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a nine-dimensional boolean input ndarray and assigns results to elements in a nine-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a ten-dimensional boolean input ndarray and assigns results to elements in a ten-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to a ten-dimensional boolean input ndarray and assigns results to elements in a ten-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning booleans to an n-dimensional boolean input ndarray and assigns results to elements in an n-dimensional boolean output ndarray.
*/
int8_t stdlib_ndarray_x_x_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_X_X_H
