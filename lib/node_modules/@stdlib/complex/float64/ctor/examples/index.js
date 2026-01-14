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

var Complex128 = require( './../lib' );

var z = new Complex128( 3.0, -2.0 );

console.log( 'type: %s', typeof z );
// => 'type: object'

console.log( 'str: %s', z );
// => 'str: 3 - 2i'

console.log( 'real: %d', z.re );
// => 'real: 3'

console.log( 'imaginary: %d', z.im );
// => 'imaginary: -2'

console.log( 'JSON: %s', JSON.stringify( z ) );
// => 'JSON: {"type":"Complex128","re":3,"im":-2}'
