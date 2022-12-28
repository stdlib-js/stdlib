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

var parseDuration = require( './../lib' );

var obj = parseDuration( '1m3s10ms' );
console.dir( obj );
// => { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = parseDuration( '60m' );
console.dir( obj );
// => { 'days': 0, 'hours': 0, 'minutes': 60, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '2d3h' );
console.dir( obj );
// => { 'days': 2, 'hours': 3, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '1M3S' );
console.dir( obj );
// => { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }

obj = parseDuration( '' );
console.dir( obj );
// => { 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
