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


#include "stdlib/math/base/special/ldexp.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main() {
    double frac;
    int32_t exp;
    double out;
    int i;

    for ( i = 0; i < 100; i++ ) {
        frac = (double) rand() / (double) RAND_MAX;
        exp = (int32_t) rand() - (int32_t) (RAND_MAX/2);
        out = stdlib_base_ldexp( frac, exp );
        printf( "frac: %lf, exp: %" PRId32 ", out: %lf\n", frac, exp, out );
    }
}
