/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

#include "stdlib/blas/base/ddot.h"
#include "stdlib/blas/base/ddot_cblas.h"

/**
* Computes the dot product of two double-precision floating-point vectors.
*
* @param N        number of values over which to compute the dot product
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @returns        the dot product of X and Y
*/
double c_ddot( const int N, const double *X, const int strideX, const double *Y, const int strideY ) {
	return cblas_ddot( N, X, strideX, Y, strideY );
}
