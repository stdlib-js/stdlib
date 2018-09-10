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

var Hypergeometric = require( './../lib' );

var hypergeometric = new Hypergeometric( 100, 50, 20 );

var mu = hypergeometric.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 10'

var mode = hypergeometric.mode;
console.log( 'Mode = %d', mode );
// => 'Mode = 10'

var s2 = hypergeometric.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 4.040404040404041'

var y = hypergeometric.cdf( 10.5 );
console.log( 'F(10.5) = %d', y );
// => 'F(10.5) = 0.5984356088532534'
