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

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number/ctor' );
var isSafeIntegerArray = require( './../lib' );

var bool = isSafeIntegerArray( [ -5, 0, 2, 5 ] );
console.log( bool );
// => true

bool = isSafeIntegerArray( [ -4, -3, 1, 3 ] );
console.log( bool );
// => true

bool = isSafeIntegerArray( [ -1, new Number( -6 ), 2 ] );
console.log( bool );
// => true

bool = isSafeIntegerArray( [ 1e100, 2e200, 3e300 ] );
console.log( bool );
// => false

bool = isSafeIntegerArray( [ -1, 'abc', 3 ] );
console.log( bool );
// => false

bool = isSafeIntegerArray( [ -2.3, 0, 3 ] );
console.log( bool );
// => false

bool = isSafeIntegerArray( [] );
console.log( bool );
// => false
