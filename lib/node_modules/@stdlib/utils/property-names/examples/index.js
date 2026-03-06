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

var defineProperty = require( '@stdlib/utils/define-property' );
var propertyNames = require( './../lib' );

function Foo() {
	this.beep = 'boop';
	this.a = {
		'b': 'c'
	};
	defineProperty( this, 'baz', {
		'value': 'qux',
		'configurable': true,
		'writable': true,
		'enumerable': false
	});
	return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var keys = propertyNames( obj );

console.log( keys );
// e.g., => [ 'beep', 'a', 'baz' ]
