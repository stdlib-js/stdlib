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

var reFilename = require( './../lib' );
var RE_FILENAME = reFilename();

// Assuming a POSIX platform...
var parts = RE_FILENAME.exec( '/foo/bar/index.js' );
console.log( parts.slice() );
/* =>
	[
		'/foo/bar/index.js',
		'/',
		'foo/bar/',
		'index.js',
		'.js'
	]
*/

parts = reFilename.REGEXP_POSIX.exec( '/foo/bar/home.html' );
console.log( parts.slice() );
/* =>
	[
		'/foo/bar/home.html',
		'/',
		'foo/bar/',
		'home.html',
		'.html'
	]
*/

parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' );
console.log( parts.slice() );
/* =>
	[
		'C:\\foo\\bar\\home.html',
		'C:',
		'\\',
		'foo\\bar\\',
		'home.html',
		'.html'
	]
*/
