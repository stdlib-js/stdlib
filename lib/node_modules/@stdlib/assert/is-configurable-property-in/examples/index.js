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

var isConfigurablePropertyIn = require( './../lib' );

var v = {
	'a': 'b'
};
var bool = isConfigurablePropertyIn( v, 'a' );
console.log( bool );
// => true

bool = isConfigurablePropertyIn( [ 'a' ], 0 );
console.log( bool );
// => true

v = {
	'null': false
};
bool = isConfigurablePropertyIn( v, null );
console.log( bool );
// => true

v = {
	'[object Object]': false
};
bool = isConfigurablePropertyIn( v, {} );
console.log( bool );
// => true

bool = isConfigurablePropertyIn( {}, 'toString' );
console.log( bool );
// => true

bool = isConfigurablePropertyIn( {}, 'hasOwnProperty' );
console.log( bool );
// => true

bool = isConfigurablePropertyIn( [ 'a' ], 'length' );
console.log( bool );
// => false

bool = isConfigurablePropertyIn( null, 'a' );
console.log( bool );
// => false

bool = isConfigurablePropertyIn( void 0, 'a' );
console.log( bool );
// => false
