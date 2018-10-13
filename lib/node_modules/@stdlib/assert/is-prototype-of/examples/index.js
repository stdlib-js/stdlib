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

var inherit = require( '@stdlib/utils/inherit' );
var isPrototypeOf = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare

function A() {
	return this;
}

function B() {
	return this;
}
inherit( B, A );

function C() {
	return this;
}
inherit( C, B );

function D() {
	return this;
}
inherit( D, C );

var a = new A();
var b = new B();
var c = new C();
var d = new D();

var bool = isPrototypeOf( d, C.prototype );
console.log( 'd --> ... --> C? %s.', bool );
// => 'd --> ... --> C? true.'

bool = isPrototypeOf( d, B.prototype );
console.log( 'd --> ... --> B? %s.', bool );
// => 'd --> ... --> B? true.'

bool = isPrototypeOf( d, A.prototype );
console.log( 'd --> ... --> A? %s.', bool );
// => 'd --> ... --> A? true.'

bool = isPrototypeOf( c, B.prototype );
console.log( 'c --> ... --> B? %s.', bool );
// => 'c --> ... --> B? true.'

bool = isPrototypeOf( c, A.prototype );
console.log( 'c --> ... --> A? %s.', bool );
// => 'c --> ... --> A? true.'

bool = isPrototypeOf( c, D.prototype );
console.log( 'c --> ... --> D? %s.', bool );
// => 'c --> ... --> D? false.'

bool = isPrototypeOf( b, A.prototype );
console.log( 'b --> ... --> A? %s.', bool );
// => 'b --> ... --> A? true.'

bool = isPrototypeOf( b, C.prototype );
console.log( 'b --> ... --> C? %s.', bool );
// => 'b --> ... --> C? false.'

bool = isPrototypeOf( b, D.prototype );
console.log( 'b --> ... --> D? %s.', bool );
// => 'b --> ... --> D? false.'

bool = isPrototypeOf( a, B.prototype );
console.log( 'a --> ... --> B? %s.', bool );
// => 'a --> ... --> B? false.'

bool = isPrototypeOf( a, C.prototype );
console.log( 'a --> ... --> C? %s.', bool );
// => 'a --> ... --> C? false.'

bool = isPrototypeOf( a, D.prototype );
console.log( 'a --> ... --> D? %s.', bool );
// => 'a --> ... --> D? false.'
