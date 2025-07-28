/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var assignIn = require( './../lib' );

function Foo() {
	this.a = 1;
	return this;
}

Foo.prototype.b = 2;

function Bar() {
	this.c = 3;
	return this;
}

Bar.prototype.d = 4;

var obj1 = new Foo();
var obj2 = new Bar();

var result = assignIn( {}, obj1, obj2 );
console.log( result );
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
