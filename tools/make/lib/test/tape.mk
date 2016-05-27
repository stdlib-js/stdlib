
# VARIABLES #

# Define the path to the [tape][1] executable:
#
# To install tape:
#     $ npm install tape
#
# [1]: https://github.com/substack/tape

JAVASCRIPT_TEST ?= $(BIN_DIR)/tape

# Define any command-line options to use when invoking the `tape` executable:
JAVASCRIPT_TEST_FLAGS ?=

