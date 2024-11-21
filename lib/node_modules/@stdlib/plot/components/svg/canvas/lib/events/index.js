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

var EVENTS = require( './events.json' );


// MAIN //

/**
* Provided a property, returns a corresponding event name for when a property value changes.
*
* @private
* @param {string} prop - property
* @returns {string} event name
*/
function get( prop ) {
	return EVENTS[ prop ];
}


// EXPORTS //

module.exports = get;
