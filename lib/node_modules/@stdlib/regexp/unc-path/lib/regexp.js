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

var reUncPath = require( './main.js' );


// MAIN //

/**
* Matches parts of a UNC path.
*
* Regular Expression: `/^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/`
*
* -   `/^\\\\`
*     -   match a string that begins with two backward slashes `\\\\`
*
* -   `()`
*     -   capture (1) (host name)
*
* -   `[^\\:\|\[\]\/";<>+=,?* _]+`
*     -   match any sequence of characters, excluding `\\:\|\[\]\/";<>+=,?* _`, one or more times
*
* -   `\\`
*     -   match a literal backward slash `\\`
*
* -   `()`
*     -   capture (2) (share name)
*
* -   `[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80}`
*     -   match any sequence of 1 to 80 characters matching `` !#$%'()\-\.0-9@A-Z^_`a-z{}~`` and Latin-1 Unicode supplement
*
* -   `(`
*     -   begin capture (3) (object name)
*
* -   `(`
*     -   begin capture (4) (path name)
*
* -   `(?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?`
*     -   capture but do not remember a `\\` literal followed by one or more sequences of 1 to 255 characters matching `` !#$%'()\-\.0-9@A-Z^_`a-z{}~`` and Latin-1 Unicode supplement and do so non-greedily (5)
*
* -   `|)`
*     -   OR capture nothing (4) (path name)
*
* -   `(?:`
*     -   begin capture but do not remember (6)
*
* -   `\\`
*     -   match a `\\` literal
*
* -   `(`
*     -   begin capture (7) (file name)
*
* -   `(?:[0-9a-z]{1,255}){1}`
*     -   capture but do not remember a sequence of 1 to 255 characters matching `` !#$%'()\+,\-\.0-9;=@A-Z\[\]^_`a-z{`` (8)
*
* -   `(?:`
*     -   begin capture but do not remember (9)
*
* -   `\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)`
*     -   match a literal `:` only if followed by `\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF` OR a literal `:`
*
* -   `(?:`
*     -   begin capture but do not remember (10)
*
* -   `([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)`
*     -   capture a sequence of one or more characters not followed by a literal `:`; otherwise, capture a sequence of 0 or more characters (11) (stream name)
*
* -   `(?:`
*     -   begin capture but do not remember (12)
*
* -   `\:`
*     -   match a literal `:`
*
* -   `([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)`
*     -   capture a sequence of one or more characters (13) (stream type)
*
* -   `|)`
*     -   OR capture nothing (12)
*
* -   `)`
*     -   end capture (10)
*
* -   `|)`
*     -   OR capture nothing (9)
*
* -   `)`
*     -   end capture (7) (file name)
*
* -   `)`
*     -   end capture (6)
*
* -   `|)`
*     -   OR capture nothing (3) (object name)
*
* -   `$/`
*     -   end of string
*
*
* @constant
* @type {RegExp}
* @default /^\\\\([^\\:\|\[\]\/";<>+=,?* _]+)\\([\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,80})(((?:\\[\u0020-\u0021\u0023-\u0029\u002D-\u002E\u0030-\u0039\u0040-\u005A\u005E-\u007B\u007E-\u00FF]{1,255})+?|)(?:\\((?:[\u0020-\u0021\u0023-\u0029\u002B-\u002E\u0030-\u0039\u003B\u003D\u0040-\u005B\u005D-\u007B]{1,255}){1}(?:\:(?=[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]|\:)(?:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+(?!\:)|[\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]*)(?:\:([\u0001-\u002E\u0030-\u0039\u003B-\u005B\u005D-\u00FF]+)|))|)))|)$/
* @see [MSDN]{@link https://msdn.microsoft.com/en-us/library/gg465305.aspx}
*/
var RE_UNC_PATH = reUncPath();


// EXPORTS //

module.exports = RE_UNC_PATH;
