/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/number/float64/base/exponent.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	double x[] = { 4.0, 0.0, -0.0, 1.0, -1.0, 3.14, -3.14, 1.0e308, -1.0e308, 1.0/0.0, -1.0/0.0, 0.0/0.0 };

	int32_t out;
	int i;
	for ( i = 0; i < 12; i++ ) {
		out = stdlib_base_float64_exponent( x[ i ] );
		printf( "%lf => out: %" PRId32 "\n", x[ i ], out );
	}
}
