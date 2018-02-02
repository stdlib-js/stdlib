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
* Remove a UTF-8 byte order mark (BOM) from the beginning of a string.
*
* @module @stdlib/string/remove-utf8-bom
*
* @example
* var removeUTF8BOM = require( '@stdlib/string/remove-utf8-bom' );
*
* var str = removeUTF8BOM( '\ufeffbeep' );
* // returns 'beep'
*/

// MODULES //

var removeUTF8BOM = require( './remove_utf_8_bom.js' );


// EXPORTS //

module.exports = removeUTF8BOM;
