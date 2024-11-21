/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var codePointAt = require( './../lib' );

console.log( codePointAt( 'last man standing', 4 ) );
// => 32

console.log( codePointAt( 'presidential election', 8, true ) );
// => 116

console.log( codePointAt( 'अनुच्छेद', 2 ) );
// => 2369

console.log( codePointAt( '🌷', 1, true ) );
// => 127799
