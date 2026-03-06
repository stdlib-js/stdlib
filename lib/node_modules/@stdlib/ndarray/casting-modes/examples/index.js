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

var indexOf = require( '@stdlib/utils/index-of' );
var modes = require( './../lib' );

var MODES = modes();
var bool;

function isMode( str ) {
	if ( indexOf( MODES, str ) === -1 ) {
		return false;
	}
	return true;
}

bool = isMode( 'none' );
console.log( bool );
// => true

bool = isMode( 'equiv' );
console.log( bool );
// => true

bool = isMode( 'safe' );
console.log( bool );
// => true

bool = isMode( 'mostly-safe' );
console.log( bool );
// => true

bool = isMode( 'same-kind' );
console.log( bool );
// => true

bool = isMode( 'unsafe' );
console.log( bool );
// => true

bool = isMode( 'beep' );
console.log( bool );
// => false
