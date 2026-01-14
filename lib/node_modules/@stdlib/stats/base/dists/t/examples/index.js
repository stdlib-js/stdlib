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

var t = require( './../lib' );

var dof = 3;
var x = 1.5;

// Evaluate the probability density function (PDF) at a specific value:
var res = t.pdf( x, dof );
console.log( 'PDF at x = ' + x + ': ' + res );

// Evaluate the cumulative distribution function (CDF) at a specific value:
res = t.cdf( x, dof );
console.log( 'CDF at x = ' + x + ': ' + res );

// Get the mean and variance of the t distribution:
var mu = t.mean( dof );
var v = t.variance( dof );
console.log( 'Mean: ' + mu + ', Variance: ' + v );
