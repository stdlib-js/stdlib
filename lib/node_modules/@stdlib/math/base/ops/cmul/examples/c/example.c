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

#include "stdlib/math/base/ops/cmul.h"
#include <stdio.h>
#include <complex.h>

int main() {
	// cppcheck-suppress nanInArithmeticExpression
	double complex x[] = { 3.14+1.5*I, -3.14-1.5*I, 0.0+0.0*I, 0.0/0.0+0.0/0.0*I };

	double complex v;
	double complex y;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		y = stdlib_base_cmul( v, v );
		printf( "z = %lf + %lfi\ncmul(z, z) = %lf + %lfi\n", creal( v ), cimag( v ), creal( y ), cimag( y ) );
	}
}
