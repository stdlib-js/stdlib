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

/* eslint-disable no-new-func */

'use strict';

// VARIABLES //

var scope;


// FUNCTIONS //

/**
* Test if the global scope is bound to the "window" variable present in browser environments. When creating a new function using the `Function(){}` constructor, the execution scope aliased by the `this` variable is the global scope.
*
* @private
* @returns {boolean} boolean indicating if global scope is bound to "window" variable
*/
function globalScope() {
	var fcn = '';
	fcn += 'try {';
	fcn += 'return this === window;';
	fcn += '} catch ( err ) {';
	fcn += 'return false;';
	fcn += '}';
	return (new Function( fcn ))();
}


// MAIN //

scope = globalScope();


// EXPORTS //

module.exports = scope;
