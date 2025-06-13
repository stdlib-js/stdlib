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

var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isSameAccessorArray = require( './../lib' );

var x = new Complex128Array( [ 1, 2, 3, 4 ] );
var y = new Complex128Array( [ 1, 2, 3, 4 ] );
var out = isSameAccessorArray( x, y );
console.log( out );
// => true

x = new Complex64Array( [ 1, 2 ]);
y = [ 0.0, -0.0, 0.0 ];
out = isSameAccessorArray( x, y );
console.log( out );
// => false

x = new Complex128Array( [] );
y = new Complex64Array( [] );
out = isSameAccessorArray( x, y );
console.log( out );
// => true
