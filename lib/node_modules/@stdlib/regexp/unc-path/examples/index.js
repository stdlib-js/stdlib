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

var reUncPath = require( './../lib' );

var RE_UNC_PATH = reUncPath();
var bool;
var path;

path = '\\\\server\\share\\foo\\bar\\baz:a:b';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz::b';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\\\share';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\\\\\server\\share';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = 'beep boop \\\\server\\share';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a:';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz::';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a:b:c';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '//server/share';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '/foo/bar';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = 'foo/bar';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = './foo/bar';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );

path = '/foo/../bar';
bool = RE_UNC_PATH.test( path );
console.log( '%s => %s', path, bool );
