/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/sdsapxsum.h"
#include "stdlib/blas/ext/base/sdsapxsumpw.h"
#include <stdint.h>

/**
* Adds a constant to each single-precision floating-point strided array element and computes the sum using extended accumulation and returning an extended precision result.
*
* @param N       number of indexed elements
* @param alpha   constant
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_sdsapxsum( const int64_t N, const float alpha, const float *X, const int64_t stride ) {
	return stdlib_strided_sdsapxsumpw( N, alpha, X, stride );
}
