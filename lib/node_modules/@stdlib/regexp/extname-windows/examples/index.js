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

var reExtnameWindows = require( './../lib' );

var RE_EXTNAME_WINDOWS = reExtnameWindows();
var ext;

ext = RE_EXTNAME_WINDOWS.exec( 'index.js' )[ 1 ];
console.log( ext );
// => '.js'

ext = RE_EXTNAME_WINDOWS.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( ext );
// => '.html'

ext = RE_EXTNAME_WINDOWS.exec( 'foo\\file.pdf' )[ 1 ];
console.log( ext );
// => '.pdf'

ext = RE_EXTNAME_WINDOWS.exec( 'beep\\boop.' )[ 1 ];
console.log( ext );
// => '.'

ext = RE_EXTNAME_WINDOWS.exec( '' )[ 1 ];
console.log( ext );
// => ''

ext = RE_EXTNAME_WINDOWS.exec( '\\foo\\bar\\file' )[ 1 ];
console.log( ext );
// => ''

ext = RE_EXTNAME_WINDOWS.exec( 'C:\\foo\\bar\\.gitignore' )[ 1 ];
console.log( ext );
// => ''
