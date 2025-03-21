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

var truncatedNormal = require( './../lib' );

/*
* Let's consider an example where we're modeling the heights of astronauts.
* We'll use the truncated normal distribution to model this scenario, considering constraints on their minimum and maximum heights.
* The distribution has parameters: a (minimum height), b (maximum height), mu (location parameter), and sigma (scale parameter).
* In this example, we'll assume a = 150 (minimum height), b = 200 (maximum height), mu = 175 (location parameter), and sigma = 10 (scale parameter).
*/

var a = 150.0;
var b = 200.0;
var mu = 175.0;
var sigma = 10.0;

// Calculate the probability density function (PDF) for a height of 180 cm:
console.log(truncatedNormal.pdf( 180, a, b, mu, sigma ) );
// => ~0.036
