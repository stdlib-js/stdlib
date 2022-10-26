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

var ms2duration = require( './../lib' );

var duration = ms2duration( 1030 );
console.log( duration );
// => '1s30ms'

duration = ms2duration( 3600000 );
console.log( duration );
// => '1h'

duration = ms2duration( 0 );
console.log( duration );
// => '0ms'

duration = ms2duration( 86400000 );
console.log( duration );
// => '1d'

duration = ms2duration( 86400000+3600000+60000+1000+100 );
console.log( duration );
// => '1d1h1m1s100ms'
