/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( './../lib' );

var v;

if ( hasBigIntSupport() ) {
	v = BigInt( '1' );

	// Print the value type:
	console.log( typeof v );
	// => 'bigint'

	// Serialize the BigInt as a string:
	console.log( v.toString() );
	// => '1'
} else {
	console.log( 'Environment does not support BigInts.' );
}
