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

var startcase = require( './../lib' );

var str = startcase( 'beep boop foo bar' );
console.log( str );
// => 'Beep Boop Foo Bar'

str = startcase( 'Beep' );
console.log( str );
// => 'Beep'

str = startcase( 'BeEp' );
console.log( str );
// => 'BeEp'

str = startcase( '$**_beep_BoOp_**$' );
console.log( str );
// => '$**_beep_BoOp_**$'

str = startcase( '' );
console.log( str );
// => ''
