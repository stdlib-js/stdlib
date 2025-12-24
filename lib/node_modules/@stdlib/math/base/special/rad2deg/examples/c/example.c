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

#include "stdlib/math/base/special/rad2deg.h"
#include "stdlib/constants/float64/two_pi.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	double x;
	double d;
	int i;

	for ( i = 0; i < 100; i++ ) {
		x = (double)rand() / (double)RAND_MAX * STDLIB_CONSTANT_FLOAT64_TWO_PI;
		d = stdlib_base_rad2deg( x );
		printf( "radians: %lf => degrees: %lf\n", x, d );
	}
}
