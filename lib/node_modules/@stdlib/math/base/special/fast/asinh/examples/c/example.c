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

#include "stdlib/math/base/special/fast/asinh.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_fast_asinh( x[ i ] );
		printf( "asinh(%lf) = %lf\n", x[ i ], v );
	}
}
