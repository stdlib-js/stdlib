/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var dlamch = require( './../lib' );

var out = dlamch( 'E' );
console.log( 'Precision: %d', out );

out = dlamch( 'S' );
console.log( 'Safe minimum: %d', out );

out = dlamch( 'B' );
console.log( 'Base: %d', out );

out = dlamch( 'P' );
console.log( 'Precision*base: %d', out );

out = dlamch( 'N' );
console.log( 'Number of digits in mantissa: %d', out );

out = dlamch( 'R' );
console.log( 'Rounding: %d', out );

out = dlamch( 'M' );
console.log( 'Minimum exponent before underflow: %d', out );

out = dlamch( 'U' );
console.log( 'Underflow threshold: %d', out );

out = dlamch( 'L' );
console.log( 'Maximum exponent before overflow: %d', out );

out = dlamch( 'O' );
console.log( 'Overflow threshold: %d', out );
