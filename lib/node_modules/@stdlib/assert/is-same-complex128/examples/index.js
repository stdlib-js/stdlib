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

var Complex128 = require( '@stdlib/complex/float64' );
var isSameComplex128 = require( './../lib' );

var x = new Complex128( 1.0, 2.0 );
var y = new Complex128( 1.0, 2.0 );
var out = isSameComplex128( x, y );
console.log( out );
// => true

x = new Complex128( 0.0, -0.0 );
y = new Complex128( -0.0, 0.0 );
out = isSameComplex128( x, y );
console.log( out );
// => false

x = new Complex128( NaN, NaN );
y = new Complex128( NaN, NaN );
out = isSameComplex128( x, y );
console.log( out );
// => true
