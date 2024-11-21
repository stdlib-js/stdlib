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

var Int32Array = require( '@stdlib/array/int32' );
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var ranks = require( './../lib' );

var join;
var data;
var out;
var i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = round( randu()*10.0 );
}

out = ranks( data );
join = Array.prototype.join;
console.log( 'data: [ %s ]', join.call( data, ', ' ) );
console.log( 'ranks: [ %s ]', join.call( out, ', ' ) );

// Typed arrays...
data = new Int32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = randu() * 10.0;
}

out = ranks( data );
console.log( 'data: [ %s ]', join.call( data, ', ' ) );
console.log( 'ranks: [ %s ]', join.call( out, ', ' ) );
