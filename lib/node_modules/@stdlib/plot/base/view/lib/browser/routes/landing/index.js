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

var schema = require( './schema.json' );
var handler = require( './main.js' );


// MAIN //

/**
* Defines a route handler for returning a landing page.
*
* @private
* @returns {Object} route declaration
*/
function route() {
	schema.handler = handler;
	return schema;
}


// EXPORTS //

module.exports = route;
