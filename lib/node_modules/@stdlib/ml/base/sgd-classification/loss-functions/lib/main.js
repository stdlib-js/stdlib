/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var DATA = require( './data.json' );


// MAIN //

/**
* Returns a list of SGD classification loss functions.
*
* @returns {Array<string>} list of loss functions
*
* @example
* var list = lossFunctions();
* // e.g., returns [ 'epsilon-insensitive', 'hinge', 'huber', 'log', 'modified-huber', 'perceptron', 'squared-epsilon-insensitive', 'squared-error', 'squared-hinge' ]
*/
function lossFunctions() {
	return DATA.slice();
}


// EXPORTS //

module.exports = lossFunctions;
