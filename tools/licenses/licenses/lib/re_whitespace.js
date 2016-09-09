'use strict';

// Note that `\s` is equivalent to `[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`. The following regular expression should suffice to polyfill (most?) all environments.
var RE_WHITESPACE = /[\s\uFEFF\u00A0]+/g;


// EXPORTS //

module.exports = RE_WHITESPACE;
