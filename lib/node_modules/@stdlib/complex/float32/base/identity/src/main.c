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

#include "stdlib/complex/float32/base/identity.h"
#include "stdlib/complex/float32/ctor.h"

/**
* Evaluates the identity function for a single-precision complex floating-point number.
*
* @param z       number
* @return        input value
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 3.0f, 3.0f );
* stdlib_complex64_t out = stdlib_base_complex64_identity( z );
*
* float re = stdlib_complex64_real( out );
* // returns 3.0f
*
* float im = stdlib_complex64_imag( out );
* // returns 3.0f
*/
stdlib_complex64_t stdlib_base_complex64_identity( const stdlib_complex64_t z ) {
	return z;
}
