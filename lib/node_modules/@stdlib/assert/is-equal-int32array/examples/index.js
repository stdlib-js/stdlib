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

var Int32Array = require( '@stdlib/array/int32' );
var isEqualInt32Array = require( './../lib' );

var x = new Int32Array( [ 1, 2, 3 ] );
var y = new Int32Array( [ 1, 2, 3 ] );
var out = isEqualInt32Array( x, y );
console.log( out );
// => true

x = new Int32Array( [ 0, 0, 0 ] );
y = [ 0, 0, 0 ];
out = isEqualInt32Array( x, y );
console.log( out );
// => false

x = new Int32Array( [ 1, 2, 3 ] );
y = new Int32Array( [ 1, 2, 4 ] );
out = isEqualInt32Array( x, y );
console.log( out );
// => false
