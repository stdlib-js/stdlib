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

var Binomial = require( './../lib' );

var binomial = new Binomial( 10, 0.4 );

var mu = binomial.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 4'

var mode = binomial.mode;
console.log( 'Mode = %d', mode );
// => 'Mode = 4'

var s2 = binomial.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 2.4'

var y = binomial.cdf( 3.5 );
console.log( 'F(3.5) = %d', y );
// => 'F(3.5) = 0.38228060159999994'
