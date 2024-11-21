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

/* eslint-disable no-restricted-syntax */

'use strict';

var inherit = require( './../lib' );

function Foo() {
	return this;
}
Foo.prototype = {};
Foo.prototype.beep = function beep() {
	return 'boop';
};

function Bar() {
	Foo.call( this );
	this._super = Foo.prototype;
	return this;
}

// Set up classical prototypical inheritance:
inherit( Bar, Foo );

var bar = new Bar();

console.log( bar instanceof Bar );
// => true

console.log( bar instanceof Foo );
// => true

console.log( bar.beep() );
// => 'boop'
