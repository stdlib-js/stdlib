/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/number/float64/base/set_high_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	uint32_t high[] = { 1074339512, 1074339513, 1074339514, 1074339515 };
	double x = 3.14;

	int i;
	for ( i = 0; i < 4; i++ ) {
		stdlib_base_float64_set_high_word( high[ i ], &x );
		printf( "high: %u => %lf\n", high[ i ], x );
	}
}
