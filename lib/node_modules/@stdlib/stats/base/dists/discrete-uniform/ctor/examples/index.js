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

var DiscreteUniform = require( './../lib' );

var discreteUniform = new DiscreteUniform( -2, 2 );

var mu = discreteUniform.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 0'

var median = discreteUniform.median;
console.log( 'Median = %d', median );
// => 'Median = 0'

var s2 = discreteUniform.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 2'

var y = discreteUniform.cdf( 2.5 );
console.log( 'F(2.5) = %d', y );
// => 'F(2.5) = 1'
