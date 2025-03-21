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

var convertPath = require( './../lib' );

var p1;
var p2;

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'win32' );
console.log( '%s => win32 => %s', p1, p2 );

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'mixed' );
console.log( '%s => mixed => %s', p1, p2 );

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'posix' );
console.log( '%s => posix => %s', p1, p2 );

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'win32' );
console.log( '%s => win32 => %s', p1, p2 );

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'mixed' );
console.log( '%s => mixed => %s', p1, p2 );

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'posix' );
console.log( '%s => posix => %s', p1, p2 );
