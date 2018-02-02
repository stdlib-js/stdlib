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

var isUNCPath = require( './../lib' );

var bool;
var path;

path = '\\\\server\\share\\foo\\bar\\baz:a:b';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz::b';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\\\share';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\\\\\server\\share';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = 'beep boop \\\\server\\share';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a:';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz::';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\baz:a:b:c';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '\\\\server\\share\\foo\\bar\\';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '//server/share';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '/foo/bar';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = 'foo/bar';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = './foo/bar';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );

path = '/foo/../bar';
bool = isUNCPath( path );
console.log( '%s => %s', path, bool );
