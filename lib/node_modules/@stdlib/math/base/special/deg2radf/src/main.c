/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/base/special/deg2radf.h"

// π / 180.0
static const float PI_DIV_180 = 1.7453292519943295e-2f;

/**
* Converts an angle from degrees to radians (single-precision).
*
* @param x       angle in degrees
* @return        angle in radians
*
* @example
* float y = stdlib_base_deg2radf( 90.0f );
* // returns ~1.571f
*/
float stdlib_base_deg2radf( const float x ) {
	return x * PI_DIV_180;
}
