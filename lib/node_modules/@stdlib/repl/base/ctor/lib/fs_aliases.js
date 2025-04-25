/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// MAIN //

/*
* List of file system API aliases and corresponding argument path completion compatibility.
*
* ## Notes
*
* -   Each entry in the list has the following format:
*
*     ```
*     [ <alias>, <completion_flag>, ... ]
*     ```
*
*     where `<alias>` is the file system API alias and `<completion_flag>` is a `boolean` indicating whether an argument is compatible with path completion.
*
* -   For the purposes of TAB completion, only those positional arguments which expect file and/or directory paths need to be included. For example, if an API has three parameters and only the first argument expects either a file and/or directory path, only that first argument needs to be included below; the remaining two arguments can be omitted, as those arguments are assumed to be incompatible with path completion. If an API has three parameters and only the second argument expects either a file and/or directory path, only the first two arguments need to be included below, with the first argument documented as `null`; the remaining argument can be omitted.
*/
var aliases = [
	// Note: keep in alphabetical order...
	[ 'exists', true ],
	[ 'exists.sync', true ],
	[ 'load', true ],
	[ 'readDir', true ],
	[ 'readDir.sync', true ],
	[ 'readFile', true ],
	[ 'readFile.sync', true ],
	[ 'readFileList', true ],
	[ 'readFileList.sync', true ],
	[ 'readJSON', true ],
	[ 'readJSON.sync', true ],
	[ 'readWASM', true ],
	[ 'readWASM.sync', true ],
	[ 'rename', true, true ],
	[ 'rename.sync', true, true ],
	[ 'resolveParentPath', false ],
	[ 'resolveParentPath.sync', false ],
	[ 'unlink', true ],
	[ 'unlink.sync', true ],
	[ 'writeFile', true ],
	[ 'writeFile.sync', true ]
];


// EXPORTS //

module.exports = aliases;
