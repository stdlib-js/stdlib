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

var reFilenamePosix = require( './../lib' );

var RE_FILENAME_POSIX = reFilenamePosix();
var parts = RE_FILENAME_POSIX.exec( 'index.js' );
console.log( parts.slice() );
/* =>
	[
		'index.js',
		'',
		'',
		'index.js',
		'.js'
	]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/home.html' );
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

parts = RE_FILENAME_POSIX.exec( 'foo/file.pdf' );
console.log( parts.slice() );
/* =>
	[
		'foo/file.pdf',
		'',
		'foo/',
		'file.pdf',
		'.pdf'
	]
*/

parts = RE_FILENAME_POSIX.exec( 'beep/boop.' );
console.log( parts.slice() );
/* =>
	[
		'beep/boop.',
		'',
		'beep/',
		'boop.',
		'.'
	]
*/

parts = RE_FILENAME_POSIX.exec( '' );
console.log( parts.slice() );
/* =>
	[
		'',
		'',
		'',
		'',
		''
	]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/file' );
console.log( parts.slice() );
/* =>
	[
		'/foo/bar/file',
		'/',
		'foo/bar/',
		'file',
		''
	]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/.gitignore' );
console.log( parts.slice() );
/* =>
	[
		'/foo/bar/.gitignore',
		'/',
		'foo/bar/',
		'.gitignore',
		''
	]
*/
