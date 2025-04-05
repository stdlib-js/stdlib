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

// MAIN //

/**
* Regular expression for testing whether a string is a serialized Cartesian index.
*
* @private
* @name RE_CARTESIAN_INDEX
* @type {RegExp}
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '10,10,10' );
* // returns true
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '10, 10' );
* // returns true
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '10, -10, 10' );
* // returns true
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '1' );
* // returns false
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '-1' );
* // returns false
*
* @example
* var bool = RE_CARTESIAN_INDEX.test( '0:10:2' );
* // returns false
*/
var RE_CARTESIAN_INDEX = /^\s*(?:-?[0-9]+)\s*(?:,\s*(?:-?[0-9]+)\s*)*,\s*(?:-?[0-9]+)\s*$/;


// EXPORTS //

module.exports = RE_CARTESIAN_INDEX;
