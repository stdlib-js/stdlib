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

var fmtprodmsgFactory = require( './../lib' );

var formatProdErrorMessage = fmtprodmsgFactory();
var msg = formatProdErrorMessage( '3', 'foo' );
console.log( msg );
// => 'Minified stdlib error code: 3. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=3&arg[]=foo for the full message.'

msg = formatProdErrorMessage( '5', 'foo', 'bar' );
console.log( msg );
// => 'Minified stdlib error code: 5. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=5&arg[]=foo&arg[]=bar for the full message.'

msg = formatProdErrorMessage( '5', 'foo', 'bar', 123 );
console.log( msg );
// => 'Minified stdlib error code: 5. Visit https://stdlib.io/docs/api/latest/error-decoder.html?code=5&arg[]=foo&arg[]=bar&arg[]=123 for the full message.'
