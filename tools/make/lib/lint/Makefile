
# VARIABLES #

# Define the linter to use when linting source files:
LINTER ?= jshint


# DEPENDENCIES #

ifeq ($(LINTER), jshint)
	include $(TOOLS_MAKE_DIR)/lib/lint/jshint.mk
endif


# TARGETS #

# Check code quality.
#
# This target lints all source code.

lint:
	$(LINTER_BIN) $(LINTER_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES)


# Check source code quality.
#
# This target lints only source files.

lint-src: node_modules
	$(LINTER_BIN) $(LINTER_FLAGS) $(SOURCES)


# Check test code quality.
#
# This target lints only test files.

lint-tests: node_modules
	$(LINTER_BIN) $(LINTER_FLAGS) $(TESTS)


# Check example code quality.
#
# This target lints only example files.

lint-examples: node_modules
	$(LINTER_BIN) $(LINTER_FLAGS) $(EXAMPLES)


.PHONY: lint list-src lint-tests lint-examples

