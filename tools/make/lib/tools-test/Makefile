
# VARIABLES #

# Define the path to the `tap-spec` executable:
#
# To install tap-spec:
#     $ npm install tap-spec
#
# [1]: https://github.com/scottcorgan/tap-spec
TAP_REPORTER ?= $(BIN_DIR)/tap-spec

# Define the path to the `tap-summary` executable:
#
# To install tap-summary:
#     $ npm install tap-summary
#
# [1]: https://github.com/zoubin/tap-summary
TAP_SUMMARY ?= $(BIN_DIR)/tap-summary


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/tools-test/javascript.mk


# TARGETS #

# Run unit tests.
#
# This target runs unit tests.

tools-test: tools-test-javascript

.PHONY: tools-test


# Generate a test summary.
#
# This target runs unit tests and aggregates TAP output as a test summary.

tools-test-summary: tools-test-javascript-summary

.PHONY: tools-test-summary
