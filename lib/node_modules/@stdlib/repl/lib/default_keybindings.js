/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable max-lines */

'use strict';

// MAIN //

/**
* Table mapping of REPL actions and their corresponding keybinding triggers.
*
* @private
* @name DEFAULT_KEYBINDINGS
* @type {Object}
*/
var DEFAULT_KEYBINDINGS = {
	'moveRight': [
		{
			'name': 'right',
			'ctrl': false,
			'shift': false,
			'meta': false
		},
		{
			'name': 'f',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'moveLeft': [
		{
			'name': 'left',
			'ctrl': false,
			'shift': false,
			'meta': false
		},
		{
			'name': 'b',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'moveWordRight': [
		{
			'name': 'right',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': 'f',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'moveWordLeft': [
		{
			'name': 'left',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': 'b',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'moveBeginning': [
		{
			'name': 'home',
			'ctrl': false,
			'shift': false,
			'meta': false
		},
		{
			'name': 'a',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'moveEnd': [
		{
			'name': 'end',
			'ctrl': false,
			'shift': false,
			'meta': false
		},
		{
			'name': 'e',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'tab': [
		{
			'name': 't',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'indentLineRight': [
		{
			'name': 'right',
			'ctrl': false,
			'shift': false,
			'meta': true
		},
		{
			'name': 'i',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'indentLineLeft': [
		{
			'name': 'left',
			'ctrl': false,
			'shift': false,
			'meta': true
		},
		{
			'name': 'i',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'deleteLeft': [
		{
			'name': 'backspace',
			'ctrl': false,
			'shift': false,
			'meta': false
		},
		{
			'name': 'h',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'deleteRight': [
		{
			'name': 'delete',
			'ctrl': false,
			'shift': false,
			'meta': false
		}
	],
	'deleteWordLeft': [
		{
			'name': 'backspace',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': 'backspace',
			'ctrl': false,
			'shift': false,
			'meta': true
		},
		{
			'name': 'w',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'deleteWordRight': [
		{
			'name': 'delete',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': 'delete',
			'ctrl': false,
			'shift': false,
			'meta': true
		},
		{
			'name': 'd',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'deleteLineLeft': [
		{
			'name': 'backspace',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': 'u',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'deleteLineRight': [
		{
			'name': 'delete',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': 'k',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'yankKilled': [
		{
			'name': 'y',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'yankPop': [
		{
			'name': 'y',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'undo': [
		{
			'name': '/',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '-',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'redo': [
		{
			'name': '6',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '6',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': '^',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'transposeAboutCursor': [
		{
			'name': 't',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'uppercaseNextWord': [
		{
			'name': 'u',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'capitalizeNextWord': [
		{
			'name': 'c',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'lowercaseNextWord': [
		{
			'name': 'l',
			'ctrl': false,
			'shift': false,
			'meta': true
		}
	],
	'clearScreen': [
		{
			'name': 'l',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	]
};


// EXPORTS //

module.exports = DEFAULT_KEYBINDINGS;
