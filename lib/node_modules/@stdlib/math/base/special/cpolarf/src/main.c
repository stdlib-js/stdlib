/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/math/base/special/cpolarf.h"
#include "stdlib/math/base/special/cphasef.h"
#include "stdlib/math/base/special/cabsf.h"
#include "stdlib/complex/float32/ctor.h"

/**
* Computes the absolute value and the phase of a complex single-precision complex floating-point number.
*
* @param z        input value
* @param cabsf    destination for the absolute value
* @param cphasef  destination for the phase value
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 3.0f );
* float cabsf;
* float cphasef;
* stdlib_base_cpolarf( z, &cabsf, &cphasef );
*/
void stdlib_base_cpolarf( const stdlib_complex64_t z, float *cabsf, float *cphasef ) {
	*cabsf = stdlib_base_cabsf( z );
	*cphasef = stdlib_base_cphasef( z );
	return;
}
