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

var atob = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare

var str = 'SGVsbG8gV29ybGQh';
var out = atob( str );
console.log( out );
// => 'Hello World!'

str = 'SEVMTE8gV09STEQh';
out = atob( str );
console.log( out );
// => 'HELLO WORLD!'

str = 'VG8gYmUsIG9yIG5vdCB0byBiZTogdGhhdCBpcyB0aGUgcXVlc3Rpb24u';
out = atob( str );
console.log( out );
// => 'To be, or not to be: that is the question.'
