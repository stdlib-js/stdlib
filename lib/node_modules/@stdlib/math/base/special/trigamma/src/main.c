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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/trigamma.hpp}. The implementation follows the original but has been reformatted and modified for use in stdlib.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/trigamma.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/sinpi.h"
#include "stdlib/constants/float64/pi_squared.h"

static const double YOFFSET24 = 3.558437347412109375;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_p12q12

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_p12q12( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.9999999999999991;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.9999999999999991 + (x * (-4.712373111208652 + (x * (-7.94125711970499 + (x * (-5.746577466976647 + (x * (-0.4042133494563989 + (x * (2.4787778117864288 + (x * (2.0771415170245513 + (x * (0.8588778991623601 + (x * (0.20499222604410033 + (x * (0.027210314034819473 + (x * 0.001576484902087695)))))))))))))))))));
		s2 = 1.0 + (x * (4.712373111208634 + (x * (9.586191186553398 + (x * (11.094006726982938 + (x * (8.090754247493278 + (x * (3.877058901598914 + (x * (1.2275867870191448 + (x * (0.249092040606385 + (x * (0.02957504139006556 + (x * (0.0015764849020049815 + (x * 1.6126405034405948e-15)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.001576484902087695 + (ix * (0.027210314034819473 + (ix * (0.20499222604410033 + (ix * (0.8588778991623601 + (ix * (2.0771415170245513 + (ix * (2.4787778117864288 + (ix * (-0.4042133494563989 + (ix * (-5.746577466976647 + (ix * (-7.94125711970499 + (ix * (-4.712373111208652 + (ix * -0.9999999999999991)))))))))))))))))));
		s2 = 1.6126405034405948e-15 + (ix * (0.0015764849020049815 + (ix * (0.02957504139006556 + (ix * (0.249092040606385 + (ix * (1.2275867870191448 + (ix * (3.877058901598914 + (ix * (8.090754247493278 + (ix * (11.094006726982938 + (ix * (9.586191186553398 + (ix * (4.712373111208634 + (ix * 1.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p12q12

// BEGIN: rational_p24q24

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_p24q24( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -2.5584373473990794;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -2.5584373473990794 + (x * (-12.283020824054201 + (x * (-23.9195022162768 + (x * (-24.925643150482347 + (x * (-14.797912276547878 + (x * (-4.466544539286106 + (x * (-0.01914390334056497 + (x * (0.5154120525543513 + (x * (0.1953783487860643 + (x * (0.03347612826241743 + (x * (0.0023736652059422065 + (x * 0.0)))))))))))))))))))));
		s2 = 1.0 + (x * (4.800985584544199 + (x * (9.992207278431701 + (x * (11.889614616763133 + (x * (8.966132566838091 + (x * (4.4725413614962415 + (x * (1.4860098202819654 + (x * (0.31957073576676426 + (x * (0.040735834578768094 + (x * (0.0023736652059327163 + (x * (2.3955488790352614e-16 + (x * -2.9474924474061867e-18)))))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.0023736652059422065 + (ix * (0.03347612826241743 + (ix * (0.1953783487860643 + (ix * (0.5154120525543513 + (ix * (-0.01914390334056497 + (ix * (-4.466544539286106 + (ix * (-14.797912276547878 + (ix * (-24.925643150482347 + (ix * (-23.9195022162768 + (ix * (-12.283020824054201 + (ix * -2.5584373473990794)))))))))))))))))))));
		s2 = -2.9474924474061867e-18 + (ix * (2.3955488790352614e-16 + (ix * (0.0023736652059327163 + (ix * (0.040735834578768094 + (ix * (0.31957073576676426 + (ix * (1.4860098202819654 + (ix * (4.4725413614962415 + (ix * (8.966132566838091 + (ix * (11.889614616763133 + (ix * (9.992207278431701 + (ix * (4.800985584544199 + (ix * 1.0)))))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p24q24

// BEGIN: rational_p48q48

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_p48q48( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 1.6662611269702147e-17;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 1.6662611269702147e-17 + (x * (0.4999999999999977 + (x * (6.402709450190538 + (x * (41.38333741550006 + (x * (166.8033418545628 + (x * (453.39964786925367 + (x * (851.153712317697 + (x * (1097.7065756728507 + (x * (938.4312324784553 + (x * (487.26800160465194 + (x * 119.95344524233573)))))))))))))))))));
		s2 = 1.0 + (x * (12.472085567047449 + (x * (78.60931297532986 + (x * (307.47024605031834 + (x * (805.1406861011516 + (x * (1439.1201976029215 + (x * (1735.6105285756048 + (x * (1348.3250071285634 + (x * (607.2259858605709 + (x * (119.95231785727705 + (x * 0.00014016591835503607)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 119.95344524233573 + (ix * (487.26800160465194 + (ix * (938.4312324784553 + (ix * (1097.7065756728507 + (ix * (851.153712317697 + (ix * (453.39964786925367 + (ix * (166.8033418545628 + (ix * (41.38333741550006 + (ix * (6.402709450190538 + (ix * (0.4999999999999977 + (ix * 1.6662611269702147e-17)))))))))))))))))));
		s2 = 0.00014016591835503607 + (ix * (119.95231785727705 + (ix * (607.2259858605709 + (ix * (1348.3250071285634 + (ix * (1735.6105285756048 + (ix * (1439.1201976029215 + (ix * (805.1406861011516 + (ix * (307.47024605031834 + (ix * (78.60931297532986 + (ix * (12.472085567047449 + (ix * 1.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p48q48

// BEGIN: rational_p816q816

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_p816q816( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -1.848283152741466e-20;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -1.848283152741466e-20 + (x * (0.5 + (x * (3.0253386524731334 + (x * (13.599592751745737 + (x * (35.31322242830879 + (x * (67.16394245507142 + (x * (83.5767733658514 + (x * (71.07349121223571 + (x * (35.86215156147256 + (x * 8.721522316399835)))))))))))))))));
		s2 = 1.0 + (x * (5.717343971612935 + (x * (25.29340417962044 + (x * (62.26197679674682 + (x * (113.955048909239 + (x * (130.80713832893898 + (x * (102.42314690233765 + (x * (44.04247728052452 + (x * (8.89898032477904 + (x * -0.029662733687204)))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 8.721522316399835 + (ix * (35.86215156147256 + (ix * (71.07349121223571 + (ix * (83.5767733658514 + (ix * (67.16394245507142 + (ix * (35.31322242830879 + (ix * (13.599592751745737 + (ix * (3.0253386524731334 + (ix * (0.5 + (ix * -1.848283152741466e-20)))))))))))))))));
		s2 = -0.029662733687204 + (ix * (8.89898032477904 + (ix * (44.04247728052452 + (ix * (102.42314690233765 + (ix * (130.80713832893898 + (ix * (113.955048909239 + (ix * (62.26197679674682 + (ix * (25.29340417962044 + (ix * (5.717343971612935 + (ix * 1.0)))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p816q816

// BEGIN: rational_p16infq16inf

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_p16infq16inf( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.0 + (x * (0.5 + (x * (0.34562566988545623 + (x * (9.628954993608422 + (x * (3.5936085382439025 + (x * (49.45959911843888 + (x * (7.775192373218939 + (x * (74.4536074488178 + (x * (2.7520934039706906 + (x * (23.92923597114717 + (x * 0.0)))))))))))))))))));
		s2 = 1.0 + (x * (0.3579180064375791 + (x * (19.138603985070986 + (x * (0.8743490814641436 + (x * (98.65160974348555 + (x * (-16.10519728333829 + (x * (154.31686021625373 + (x * (-40.2026880424379 + (x * (60.167913667426475 + (x * (-13.341484462225642 + (x * 2.537956362006499)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (23.92923597114717 + (ix * (2.7520934039706906 + (ix * (74.4536074488178 + (ix * (7.775192373218939 + (ix * (49.45959911843888 + (ix * (3.5936085382439025 + (ix * (9.628954993608422 + (ix * (0.34562566988545623 + (ix * (0.5 + (ix * 0.0)))))))))))))))))));
		s2 = 2.537956362006499 + (ix * (-13.341484462225642 + (ix * (60.167913667426475 + (ix * (-40.2026880424379 + (ix * (154.31686021625373 + (ix * (-16.10519728333829 + (ix * (98.65160974348555 + (ix * (0.8743490814641436 + (ix * (19.138603985070986 + (ix * (0.3579180064375791 + (ix * 1.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p16infq16inf

/* End auto-generated functions. */

/**
* Evaluates the trigamma function.
*
* @param x    input value
* @return     function value
*
* @example
* double v = stdlib_base_trigamma( -2.5 );
* // returns ~9.539
*/
double stdlib_base_trigamma( const double x ) {
	double result;
	double xc;
	double s;
	double y;
	double z;

	result = 0.0;

	// Check for negative arguments and use reflection:
	if ( x <= 0.0 ) {
		if ( stdlib_base_floor( x ) == x ) {
			return 0.0 / 0.0; // NaN
		}
		s = stdlib_base_sinpi( x );
		z = 1.0 - x;
		return -stdlib_base_trigamma( z ) + ( STDLIB_CONSTANT_FLOAT64_PI_SQUARED / ( s * s ) );
	}
	xc = x;
	if ( xc < 1.0 ) {
		result = 1.0 / ( xc * xc );
		xc += 1.0;
	}
	if ( xc <= 2.0 ) {
		result += ( 2.0 + rational_p12q12( xc ) ) / ( xc * xc );
	}
	else if ( xc <= 4.0 ) {
		result += ( YOFFSET24 + rational_p24q24( xc ) ) / ( xc * xc );
	}
	else if ( xc <= 8.0 ) {
		y = 1.0 / xc;
		result += ( 1.0 + rational_p48q48( y ) ) / xc;
	}
	else if ( xc <= 16.0 ) {
		y = 1.0 / xc;
		result += ( 1.0 + rational_p816q816( y ) ) / xc;
	}
	else {
		y = 1.0 / xc;
		result += ( 1.0 + rational_p16infq16inf( y ) ) / xc;
	}
	return result;
}
