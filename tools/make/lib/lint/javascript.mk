
# VARIABLES #

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= eslint


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/lint/jshint.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/eslint.mk


# TARGETS #

# Check code quality.
#
# This target lints all JavaScript source code.

lint-javascript: lint-javascript-src lint-javascript-tests lint-javascript-examples lint-javascript-benchmarks

.PHONY: lint-javascript


# Check source code quality.
#
# This target lints only JavaScript source files.

lint-javascript-src:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) $(MAKE) -f $(this_file) jshint-src
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) $(MAKE) -f $(this_file) eslint-src
endif

.PHONY: lint-javascript-src


# Check test code quality.
#
# This target lints only JavaScript test files.

lint-javascript-tests:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) $(MAKE) -f $(this_file) jshint-tests
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) $(MAKE) -f $(this_file) eslint-tests
endif

.PHONY: lint-javascript-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

lint-javascript-examples:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) $(MAKE) -f $(this_file) jshint-examples
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) $(MAKE) -f $(this_file) eslint-examples
endif

.PHONY: lint-javascript-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

lint-javascript-benchmarks:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) $(MAKE) -f $(this_file) jshint-benchmarks
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) $(MAKE) -f $(this_file) eslint-benchmarks
endif

.PHONY: lint-javascript-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

lint-javascript-files:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) $(MAKE) -f $(this_file) jshint-files
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) $(MAKE) -f $(this_file) eslint-files
endif

.PHONY: lint-javascript-files

