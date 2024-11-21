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
var Int32Array = require( '@stdlib/array/int32' );
var copy = require( './../lib' );

var arr = [
	{
		'x': new Date(),
		'y': [ randu(), randu() ],
		'z': new Int32Array( [ 1, 2, 3, 4 ] ),
		'label': 'Beep'
	},
	{
		'x': new Date(),
		'y': [ randu(), randu() ],
		'z': new Int32Array( [ 3, 1, 2, 4 ] ),
		'label': 'Boop'
	}
];

// Perform a full-deep copy:
var out = copy( arr );

console.log( arr[ 0 ] === out[ 0 ] );
// => false

console.log( arr[ 1 ].y === out[ 1 ].y );
// => false

// Perform a shallow copy:
out = copy( arr, 1 );

console.log( arr[ 0 ] === out[ 0 ] );
// => true

console.log( arr[ 1 ].z === out[ 1 ].z );
// => true
