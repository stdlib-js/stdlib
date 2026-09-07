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

#include "stdlib/number/float64/base/assert/is_almost_same_value.h"
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	const double a[] = {
		5.0,
		-2.0,
		0.0,
		0.0/0.0,
		1.0,
		1.0 + 2.220446049250313e-16
	};
	const double b[] = {
		5.0,
		2.0,
		-0.0,
		0.0/0.0,
		1.0 + 2.220446049250313e-16,
		1.0
	};
	const int32_t maxULP[] = {
		0,
		1,
		0,
		1,
		1,
		0
	};

	bool v;
	int i;
	for ( i = 0; i < 6; i++ ) {
		v = stdlib_base_float64_is_almost_same_value( a[ i ], b[ i ], maxULP[ i ] );
		printf( "Almost same value? %s\n", ( v ) ? "True" : "False" );
	}
}
