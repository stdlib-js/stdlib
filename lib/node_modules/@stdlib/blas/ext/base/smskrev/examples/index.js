/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Uint8Array = require( '@stdlib/array/uint8' );
var smskrev = require( './../lib' );

var x = discreteUniform( 10, -100, 100, {
	'dtype': 'float32'
});
console.log( x );

var mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ] );
console.log( mask );

smskrev( x.length, x, 1, mask, 1 );
console.log( x );
