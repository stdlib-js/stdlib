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

#include "stdlib/math/base/special/erfcx.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 0.0, 0.22, 0.44, 0.67, 0.89, 1.11, 1.33, 1.56, 1.78, 2.0 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_erfcx( x[ i ] );
		printf( "x: %lf, erfcx(x): %lf\n", x[ i ], v );
	}
}
