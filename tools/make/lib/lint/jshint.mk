
# VARIABLES #

# Define the path to the [JSHint][1] executable.
#
# To install JSHint:
#     $ npm install jshint
#
# [1]: http://jshint.com/

JSHINT ?= $(BIN_DIR)/jshint

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
JSHINT_FLAGS ?= \
	--config $(JSHINT_CONF) \
	--exclude-path $(JSHINT_IGNORE) \
	--reporter $(JSHINT_REPORTER)


# TARGETS #

# Check source code quality.
#
# This target lints only JavaScript source files.

jshint-src: $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-src


# Check test code quality.
#
# This target lints only JavaScript test files.

jshint-tests: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

jshint-examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

jshint-benchmarks: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

jshint-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-files
