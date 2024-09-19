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

var string2buffer = require( '@stdlib/buffer/from-string' );
var base64ToUint8Array = require( './../lib' );

var buf = string2buffer( 'Hello World!' ).toString( 'base64' );
// returns 'SGVsbG8gV29ybGQh'

var arr = base64ToUint8Array( buf );
console.log( arr );

buf = string2buffer( 'HELLO WORLD!' ).toString( 'base64' );
// returns 'SEVMTE8gV09STEQh'

arr = base64ToUint8Array( buf );
console.log( arr );

buf = string2buffer( 'To be, or not to be: that is the question.' ).toString( 'base64' );
// returns 'VG8gYmUsIG9yIG5vdCB0byBiZTogdGhhdCBpcyB0aGUgcXVlc3Rpb24u'

arr = base64ToUint8Array( buf );
console.log( arr );
