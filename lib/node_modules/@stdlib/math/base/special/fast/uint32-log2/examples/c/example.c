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

#include "stdlib/math/base/special/fast/uint32_log2.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const uint32_t x[] = { 5, 7, 10, 22, 98 };

	uint32_t y;
	int i;
	for ( i = 0; i < 5; i++ ) {
		y = stdlib_base_fast_uint32_log2( x[ i ] );
		printf( "uint32_log2(%u) = %u\n", x[ i ], y );
	}
}
