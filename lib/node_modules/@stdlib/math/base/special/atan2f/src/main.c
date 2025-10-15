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
*
*
* ## Notice
*
* The original code, copyright and license are from [Go]{@link https://golang.org/src/math/atan2.go}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/

#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/number/float32/base/signbit.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/atanf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/pi.h"

/**
* Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)` as a single-precision floating-point number.
*
* @param y    `y` coordinate
* @param x    `x` coordinate
* @return      angle (in radians)
*
* @example
* float v = stdlib_base_atan2f( 2.0f, 2.0f ); // => stdlib_base_atanf( 1.0f )
* // returns ~0.785f
*/
float stdlib_base_atan2f( const float y, const float x ) {
	float q;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stdlib_base_is_infinitef( x ) ) {
		if ( x == STDLIB_CONSTANT_FLOAT32_PINF ) {
			if ( stdlib_base_is_infinitef( y ) ) {
				return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PI / 4.0f, y );
			}
			return stdlib_base_copysignf( 0.0f, y );
		}
		// Case: x is -Infinity
		if ( stdlib_base_is_infinitef( y ) ) {
			return stdlib_base_copysignf( 3.0f * STDLIB_CONSTANT_FLOAT32_PI / 4.0f, y );
		}
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PI, y );
	}
	if ( stdlib_base_is_infinitef( y ) ) {
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PI / 2.0f, y );
	}
	if ( y == 0.0f ) {
		if ( x >= 0.0f && !stdlib_base_float32_signbit( x ) ) {
			return stdlib_base_copysignf( 0.0f, y );
		}
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PI, y );
	}
	if ( x == 0.0f ) {
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PI / 2.0f, y );
	}
	q = stdlib_base_atanf( y / x );
	if ( x < 0.0f ) {
		if ( q <= 0.0f ) {
			return q + STDLIB_CONSTANT_FLOAT32_PI;
		}
		return q - STDLIB_CONSTANT_FLOAT32_PI;
	}
	return q;
}
