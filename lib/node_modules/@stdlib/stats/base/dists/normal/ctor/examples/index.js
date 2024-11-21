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

var Normal = require( './../lib' );

var normal = new Normal( 2.0, 4.0 );

var mean = normal.mean;
console.log( 'Mean = %d', mean );
// => 'Mean = 2'

var median = normal.median;
console.log( 'Median = %d', median );
// => 'Median = 2'

var s2 = normal.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 16'

var y = normal.cdf( 0.8 );
console.log( 'F(0.8) = %d', y );
// => 'F(0.8) = 0.3820885778110474'
