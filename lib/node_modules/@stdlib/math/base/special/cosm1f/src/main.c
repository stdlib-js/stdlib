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

#include "stdlib/math/base/special/cosm1f.h"
#include "stdlib/math/base/special/cosm1.h"

/**
* Computes the cosine of a single-precision floating-point number minus one.
*
* @param x    input value (in radians)
* @return     cosine minus one
*
* @example
* float y = stdlib_base_cosm1f( 0.0f );
* // returns 0.0f
*/
float stdlib_base_cosm1f( const float x ) {
	// TODO: Replace with a specific implementation for single-precision when available
	return (float)stdlib_base_cosm1( x );
}
