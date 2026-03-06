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

var data = require( './../data/words.json' );


// MAIN //

/**
* Returns a list of German stop words.
*
* @returns {StringArray} stop words
*
* @example
* var list = stopwords();
* // returns [ 'a', 'ab', 'aber', 'ach', ... ]
*/
function stopwords() {
	return data.slice();
}


// EXPORTS //

module.exports = stopwords;
