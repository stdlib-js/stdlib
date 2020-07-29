/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Chi-square goodness-of-fit test.
*
* @module @stdlib/stats/chi2gof
*
* @example
* var chi2gof = require( '@stdlib/stats/chi2gof' );
* var x = [ 89, 37, 30, 28, 2 ];
* var p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
*
* var out = chi2gof( x, p );
*
* var o = out.toJSON();
* // returns { 'pValue': ~0.0406, 'statistic': ~9.9901, ... }
*
* var table = out.toString();
* /*
* Null hypothesis: population probabilities are equal to those in p
*
*     pValue: 0.0406
*     statistic: 9.9901
*     degrees of freedom: 4
*
* Test Decision: Reject null in favor of alternative at 5% significance level
* /*
*/

// MODULES //

var chi2gof = require( './main.js' );


// EXPORTS //

module.exports = chi2gof;
