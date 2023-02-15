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

#include "stdlib/math/base/ops/cnegf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"

/**
* Negates a single-precision complex floating-point number.
*
* @param z        input value
* @return         result
*
* @example
* #include "stdlib/complex/float32.h"
* #include "stdlib/complex/realf.h"
* #include "stdlib/complex/imagf.h"
*
* stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );
* stdlib_complex64_t out = stdlib_base_cnegf( z );
*
* float re = stdlib_realf( out );
* // returns -3.0f
*
* float im = stdlib_imagf( out );
* // returns 2.0f
*/
stdlib_complex64_t stdlib_base_cnegf( const stdlib_complex64_t z ) {
	float re;
	float im;

	stdlib_reimf( z, &re, &im );

	return stdlib_complex64( -re, -im );
}
