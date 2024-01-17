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

#include "stdlib/complex/base/assert/is_same_value.h"
#include "stdlib/number/float64/base/assert/is_same_value.h"
#include "stdlib/complex/reim.h"
#include "stdlib/complex/float64.h"
#include <stdbool.h>

/**
* Tests whether two double-precision complex floating-point numbers are the same value.
*
* @param z1    first double-precision complex floating-point number
* @param z2    second double-precision complex floating-point number
* @return      boolean indicating if both complex numbers are the same value
*
* @example
* #include "stdlib/complex/float64.h"
* #include <stdbool.h>
*
* stdlib_complex128_t z1 = stdlib_complex128( 5.0, 2.0 );
* stdlib_complex128_t z2 = stdlib_complex128( 5.0, 2.0 );
*
* bool v = stdlib_base_complex128_is_same_value( z1, z2 );
*/
bool stdlib_base_complex128_is_same_value( const stdlib_complex128_t z1, const stdlib_complex128_t z2 ) {
	double re1;
	double re2;
	double im1;
	double im2;
	stdlib_reim( z1, &re1, &im1 );
	stdlib_reim( z2, &re2, &im2 );
	return (
		stdlib_base_float64_is_same_value( re1, re2 ) &&
		stdlib_base_float64_is_same_value( im1, im2 )
	);
}
