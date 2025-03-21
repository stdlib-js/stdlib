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

/* eslint-disable object-curly-newline, object-curly-spacing */

'use strict';

var flattenArray = require( './../lib' );

var opts = {
	'copy': true
};

var flatten = flattenArray.factory( [3, 3], opts );

var arr = [
	[ 1, 2, 3 ],
	[ 4, {'x': 5}, 6 ],
	[ 7, 8, 9 ]
];

var out = flatten( arr );
console.log( out );
// => [ 1, 2, 3, 4, {'x':5}, 6, 7, 8, 9 ]

console.log( arr[1][1] === out[4] );
// => false
