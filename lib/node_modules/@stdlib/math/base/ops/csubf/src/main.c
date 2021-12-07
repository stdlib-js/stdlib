/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/base/ops/csubf.h"
#include <complex.h>

/**
* Subtracts two single-precision complex floating-point numbers.
*
* @param z1       input value
* @param z2       input value
* @return         result
*
* @example
* #include <complex.h>
*
* float complex z1 = 5.0f + 3.0f*I;
* float complex z2 = -2.0f + 1.0f*I;
*
* float complex out = stdlib_base_csubf( z1, z2 );
* // returns 7.0f+2.0f*I
*/
float complex stdlib_base_csubf( const float complex z1, const float complex z2 ) {
	return z1 - z2;
}
