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

#include "stdlib/math/base/special/lcm.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gcd.h"

/**
* Computes the least common multiple (lcm).
*
* @private
* @param a    integer
* @param b    integer
* @return     least common multiple
*
* @example
* double out = stdlib_base_lcm( 21.0, 6.0 );
* // returns 42.0
*/
double stdlib_base_lcm( const double a, const double b ) {
	double an;
	double bn;
	double d;

	if( a == 0.0 || b == 0.0 ) {
		return 0.0;
	}
	if ( a < 0.0 ) {
		an = -a;
	}
	else {
		an = a;
	}
	if ( b < 0.0 ) {
		bn = -b;
	}
	else {
		bn = b;
	}
	// Note: we rely on `gcd` to perform further argument validation...
	d = stdlib_base_gcd( an, bn );
	if ( stdlib_base_is_nan( d ) ) {
		return d;
	}
	return ( an / d ) * bn;
}
