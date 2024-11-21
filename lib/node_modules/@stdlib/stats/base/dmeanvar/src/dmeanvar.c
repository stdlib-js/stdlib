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

#include "stdlib/stats/base/dmeanvar.h"
#include "stdlib/stats/base/dmeanvarpn.h"
#include <stdint.h>

/**
* Computes the mean and variance of a double-precision floating-point strided array.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     X stride length
* @param Out         output array
* @param strideOut   Out stride length
*/
void stdlib_strided_dmeanvar( const int64_t N, const double correction, const double *X, const int64_t strideX, double *Out, const int64_t strideOut ) {
	stdlib_strided_dmeanvarpn( N, correction, X, strideX, Out, strideOut );
}
