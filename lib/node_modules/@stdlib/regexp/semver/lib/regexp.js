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

// MODULES //

var reSemVer = require( './main.js' );


// MAIN //

/**
* Matches a semantic version string.
*
* Regular Expression: `/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/`
*
* -   `^`
*     -   start of input
*
* -   `(0|[1-9]\d*)`
*     -   `0` or a non-zero digit followed by zero or more digits (major version)
*
* -   `\.`
*     -   match literal period
*
* -   `(0|[1-9]\d*)`
*     -   `0` or a non-zero digit followed by zero or more digits (minor version)
*
* -   `\.`
*     -   match literal period
*
* -   `(0|[1-9]\d*)`
*     -   `0` or a non-zero digit followed by zero or more digits (patch version)
*
* -   `(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?`
*     -   optional pre-release version
*
* -   `(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?`
*     -   optional build metadata
*
* -   `$`
*     -   end of input
*
* @constant
* @type {RegExp}
* @default /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
* @see [semver-regexp]{@link https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string}
*/
var RE_SEMVER = reSemVer();


// EXPORTS //

module.exports = RE_SEMVER;
