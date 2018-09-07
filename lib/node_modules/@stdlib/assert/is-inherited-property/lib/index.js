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
* Test whether an object has an inherited property.
*
* @module @stdlib/assert/is-inherited-property
*
* @example
* var isInheritedProperty = require( '@stdlib/assert/is-inherited-property' );
*
* var obj = {
*     'boop': true
* };
*
* var bool = isInheritedProperty( obj, 'toString' );
* // returns true
*
* bool = isInheritedProperty( obj, 'boop' );
* // returns false
*
* bool = isInheritedProperty( obj, 'bop' );
* // returns false
*/

// MODULES //

var isInheritedProperty = require( './main.js' );


// EXPORTS //

module.exports = isInheritedProperty;
