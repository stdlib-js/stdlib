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

#include "stdlib/math/base/assert/is_odd.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
	const double x[] = { 5.0, -5.0, 3.14, -3.14, 0.0, 0.0/0.0 };

	bool b;
	int i;
	for ( i = 0; i < 6; i++ ) {
		b = stdlib_base_is_odd( x[ i ] );
		printf( "Value: %lf. Is Odd? %s.\n", x[ i ], ( b ) ? "True" : "False" );
	}
}
