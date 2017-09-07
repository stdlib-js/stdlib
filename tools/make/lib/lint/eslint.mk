
# VARIABLES #

# Define the path to the [ESLint][1] executable.
#
# To install ESLint:
#     $ npm install eslint
#
# [1]: http://eslint.org//

ESLINT ?= $(BIN_DIR)/eslint

# Define the path to the ESLint configuration file:
ESLINT_CONF ?= $(CONFIG_DIR)/eslint/.eslintrc.js

# Define the path to the ESLint configuration file for examples:
ESLINT_CONF_EXAMPLES ?= $(CONFIG_DIR)/eslint/.eslintrc.examples.js

# Define the path to the ESLint configuration file for tests:
ESLINT_CONF_TESTS ?= $(CONFIG_DIR)/eslint/.eslintrc.tests.js

# Define the path to the ESLint configuration file for benchmarks:
ESLINT_CONF_BENCHMARKS ?= $(CONFIG_DIR)/eslint/.eslintrc.benchmarks.js

# Define the path to the ESLint ignore file:
ESLINT_IGNORE ?= $(CONFIG_DIR)/eslint/.eslintignore

# Define the command-line options to use when invoking the ESLint executable:
ESLINT_FLAGS ?= \
	--ignore-path $(ESLINT_IGNORE)


# TARGETS #

# Check source code quality.
#
# This target lints only JavaScript source files.

eslint-src: $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done

.PHONY: eslint-src


# Check test code quality.
#
# This target lints only JavaScript test files.

eslint-tests: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_TESTS) $$file || exit 1; \
	done

.PHONY: eslint-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

eslint-examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_EXAMPLES) $$file || exit 1; \
	done

.PHONY: eslint-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

eslint-benchmarks: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_BENCHMARKS) $$file || exit 1; \
	done

.PHONY: eslint-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

eslint-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done

.PHONY: eslint-files
