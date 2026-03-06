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

var Beta = require( './../lib' );

var beta = new Beta( 2.0, 4.0 );

var mu = beta.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 0.3333333333333333'

var median = beta.median;
console.log( 'Median = %d', median );
// => 'Median = 0.3138101704556974'

var s2 = beta.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 0.031746031746031744'

var y = beta.cdf( 0.8 );
console.log( 'F(0.8) = %d', y );
// => 'F(0.8) = 0.99328'
