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

/**
* Return a regular expression to match a semantic version string.
*
* @module @stdlib/regexp/semver
*
* @example
* var reSemVer = require( '@stdlib/regexp/semver' );
*
* var RE_SEMVER = reSemVer();
* // returns <RegExp>
*
* var bool = RE_SEMVER.test( '1.2.3' );
* // returns true
*
* bool = RE_SEMVER.test( '1.2.3-alpha' );
* // returns true
*
* bool = RE_SEMVER.test( '-1.2.3' );
* // returns false
*
* @example
* var reSemVer = require( '@stdlib/regexp/semver' );
*
* var bool = reSemVer.REGEXP.test( '1.2.3' );
* // returns true
*/


// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( main, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = main;
