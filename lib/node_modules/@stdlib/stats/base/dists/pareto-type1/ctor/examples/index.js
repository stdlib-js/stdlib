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

var Pareto1 = require( './../lib' );

var pareto1 = new Pareto1( 2.0, 4.0 );

var mu = pareto1.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 8'

var median = pareto1.median;
console.log( 'Median = %d', median );
// => 'Median = 5.656854249492381'

var s2 = pareto1.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = Infinity'

var y = pareto1.cdf( 2.0 );
console.log( 'F(2.0) = %d', y );
// => 'F(2.0) = 0'
