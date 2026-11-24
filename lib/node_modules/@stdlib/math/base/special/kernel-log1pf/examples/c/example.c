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

#include "stdlib/math/base/special/kernel_log1pf.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 0.7071f, 0.7856f, 0.8642f, 0.9428f, 1.0213f, 1.0999f, 1.1785f, 1.2570f, 1.3356f, 1.4142f };

	float out;
	int i;
	for ( i = 0; i < 10; i++ ) {
		out = stdlib_base_kernel_log1pf( x[ i ] );
		printf( "kernelLog1pf(%f) = %f\n", x[ i ], out );
	}
}
