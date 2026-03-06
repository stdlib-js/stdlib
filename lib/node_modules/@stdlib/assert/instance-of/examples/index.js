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

var Number = require( '@stdlib/number/ctor' );
var instanceOf = require( './../lib' );

var bool = instanceOf( [], Array );
console.log( bool );
// => true

bool = instanceOf( [], Object );
console.log( bool );
// => true

bool = instanceOf( {}, Object );
console.log( bool );
// => true

bool = instanceOf( new Date(), Date );
console.log( bool );
// => true

bool = instanceOf( /.*/, RegExp );
console.log( bool );
// => true

bool = instanceOf( instanceOf, Function );
console.log( bool );
// => true

bool = instanceOf( null, Object );
console.log( bool );
// => false

bool = instanceOf( 5, Number );
console.log( bool );
// => false

bool = instanceOf( '5', String );
console.log( bool );
// => false

bool = instanceOf( void 0, Object );
console.log( bool );
// => false

bool = instanceOf( {}, Array );
console.log( bool );
// => false

bool = instanceOf( {}, Function );
console.log( bool );
// => false
