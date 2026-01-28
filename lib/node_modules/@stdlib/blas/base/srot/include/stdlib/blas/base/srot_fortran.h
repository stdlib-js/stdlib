/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Header file containing function declarations for the Fortran interface to the BLAS Level 1 routine `srot`.
*/
#ifndef STDLIB_BLAS_BASE_SROT_FORTRAN_H
#define STDLIB_BLAS_BASE_SROT_FORTRAN_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C/Fortran compiler (a Fortran compiler must be configured to not attach underscores).
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a plane rotation.
*/
void srot( const int *, float *, const int *, float *, const int *, const float *, const float * );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_SROT_FORTRAN_H
