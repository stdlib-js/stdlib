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

var arrayShape = require( './../lib' );

var shape;
var arr;

arr = [ 1, 2, 3 ];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3

arr = [
	[ 1 ],
	[ 2 ],
	[ 3 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3x1

arr = [
	[],
	[],
	[]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3x0

arr = [
	[ 1, 2, 3 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 1x3

arr = [
	[ [ 1 ] ],
	[ [ 2 ] ],
	[ [ 3 ] ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3x1x1

arr = [ [ [ [ 1, 2, 3 ] ] ] ];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 1x1x1x3

arr = [
	[ 1, 2 ],
	[ 3, 4 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 2x2

arr = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3x3

arr = [
	[ 1, 2, 3 ],
	null,
	[ 7, 8, 9 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3

arr = [
	[ 1, 2, 3 ],
	[ [ 4, 5, 6 ] ],
	[ [ 7, 8, 9 ] ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3

arr = [
	[ [ 1, 2, 3 ] ],
	[ 4, 5, 6 ],
	[ [ 7, 8, 9 ] ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3

arr = [
	[ [ 1, 2, 3 ] ],
	[ [ 4, 5, 6 ] ],
	[ 7, 8, 9 ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3

arr = [
	[ [ [ 1, 2, 3 ] ] ],
	[ [ 4, 5, 6 ] ],
	[ [ [ 7, 8, 9 ] ] ]
];
shape = arrayShape( arr );
console.log( shape.join( 'x' ) );
// => 3x1
