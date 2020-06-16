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

#include "stdlib/blas/ext/base/dcusum.h"
#include "stdlib/blas/ext/base/dcusumkbn.h"
#include <stdint.h>

/**
* Computes the cumulative sum of double-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_dcusum( const int64_t N, const double sum, const double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	stdlib_strided_dcusumkbn( N, sum, X, strideX, Y, strideY );
}
