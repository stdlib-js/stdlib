/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var msg2id = require( './../lib' );

var list;
var v;
var i;

list = [
	'invalid argument. First argument must be a number and not NaN. Value: `%s`.',
	'invalid argument. First argument must be a positive integer. Value: `%s`.'
];

for ( i = 0; i < list.length; i++ ) {
	v = list[ i ];
	console.log( 'msg: "%s". id: "%s".', v, msg2id( v ) );
}
