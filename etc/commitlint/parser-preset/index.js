/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var config = require( 'conventional-changelog-conventionalcommits' );


// MAIN //

/**
* Parser configuration.
*
* @name conf
* @type {Object}
*/
var conf = config({
	// Define an array of prefixes used to detect references to issues:
	'issuePrefixes': [
		'#',
		'gh-'
	],

	// Define a pattern to match a reverted commit:
	'revertPattern': /^Revert\s([\s\S]*)\s*This reverts commit (\w*)\./
});


// EXPORTS //

module.exports = conf;
