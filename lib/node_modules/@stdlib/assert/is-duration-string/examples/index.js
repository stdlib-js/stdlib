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

var isDurationString = require( './../lib' );

var bool = isDurationString( '1h' );
console.log( bool );
// => true

bool = isDurationString( '1m20ms' );
console.log( bool );
// => true

bool = isDurationString( '1d 2h 3m 4s' );
console.log( bool );
// => false

bool = isDurationString( 'beep' );
console.log( bool );
// => false

bool = isDurationString( null );
console.log( bool );
// => false
