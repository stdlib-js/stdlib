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

#include "stdlib/math/base/assert/is_composite.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
	const double x[] = { 0.0, 0.0/0.0, 1.0, -1.0, 4.0 };

	bool r;
	int i;
	for ( i = 0; i < 5; i++ ) {
		r = stdlib_base_is_composite( x[ i ] );
		printf( "Value: %lf. Is Composite? %s.\n", x[ i ], ( r ) ? "True" : "False" );
	}
}
