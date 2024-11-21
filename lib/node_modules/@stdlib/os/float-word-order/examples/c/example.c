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

#include "stdlib/os/byte_order.h"
#include "stdlib/os/float_word_order.h"
#include <stdio.h>

int main( void ) {
#if defined(STDLIB_OS_FLOAT_WORD_ORDER)
#if STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN
	printf( "Least significant word comes first...\n" );
#elif STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN
	printf( "Most significant word comes first...\n" );
#else
	printf( "Platform float word order is unknown...\n" )
#endif
#endif
}
