/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// VARIABLES //

var COUNTER = -1; // TODO: consider another approach for unique identifier generation. For most cases, this should suffice; however, it is possible that two different libraries, both relying on separate copies of this package, may trigger id collisions in the event that instantiated instances were to interact (e.g., a consumer attempting to free an instance instantiated by another copy of the package, etc).


// MAIN //

/**
* Generates a new identifier.
*
* @private
* @returns {string} identifier
*
* @example
* var v = id();
* // returns <string>
*/
function id() {
	COUNTER += 1;
	return COUNTER.toString();
}


// EXPORTS //

module.exports = id;
