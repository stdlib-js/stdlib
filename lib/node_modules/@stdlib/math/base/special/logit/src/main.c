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

#include "stdlib/math/base/special/logit.h"
#include "stdlib/math/base/assert/is_probability.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the logit function.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_logit( 0.2 );
* // returns ~-1.386
*/
double stdlib_base_logit( const double p ) {
    if ( stdlib_base_is_nan( p ) ) {
        return 0.0 / 0.0; // NaN
    }
    if ( !stdlib_base_is_probability( p ) ) {
        return 0.0 / 0.0; // NaN
    }
    if ( p == 0.0 ) {
        return STDLIB_CONSTANT_FLOAT64_NINF;
    }
    if ( p == 1.0 ) {
        return STDLIB_CONSTANT_FLOAT64_PINF;
    }
    return stdlib_base_ln( p / ( 1.0 - p ) );
}
