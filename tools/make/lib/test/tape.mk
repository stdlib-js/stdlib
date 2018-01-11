
# VARIABLES #

# Define the path to the [tape][1] executable:
#
# To install `tape`:
#
# ```bash
# $ npm install tape
# ```
#
# [1]: https://github.com/substack/tape

# Note: we reference the `bin` file directly in order to support using `istanbul` for code coverage on Windows (https://github.com/gotwarlost/istanbul#usage-on-windows)
JAVASCRIPT_TEST ?= $(NODE_MODULES)/tape/bin/tape

# Define any command-line options to use when invoking the `tape` executable:
JAVASCRIPT_TEST_FLAGS ?=

