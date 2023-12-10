/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var flatten4d = require( './../lib' );

// Define a 2x2x2x2 array:
var x = [
	[
		[ [ 1, 2 ], [ 3, 4 ] ],
		[ [ 5, 6 ], [ 7, 8 ] ]
	],
	[
		[ [ 9, 10 ], [ 11, 12 ] ],
		[ [ 13, 14 ], [ 15, 16 ] ]
	]
];

var out = flatten4d( x, [ 0, 0, 0, 0 ], false );
console.log( out );
// => []

out = flatten4d( x, [ 0, 0, 0, 0 ], true );
console.log( out );
// => []

out = flatten4d( x, [ 1, 1, 1, 1 ], false );
console.log( out );
// => [ 1 ]

out = flatten4d( x, [ 1, 1, 1, 1 ], true );
console.log( out );
// => [ 1 ]

out = flatten4d( x, [ 1, 2, 2, 2 ], false );
console.log( out );
// => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

out = flatten4d( x, [ 1, 2, 2, 2 ], true );
console.log( out );
// => [ 1, 5, 3, 7, 2, 6, 4, 8 ]

out = flatten4d( x, [ 2, 2, 2, 2 ], false );
console.log( out );
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten4d( x, [ 2, 2, 2, 2 ], true );
console.log( out );
// => [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ]
