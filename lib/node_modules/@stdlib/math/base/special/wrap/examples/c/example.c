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

#include "stdlib/math/base/special/wrap.h"
#include <stdio.h>

int main( void ) {
	const double min[] = { 0.0, 0.0, 0.0, 0.0, -3.14 };
	const double max[] = { 5.0, 5.0, 5.0, 5.0, -0.0 };
	const double v[] = { 3.14, -3.14, 10.0, -0.0, 0.0 };

	double out;
	int i;
	for ( i = 0; i < 5; i++ ) {
		out = stdlib_base_wrap( v[i], min[i], max[i] );
		printf( "wrap(%lf,%lf,%lf) => %lf\n", v[i], min[i], max[i], out );
	}
}
