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

var isCircular = require( './../lib' );

var obj1 = {
	'a': 'beep',
	'b': {
		'c': 'boop'
	}
};
obj1.b.self = obj1;
console.log( isCircular( obj1 ) );
// => true

var obj2 = {
	'a': {},
	'b': obj1
};
console.log( isCircular( obj2 ) );
// => true

var arr = [ 1, 2, 3 ];
arr.push( arr );
console.log( isCircular( arr ) );
// => true

function circ() {} // eslint-disable-line no-empty-function
circ.self = circ;
console.log( isCircular( circ ) );
// => true

var obj3 = {
	'beep': 'boop'
};
console.log( isCircular({
	'a': obj3,
	'b': obj3
}) );
// => false

console.log( isCircular( {} ) );
// => false

console.log( isCircular( null ) );
// => false
