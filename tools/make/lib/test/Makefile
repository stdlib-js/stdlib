
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

# Define the path to the `tap-xunit` executable:
#
# To install tap-xunit:
#     $ npm install tap-xunit
#
# [1]: https://github.com/aghassemi/tap-xunit
TAP_XUNIT ?= $(BIN_DIR)/tap-xunit


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/test/javascript.mk


# TARGETS #

# Run unit tests.
#
# This target runs unit tests.

test: test-local

.PHONY: test


# Run unit tests locally.
#
# This target runs unit tests in a local environment.

test-local: test-javascript-local

.PHONY: test-local


# Generate a test summary.
#
# This target runs unit tests and aggregates TAP output as a test summary.

test-summary: test-javascript-summary

.PHONY: test-summary


# Generate TAP output.
#
# This target runs unit tests and streams raw TAP output.

test-tap: test-javascript-tap

.PHONY: test-tap


# Generate a xUnit XML.
#
# This target runs unit tests and converts TAP output to xUnit XML.

test-xunit: test-javascript-xunit

.PHONY: test-xunit
