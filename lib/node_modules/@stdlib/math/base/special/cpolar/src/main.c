/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/cpolar.h"
#include "stdlib/math/base/special/cphase.h"
#include "stdlib/math/base/special/cabs.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"

/**
* Computes the absolute value and the phase of a complex double-precision complex floating-point number.
*
* @param z       input value
* @param cabs    destination for absolute value
* @param cphase  destination for phase value
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );
* double cabs;
* double cphase;
* stdlib_base_cpolar( z, &cabs, &cphase );
*/
void stdlib_base_cpolar( const stdlib_complex128_t z, double *cabs, double *cphase ) {
	*cabs = stdlib_base_cabs( z );
	*cphase = stdlib_base_cphase( z );
	return;
}
