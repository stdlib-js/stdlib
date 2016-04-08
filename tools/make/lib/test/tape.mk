
# VARIABLES #

# Define the path to the [tape][1] executable:
#
# To install tape:
#     $ npm install tape
#
# [1]: https://github.com/substack/tape

TEST_RUNNER_BIN ?= $(BIN)/tape

# Define any command-line options to use when invoking the `tape` executable:
TEST_RUNNER_FLAGS ?= ''

