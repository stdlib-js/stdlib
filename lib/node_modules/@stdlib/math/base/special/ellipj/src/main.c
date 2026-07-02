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

#include "stdlib/math/base/special/sincos.h"
#include "stdlib/math/base/special/ellipk.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/cosh.h"
#include "stdlib/math/base/special/sinh.h"
#include "stdlib/math/base/special/tanh.h"
#include "stdlib/math/base/special/atan.h"
#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/math/base/special/cos.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/sqrt_eps.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/pi.h"
#include <stdbool.h>
#include <stdint.h>

/**
* Simultaneously computes the Jacobi elliptic functions sn, cn, and dn, and am.
*
* ## Notes
*
* -   Values are computed using the arithmetic-geometric from Abramowitz and Stegun 16.4.
* -   When m < 0 or m > 1, `sn`, `cn`, and `dn` are computed in terms of elliptic functions with 0 < m < 1 using the transformations from Abramowitz and Stegun 16.10 and 16.11, respectively. Thus the domain of m is any real number. When m < 0 or m > 1, `am` is not computed and will be returned as NaN.
* -   Values for small m (m < SQRT_EPS) are computed using the approximations of Abramowitz and Stegun 16.13. For each evaluation, the complete elliptic integral of the first kind, K(m), is computed in order to reduce the period and ensure valid output for all u.
* -   Values for m near unity (m > 1 - SQRT_EPS) are computed using the approximations of Abramowitz and Stegun 16.15. For each evaluation, the complete elliptic integral of the first kind, K(m), is computed in order to reduce the period and ensure valid output for all u.
*
* @param u         input value
* @param m         modulus `m`, equivalent to `k²`
* @param sn        destination for the sine amplitude
* @param cn        destination for the cosine amplitude
* @param dn        destination for the delta amplitude
* @param am        destination for the Jacobi amplitude
*
* @example
* double x = 0.3;
* double m = 0.5;
*
* double sn;
* double cn;
* double dn;
* double am;
* stdlib_base_ellipj( x, m, &sn, &cn, &dn, &am );
*/
void stdlib_base_ellipj( const double u, const double m, double* sn, double* cn, double* dn, double* am ) {
	double out[ 4 ];
	double ca[ 9 ];
	double sc[ 4 ];
	double dnDenom;
	double uK2cen;
	double k1inv;
	double sechu;
	double sinhu;
	double tanhu;
	bool NANFLG;
	double phi0;
	double phi1;
	double atmp;
	double gdu;
	double uK2;
	double uK4;
	int32_t N;
	double mu;
	double K2;
	double K4;
	double u0;
	double k;
	double s;
	double c;
	double f;
	double a;
	double b;
	bool FLG;

	if ( m < 0.0 ) {
		// A&S 16.10.1 for a negative parameter, mapping -m to 0 < mu < 1:
		mu = -m / ( 1.0 - m );
		k1inv = stdlib_base_sqrt( 1.0 - m );
		stdlib_base_ellipj( u * k1inv, mu, out, out+1, out+2, out+3 );
		*sn = ( out[ 0 ] / out[ 2 ] ) / k1inv;
		*cn = out[ 1 ] / out[ 2 ];
		*dn = 1.0 / out[ 2 ];
		*am = 0.0 / 0.0; // NaN
		return;
	} else if ( m > 1.0 ) {
		// A&S 16.11.1 for reciprocal parameter, mapping m > 1 to 0 < mu < 1:
		k = stdlib_base_sqrt( m );
		stdlib_base_ellipj( u * k, 1.0 / m, out, out+1, out+2, out+3 );
		*sn = out[ 0 ] / k;
		*cn = out[ 2 ];
		*dn = out[ 1 ];
		*am = 0.0 / 0.0; // NaN
		return;
	} else if ( m == 0.0 ) {
		// A&S table 16.6, limiting case m = 0: circular trigonometric functions:
		stdlib_base_sincos( u, sc, sc+1 );
		*sn = sc[ 0 ];
		*cn = sc[ 1 ];
		*dn = 1.0;
		*am = u;
		return;
	} else if ( m == 1.0 ) {
		// A&S table 16.6: limiting case m = 1: hyperbolic functions:
		*sn = stdlib_base_tanh( u );
		*cn = 1.0 / stdlib_base_cosh( u );
		*dn = *cn;
		*am = stdlib_base_atan( stdlib_base_sinh( u ) );
		return;
	} else if ( m < STDLIB_CONSTANT_FLOAT64_SQRT_EPS ) {
		// A&S 16.13.1 for small-u approximations. Additionally, compute K at extra cost in order to ensure returned values are correct outside the range [0, K]:
		K4 = 4.0 * stdlib_base_ellipk( m );
		u0 = stdlib_base_fmod( stdlib_base_fmod( u, K4 ) + K4, K4 );
		stdlib_base_sincos( u0, sc, sc+1 );
		s = sc[ 0 ];
		c = sc[ 1 ];
		f = 0.25 * m * ( u0 - ( s * c ) );
		*sn = s - ( f * c );
		*cn = c + ( f * s );
		*dn = 1.0 - ( 0.5 * m * s * s );
		*am = u - ( 0.25 * m * ( u - ( s * c ) ) );
		return;
	} else if ( m > 1.0 - STDLIB_CONSTANT_FLOAT64_SQRT_EPS ) {
		// A&S 16.15.1 - 16.15.4 for near-unity approximations. Additionally, compute K at extra cost so that we may reflect as needed to ensure the returned values are correct...

		// Reduce by the half-period 2K, centered about u = 0:
		K2 = stdlib_base_ellipk( m ) * 2.0;
		uK2cen = ( u / K2 ) + 0.5;
		uK2 = K2 * ( stdlib_base_fmod( uK2cen, 1.0 ) - 0.5 );

		// Flip sn and cn in this range to get the reflections correct. We must be careful about precisely reusing uK2cen in order to get the edge cases correct...
		uK4 = stdlib_base_fmod( uK2cen, 4.0 );
		FLG = ( uK4 >= 1.0 ) && ( uK4 < 2.0 );

		sinhu = stdlib_base_sinh( uK2 );
		sechu = 1.0 / stdlib_base_cosh( uK2 );
		tanhu = stdlib_base_tanh( uK2 );
		gdu = ( stdlib_base_floor( uK2cen ) * STDLIB_CONSTANT_FLOAT64_PI ) + stdlib_base_atan( sinhu );

		a = 0.25 * ( 1.0 - m );
		b = a * ( sinhu - ( uK2 * sechu ) );
		*sn = tanhu + ( b * sechu );
		*cn = sechu - ( b * tanhu );
		*dn = sechu + ( a * ( sinhu + ( uK2 * sechu ) ) * tanhu );
		*am = gdu + b;

		if ( FLG ) {
			*sn = -*sn;
			*cn = -*cn;
		}
		return;
	} else {
		// A&S 16.4.1. Compute using the arithmetic-geometric mean...
		a = 1.0;
		b = stdlib_base_sqrt( 1.0 - m );
		N = -1;
		NANFLG = false;
		do {
			N += 1;
			if ( N > 8 ) {
				// Warning: Overflow encountered in iteration. Returning NaN for all output values:
				NANFLG = true;
				*sn = 0.0 / 0.0; // NaN
				*cn = 0.0 / 0.0; // NaN
				*dn = 0.0 / 0.0; // NaN
				*am = 0.0 / 0.0; // NaN
				break;
			}
			atmp = ( a + b ) * 0.5;
			c = ( a - b ) * 0.5;
			b = stdlib_base_sqrt( a * b );
			a = atmp;
			ca[ N ] = c / a;
		} while ( ca[ N ] >= STDLIB_CONSTANT_FLOAT64_EPS );

		if ( !NANFLG ) {
			// A&S 16.4.3:
			phi1 = ( 1 << N ) * ( u * a );
			while ( N > 1 ) {
				N -= 1;
				phi1 = 0.5 * ( phi1 + stdlib_base_asin( ca[ N ] * stdlib_base_sin( phi1 ) ) );
			}
			phi0 = 0.5 * ( phi1 + stdlib_base_asin( ca[ 0 ] * stdlib_base_sin( phi1 ) ) );

			*am = phi0;
			stdlib_base_sincos( *am, sc, sc+1 );
			*sn = sc[ 0 ];
			*cn = sc[ 1 ];

			// When the denominator is small, switch to the definition of dn in terms of sn. Otherwise compute dn from the last two iterates:
			dnDenom = stdlib_base_cos( phi1 - phi0 );
			if ( stdlib_base_abs( dnDenom ) < 0.1 ) {
				*dn = stdlib_base_sqrt( 1.0 - ( m * (*sn) * (*sn) ) );
			} else {
				*dn = *cn / dnDenom;
			}
		}
		return;
	}
}
