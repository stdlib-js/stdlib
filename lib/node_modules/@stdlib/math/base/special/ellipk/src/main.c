/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/ellipk.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/half_pi.h"
#include <stdint.h>

static const double ONE_DIV_PI = 0.3183098861837907;

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
	return 1.5910034537907922 + (x * (0.41600074399178694 + (x * (0.24579151426410342 + (x * (0.17948148291490615 + (x * (0.14455605708755515 + (x * (0.12320099331242772 + (x * (0.10893881157429353 + (x * (0.09885340987159291 + (x * (0.09143962920174975 + (x * (0.0858425915954139 + (x * 0.08154111871830322)))))))))))))))))));
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
	return 1.63525673226458 + (x * (0.4711906261487323 + (x * (0.3097284108314996 + (x * (0.2522083117731357 + (x * (0.22672562321968465 + (x * (0.21577444672958598 + (x * (0.21310877187734892 + (x * (0.21602912460518828 + (x * (0.2232558316330579 + (x * (0.23418050129420992 + (x * (0.24855768297226408 + (x * 0.26636380989261754)))))))))))))))))))));
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
	return 1.685750354812596 + (x * (0.5417318486132803 + (x * (0.40152443839069024 + (x * (0.3696424734208891 + (x * (0.37606071535458363 + (x * (0.4052358870851259 + (x * (0.45329438175399905 + (x * (0.5205189476511842 + (x * (0.609426039204995 + (x * (0.7242635222829089 + (x * (0.8710138477098124 + (x * 1.057652872753547)))))))))))))))))))));
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
	return 1.7443505972256133 + (x * (0.6348642753719353 + (x * (0.5398425641644455 + (x * (0.5718927051937874 + (x * (0.6702951362654062 + (x * (0.8325865900109772 + (x * (1.0738574482479333 + (x * (1.4220914606754977 + (x * (1.9203871834023047 + (x * (2.6325525483316543 + (x * (3.6521097473190394 + (x * (5.115867135558866 + (x * 7.224080007363877)))))))))))))))))))))));
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
	return 1.8138839368169826 + (x * (0.7631632457005573 + (x * (0.7619286053215958 + (x * (0.9510746536684279 + (x * (1.315180671703161 + (x * (1.9285606934774109 + (x * (2.9375093425313787 + (x * (4.594894405442878 + (x * (7.33007122188172 + (x * (11.871512597425301 + (x * (19.45851374822938 + (x * (32.20638657246427 + (x * (53.73749198700555 + (x * 90.27388602941)))))))))))))))))))))))));
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
	return 1.8989249102715535 + (x * (0.9505217946182445 + (x * (1.1510775899590158 + (x * (1.7502391069863006 + (x * (2.952676812636875 + (x * (5.285800396121451 + (x * (9.83248571665998 + (x * (18.787148683275596 + (x * (36.61468615273698 + (x * (72.45292395127771 + (x * (145.1079577347069 + (x * (293.4786396308497 + (x * (598.385181505501 + (x * (1228.4200130758634 + (x * 2536.5297553827645)))))))))))))))))))))))))));
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
	return 2.0075983984243764 + (x * (1.2484572312123474 + (x * (1.9262346570764797 + (x * (3.7512896400875877 + (x * (8.119944554932045 + (x * (18.665721308735552 + (x * (44.603924842914374 + (x * (109.50920543094983 + (x * (274.2779548232414 + (x * (697.5598008606327 + (x * (1795.7160145002472 + (x * (4668.38171679039 + (x * (12235.762468136643 + (x * (32290.17809718321 + (x * (85713.07608195965 + (x * (228672.1890493117 + (x * 612757.2711915852)))))))))))))))))))))))))))))));
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
	return 2.1565156474996434 + (x * (1.7918056418494632 + (x * (3.8267512874657132 + (x * (10.386724683637972 + (x * (31.403314054680703 + (x * (100.92370394986955 + (x * (337.3268282632273 + (x * (1158.7079305678278 + (x * (4060.9907421936323 + (x * (14454.001840343448 + (x * (52076.661075994045 + (x * (189493.65914621568 + (x * (695184.5762413896 + (x * (2567994.048255285 + (x * (9541921.966748387 + (x * (35634927.44218076 + (x * (133669298.46120408 + (x * (503352186.68662846 + (x * (1901975729.53866 + (x * 7208915015.330104)))))))))))))))))))))))))))))))))))));
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
	return 2.3181226217125106 + (x * (2.6169201502912327 + (x * (7.897935075731356 + (x * (30.502397154466724 + (x * (131.48693655235286 + (x * (602.9847637356492 + (x * (2877.024617809973 + (x * (14110.519919151804 + (x * (70621.4408815654 + (x * (358977.266582531 + (x * (1847238.2637239718 + (x * (9600515.416049214 + (x * (50307677.08502367 + (x * (265444188.6527128 + (x * (1408862325.0287027 + (x * 7515687935.373775)))))))))))))))))))))))))))));
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
	return 2.473596173751344 + (x * (3.727624244118099 + (x * (15.607393035549306 + (x * (84.12850842805888 + (x * (506.98181970406137 + (x * (3252.2770581451236 + (x * (21713.242419574344 + (x * (149037.04518909327 + (x * (1043999.3310899908 + (x * (7427974.817042039 + (x * (53503839.67558661 + (x * (389249886.99487084 + (x * (2855288351.1008105 + (x * (21090077038.76684 + (x * (156699833947.7902 + (x * (1170222242422.44 + (x * (8777948323668.9375 + (x * (66101242752484.95 + (x * (499488053713388.8 + (x * 37859743397240296.0)))))))))))))))))))))))))))))))))))));
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
	return 0.0 + (x * (0.0625 + (x * (0.03125 + (x * (0.0205078125 + (x * (0.01513671875 + (x * (0.011934280395507812 + (x * (0.009816169738769531 + (x * (0.008315593004226685 + (x * (0.007199153304100037 + (x * (0.00633745662344154 + (x * (0.00565311038371874 + (x * (0.005097046040418718 + (x * (0.004636680381850056 + (x * (0.004249547423822886 + (x * 0.003919665602267974)))))))))))))))))))))))))));
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
	return 1.5910034537907922 + (x * (0.41600074399178694 + (x * (0.24579151426410342 + (x * (0.17948148291490615 + (x * (0.14455605708755515 + (x * (0.12320099331242772 + (x * (0.10893881157429353 + (x * (0.09885340987159291 + (x * (0.09143962920174975 + (x * (0.0858425915954139 + (x * 0.08154111871830322)))))))))))))))))));
}

// END: poly_p12

/* End auto-generated functions. */

/**
* Computes the complete elliptic integral of the first kind.
*
* ## Method
*
* -   The function computes the complete elliptic integral of the first kind in terms of parameter \\( m \\), instead of the elliptic modulus \\( k \\).
*
*     ```tex
*     K(m) = \int_0^{\pi/2} \frac{1}{\sqrt{1 - m sin^2\theta}} d\theta
*     ```
*
* -   The function uses a piecewise approximation polynomial as given in Fukushima (2009).
*
* -   For \\( m < 0 \\), the implementation follows Fukushima (2015). Namely, we use Equation 17.4.17 from the _Handbook of Mathematical Functions_ (Abramowitz and Stegun) to compute the function for \\( m < 0 \\) in terms of the piecewise polynomial representation of \\( m > 0 )).
*
*     ```tex
*     F(\phi|-m) = (1+m)^(-1/2) K(m/(1+m)) - (1+m)^(-1/2) F(\pi/2-\phi|m/(1+m))
*     ```
*
*     Since \\( K(m) \\) is equivalent to \\( F(\phi|m) \\), the above reduces to
*
*     ```tex
*     F(\phi|-m) = (1+m)^(-1/2) K(m/(1+m))
*     ```
*
* ## References
*
* -   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z](https://doi.org/10.1007/s10569-009-9228-z).
* -   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038](https://doi.org/10.1016/j.cam.2014.12.038).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_ellipk( 0.5 );
* // returns ~1.854
*/
double stdlib_base_ellipk( const double m ) {
	int8_t FLG;
	double kdm;
	double td;
	double qd;
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
		return STDLIB_CONSTANT_FLOAT64_PINF;
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
		td = 1.0 - x;
		qd = poly_p11( td );
		kdm = poly_p12( td - 0.05 );
		t = -stdlib_base_ln( qd ) * ( kdm * ONE_DIV_PI );
	}
	if ( FLG == 1 ) {
		// Complete the transformation mentioned above for m < 0:
		return t / stdlib_base_sqrt( 1.0 - m );
	}
	return t;
}
