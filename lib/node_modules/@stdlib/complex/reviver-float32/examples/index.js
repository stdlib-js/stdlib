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

var Complex64 = require( '@stdlib/complex/float32' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviver = require( './../lib' );

var z = new Complex64( 5.0, 3.0 );
var str = JSON.stringify( z );
console.log( str );
// => '{"type":"Complex64","re":5,"im":3}'

var w = parseJSON( str, reviver );
if ( w instanceof Error ) {
	throw w;
}
var bool = ( w instanceof z.constructor );
console.log( bool );
// => true

bool = ( w.re === z.re );
console.log( bool );
// => true

bool = ( w.im === z.im );
console.log( bool );
// => true
