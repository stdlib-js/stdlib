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

#ifndef STDLIB_BLAS_BASE_TRANSPOSE_OPERATIONS_H
#define STDLIB_BLAS_BASE_TRANSPOSE_OPERATIONS_H

/**
* Enumeration of array transpose operations.
*/
enum STDLIB_BLAS_TRANSPOSE_OPERATION {
	// No transposition:
	STDLIB_BLAS_NO_TRANSPOSE = 111,

	// Transposition:
	STDLIB_BLAS_TRANSPOSE = 112,

	// Conjugate transposition:
	STDLIB_BLAS_CONJUGATE_TRANSPOSE = 113
};

#endif // !STDLIB_BLAS_BASE_TRANSPOSE_OPERATIONS_H
