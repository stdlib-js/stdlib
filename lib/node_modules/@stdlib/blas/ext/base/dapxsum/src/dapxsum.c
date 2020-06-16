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

#include "stdlib/blas/ext/base/dapxsum.h"
#include "stdlib/blas/ext/base/dapxsumkbn.h"
#include <stdint.h>

/**
* Adds a constant to each double-precision floating-point strided array element and computes the sum.
*
* @param N       number of indexed elements
* @param alpha   constant
* @param X       input array
* @param stride  stride length
* @return        output value
*/
double stdlib_strided_dapxsum( const int64_t N, const double alpha, const double *X, const int64_t stride ) {
	return stdlib_strided_dapxsumkbn( N, alpha, X, stride );
}
