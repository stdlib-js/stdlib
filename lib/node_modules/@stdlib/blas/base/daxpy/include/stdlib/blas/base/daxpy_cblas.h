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
* Header file containing function declarations for the C interface to the CBLAS Level 1 routine `cblas_daxpy`.
*/
#ifndef DAXPY_CBLAS_H
#define DAXPY_CBLAS_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Multiplies a vector `X` by a constant and adds the result to `Y`.
*/
void cblas_daxpy( const int N, const double alpha, const double *X, const int strideX, double *Y, const int strideY );

#ifdef __cplusplus
}
#endif

#endif // !DAXPY_CBLAS_H
