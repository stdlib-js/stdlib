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

var arcsine = require( '@stdlib/stats/base/dists/arcsine' );
var stdlib = require( './../lib' );

var keys;
var y;
var cdfValue;
var pdfValue;
var mean;
var variance;
var medianValue;
var modeValue;
var entropy;

// List sub-namespaces:
keys = stdlib.utils.objectKeys(stdlib);
console.log(keys);

// Compute the value of sine:
y = stdlib.math.base.special.sin(3.14);
console.log(y);

// Example 1: Calculate the Cumulative Distribution Function (CDF)
cdfValue = arcsine.cdf(0.5, 0, 1);
console.log('CDF value at 0.5:', cdfValue);

// Example 2: Calculate the Probability Density Function (PDF)
pdfValue = arcsine.pdf(0.5, 0, 1);
console.log('PDF value at 0.5:', pdfValue);

// Example 3: Calculate the Mean and Variance
mean = arcsine.mean(0, 1);
variance = arcsine.variance(0, 1);
console.log('Mean:', mean, 'Variance:', variance);

// Example 4: Calculate the Median
medianValue = arcsine.median(0, 1);
console.log('Median of the distribution:', medianValue);

// Example 5: Calculate the Mode
modeValue = arcsine.mode(0, 1);
console.log('Mode of the distribution:', modeValue);

// Example 6: Calculate the Entropy
entropy = arcsine.entropy(0, 1);
console.log('Entropy:', entropy);
