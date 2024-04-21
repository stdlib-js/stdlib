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

#include "stdlib/blas/base/idamax.h"
#include "stdlib/blas/base/idamax_fortran.h"

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         index value
*/
int c_idamax( const int N, const double *X, const int strideX ) {
	int idx;
	idamaxsub( &N, X, &strideX, &idx );
	return idx - 1;
}
