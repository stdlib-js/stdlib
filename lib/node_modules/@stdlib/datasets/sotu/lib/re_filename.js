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
* Regular expression to capture various parts of a data file filename.
*
* Regular expression: `/^([0-9]{4})_([\S\s]+)_([a-z]+)\..+$/`
*
* -   `^`
*     -   match any string which begins with
*
* -   `([0-9]{4})`
*     -   capture a sequence of four numbers (year)
*
* -   `_`
*     -   a `_` literal
*
* -   `([\S\s]+)`
*     -   capture one or more characters (name)
*
* -   `_`
*     -   a `_` literal
*
* -   `([a-z]+)`
*     -   capture one or more alphabetic characters (party)
*
* -   `\..+`
*     -   a `.` literal followed by one or more characters
*
* -   `$`
*     -   end of string
*
* @private
* @constant
* @type {RegExp}
* @default /^([0-9]{4})_([\S\s]+)_([a-z]+)\..+$/
*/
var RE_FILENAME = /^([0-9]{4})_([\S\s]+)_([a-z]+)\..+$/;


// EXPORTS //

module.exports = RE_FILENAME;
