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

#include "stdlib/math/base/special/cbrt.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/from_words.h"
#include <stdint.h>

// 0x80000000 = 2147483648 => 1 00000000000 00000000000000000000
static const uint32_t SIGN_MASK = 2147483648;

// 0x7fffffff = 2147483647 => 0 11111111111 11111111111111111111
static const uint32_t ABS_MASK = 2147483647;

// 11111111111111111111111111111111 11000000000000000000000000000000
static const uint64_t MASK = 0xffffffffc0000000ULL;

// 2**54
static const double TWO_54 = 18014398509481984.0;

// B1 = (1023-1023/3-0.03306235651)*2**20
static const uint32_t B1 = 715094163;

// B2 = (1023-1023/3-54/3-0.03306235651)*2**20
static const uint32_t B2 = 696219795;

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000
static const uint32_t FLOAT64_SMALLEST_NORMAL_HIGH_WORD = 1048576;

// |1/cbrt(x) - p(x)| < 2**-23.5 (~[-7.93e-8, 7.929e-8]).
static const double P0 = 1.87595182427177009643;   // 0x3ffe03e6, 0x0f61e692
static const double P1 = -1.88497979543377169875;  // 0xbffe28e0, 0x92f02420
static const double P2 = 1.621429720105354466140;  // 0x3ff9f160, 0x4a49d6c2
static const double P3 = -0.758397934778766047437; // 0xbfe844cb, 0xbee751d9
static const double P4 = 0.145996192886612446982;  // 0x3fc2b000, 0xd4e4edd7

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @returns    evaluated polynomial
*/
static double polval( const double x ) {
	if ( x == 0.0 ) {
		return P0;
	}
	return P0 + (x * (P1 + (x * (P2 + (x * (P3 + (x * P4)))))));
}

/**
* Computes the cube root of a double-precision floating-point number.
*
* ## Method
*
* 1.  Rough cube root to \\( 5 \\) bits:
*
*     ```tex
*     \sqrt\[3\]{2^e (1+m)} \approx 2^(e/3) \biggl(1 + \frac{(e \mathrm{mod}\ 3) + m}{3}\biggr)
*     ```
*
*     where \\( e \\) is a nonnegative integer, \\( m \\) is real and in \\( \[0, 1) \\), and \\( / \\) and \\( \mathrm{mod} \\) are integer division and modulus with rounding toward \\( -\infty \\).
*
*     The RHS is always greater than or equal to the LHS and has a maximum relative error of about \\( 1 \\) in \\( 16 \\).
*
*     Adding a bias of \\( -0.03306235651 \\) to the \\( (e \mathrm{mod} 3+ m )/ 3 \\) term reduces the error to about \\( 1 \\) in \\( 32 \\).
*
*     With the IEEE floating point representation, for finite positive normal values, ordinary integer division of the value in bits magically gives almost exactly the RHS of the above provided we first subtract the exponent bias (\\( 1023 \\) for doubles) and later add it back.
*
*     We do the subtraction virtually to keep \\( e \geq 0 \\) so that ordinary integer division rounds toward \\( -\infty \\); this is also efficient.
*
* 2.  New cube root to \\( 23 \\) bits:
*
*     ```tex
*     \sqrt[3]{x} = t \cdot \sqrt\[3\]{x/t^3} \approx t \mathrm{P}(t^3/x)
*     ```
*
*     where \\( \mathrm{P}(r) \\) is a polynomial of degree \\( 4 \\) that approximates \\( 1 / \sqrt\[3\]{r} \\) to within \\( 2^{-23.5} \\) when \\( |r - 1| < 1/10 \\).
*
*     The rough approximation has produced \\( t \\) such than \\( |t/sqrt\[3\]{x} - 1| \lesssim 1/32 \\), and cubing this gives us bounds for \\( r = t^3/x \\).
*
* 3.  Round \\( t \\) away from \\( 0 \\) to \\( 23 \\) bits (sloppily except for ensuring that the result is larger in magnitude than \\( \sqrt\[3\]{x} \\) but not much more than \\( 2 \\) 23-bit ulps larger).
*
*     With rounding toward zero, the error bound would be \\( \approx 5/6 \\) instead of \\( \approx 4/6 \\).
*
*     With a maximum error of \\( 2 \\) 23-bit ulps in the rounded \\( t \\), the infinite-precision error in the Newton approximation barely affects the third digit in the final error \\( 0.667 \\); the error in the rounded \\( t \\) can be up to about \\( 3 \\) 23-bit ulps before the final error is larger than \\( 0.667 \\) ulps.
*
* 4.  Perform one step of a Newton iteration to get \\( 53 \\) bits with an error of \\( < 0.667 \\) ulps.
*
* @param x       number
* @return        cube root
*
* @example
* double y = stdlib_base_cbrt( 27.0 );
* // returns 3.0
*/
double stdlib_base_cbrt( const double x ) {
	uint32_t sgn;
	uint32_t hx;
	uint32_t hw;
	double t;
	double r;
	double s;
	double w;

	union {
		double value;
		uint64_t bits;
	} u;

	if (
		x == 0.0 || // handles +-0
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_infinite( x )
	) {
		return x;
	}
	stdlib_base_float64_get_high_word( x, &hx );
	sgn = hx & SIGN_MASK;
	hx &= ABS_MASK;

	// Rough cbrt...
	if ( hx < FLOAT64_SMALLEST_NORMAL_HIGH_WORD ) {
		t = TWO_54 * x;
		stdlib_base_float64_get_high_word( t, &hw );
		hw = ( (hw&ABS_MASK)/3 ) + B2;
		stdlib_base_float64_from_words( sgn|hw, 0, &t );
	} else {
		t = 0.0;
		hw = ( hx/3 ) + B1;
		stdlib_base_float64_set_high_word( sgn|hw, &t );
	}
	// New cbrt...
	r = ( t*t ) * ( t/x );
	t *= polval( r );

	// Round `t` away from `0` to `23` bits...
	u.value = t;
	u.bits = (u.bits+0x80000000)&MASK;
	t = u.value;

	// Newton iteration...
	s = t * t;             // `t*t` is exact
	r = x / s;             // error `<= 0.5` ulps; `|r| < |t|`
	w = t + t;             // `t+t` is exact
	r = ( r-t ) / ( w+r ); // `r-t` is exact; `w+r ~= 3*t`
	t += t * r;            // error `<= 0.5 + 0.5/3 + eps`

	return t;
}
