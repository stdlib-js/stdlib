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

#ifndef STDLIB_RANDOM_BASE_UNIFORM_H
#define STDLIB_RANDOM_BASE_UNIFORM_H

#include "stdlib/random/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Returns a pseudorandom number drawn from a continuous uniform distribution with parameters `a` (minimum support; inclusive) and `b` (maximum support; exclusive).
*/
double stdlib_base_random_uniform( struct BasePRNGObject *randu, const double a, const double b );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_RANDOM_BASE_UNIFORM_H
