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
* Header file containing function declarations for the Fortran interface to the BLAS Level 2 routine `dger`.
*/
#ifndef DGER_FORTRAN_H
#define DGER_FORTRAN_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C/Fortran compiler (a Fortran compiler must be configured to not attach underscores).
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*/
void dger( const CBLAS_INT *, const CBLAS_INT *, const double *, const double *, const CBLAS_INT *, const double *, const CBLAS_INT *, double *, const CBLAS_INT * );

#ifdef __cplusplus
}
#endif

#endif // !DGER_FORTRAN_H
