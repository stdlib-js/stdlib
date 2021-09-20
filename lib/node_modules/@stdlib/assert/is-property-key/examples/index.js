/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var Symbol = require( '@stdlib/symbol/ctor' );
var isPropertyKey = require( './../lib' );

var bool = isPropertyKey( 'beep' );
console.log( bool );
// => true

bool = isPropertyKey( Symbol( 'beep' ) );
console.log( bool );
// => true

bool = isPropertyKey( Symbol.iterator );
console.log( bool );
// => true

bool = isPropertyKey( 37 );
console.log( bool );
// => true

bool = isPropertyKey( {} );
console.log( bool );
// => false

bool = isPropertyKey( [] );
console.log( bool );
// => false
