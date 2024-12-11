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

#ifndef STDLIB_BLAS_BASE_SHARED_CBLAS_H
#define STDLIB_BLAS_BASE_SHARED_CBLAS_H

#include "stdlib/blas/base/diagonal_types.h"
#include "stdlib/blas/base/layouts.h"
#include "stdlib/blas/base/matrix_triangles.h"
#include "stdlib/blas/base/operation_sides.h"
#include "stdlib/blas/base/transpose_operations.h"
#include <stddef.h>
#include <stdint.h>
#include <inttypes.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Return type for an index:
#ifndef CBLAS_INDEX
#define CBLAS_INDEX size_t /* this may vary between platforms */
#endif

// Integer type:
#ifndef CBLAS_INT
#ifdef WeirdNEC
#define CBLAS_INT int64_t
#else
#define CBLAS_INT int32_t
#endif
#endif

// Integer format string:
#ifndef CBLAS_IFMT
#ifdef WeirdNEC
#define CBLAS_IFMT PRId64
#else
#define CBLAS_IFMT PRId32
#endif
#endif

// 64-bit integer API suffix:
#ifndef API_SUFFIX
#ifdef CBLAS_API64
#define API_SUFFIX( name ) name##_64
#else
#define API_SUFFIX( name ) name
#endif
#endif

// Array storage layout:
#ifndef CBLAS_LAYOUT
typedef enum CBLAS_LAYOUT {
	// Row-major order (C-style):
	CblasRowMajor = STDLIB_BLAS_ROW_MAJOR,

	// Column-major order (Fortran-style):
	CblasColMajor = STDLIB_BLAS_COLUMN_MAJOR,
} CBLAS_LAYOUT;
#endif

// Transpose operation:
#ifndef CBLAS_TRANSPOSE
typedef enum CBLAS_TRANSPOSE {
	// No transposition:
	CblasNoTrans = STDLIB_BLAS_NO_TRANSPOSE,

	// Transposition:
	CblasTrans = STDLIB_BLAS_TRANSPOSE,

	// Conjugate transposition:
	CblasConjTrans = STDLIB_BLAS_CONJUGATE_TRANSPOSE,
} CBLAS_TRANSPOSE;
#endif

// Upper/lower triangular part:
#ifndef CBLAS_UPLO
typedef enum CBLAS_UPLO {
	// Upper triangular part:
	CblasUpper = STDLIB_BLAS_UPPER,

	// Lower triangular part:
	CblasLower = STDLIB_BLAS_LOWER,
} CBLAS_UPLO;
#endif

// Diagonal elements:
#ifndef CBLAS_DIAG
typedef enum CBLAS_DIAG {
	// Non-unit diagonal elements:
	CblasNonUnit = STDLIB_BLAS_NON_UNIT_DIAGONAL,

	// Unit diagonal elements:
	CblasUnit = STDLIB_BLAS_UNIT_DIAGONAL,
} CBLAS_DIAG;
#endif

// Operation side:
#ifndef CBLAS_SIDE
typedef enum CBLAS_SIDE {
	// Triangular matrix is on the left side of a matrix-matrix operation (e.g., AX = B, where A is a triangular matrix):
	CblasLeft = STDLIB_BLAS_LEFT,

	// Triangular matrix is on the right side of a matrix-matrix operation (e.g., XA = B, where A is a triangular matrix):
	CblasRight = STDLIB_BLAS_RIGHT,
} CBLAS_SIDE;
#endif

// Alias `CBLAS_LAYOUT` for backward compatibility:
#ifndef CBLAS_ORDER
#define CBLAS_ORDER CBLAS_LAYOUT
#endif

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_SHARED_CBLAS_H
