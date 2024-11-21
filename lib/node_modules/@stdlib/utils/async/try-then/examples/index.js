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

var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var repeatString = require( '@stdlib/string/repeat' );
var trythenAsync = require( './../lib' );

var i;

function next() {
	trythenAsync( x, y, done );
}

function x( clbk ) {
	setTimeout( onTimeout, 0 );
	function onTimeout() {
		if ( randu() > 0.9 ) {
			return clbk( null, repeatString( 'BOOP', ceil( randu()*3.0 ) ) );
		}
		clbk( new Error( 'oops' ) );
	}
}

function y( clbk ) {
	setTimeout( onTimeout, 0 );
	function onTimeout() {
		clbk( null, repeatString( 'beep', ceil( randu()*5.0 ) ) );
	}
}

function done( error, result ) {
	if ( error ) {
		throw error;
	}
	i += 1;
	console.log( result );
	if ( i < 100 ) {
		return next();
	}
}

i = 0;
next();
