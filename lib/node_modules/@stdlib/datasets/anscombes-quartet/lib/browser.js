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

var copy = require( '@stdlib/utils/copy' );
var d = require( './../data/data.json' );


// MAIN //

/**
* Returns Anscombe's quartet.
*
* @returns {ArrayArray} Anscombe's quartet
*
* @example
* var d = data();
* // returns [[[10,8.04],...],[[10,9.14],...],[[10,7.46],...],[[8,6.58],...]]
*/
function data() {
	return copy( d );
}


// EXPORTS //

module.exports = data;
