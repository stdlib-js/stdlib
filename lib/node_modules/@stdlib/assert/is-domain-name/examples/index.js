/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isDomainName = require( './../lib' );

var bool = isDomainName( 'www.example.com' );
console.log( bool );
// => true

bool = isDomainName( 'foo@bar.com' );
console.log( bool );
// => false

bool = isDomainName( 'beep boop' );
console.log( bool );
// => false

bool = isDomainName( null );
console.log( bool );
// => false

bool = isDomainName( 5.0 );
console.log( bool );
// => false
