/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/sincosdf.h"
#include "stdlib/math/base/special/sindf.h"
#include "stdlib/math/base/special/cosdf.h"

/**
* Simultaneously computes the sine and cosine of a single-precision floating-point number (in degrees).
*
* @param x         input value (in degrees)
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*/
void stdlib_base_sincosdf( const float x, float* sine, float* cosine ) {
	*sine = stdlib_base_sindf( x );
	*cosine = stdlib_base_cosdf( x );
	return;
}
