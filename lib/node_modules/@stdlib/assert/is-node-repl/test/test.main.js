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

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isNodeREPL = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNodeREPL, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if the runtime environment is not Node.js', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': false
	});

	t.strictEqual( isNodeREPL(), false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if a parent module is the Node.js `repl` builtin (Node versions >=4; root)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock
	});

	t.strictEqual( isNodeREPL(), true, 'returns true' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': {
				'id': 'boop',
				'parent': {
					'id': 'foo',
					'parent': {
						'id': 'bar',
						'parent': {
							'id': '<repl>',
							'parent': void 0
						}
					}
				}
			}
		};
	}
});

tape( 'the function returns `true` if a parent module is the Node.js `repl` builtin (Node versions <4; root)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock
	});

	t.strictEqual( isNodeREPL(), true, 'returns true' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': {
				'id': 'boop',
				'parent': {
					'id': 'foo',
					'parent': {
						'id': 'bar',
						'parent': {
							'id': 'repl',
							'parent': void 0
						}
					}
				}
			}
		};
	}
});

tape( 'the function returns `true` if a parent module is the Node.js `repl` builtin (Node versions >=4; non-root)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock
	});

	t.strictEqual( isNodeREPL(), true, 'returns true' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': {
				'id': 'boop',
				'parent': {
					'id': '<repl>',
					'parent': {
						'id': 'bar',
						'parent': {
							'id': 'foo',
							'parent': void 0
						}
					}
				}
			}
		};
	}
});

tape( 'the function returns `true` if a parent module is the Node.js `repl` builtin (Node versions <4; non-root)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock
	});

	t.strictEqual( isNodeREPL(), true, 'returns true' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': {
				'id': 'boop',
				'parent': {
					'id': 'repl',
					'parent': {
						'id': 'bar',
						'parent': {
							'id': 'foo',
							'parent': void 0
						}
					}
				}
			}
		};
	}
});

tape( 'the function returns `false` if the function is not either required or called from a Node.js REPL (shallow require)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock,
		'./stacktrace.js': stacktrace
	});

	t.strictEqual( isNodeREPL(), false, 'returns false' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': void 0
		};
	}

	function stacktrace() {
		return '';
	}
});

tape( 'the function returns `false` if the function is not either required or called from a Node.js REPL (deep require)', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock,
		'./stacktrace.js': stacktrace
	});

	t.strictEqual( isNodeREPL(), false, 'returns false' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': {
				'id': 'boop',
				'parent': {
					'id': 'foo',
					'parent': {
						'id': 'bar',
						'parent': {
							'id': '.',
							'parent': void 0
						}
					}
				}
			}
		};
	}

	function stacktrace() {
		return '';
	}
});

tape( 'the function returns `true` if the function is called from a Node.js REPL', function test( t ) {
	var isNodeREPL = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-node': true,
		'./parent.js': mock,
		'./stacktrace.js': stacktrace
	});

	t.strictEqual( isNodeREPL(), true, 'returns true' );
	t.end();

	function mock() {
		return {
			'id': 'beep',
			'parent': void 0
		};
	}

	function stacktrace() {
		return 'Error\n    at repl:1:2\n    at ContextifyScript.Script.runInContext (vm.js:53:29)\n    at REPLServer.defaultEval (repl.js:241:29)\n    at bound (domain.js:301:14)\n    at REPLServer.runBound [as eval] (domain.js:314:12)\n    at REPLServer.onLine (repl.js:433:10)\n    at emitOne (events.js:115:13)\n    at REPLServer.emit (events.js:210:7)\n    at REPLServer.Interface._onLine (readline.js:278:10)\n    at REPLServer.Interface._line (readline.js:625:8)';
	}
});
