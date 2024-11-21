/*
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

// TypeScript Version: 4.1

/**
* Interface for a regular expression to match semantic version strings.
*/
interface ReSemVer {
	/**
	* Returns a regular expression to match a semantic version string.
	*
	* @returns regular expression
	*
	* @example
	* var RE_SEMVER = reSemVer();
	* // returns <RegExp>
	*
	* var bool = RE_SEMVER.test( '1.0.0' );
	* // returns true
	*
	* bool = RE_SEMVER.test( '1.0.0-alpha.1' );
	* // returns true
	*
	* bool = RE_SEMVER.test( 'abc' );
	* // returns false
	*
	* bool = RE_SEMVER.test( '1.0.0-alpha.1+build.1' );
	* // returns true
	*/
	(): RegExp;

	/**
	* Regular expression to match a semantic version string.
	*
	* @example
	* var bool = reSemVer.REGEXP.test( '1.0.0' );
	* // returns true
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to match a semantic version string.
*
* @returns regular expression
*
* @example
* var RE_SEMVER = reSemVer();
* // returns <RegExp>
*
* var bool = RE_SEMVER.test( '1.0.0' );
* // returns true
*
* bool = RE_SEMVER.test( '1.0.0-alpha.1' );
* // returns true
*
* bool = RE_SEMVER.test( 'abc' );
* // returns false
*
* bool = RE_SEMVER.test( '1.0.0-alpha.1+build.1' );
* // returns true
*/
declare var reSemVer: ReSemVer;


// EXPORTS //

export = reSemVer;
