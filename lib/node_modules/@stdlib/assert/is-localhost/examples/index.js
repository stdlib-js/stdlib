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

var isLocalhost = require( './../lib' );

var bool = isLocalhost( 'localhost' );
console.log( bool );
// => true

bool = isLocalhost( '127.0.0.1' );
console.log( bool );
// => true

bool = isLocalhost( '[::1]' );
console.log( bool );
// => true

bool = isLocalhost( 'wikipedia.org' );
console.log( bool );
// => false

bool = isLocalhost( 'stdlib.io' );
console.log( bool );
// => false

bool = isLocalhost( null );
console.log( bool );
// => false
