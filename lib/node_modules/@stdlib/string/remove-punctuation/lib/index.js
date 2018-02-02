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
* Remove punctuation characters from a string.
*
* @module @stdlib/string/remove-punctuation
*
* @example
* var removePunctuation = require( '@stdlib/string/remove-punctuation' );
*
* var out = removePunctuation( 'Sun Tzu said: "A leader leads by example not by force."' );
* // returns 'Sun Tzu said A leader leads by example not by force'
*
* out = removePunctuation( 'Double, double, toil and trouble; Fire burn, and cauldron bubble!' ) );
* // returns 'Double double toil and trouble Fire burn and cauldron bubble'
*/

// MODULES //

var removePunctuation = require( './remove_punctuation.js' );


// EXPORTS //

module.exports = removePunctuation;
