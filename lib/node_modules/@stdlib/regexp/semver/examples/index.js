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

var reSemVer = require( './../lib' );

var RE_SEMVER = reSemVer();
var version;
var bool;

version = '1.0.0';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = '1.0.0-alpha.1';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = '1.0.0-alpha.1+build.1';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = '1.0.0-alpha.1+build.1.2.b8f12d7';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = '1.2';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = '-1.2.3';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );

version = 'a.b.c';
bool = RE_SEMVER.test( version );
console.log( '%s => %s', version, bool );
