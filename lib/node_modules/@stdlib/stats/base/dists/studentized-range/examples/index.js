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

'use strict';

var tukey = require( './../lib' );

/*
* Let's consider an example where we are analyzing the test scores of students in a class.
* We're interested in using the Studentized Range Distribution to analyze the range of scores.
* The distribution has parameters: r (number of means), v (degrees of freedom), and nranges (number of ranges).
*/

var r = 5.0;
var v = 20.0;
var nranges = 3.0;

// CDF can be used to calculate the cumulative distribution function at a specific value:
console.log( tukey.cdf( 2.0, r, v, nranges ) );
// => ~0.074

// Quantile can also be used to calculate the quantile function at a specific probability:
console.log( tukey.quantile( 0.9, r, v, nranges ) );
// => ~4.433
