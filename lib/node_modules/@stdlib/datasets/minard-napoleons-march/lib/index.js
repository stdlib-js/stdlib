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
* Data for Charles Joseph Minard's cartographic depiction of Napoleon's Russian campaign of 1812.
*
* @module @stdlib/datasets/minard-napoleons-march
*
* @example
* var minard = require( '@stdlib/datasets/minard-napoleons-march' );
*
* var data = minard();
* // returns {...}
*
* @example
* var minard = require( '@stdlib/datasets/minard-napoleons-march' );
*
* var opts = {
*     'data': 'army'
* };
*
* var data = minard( opts );
* // returns [{...},{...},...]
*/

// MODULES //

var minard = require( './main.js' );


// EXPORTS //

module.exports = minard;
