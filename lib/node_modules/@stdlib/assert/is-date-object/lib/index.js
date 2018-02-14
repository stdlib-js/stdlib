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

/**
* Test if a value is a `Date` object.
*
* @module @stdlib/assert/is-date-object
*
* @example
* var isDateObject = require( '@stdlib/assert/is-date-object' );
*
* var bool = isDateObject( new Date() );
* // returns true
*
* bool = isDateObject( '2017-01-01' );
* // returns false
*/

// MODULES //

var isDateObject = require( './main.js' );


// EXPORTS //

module.exports = isDateObject;
