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

#include "stdlib/blas/ext/base/scusum.h"
#include "stdlib/blas/ext/base/scusumkbn.h"
#include <stdint.h>

/**
* Computes the cumulative sum of single-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_scusum( const int64_t N, const float sum, const float *X, const int64_t strideX, float *Y, const int64_t strideY ) {
	stdlib_strided_scusumkbn( N, sum, X, strideX, Y, strideY );
}
