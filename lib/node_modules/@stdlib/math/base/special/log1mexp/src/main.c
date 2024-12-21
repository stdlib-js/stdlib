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
*/

#include "stdlib/math/base/special/log1mexp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/ln_two.h"

/**
* Computes the natural logarithm of \\( 1-\exp(-|x|) \\).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_log1mexp( 5.0 );
* // returns ~-0.00676
*/
double stdlib_base_log1mexp( const double x ) {
    double ax;
    if ( stdlib_base_is_nan( x ) ) {
        return 0.0 / 0.0; // NaN
    }
    if ( x == 0.0 ) {
        return STDLIB_CONSTANT_FLOAT64_NINF;
    }
    ax = stdlib_base_abs( x );
    if ( 0.0 < ax && ax <= STDLIB_CONSTANT_FLOAT64_LN2 ) {
        return stdlib_base_ln( -stdlib_base_expm1( -ax ) );
    }
    // Case: |x| > ln(2)
    return stdlib_base_log1p( -stdlib_base_exp( -ax ) );
}
