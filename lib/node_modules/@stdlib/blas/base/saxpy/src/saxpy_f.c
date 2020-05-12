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

#include "stdlib/blas/base/saxpy.h"
#include "stdlib/blas/base/saxpy_fortran.h"

/**
* Multiplies a vector `X` by a constant and adds the result to `Y`.
*
* Arguments are passed by reference to a Fortran subroutine implementing `saxpy`.
*
* @param N        number of elements
* @param alpha    scalar
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
*/
void c_saxpy( const int N, const float alpha, const float *X, const int strideX, float *Y, const int strideY ) {
	saxpy( &N, &alpha, X, &strideX, Y, &strideY );
}
