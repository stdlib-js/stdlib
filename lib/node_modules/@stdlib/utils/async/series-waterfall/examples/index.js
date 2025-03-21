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

var replace = require( '@stdlib/string/replace' );
var waterfall = require( './../lib' );

function foo( next ) {
	next( null, 'beep' );
}

function bar( str, next ) {
	console.log( str );
	next( null, replace( str, 'e', 'o' ) );
}

function fun( str, next ) {
	console.log( str );
	next();
}

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'done' );
}

var fcns = [ foo, bar, fun ];

waterfall( fcns, done );
