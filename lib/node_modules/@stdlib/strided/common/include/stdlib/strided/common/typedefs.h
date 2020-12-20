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
* Header file containing strided array type definitions.
*/
#ifndef STDLIB_STRIDED_COMMON_TYPEDEFS_H
#define STDLIB_STRIDED_COMMON_TYPEDEFS_H

// Note: keep project includes in alphabetical order...
#include "nullary_typedefs.h"
#include "quaternary_typedefs.h"
#include "quinary_typedefs.h"
#include "ternary_typedefs.h"

// #include "casting.h" // FIXME

#include <stdint.h>

// TODO: why are these functions needed? And how would they be used? When would we be concerned with casting for strided array functions? I suppose if provided doubles and "unsafe" casting is allowed, then we could cast double-precision output to `float32` if provided a `float32` output array. Or, if only "same_kind" casts are allowed, then if provided integer arrays, would not be able to invoke a callback which expects doubles. It seems to me that casting is more applicable outside of element-wise interfaces (e.g., when have two arrays of different types and need to figure out a common type for performing operations and for saving the results). ...Another use case is suppose I provide two `float32` arrays, but my add-on does not have a function with a corresponding type signature. Based on `casting`, we could try to find a "cast-compatible" interface (e.g., an interface which accepts `float64` arrays). I suppose the benefit here is, rather than have to spell out individual interfaces, we could provide a few known and then let casting rules handle "unknown" argument types. For type resolution in NumPy, see <https://github.com/numpy/numpy/blob/7e9d603664edc756f555fecf8649bf888a46d47c/numpy/core/src/umath/ufunc_type_resolution.c>.

/**
* Determines the input and output data types, based on operands provided to a generic strided array function.
*
* @param obj       strided array function interface
* @param operands  array of strided array "operands"
* @param types     array of "type" numbers corresponding to strided array function signatures
* @param casting   casting mode (as enumerated elsewhere)
* @param out       output array containing pointers to resolved data types for both inputs and outputs
* @return          an integer indicating success (`0`), failure (`-1`), or not implemented (`-2`)
*/
// typedef int8_t TypeResolutionFcn( struct StridedFunctionObject *obj, uint8_t *operands[], uint8_t *types, enum STDLIB_STRIDED_CASTING casting, uint8_t *out[] ); // FIXME

/**
* Resolves a low-level strided array function and associated function "data", based on an array of input and output data types.
*
* @param obj     strided array function object
* @param dtypes  array containing pointers (FIXME?????? pointers? Maybe this is obsolete due to use of ndarray dtypes enum) to resolved data types for both inputs and outputs
* @param fcn     resolved low-level strided array function
* @param data    associated function "data" to be provided to the low-level strided array function upon invocation
* @return        an integer indicating success (`0`) or failure (`-1`)
*/
// typedef int8_t StridedArrayFcnResolutionFcn( struct StridedFunctionObject *obj, uint8_t *dtypes[], StridedArrayFcn *fcn, void *data[] );

#endif // !STDLIB_STRIDED_COMMON_TYPEDEFS_H
