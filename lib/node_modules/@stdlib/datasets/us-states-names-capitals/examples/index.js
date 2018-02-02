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

var capitalize = require( '@stdlib/string/capitalize' );
var table = require( './../lib' );

var tbl = table();

function getCapital( state ) {
	var capital;
	var parts;
	var i;

	// Ensure the first letter of each word comprising a state name is capitalized...
	parts = state.split( ' ' );
	for ( i = 0; i < parts.length; i++ ) {
		parts[ i ] = capitalize( parts[ i ] );
	}
	// Get the state capital:
	capital = tbl[ parts.join( ' ' ) ];

	// Ensure a valid state name was provided...
	if ( capital === void 0 ) {
		throw new Error( 'unrecognized state name. Value: `' + state + '`.' );
	}
	return capital;
}

console.log( getCapital( 'Missouri' ) );
// => 'Jefferson City'

console.log( getCapital( 'New Jersey' ) );
// => 'Trenton'

console.log( getCapital( 'California' ) );
// => 'Sacramento'
