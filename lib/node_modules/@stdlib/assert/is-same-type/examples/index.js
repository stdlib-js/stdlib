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

var isSameType = require( './../lib' );

console.log( isSameType( true, false ) );
// => true

console.log( isSameType( 3.14, -3.14 ) );
// => true

console.log( isSameType( {}, [] ) );
// => true

console.log( isSameType( null, null ) );
// => true

console.log( isSameType( NaN, NaN ) );
// => true

console.log( isSameType( null, NaN ) );
// => false

console.log( isSameType( 0.0, '0.0' ) );
// => false
