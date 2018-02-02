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

// MODULES //

var inherit = require( '@stdlib/utils/inherit' );
var Runner = require( './../../lib/runner' );


// MAIN //

/**
* Mock benchmark runner.
*
* @private
* @returns {Mock} mock benchmark runner
*/
function Mock() {
	if ( !( this instanceof Mock ) ) {
		return new Mock();
	}
	Runner.call( this );
	return this;
}

/*
* Inherit from the `Runner` prototype.
*/
inherit( Mock, Runner );


/**
* Stubs the `run` method.
*
* @private
*/
Mock.prototype.run = function run() {
	// No-op...
};


// EXPORTS //

module.exports = Mock;
