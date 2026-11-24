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

var isEnumerableProperty = require( './../lib' );

var obj = {
	'a': 'b'
};
var bool = isEnumerableProperty( obj, 'a' );
console.log( bool );
// => true

bool = isEnumerableProperty( [ 'a' ], 0 );
console.log( bool );
// => true

bool = isEnumerableProperty( [ 'a' ], 'length' );
console.log( bool );
// => false

bool = isEnumerableProperty( {}, 'toString' );
console.log( bool );
// => false

bool = isEnumerableProperty( {}, 'hasOwnProperty' );
console.log( bool );
// => false

bool = isEnumerableProperty( null, 'a' );
console.log( bool );
// => false

bool = isEnumerableProperty( void 0, 'a' );
console.log( bool );
// => false

obj = {
	'null': false
};
bool = isEnumerableProperty( obj, null );
console.log( bool );
// => true

obj = {
	'[object Object]': false
};
bool = isEnumerableProperty( obj, {} );
console.log( bool );
// => true
