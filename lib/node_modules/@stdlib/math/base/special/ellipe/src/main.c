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
*
*
* ## Notice
*
* The original Julia code and copyright notice are from the [Julia library]{@link https://github.com/JuliaMath/SpecialFunctions.jl/blob/master/src/ellip.jl}. The implementation has been modified according to project conventions.
*
* ```text
* The MIT License (MIT)
*
* Copyright (c) 2017 Jeff Bezanson, Stefan Karpinski, Viral B. Shah, and others:
*
* https://github.com/JuliaMath/SpecialFunctions.jl/graphs/contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* ```
*/

#include "stdlib/math/base/special/ellipe.h"
#include "stdlib/math/base/special/ellipk.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/half_pi.h"
#include <stdint.h>

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: poly_p1

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
* @return     evaluated polynomial
*/
static double poly_p1( const double x ) {
	return 1.5509733517804722 + (x * (-0.4003010201031985 + (x * (-0.07849861944294194 + (x * (-0.034318853117591995 + (x * (-0.0197180433173655 + (x * (-0.01305950773199331 + (x * (-0.009442372874146548 + (x * (-0.007246728512402157 + (x * (-0.00580742401295609 + (x * -0.004809187786009338)))))))))))))))));
}

// END: poly_p1

// BEGIN: poly_p2

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
* @return     evaluated polynomial
*/
static double poly_p2( const double x ) {
	return 1.5101218320928198 + (x * (-0.41711633390586755 + (x * (-0.09012382040477457 + (x * (-0.04372994401908431 + (x * (-0.027965493064761784 + (x * (-0.020644781177568104 + (x * (-0.016650786739707237 + (x * (-0.01426196082884252 + (x * (-0.012759847429264804 + (x * (-0.011799303775587354 + (x * -0.011197445703074968)))))))))))))))))));
}

// END: poly_p2

// BEGIN: poly_p3

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
* @return     evaluated polynomial
*/
static double poly_p3( const double x ) {
	return 1.4674622093394272 + (x * (-0.43657629094633776 + (x * (-0.10515555766694255 + (x * (-0.05737184359324173 + (x * (-0.04139162772734022 + (x * (-0.03452772850528084 + (x * (-0.031495443512532785 + (x * (-0.030527000890325277 + (x * (-0.0309169840192389 + (x * (-0.03237139531475812 + (x * -0.03478996038640416)))))))))))))))))));
}

// END: poly_p3

// BEGIN: poly_p4

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
* @return     evaluated polynomial
*/
static double poly_p4( const double x ) {
	return 1.4226911334908792 + (x * (-0.4595135196210487 + (x * (-0.12525053982206188 + (x * (-0.07813854509440948 + (x * (-0.06471427847205 + (x * (-0.06208433913173031 + (x * (-0.06519703281557247 + (x * (-0.07279389536257878 + (x * (-0.084959075171781 + (x * (-0.102539850131046 + (x * (-0.12705358515769605 + (x * -0.1607911206912746)))))))))))))))))))));
}

// END: poly_p4

// BEGIN: poly_p5

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
* @return     evaluated polynomial
*/
static double poly_p5( const double x ) {
	return 1.3754019718711163 + (x * (-0.4872021832731848 + (x * (-0.15331170134854022 + (x * (-0.11184944491702783 + (x * (-0.10884095252313576 + (x * (-0.12295422312026907 + (x * (-0.15221716396203505 + (x * (-0.20049532364269734 + (x * (-0.27617433306775174 + (x * (-0.39351311430437586 + (x * (-0.5757544060278792 + (x * (-0.8605232357272398 + (x * -1.3088332057585401)))))))))))))))))))))));
}

// END: poly_p5

// BEGIN: poly_p6

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
* @return     evaluated polynomial
*/
static double poly_p6( const double x ) {
	return 1.3250244979582302 + (x * (-0.5217276475575667 + (x * (-0.19490643048212622 + (x * (-0.17162372682201127 + (x * (-0.20275465292641914 + (x * (-0.27879895311853475 + (x * (-0.42069845728100574 + (x * (-0.675948400853106 + (x * (-1.1363431218392293 + (x * (-1.9767211439543984 + (x * (-3.5316967730957227 + (x * (-6.446753640156048 + (x * -11.97703130208884)))))))))))))))))))))));
}

// END: poly_p6

// BEGIN: poly_p7

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
* @return     evaluated polynomial
*/
static double poly_p7( const double x ) {
	return 1.2707074796501499 + (x * (-0.5668391682878666 + (x * (-0.2621607934324926 + (x * (-0.2922441735330774 + (x * (-0.4403978408504232 + (x * (-0.7749476413813975 + (x * (-1.498870837987561 + (x * (-3.089708310445187 + (x * (-6.6675959033810015 + (x * (-14.89436036517319 + (x * (-34.18120574251449 + (x * (-80.15895841905397 + (x * (-191.34894807629848 + (x * (-463.5938853480342 + (x * -1137.38082216936)))))))))))))))))))))))))));
}

// END: poly_p7

// BEGIN: poly_p8

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
* @return     evaluated polynomial
*/
static double poly_p8( const double x ) {
	return 1.2110560275684594 + (x * (-0.6303064132874558 + (x * (-0.38716640952066916 + (x * (-0.5922782353119346 + (x * (-1.23755558451305 + (x * (-3.0320566617452474 + (x * (-8.18168822157359 + (x * (-23.55507217389693 + (x * (-71.04099935893065 + (x * (-221.879685319235 + (x * (-712.1364793277636 + (x * (-2336.1253314403966 + (x * (-7801.945954775964 + (x * (-26448.19586059192 + (x * (-90799.48341621365 + (x * (-315126.04064491636 + (x * -1104011.3443115912)))))))))))))))))))))))))))))));
}

// END: poly_p8

// BEGIN: poly_p9

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
* @return     evaluated polynomial
*/
static double poly_p9( const double x ) {
	return 1.1613071521962828 + (x * (-0.7011002845552895 + (x * (-0.5805514744654373 + (x * (-1.2436930610777865 + (x * (-3.679383613496635 + (x * (-12.815909243378957 + (x * (-49.25672530759985 + (x * (-202.18187354340904 + (x * (-869.8602699308701 + (x * (-3877.0058473132895 + (x * (-17761.7071017094 + (x * (-83182.69029154233 + (x * (-396650.4505013548 + (x * -1920033.4136826345)))))))))))))))))))))))));
}

// END: poly_p9

// BEGIN: poly_p10

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
* @return     evaluated polynomial
*/
static double poly_p10( const double x ) {
	return 1.1246173251197522 + (x * (-0.7708450563609095 + (x * (-0.8447940536449113 + (x * (-2.4900973094503946 + (x * (-10.239717411543843 + (x * (-49.7490054655148 + (x * (-267.09866751957054 + (x * (-1532.66588382523 + (x * (-9222.313478526092 + (x * (-57502.51612140314 + (x * (-368596.11674161063 + (x * (-2415611.0887010912 + (x * (-16120097.815816568 + (x * (-109209938.52030899 + (x * (-749380758.1942496 + (x * (-5198725846.725541 + (x * -36409256888.1214)))))))))))))))))))))))))))))));
}

// END: poly_p10

// BEGIN: poly_p11

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
* @return     evaluated polynomial
*/
static double poly_p11( const double x ) {
	return 1.5910034537907922 + (x * (0.41600074399178694 + (x * (0.24579151426410342 + (x * (0.17948148291490615 + (x * (0.14455605708755515 + (x * (0.12320099331242772 + (x * (0.10893881157429353 + (x * (0.09885340987159291 + (x * (0.09143962920174975 + (x * (0.0858425915954139 + (x * 0.08154111871830322)))))))))))))))))));
}

// END: poly_p11

// BEGIN: poly_p12

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
* @return     evaluated polynomial
*/
static double poly_p12( const double x ) {
	return 1.5509733517804722 + (x * (-0.4003010201031985 + (x * (-0.07849861944294194 + (x * (-0.034318853117591995 + (x * (-0.0197180433173655 + (x * (-0.01305950773199331 + (x * (-0.009442372874146548 + (x * (-0.007246728512402157 + (x * (-0.00580742401295609 + (x * -0.004809187786009338)))))))))))))))));
}

// END: poly_p12

/* End auto-generated functions. */

/**
* Computes the complete elliptic integral of the second kind.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_ellipe( 0.5 );
* // returns ~1.351
*/
double stdlib_base_ellipe( const double m ) {
	int8_t FLG;
	double kdm;
	double edm;
	double td;
	double km;
	double t;
	double x;

	FLG = 0;
	x = m;
	if ( m < 0.0 ) {
		x = m / ( m - 1.0 );
		FLG += 1;
	}
	if ( x == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_HALF_PI;
	}
	if ( x == 1.0 ) {
		return 1.0;
	}
	if ( x > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 0.1 ) {
		t = poly_p1( x - 0.05 );
	} else if ( x < 0.2 ) {
		t = poly_p2( x - 0.15 );
	} else if ( x < 0.3 ) {
		t = poly_p3( x - 0.25 );
	} else if ( x < 0.4 ) {
		t = poly_p4( x - 0.35 );
	} else if ( x < 0.5 ) {
		t = poly_p5( x - 0.45 );
	} else if ( x < 0.6 ) {
		t = poly_p6( x - 0.55 );
	} else if ( x < 0.7 ) {
		t = poly_p7( x - 0.65 );
	} else if ( x < 0.8 ) {
		t = poly_p8( x - 0.75 );
	} else if ( x < 0.85 ) {
		t = poly_p9( x - 0.825 );
	} else if ( x < 0.9 ) {
		t = poly_p10( x - 0.875 );
	} else {
		td = 0.95 - x;
		kdm = poly_p11( td );
		edm = poly_p12( td );
		km = stdlib_base_ellipk( x );

		// To avoid precision loss near 1, we use Eq. 33 from Fukushima (2009):
		t = ( STDLIB_CONSTANT_FLOAT64_HALF_PI + ( km * (kdm - edm) ) ) / kdm;
	}
	if ( FLG == 1 ) {
		// Complete the transformation mentioned above for m < 0:
		return t * stdlib_base_sqrt( 1.0 - m );
	}
	return t;
}
