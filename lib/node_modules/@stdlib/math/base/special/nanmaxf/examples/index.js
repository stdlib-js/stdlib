/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var nanmaxf = require( './../lib' );

var m = nanmaxf( 3.0, 4.0 );
console.log( m );
// => 4.0

m = nanmaxf( NaN, 4.0 );
console.log( m );
// => 4.0

m = nanmaxf( 4.0, NaN );
console.log( m );
// => 4.0

m = nanmaxf( NaN, NaN );
console.log( m );
// => NaN
