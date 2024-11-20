/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var format = require( '@stdlib/string/format' );
var decorateAfter = require( './../lib' );

function count() {
	this.count += 1; // eslint-disable-line no-invalid-this
}

function greet() {
	return 'Hello!';
}

function randstr( f ) {
	var str;
	var i;

	str = [];
	for ( i = 0; i < discreteUniform( 1, 10 ); i++ ) {
		str.push( f() );
	}
	return str.join( ' ' );
}

// Create an evaluation context to allow tracking how many times a function is invoked:
var ctx = {
	'count': 0
};

// Decorate a function with a counter:
var f = decorateAfter( greet, greet.length, count, ctx );

// Generate a random greeting:
var str = randstr( f );
console.log( str );

// Check how many times the function was invoked:
console.log( format( 'Count: %d.', ctx.count ) );
