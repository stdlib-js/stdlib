
# VARIABLES #

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= jshint


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_LINTER), jshint)
	include $(TOOLS_MAKE_DIR)/lib/lint/jshint.mk
endif


# TARGETS #

# Check code quality.
#
# This target lints all JavaScript source code.

lint-javascript: node_modules
	$(JAVASCRIPT_LINTER_BIN) $(JAVASCRIPT_LINTER_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES)


# Check source code quality.
#
# This target lints only JavaScript source files.

lint-javascript-src: node_modules
	$(JAVASCRIPT_LINTER_BIN) $(JAVASCRIPT_LINTER_FLAGS) $(SOURCES)


# Check test code quality.
#
# This target lints only JavaScript test files.

lint-javascript-tests: node_modules
	$(JAVASCRIPT_LINTER_BIN) $(JAVASCRIPT_LINTER_FLAGS) $(TESTS)


# Check example code quality.
#
# This target lints only JavaScript example files.

lint-javascript-examples: node_modules
	$(JAVASCRIPT_LINTER_BIN) $(JAVASCRIPT_LINTER_FLAGS) $(EXAMPLES)


.PHONY: lint-javascript list-javascript-src lint-javascript-tests lint-javascript-examples

