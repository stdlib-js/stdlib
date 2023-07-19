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

#ifndef STDLIB_NDARRAY_CTOR_MACROS_H
#define STDLIB_NDARRAY_CTOR_MACROS_H

/**
* Flag indicating whether an ndarray is row-major (C-style) contiguous.
*
* ## Notes
*
* -   Row-major order indicates that the last ndarray index varies the fastest.
* -   Contiguous means that an ndarray is compatible with being stored in a single memory segment and that ndarray elements are adjacent to each other in memory.
* -   `strides` array is in reverse order to that of column-major order.
* -   An ndarray can be both row-major and column-major contiguous (e.g., if an ndarray is one-dimensional).
*/
#define STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG 0x0000000000000001

/**
* Flag indicating whether an ndarray is column-major (Fortran-style) contiguous.
*
* ## Notes
*
* -   Column-major order indicates that the first ndarray index varies the fastest.
* -   Contiguous means that an ndarray is compatible with being stored in a single memory segment and that ndarray elements are adjacent to each other in memory.
* -   `strides` array is in reverse order to that of row-major order.
* -   An ndarray can be both row-major and column-major contiguous (e.g., if an ndarray is one-dimensional).
*/
#define STDLIB_NDARRAY_COLUMN_MAJOR_CONTIGUOUS_FLAG 0x0000000000000002

#endif // !STDLIB_NDARRAY_CTOR_MACROS_H
