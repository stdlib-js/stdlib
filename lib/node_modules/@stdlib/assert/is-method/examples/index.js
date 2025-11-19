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

var isMethod = require( './../lib' );

var obj = {
	'a': isMethod
};
var bool = isMethod( obj, 'a' );
console.log( bool );
// => true

obj = {
	'a': 'b'
};
bool = isMethod( obj, 'a' );
console.log( bool );
// => false

bool = isMethod( obj, null );
console.log( bool );
// => false

bool = isMethod( {}, 'toString' );
console.log( bool );
// => false

bool = isMethod( null, 'a' );
console.log( bool );
// => false

bool = isMethod( void 0, 'a' );
console.log( bool );
// => false

obj = {
	'null': isMethod
};
bool = isMethod( obj, null );
console.log( bool );
// => true

obj = {
	'[object Object]': isMethod
};
bool = isMethod( obj, {} );
console.log( bool );
// => true
