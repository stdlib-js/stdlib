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

#include "stdlib/number/float32/base/from_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	uint32_t word = 1078523331;

	float x;
	int i;
	for ( i = 0; i < 10; i++ ) {
		stdlib_base_float32_from_word( word+(uint32_t)(i*10), &x );
		printf( "word: %u => %f\n", word, x );
	}
}
