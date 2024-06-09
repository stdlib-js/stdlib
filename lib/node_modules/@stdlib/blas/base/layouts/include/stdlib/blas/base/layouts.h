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

#ifndef STDLIB_BLAS_BASE_LAYOUTS_H
#define STDLIB_BLAS_BASE_LAYOUTS_H

/**
* Enumeration of array storage layouts (i.e., memory layout/iteration order).
*/
enum STDLIB_BLAS_LAYOUT {
	// Row-major (C-style):
	STDLIB_BLAS_ROW_MAJOR = 101,

	// Column-major (Fortran-style):
	STDLIB_BLAS_COLUMN_MAJOR = 102
};

#endif // !STDLIB_BLAS_BASE_LAYOUTS_H
