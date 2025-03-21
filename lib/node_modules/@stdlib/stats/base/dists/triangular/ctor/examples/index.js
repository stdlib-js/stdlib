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

var Triangular = require( './../lib' );

var triangular = new Triangular( 2.0, 4.0, 3.0 );

var mu = triangular.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 3'

var median = triangular.median;
console.log( 'Median = %d', median );
// => 'Median = 3'

var s2 = triangular.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 0.16666666666666666'

var y = triangular.cdf( 2.5 );
console.log( 'F(2.5) = %d', y );
// => 'F(2.5) = 0.125'
