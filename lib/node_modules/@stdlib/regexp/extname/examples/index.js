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

var reExtname = require( './../lib' );
var RE_EXTNAME = reExtname();
var ext;

// Assuming a POSIX platform...
ext = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
console.log( ext );
// => '.js'

ext = reExtname.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
console.log( ext );
// => '.html'

ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( ext );
// => '.html'
