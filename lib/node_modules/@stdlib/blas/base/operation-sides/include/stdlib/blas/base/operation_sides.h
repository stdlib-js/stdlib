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

#ifndef STDLIB_BLAS_BASE_OPERATION_SIDES_H
#define STDLIB_BLAS_BASE_OPERATION_SIDES_H

/**
* Enumeration of operation sides.
*/
enum STDLIB_BLAS_OPERATION_SIDE {
	// Triangular matrix is on the left side of a matrix-matrix operation (e.g., AX = B, where A is a triangular matrix)
	STDLIB_BLAS_LEFT = 141,

	// Triangular matrix is on the right side of a matrix-matrix operation (e.g., XA = B, where A is a triangular matrix)
	STDLIB_BLAS_RIGHT = 142
};

#endif // !STDLIB_BLAS_BASE_OPERATION_SIDES_H
