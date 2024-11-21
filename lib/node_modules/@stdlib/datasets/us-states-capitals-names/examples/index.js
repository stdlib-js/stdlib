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

function getState( capital ) {
	var state;
	var parts;
	var i;

	// Ensure the first letter of each word comprising a capital is capitalized...
	parts = capital.split( ' ' );
	for ( i = 0; i < parts.length; i++ ) {
		parts[ i ] = capitalize( parts[ i ] );
	}
	// Get the state name:
	state = tbl[ parts.join( ' ' ) ];

	// Ensure a valid capital name was provided...
	if ( state === void 0 ) {
		throw new Error( 'unrecognized capital. Value: `' + capital + '`.' );
	}
	return state;
}

console.log( getState( 'Jefferson City' ) );
// => 'Missouri'

console.log( getState( 'Trenton' ) );
// => 'New Jersey'

console.log( getState( 'Sacramento' ) );
// => 'California'
