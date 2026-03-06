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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isAbsolutePath = require( '@stdlib/assert/is-absolute-path' ).posix;


// MAIN //

/**
* Tests if a value is a POSIX relative path.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a POSIX relative path
*
* @example
* var bool = isRelativePath( './foo/bar/baz' );
* // returns true
*
* @example
* var bool = isRelativePath( '/foo/../bar/baz' );
* // returns false
*/
function isRelativePath( value ) {
	return (
		isString( value ) &&
		!isAbsolutePath( value )
	);
}


// EXPORTS //

module.exports = isRelativePath;
