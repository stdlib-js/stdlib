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

var namedtypedtuple = require( './../lib' );

var fields = [ 'x', 'y' ];
var opts = {
	'name': 'Point'
};

var Point = namedtypedtuple( fields, opts );

var p = new Point( [ 1.0, -1.0 ] );

// Tuple elements can be accessed by index or name:
var x = p[ 0 ];
console.log( x );
// => 1.0

x = p.x;
console.log( x );
// => 1.0

var y = p[ 1 ];
console.log( y );
// => -1.0

y = p.y;
console.log( y );
// => -1.0

// Sort tuple elements while retaining name access:
p.sort();
console.log( 'p[0]=%d, p[1]=%d, x=%d, y=%d', p[ 0 ], p[ 1 ], p.x, p.y );

// Retrieve the tuple fields in index order:
console.log( p.orderedFields );
// => [ 'y', 'x' ]

// Serialize the tuple as a string:
console.log( p.toString() );

// Serialize the tuple a JSON string:
console.log( JSON.stringify( p ) );
