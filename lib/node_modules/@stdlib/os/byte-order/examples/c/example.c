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
#include <stdio.h>

int main( void ) {
#if defined(STDLIB_OS_BYTE_ORDER)
#if STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN
	printf( "Platform is little-endian...\n" );
#elif STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN
	printf( "Platform is big-endian...\n" );
#else
	printf( "Platform endianness is either mixed-endian or unknown...\n" )
#endif
#endif
}
