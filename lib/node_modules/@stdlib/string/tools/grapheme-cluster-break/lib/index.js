/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Grapheme cluster break tooling.
*
* @module @stdlib/string/tools/grapheme-cluster-break
*
* @example
* var grapheme = require( '@stdlib/string/tools/grapheme-cluster-break' );
*
* var out = grapheme.emojiProperty( 0x23EC );
* // returns 101
*
* out = grapheme.breakProperty( 0x008f );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var constants = require( './constants.js' );
var breakType = require( './break_type.js' );
var emojiProperty = require( './emoji_property.js' );
var breakProperty = require( './break_property.js' );


// MAIN //

var main = {};
setReadOnly( main, 'constants', constants );
setReadOnly( main, 'breakType', breakType );
setReadOnly( main, 'emojiProperty', emojiProperty );
setReadOnly( main, 'breakProperty', breakProperty );


// EXPORTS //

module.exports = main;
