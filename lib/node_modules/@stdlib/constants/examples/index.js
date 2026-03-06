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

var constants = require( './../lib' );

var out = constants.float64.PI;
console.log( out );
// => ~3.142

out = constants.array.MAX_ARRAY_LENGTH;
console.log( out );
// => 4294967295

out = constants.time.HOURS_IN_DAY;
console.log( out );
// => 24
