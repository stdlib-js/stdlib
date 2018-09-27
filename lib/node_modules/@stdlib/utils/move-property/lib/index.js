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
* Move a property from one object to another object.
*
* @module @stdlib/utils/move-property
*
* @example
* var moveProperty = require( '@stdlib/utils/move-property' );
*
* var obj1 = { 'a': 'b' };
* var obj2 = {};
*
* var bool = moveProperty( obj1, 'a', obj2 );
* // returns true
*
* bool = moveProperty( obj1, 'c', obj2 );
* // returns false
*/

// MODULES //

var moveProperty = require( './move_property.js' );


// EXPORTS //

module.exports = moveProperty;
