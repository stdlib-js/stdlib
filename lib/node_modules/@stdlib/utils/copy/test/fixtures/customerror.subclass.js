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

// MAIN //

/**
* Creates a CustomError class constructor. Note that we use function generation so that tests may be run in browsers not supporting ES2015 classes. This function may be loaded in non-ES2015 environments, but should only be invoked when ES2015 classes are supported.
*
* @private
* @returns {Function} constructor
*/
function createClass() {
	var str = '';
	str += '(function create() {';
	str += 'class CustomError extends Error {';
	str += 'constructor( msg ) {';
	str += 'super( msg );';
	str += '}';
	str += '}';
	str += 'return CustomError;';
	str += '})()';
	return eval( str ); // eslint-disable-line no-eval
}


// EXPORTS //

module.exports = createClass;
