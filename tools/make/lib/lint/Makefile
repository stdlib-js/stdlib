
# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/lib/lint/javascript.mk
include $(TOOLS_MAKE_DIR)/lib/lint/markdown.mk
include $(TOOLS_MAKE_DIR)/lib/lint/filenames.mk


# TARGETS #

# Lint.
#
# This target lints all files.

lint: lint-filenames lint-javascript lint-markdown


# Check source code quality.
#
# This target lints only source files.

lint-src: lint-javascript-src


# Check test code quality.
#
# This target lints only test files.

lint-tests: lint-javascript-tests


# Check example code quality.
#
# This target lints only example files.

lint-examples: lint-javascript-examples


.PHONY: lint list-src lint-tests lint-examples

