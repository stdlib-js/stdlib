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

#include "stdlib/math/base/special/fast/alpha_max_plus_beta_min.h"
#include "stdlib/math/base/special/fast/abs.h"

// 2*cos(pi/8)/(1+cos(pi/8)):
static const double ALPHA = 0.96043387010342;

// 2*sin(pi/8)/(1+cos(pi/8)):
static const double BETA = 0.397824734759316;

/**
* Computes the hypotenuse using the alpha max plus beta min algorithm.
*
* @param x  number
* @param y  number
* @return  hypotenuse
*
* @example
* double h = stdlib_base_fast_ampbm( -5.0, 12.0 );
* // returns ~13.5
*/
double stdlib_base_fast_ampbm( const double x, const double y ) {
	double ax;
	double ay;
	
	ay = stdlib_base_fast_abs( y );
	ax = stdlib_base_fast_abs( x );
	if( ax > ay ) {
		return (ALPHA * ax ) + ( BETA * ay );
	}
	return (ALPHA * ay ) + ( BETA * ax );
}
