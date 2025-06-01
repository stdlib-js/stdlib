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

#include "stdlib/math/base/special/rempio2f.h"
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

int main( void ) {
	const float x[] = { 0.0f, 1.0f, 4.0f, 128.0f };

	double rem;
	int32_t n;
	int i;
	for ( i = 0; i < 4; i++ ) {
		n = stdlib_base_rempio2f( x[ i ], &rem );
		printf( "%f - %"PRId32"π/2 = %lf\n", x[ i ], n, rem );
	}
}
