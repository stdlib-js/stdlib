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

var Levy = require( './../lib' );

var levy = new Levy( 2.0, 4.0 );

var mean = levy.mean;
console.log( 'Mean = %d', mean );
// => 'Mean = Infinity'

var median = levy.median;
console.log( 'Median = %d', median );
// => 'Median = 10.792437353270929'

var s2 = levy.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = Infinity'

var y = levy.cdf( 20.0 );
console.log( 'F(20) = %d', y );
// => 'F(20) = 0.6373518882339371'
