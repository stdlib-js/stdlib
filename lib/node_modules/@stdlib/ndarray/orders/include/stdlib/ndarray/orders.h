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

#ifndef STDLIB_NDARRAY_ORDERS_H
#define STDLIB_NDARRAY_ORDERS_H

#include "stdlib/blas/base/layouts.h"

/**
* Enumeration of ndarray orders (i.e., memory layout/iteration order).
*/
enum STDLIB_NDARRAY_ORDER {
	// Row-major (C-style):
	STDLIB_NDARRAY_ROW_MAJOR = STDLIB_BLAS_ROW_MAJOR,

	// Column-major (Fortran-style):
	STDLIB_NDARRAY_COLUMN_MAJOR = STDLIB_BLAS_COLUMN_MAJOR
};

#endif // !STDLIB_NDARRAY_ORDERS_H
