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
var array2scalar = require( './../lib' );

var x = array2scalar( 3.0 );
console.log( x );
// => <Float64Array>[ 3.0 ]

x = array2scalar( 3, 'int32' );
console.log( x );
// => <Int32Array>[ 3 ]

x = array2scalar( new Complex128( 3.0, 4.0 ) );
console.log( x );
// => <Complex128Array>

x = array2scalar( {} );
console.log( x );
// => [ {} ]
