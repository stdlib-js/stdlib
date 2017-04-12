'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.readme] - README filename
* @param {string} [options.index] - index filename
* @param {string} [options.title] - index title
* @param {string} [options.mount] - URL mount
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {string} [options.head] - content to insert into HTML head
* @param {Object} [options.tests] - tests options
* @param {string} [options.tests.pattern] - glob pattern
* @param {string} [options.tests.bundle] - bundle filename
* @param {string} [options.tests.folder] - folder name
* @param {string} [options.tests.html] - HTML filename
* @param {string} [options.tests.title] - HTML title
* @param {Object} [options.benchmarks] - benchmarks options
* @param {string} [options.benchmarks.pattern] - benchmarks glob pattern
* @param {string} [options.benchmarks.bundle] - bundle filename
* @param {string} [options.benchmarks.folder] - folder name
* @param {string} [options.benchmarks.html] - HTML filename
* @param {string} [options.benchmarks.title] - HTML title
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'readme': 'README.md',
*     'tests': {},
*     'benchmarks': {}
* };
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options +
			'`.' );
	}
	if ( hasOwnProp( options, 'readme' ) ) {
		opts.readme = options.readme;
		if ( !isString( opts.readme ) ) {
			return new TypeError( 'invalid option. `readme` option must be a string. Option: `'+opts.readme+'`.' );
		}
	}
	if ( hasOwnProp( options, 'index' ) ) {
		opts.index = options.index;
		if ( !isString( opts.index ) ) {
			return new TypeError( 'invalid option. `index` option must be a string. Option: `'+opts.index+'`.' );
		}
	}
	if ( hasOwnProp( options, 'title' ) ) {
		opts.title = options.title;
		if ( !isString( opts.title ) ) {
			return new TypeError( 'invalid option. `title` option must be a string. Option: `'+opts.title+'`.' );
		}
	}
	if ( hasOwnProp( options, 'mount' ) ) {
		opts.mount = options.mount;
		if ( !isString( opts.mount ) ) {
			return new TypeError( 'invalid option. `mount` option must be a string. Option: `'+opts.mount+'`.' );
		}
	}
	if ( hasOwnProp( options, 'head' ) ) {
		opts.head = options.head;
		if ( !isString( opts.head ) ) {
			return new TypeError( 'invalid option. `head` option must be a string. Option: `'+opts.head+'`.' );
		}
	}
	if ( hasOwnProp( options, 'prepend' ) ) {
		opts.prepend = options.prepend;
		if ( !isString( opts.prepend ) ) {
			return new TypeError( 'invalid option. `prepend` option must be a string. Option: `'+opts.prepend+'`.' );
		}
	}
	if ( hasOwnProp( options, 'append' ) ) {
		opts.append = options.append;
		if ( !isString( opts.append ) ) {
			return new TypeError( 'invalid option. `append` option must be a string. Option: `'+opts.append+'`.' );
		}
	}
	if ( hasOwnProp( options, 'tests' ) ) {
		if ( !isObject( opts.tests ) ) {
			return new TypeError( 'invalid option. `tests` option must be an object. Option: `'+opts.tests+'`.' );
		}
		if ( hasOwnProp( options.tests, 'pattern' ) ) {
			opts.tests.pattern = options.tests.pattern;
			if ( !isString( opts.tests.pattern ) ) {
				return new TypeError( 'invalid option. `tests.pattern` option must be a string. Option: `'+opts.tests.pattern+'`.' );
			}
		}
		if ( hasOwnProp( options.tests, 'folder' ) ) {
			opts.tests.folder = options.tests.folder;
			if ( !isString( opts.tests.folder ) ) {
				return new TypeError( 'invalid option. `tests.folder` option must be a string. Option: `'+opts.tests.folder+'`.' );
			}
		}
		if ( hasOwnProp( options.tests, 'bundle' ) ) {
			opts.tests.bundle = options.tests.bundle;
			if ( !isString( opts.tests.bundle ) ) {
				return new TypeError( 'invalid option. `tests.bundle` option must be a string. Option: `'+opts.tests.bundle+'`.' );
			}
		}
		if ( hasOwnProp( options.tests, 'html' ) ) {
			opts.tests.html = options.tests.html;
			if ( !isString( opts.tests.html ) ) {
				return new TypeError( 'invalid option. `tests.html` option must be a string. Option: `'+opts.tests.html+'`.' );
			}
		}
		if ( hasOwnProp( options.tests, 'title' ) ) {
			opts.tests.title = options.tests.title;
			if ( !isString( opts.tests.title ) ) {
				return new TypeError( 'invalid option. `tests.title` option must be a string. Option: `'+opts.tests.title+'`.' );
			}
		}
	}
	if ( hasOwnProp( options, 'benchmarks' ) ) {
		if ( !isObject( opts.benchmarks ) ) {
			return new TypeError( 'invalid option. `benchmarks` option must be an object. Option: `'+opts.benchmarks+'`.' );
		}
		if ( hasOwnProp( options.benchmarks, 'pattern' ) ) {
			opts.benchmarks.pattern = options.benchmarks.pattern;
			if ( !isString( opts.benchmarks.pattern ) ) {
				return new TypeError( 'invalid option. `benchmarks.pattern` option must be a string. Option: `'+opts.benchmarks.pattern+'`.' );
			}
		}
		if ( hasOwnProp( options.benchmarks, 'folder' ) ) {
			opts.benchmarks.folder = options.benchmarks.folder;
			if ( !isString( opts.benchmarks.folder ) ) {
				return new TypeError( 'invalid option. `benchmarks.folder` option must be a string. Option: `'+opts.benchmarks.folder+'`.' );
			}
		}
		if ( hasOwnProp( options.benchmarks, 'bundle' ) ) {
			opts.benchmarks.bundle = options.benchmarks.bundle;
			if ( !isString( opts.benchmarks.bundle ) ) {
				return new TypeError( 'invalid option. `benchmarks.bundle` option must be a string. Option: `'+opts.benchmarks.bundle+'`.' );
			}
		}
		if ( hasOwnProp( options.benchmarks, 'html' ) ) {
			opts.benchmarks.html = options.benchmarks.html;
			if ( !isString( opts.benchmarks.html ) ) {
				return new TypeError( 'invalid option. `benchmarks.html` option must be a string. Option: `'+opts.benchmarks.html+'`.' );
			}
		}
		if ( hasOwnProp( options.benchmarks, 'title' ) ) {
			opts.benchmarks.title = options.benchmarks.title;
			if ( !isString( opts.benchmarks.title ) ) {
				return new TypeError( 'invalid option. `benchmarks.title` option must be a string. Option: `'+opts.benchmarks.title+'`.' );
			}
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
