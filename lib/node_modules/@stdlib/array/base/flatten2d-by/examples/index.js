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

var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var flatten2dBy = require( './../lib' );

var fcn = naryFunction( abs, 1 );

var x = [
	[ -1, -2, -3, -4 ],
	[ -5, -6, -7, -8 ],
	[ -9, -10, -11, -12 ],
	[ -13, -14, -15, -16 ]
];

var out = flatten2dBy( x, [ 0, 0 ], false, fcn );
console.log( out );
// => []

out = flatten2dBy( x, [ 0, 0 ], true, fcn );
console.log( out );
// => []

out = flatten2dBy( x, [ 1, 1 ], false, fcn );
console.log( out );
// => [ 1 ]

out = flatten2dBy( x, [ 1, 1 ], true, fcn );
console.log( out );
// => [ 1 ]

out = flatten2dBy( x, [ 2, 2 ], false, fcn );
console.log( out );
// => [ 1, 2, 5, 6 ]

out = flatten2dBy( x, [ 2, 2 ], true, fcn );
console.log( out );
// => [ 1, 5, 2, 6 ]

out = flatten2dBy( x, [ 3, 3 ], false, fcn );
console.log( out );
// => [ 1, 2, 3, 5, 6, 7, 9, 10, 11 ]

out = flatten2dBy( x, [ 3, 3 ], true, fcn );
console.log( out );
// => [ 1, 5, 9, 2, 6, 10, 3, 7, 11 ]

out = flatten2dBy( x, [ 4, 4 ], false, fcn );
console.log( out );
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten2dBy( x, [ 4, 4 ], true, fcn );
console.log( out );
// => [ 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16 ]
