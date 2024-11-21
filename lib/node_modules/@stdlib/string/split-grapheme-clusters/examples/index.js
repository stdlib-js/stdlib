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

var splitGraphemeClusters = require( './../lib' );

var out = splitGraphemeClusters( 'abc' );
console.log( out );
// => [ 'a', 'b', 'c' ]

out = splitGraphemeClusters( 'Iñtërnâtiônàlizætiøn' );
console.log( out );
// => [ 'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n' ]

out = splitGraphemeClusters( '\uD834\uDD1E' );
console.log( out );
// => [ '𝄞' ]

out = splitGraphemeClusters( '! !' );
console.log( out );
// => [ '!', ' ', '!' ]

out = splitGraphemeClusters( '' );
console.log( out );
// => []
