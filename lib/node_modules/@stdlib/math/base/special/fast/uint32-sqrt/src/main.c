/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/fast/uint32_sqrt.h"
#include <stdint.h>

static const uint32_t BIT = 1073741824u;

/**
* Returns an integer square root.
*
* @param x    input value
* @return     integer square root
*
* @example
* uint32_t out = stdlib_base_fast_uint32_sqrt( 9 );
* // returns 3
*/
uint32_t stdlib_base_fast_uint32_sqrt( const uint32_t x ) {
	uint32_t root;
	uint32_t bit;
	uint32_t sum;
	uint32_t xc;
	
	xc = x;
	
	root = 0;
	bit = BIT;
	
	while ( bit > xc ) {
		bit >>= 2;
	}
	// Perform a digit-by-digit/abacus computation...
	while ( bit != 0 ) {
		sum = ( root + bit );
		root >>= 1;
		if ( xc >= sum ) {
			xc -= sum;
			root += bit;
		}
		bit >>= 2;
	}
	return root;
}
