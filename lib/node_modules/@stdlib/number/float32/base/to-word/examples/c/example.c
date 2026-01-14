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

#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

	uint32_t word;
	int i;
	for ( i = 0; i < 4; i++ ) {
		stdlib_base_float32_to_word( x[ i ], &word );
		printf( "%f => word: %u\n", x[ i ], word );
	}
}
