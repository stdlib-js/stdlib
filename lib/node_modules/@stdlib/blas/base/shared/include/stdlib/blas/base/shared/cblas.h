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
	CblasRowMajor = 101,

	// Column-major order (Fortran-style):
	CblasColMajor = 102,
} CBLAS_LAYOUT;
#endif

// Transpose operation:
#ifndef CBLAS_TRANSPOSE
typedef enum CBLAS_TRANSPOSE {
	// No transposition:
	CblasNoTrans = 111,

	// Transposition:
	CblasTrans = 112,

	// Conjugate transposition:
	CblasConjTrans = 113,
} CBLAS_TRANSPOSE;
#endif

// Upper/lower triangular:
#ifndef CBLAS_UPLO
typedef enum CBLAS_UPLO {
	// Upper triangular:
	CblasUpper = 121,

	// Lower triangular:
	CblasLower = 122,
} CBLAS_UPLO;
#endif

// Diagonal matrix:
#ifndef CBLAS_DIAG
typedef enum CBLAS_DIAG {
	// Non-unit:
	CblasNonUnit = 131,

	// Unit:
	CblasUnit = 132,
} CBLAS_DIAG;
#endif

// Operation side:
#ifndef CBLAS_SIDE
typedef enum CBLAS_SIDE {
	// Left-side:
	CblasLeft = 141,

	// Right-side:
	CblasRight = 142,
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
