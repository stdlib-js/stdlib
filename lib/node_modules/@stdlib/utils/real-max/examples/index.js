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

var realmax = require( './../lib' );

var m = realmax( 'float64' );
console.log( m );
// => 1.7976931348623157e+308

m = realmax( 'float32' );
console.log( m );
// => 3.4028234663852886e+38

m = realmax( 'float16' );
console.log( m );
// => 65504.0
