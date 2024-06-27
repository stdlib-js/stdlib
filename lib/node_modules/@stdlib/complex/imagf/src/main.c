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

#include "stdlib/complex/imagf.h"
#include "stdlib/complex/float32/ctor.h"

/**
* Returns the imaginary component of a single-precision complex floating-point number.
*
* @param z     single-precision complex floating-point number
* @return      imaginary component
*
* @example
* #include "stdlib/complex/float32/ctor.h"
*
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );
*
* // ...
*
* float im = stdlib_imagf( z );
* // returns 2.0f
*/
float stdlib_imagf( const stdlib_complex64_t z ) {
	stdlib_complex64_parts_t v;
	v.value = z; // cppcheck-suppress unreadVariable
	return v.parts[ 1 ];
}
