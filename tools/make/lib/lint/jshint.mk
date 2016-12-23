
# VARIABLES #

# Define the path to the [JSHint][1] executable.
#
# To install JSHint:
#     $ npm install jshint
#
# [1]: http://jshint.com/

JAVASCRIPT_LINT ?= $(BIN_DIR)/jshint

# Define the path to the JSHint configuration file:
JSHINT_CONF ?= $(CONFIG_DIR)/jshint/.jshintrc

# Define the path to the JSHint ignore file:
JSHINT_IGNORE ?= $(CONFIG_DIR)/jshint/.jshintignore

# Define the path to the [jshint-stylish][1] reporter (pretty printing).
#
# To install jshint-stylish:
#     $ npm install jshint-stylish
#
# [1]: https://www.npmjs.com/package/jshint-stylish

JSHINT_REPORTER ?= $(NODE_MODULES)/jshint-stylish

# Define the command-line options to use when invoking the JSHint executable:
JAVASCRIPT_LINT_FLAGS ?= \
	--config $(JSHINT_CONF) \
	--exclude-path $(JSHINT_IGNORE) \
	--reporter $(JSHINT_REPORTER)
