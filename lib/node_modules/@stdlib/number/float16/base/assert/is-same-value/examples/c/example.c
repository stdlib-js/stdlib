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

#include "stdlib/number/float16/base/assert/is_same_value.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float32/base/to_float16.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
	const float a[] = {
		5.0f,
		-2.0f,
		0.0f,
		0.0f/0.0f
	};
	const float b[] = {
		5.0f,
		2.0f,
		-0.0f,
		0.0f/0.0f
	};

	stdlib_float16_t x;
	stdlib_float16_t y;
	bool v;
	int i;
	for ( i = 0; i < 4; i++ ) {
		x = stdlib_base_float32_to_float16( a[ i ] );
		y = stdlib_base_float32_to_float16( b[ i ] );
		v = stdlib_base_float16_is_same_value( x, y );
		printf( "Same value? %s\n", ( v ) ? "True" : "False" );
	}
}
