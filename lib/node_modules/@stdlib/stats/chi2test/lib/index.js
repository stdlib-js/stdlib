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

/**
* Chi-square independence test.
*
* @module @stdlib/stats/chi2test
*
* @example
* var chi2test = require( '@stdlib/stats/chi2test' );
*
* var x = [ [ 20, 30 ], [ 30, 20 ] ];
* var out = chi2test( x );
* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
*
* var table = out.print();
* /*
*     Chi-square independence test
*
*     Null hypothesis: the two variables are independent
*
*         pValue: 0.0719
*         statistic: 3.24
*         degrees of freedom: 1
*
*     Test Decision: Fail to reject null in favor of alternative at 5% significance level
* /*
*/

// MODULES //

var chi2test = require( './main.js' );


// EXPORTS //

module.exports = chi2test;
