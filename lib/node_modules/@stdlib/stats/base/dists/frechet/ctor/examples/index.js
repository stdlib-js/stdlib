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

var Frechet = require( './../lib' );

var frechet = new Frechet( 2.0, 4.0, 3.0 );

var mu = frechet.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 10.089815403622064'

var median = frechet.median;
console.log( 'Median = %d', median );
// => 'Median = 7.804489635145799'

var s2 = frechet.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = Infinity'

var y = frechet.cdf( 5.0 );
console.log( 'F(5.0) = %d', y );
// => 'F(5.0) = 0.01831563888873418'
