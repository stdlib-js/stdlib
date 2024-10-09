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

var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var isSameTypedArrayLike = require( './../lib' );

var x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
var y = new Int16Array( [ 1.0, 2.0, 3.0 ] );
var out = isSameTypedArrayLike( x, y );
console.log( out );
// => true

x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
y = new Int16Array( [ 1.0, 2.0, 4.0 ] );
out = isSameTypedArrayLike( x, y );
console.log( out );
// => false
