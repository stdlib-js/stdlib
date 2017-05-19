
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/lint/conf.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/filenames.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/markdown.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/python.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/package_json.mk


# TARGETS #

# Lint.
#
# This target lints all files.

lint: lint-filenames lint-javascript lint-markdown lint-python lint-conf lint-pkg-json

.PHONY: lint


# Check source code quality.
#
# This target lints only source files.

lint-src: lint-javascript-src

.PHONY: lint-src


# Check test code quality.
#
# This target lints only test files.

lint-tests: lint-javascript-tests

.PHONY: lint-tests


# Check example code quality.
#
# This target lints only example files.

lint-examples: lint-javascript-examples

.PHONY: lint-examples


# Check benchmark code quality.
#
# This target lints only benchmark files.

lint-benchmarks: lint-javascript-benchmarks

.PHONY: lint-benchmarks

