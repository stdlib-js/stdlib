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

#include "stdlib/math/base/special/ellipk.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	double m;
	double v;
	int i;

	for ( i = 0; i < 100; i++ ) {
		m = -1.0 + ( ( (double)rand() / (double)RAND_MAX ) * 2.0 );
		v = stdlib_base_ellipk( m );
		printf( "ellipk(%lf) = %lf\n", m, v );
	}
}
