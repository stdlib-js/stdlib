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

var LogNormal = require( './../lib' );

var lognormal = new LogNormal( 2.0, 1.0 );

var mean = lognormal.mean;
console.log( 'Mean = %d', mean );
// => 'Mean = 12.182493960703473'

var median = lognormal.median;
console.log( 'Median = %d', median );
// => 'Median = 7.38905609893065'

var s2 = lognormal.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 255.01563439015857'

var y = lognormal.cdf( 0.8 );
console.log( 'F(0.8) = %d', y );
// => 'F(0.8) = 0.013103060880527347'
