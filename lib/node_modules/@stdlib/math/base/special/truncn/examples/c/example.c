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

#include "stdlib/math/base/special/truncn.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 3.141592653589793, -3.141592653589793, 2.731, 3.55555 };

	double y;
	int i;
	for ( i = 0; i < 4; i++ ) {
		y = stdlib_base_truncn( x[ i ], -2 );
		printf( "truncn(%lf) = %lf\n", x[ i ], y );
	}
}
