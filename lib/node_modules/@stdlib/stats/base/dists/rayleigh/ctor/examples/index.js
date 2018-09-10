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

var Rayleigh = require( './../lib' );

var rayleigh = new Rayleigh( 2.0 );

var mu = rayleigh.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 2.5066282746310007'

var mode = rayleigh.mode;
console.log( 'Mode = %d', mode );
// => 'Mode = 2'

var s2 = rayleigh.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 1.7168146928204138'

var y = rayleigh.cdf( 0.8 );
console.log( 'F(0.8) = %d', y );
// => 'F(0.8) = 0.07688365361336424'
