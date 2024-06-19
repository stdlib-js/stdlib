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

#include "stdlib/math/base/special/lcm.h"
#include <stdio.h>

int main( void ) {
	const double a[] = { 24.0, 32.0, 48.0, 116.0, 33.0 };
	const double b[] = { 12.0, 6.0, 15.0, 52.0, 22.0 };

	double out;
	int i;
	for ( i = 0; i < 5; i++ ) {
		out = stdlib_base_lcm( a[ i ], b[ i ] );
		printf( "lcm(%lf, %lf) = %lf\n", a[ i ], b[ i ], out );
	}
}
