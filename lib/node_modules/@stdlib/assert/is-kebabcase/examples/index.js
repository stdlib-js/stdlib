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

var isKebabcase = require( './../lib' );

console.log( isKebabcase( 'beep-boop' ) );
// => true

console.log( isKebabcase( 'BEEP_BOOP' ) );
// => false

console.log( isKebabcase( 'fooBar' ) );
// => false

console.log( isKebabcase( 'foo_bar' ) );
// => false

console.log( isKebabcase( 'BeepBoop' ) );
// => false

console.log( isKebabcase( null ) );
// => false
