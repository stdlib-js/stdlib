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

var NegativeBinomial = require( './../lib' );

var nbinomial = new NegativeBinomial( 10, 0.4 );

var mu = nbinomial.mean;
console.log( 'Mean = %d', mu );
// => 'Mean = 15'

var mode = nbinomial.mode;
console.log( 'Mode = %d', mode );
// => 'Mode = 13'

var s2 = nbinomial.variance;
console.log( 'Variance = %d', s2 );
// => 'Variance = 37.49999999999999'

var y = nbinomial.cdf( 8 );
console.log( 'F(8) = %d', y );
// => 'F(8) = 0.13471414837313533'
