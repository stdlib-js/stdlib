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

var Arcsine = require( './../lib' );

var arcsine = new Arcsine( 2.0, 4.0 );

var mu = arcsine.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 3'

var median = arcsine.median;
console.log( 'Median = %d', median );
// => 'Median = 3'

var s2 = arcsine.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 0.5'

var y = arcsine.cdf( 2.5 );
console.log( 'F(2.5) = %d', y );
// => 'F(2.5) = 0.33333333333333337'
