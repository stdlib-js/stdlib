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

#include "stdlib/number/float16/base/from_word.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float16/base/to_float32.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	uint16_t word = 51648;

	stdlib_float16_t x;
	int i;
	for ( i = 0; i < 10; i++ ) {
		stdlib_base_float16_from_word( word+(uint16_t)(i*10), &x );
		printf( "word: %u => %f\n", word, stdlib_base_float16_to_float32( x ) );
	}
}
