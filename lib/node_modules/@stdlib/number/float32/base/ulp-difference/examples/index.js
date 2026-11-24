/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var EPS = require( '@stdlib/constants/float32/eps' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' );
var ulpdiff = require( './../lib' );

var d = ulpdiff( 1.0, 1.0+EPS );
console.log( d );
// => 1.0

d = ulpdiff( 5.8364e-31, 5.8367e-31 );
console.log( d );
// => 638.0

d = ulpdiff( 0.0, SMALLEST_SUBNORMAL );
console.log( d );
// => 1.0

d = ulpdiff( 0.0, -0.0 );
console.log( d );
// => 0.0

d = ulpdiff( SMALLEST_SUBNORMAL, -SMALLEST_SUBNORMAL );
console.log( d );
// => 2.0
