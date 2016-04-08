
# VARIABLES #

# Define the path to the [JSHint][1] executable.
#
#  To install JSHint:
#     $ npm install jshint jshint-stylish
#
# [1]: http://jshint.com/

LINTER_BIN ?= $(BIN)/jshint

# Define the path to the [jshint-stylish][1] reporter (pretty printing).
#
# To install jshint-stylish:
#     $ npm install jshint-stylish
#
# [1]: https://www.npmjs.com/package/jshint-stylish

JSHINT_REPORTER ?= $(NODE_MODULES)/jshint-stylish

# Define the command-line options to use when invoking the JSHint executable:
LINTER_FLAGS ?= --reporter $(JSHINT_REPORTER)
