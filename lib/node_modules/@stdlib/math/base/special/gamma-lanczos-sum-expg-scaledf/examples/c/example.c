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

#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaledf.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 4.0f, -1.5f, -0.5f, 0.5f };

	float y;
	int i;
	for ( i = 0; i < 4; i++ ) {
		y = stdlib_base_gamma_lanczos_sum_expg_scaledf( x[ i ] );
		printf( "gamma_lanczos_sum_expg_scaledf(%f) = %f\n", x[ i ], y );
	}
}
