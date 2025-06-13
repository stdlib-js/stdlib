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

#include "stdlib/math/base/special/ellipj.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	double sn;
	double cn;
	double dn;
	double am;
	double x;
	int i;

	for ( i = 0; i < 100; i++ ) {
		x = 2.0 * ( (double)rand() / (double)RAND_MAX );
		stdlib_base_ellipj( x, 0.7, &sn, &cn, &dn, &am );
		printf( "x: %lf, m: %lf => sn: %lf, cn: %lf, dn: %lf, am: %lf\n", x, 0.7, sn, cn, dn, am );
	}
}
