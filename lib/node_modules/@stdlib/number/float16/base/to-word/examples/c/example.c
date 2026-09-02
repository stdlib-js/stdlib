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

#include "stdlib/number/float64/base/to_float16.h"
#include "stdlib/number/float16/base/to_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

	stdlib_float16_t v;
	uint16_t word;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = stdlib_base_float64_to_float16( x[ i ] );
		stdlib_base_float16_to_word( v, &word );
		printf( "%lf => word: %u\n", x[ i ], word );
	}
}
