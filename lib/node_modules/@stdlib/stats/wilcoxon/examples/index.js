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

'use strict';

var uniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var wilcoxon = require( './../lib' );

var runif;
var arr;
var out;
var i;

runif = uniform( -50.0, 50.0, {
	'seed': 37827
});
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = runif();
}

// Test whether distribution is symmetric around zero:
out = wilcoxon( arr );
console.log( out.print() );
/* e.g., =>
    One-Sample Wilcoxon signed rank test

    Alternative hypothesis: Median of `x` is not equal to 0

        pValue: 0.7714
        statistic: 2438.5

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

// Test whether distribution has median of five:
out = wilcoxon( arr, {
	'mu': 5.0
});
console.log( out.print() );
/* e.g, =>
    One-Sample Wilcoxon signed rank test

    Alternative hypothesis: Median of `x` is not equal to 5

        pValue: 0.0529
        statistic: 1961.5

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
