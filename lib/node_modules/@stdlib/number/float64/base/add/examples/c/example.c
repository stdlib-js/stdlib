/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/number/float64/base/add.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };
	const double y[] = { 3.14, -3.14, -0.0, 0.0/0.0 };

	double z;
	int i;
	for ( i = 0; i < 4; i++ ) {
		z = stdlib_base_float64_add( x[ i ], y[ i ] );
		printf( "%lf + %lf = %lf\n", x[ i ], y[ i ], z );
	}
}
