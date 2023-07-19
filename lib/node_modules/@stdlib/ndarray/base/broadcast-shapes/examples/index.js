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

var lpad = require( '@stdlib/string/left-pad' );
var broadcastShapes = require( './../lib' );

var shapes;
var out;
var sh;
var i;
var j;

function shape2string( shape ) {
	return lpad( shape.join( ' x ' ), 20, ' ' );
}

shapes = [
	[ [ 1, 2 ], [ 2 ] ],
	[ [ 1, 1 ], [ 3, 4 ] ],
	[ [ 6, 7 ], [ 5, 6, 1 ], [ 7 ], [ 5, 1, 7 ] ],
	[ [ 1, 3 ], [ 3, 1 ] ],
	[ [ 1 ], [ 3 ] ],
	[ [ 2 ], [ 3, 2 ] ],
	[ [ 2, 3 ], [ 2, 3 ], [ 2, 3 ], [ 2, 3 ] ],
	[ [ 1, 2 ], [ 1, 2 ] ]
];

for ( i = 0; i < shapes.length; i++ ) {
	sh = shapes[ i ];
	for ( j = 0; j < sh.length; j++ ) {
		console.log( shape2string( sh[ j ] ) );
	}
	console.log( lpad( '', 20, '-' ) );

	out = broadcastShapes( sh );
	console.log( shape2string( out )+'\n' );
}
