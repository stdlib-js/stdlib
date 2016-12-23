
# VARIABLES #

# Define the path to the [ESLint][1] executable.
#
# To install ESLint:
#     $ npm install eslint
#
# [1]: http://eslint.org//

JAVASCRIPT_LINT ?= $(BIN_DIR)/eslint

# Define the path to the ESLint configuration file:
ESLINT_CONF ?= $(CONFIG_DIR)/eslint/.eslintrc.js

# Define the path to the ESLint ignore file:
ESLINT_IGNORE ?= $(CONFIG_DIR)/eslint/.eslintignore

# Define the command-line options to use when invoking the ESLint executable:
JAVASCRIPT_LINT_FLAGS ?= \
	--config $(ESLINT_CONF) \
	--ignore-path $(ESLINT_IGNORE)
