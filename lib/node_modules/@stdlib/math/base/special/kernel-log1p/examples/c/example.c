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

#include "stdlib/math/base/special/kernel_log1p.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 0.7071, 0.7856, 0.8642, 0.9428, 1.0213, 1.0999, 1.1785, 1.2570, 1.3356, 1.4142 };

	double out;
	int i;
	for ( i = 0; i < 10; i++ ) {
		out = stdlib_base_kernel_log1p( x[ i ] );
		printf ( "x[ i ]: %lf, out: %lf\n", x[ i ], out );
	}
}
