/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var EPS = require( '@stdlib/constants/float32/eps' );
var isAlmostEqualf = require( './../lib' );

var bool = isAlmostEqualf( 1.0, 1.0+EPS, 1 );
console.log( bool );
// => true

bool = isAlmostEqualf( 1.0+EPS, 1.0, 1 );
console.log( bool );
// => true

bool = isAlmostEqualf( 1.0, 1.0+EPS+EPS, 1 );
console.log( bool );
// => false

bool = isAlmostEqualf( 1.0, 1.0+EPS, 0 );
console.log( bool );
// => false

bool = isAlmostEqualf( -0.0, 0.0, 0 );
console.log( bool );
// => true

bool = isAlmostEqualf( 1.0, NaN, 1 );
console.log( bool );
// => false

bool = isAlmostEqualf( NaN, NaN, 1 );
console.log( bool );
// => false
