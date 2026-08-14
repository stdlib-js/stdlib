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

#ifndef STDLIB_LAPACK_BASE_SHARED_LAPACKE_H
#define STDLIB_LAPACK_BASE_SHARED_LAPACKE_H

#include "stdlib/blas/base/shared.h"
#include <stddef.h>
#include <stdint.h>
#include <inttypes.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Integer type:
#ifndef LAPACK_INT
#ifdef LAPACK_ILP64
#define LAPACK_INT int64_t
#else
#define LAPACK_INT int32_t
#endif
#endif

// Integer format string:
#ifndef LAPACK_IFMT
#ifdef LAPACK_ILP64
#define LAPACK_IFMT PRId64
#else
#define LAPACK_IFMT PRId32
#endif
#endif

// Array storage layout:
#ifndef LAPACK_LAYOUT
typedef enum LAPACK_LAYOUT {
	// Row-major order (C-style):
	LAPACK_ROW_MAJOR = CblasRowMajor,

	// Column-major order (Fortran-style):
	LAPACK_COL_MAJOR = CblasColMajor,
} LAPACK_LAYOUT;
#endif

// Transpose operation:
#ifndef LAPACK_TRANSPOSITION
typedef enum LAPACK_TRANSPOSE {
	// No transposition:
	LAPACK_NO_TRANSPOSE = CblasNoTrans,

	// Transposition:
	LAPACK_TRANSPOSE = CblasTrans,

	// Conjugate transposition:
	LAPACK_CONJUGATE_TRANSPOSE = CblasConjTrans,
} LAPACK_TRANSPOSITION;
#endif

// Upper/lower triangular part:
#ifndef LAPACK_UPLO
typedef enum LAPACK_UPLO {
	// Upper triangular part:
	LAPACK_UPPER_TRIANGLE = CblasUpper,

	// Lower triangular part:
	LAPACK_LOWER_TRIANGLE = CblasLower,
} LAPACK_UPLO;
#endif

// Diagonal elements:
#ifndef LAPACK_DIAGONAL
typedef enum LAPACK_DIAGONAL {
	// Non-unit diagonal elements:
	LAPACK_NON_UNIT_DIAGONAL = CblasNonUnit,

	// Unit diagonal elements:
	LAPACK_UNIT_DIAGONAL = CblasUnit,
} LAPACK_DIAGONAL;
#endif

// Operation side:
#ifndef LAPACK_SIDE
typedef enum LAPACK_SIDE {
	// Triangular matrix is on the left side of a matrix-matrix operation (e.g., AX = B, where A is a triangular matrix):
	LAPACK_LEFT = CblasLeft,

	// Triangular matrix is on the right side of a matrix-matrix operation (e.g., XA = B, where A is a triangular matrix):
	LAPACK_RIGHT = CblasRight,
} LAPACK_SIDE;
#endif

// Memory error code when unable to allocate a workspace array:
#ifndef LAPACK_WORK_MEMORY_ERROR
#define LAPACK_WORK_MEMORY_ERROR -1010
#endif

// Memory error code when unable to allocate memory when transposing an array:
#ifndef LAPACK_TRANSPOSE_MEMORY_ERROR
#define LAPACK_TRANSPOSE_MEMORY_ERROR -1011
#endif

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_LAPACK_BASE_SHARED_LAPACKE_H
