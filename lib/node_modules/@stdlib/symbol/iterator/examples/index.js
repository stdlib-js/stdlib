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

var IteratorSymbol = require( './../lib' );

function done( value ) {
	if ( arguments.length === 0 ) {
		return {
			'done': true
		};
	}
	return {
		'value': value,
		'done': true
	};
}

function iterator() {
	var iter;
	var i;

	i = -1;

	iter = {};
	iter.next = next;
	iter.return = done;

	if ( IteratorSymbol ) {
		// Allow the iterator to work with `for...of`:
		iter[ IteratorSymbol ] = iterator;
	}
	return iter;

	function next() {
		i += 1;
		return {
			'value': i,
			'done': false
		};
	}
}

var obj = iterator();
var v;
while ( v === void 0 || ( v.value < 10 && v.done === false ) ) {
	v = obj.next();
	console.log( v.value );
}
