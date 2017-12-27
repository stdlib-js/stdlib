
# VARIABLES #

# Define the path to the [remark][1] executable.
#
# To install remark:
#     $ npm install remark
#
# [1]: https://www.npmjs.com/package/remark

MARKDOWN_LINT ?= $(BIN_DIR)/remark

# Define [remark-lint][1] as the lint plugin.
#
# To install remark-lint:
#     $ npm install remark-lint
#
# [1]: https://www.npmjs.com/package/remark-lint

REMARK_LINT_PLUGIN ?= remark-lint

# Define the path to the remark configuration file:
REMARK_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
REMARK_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore

# Define the command-line options when invoking the remark executable:
MARKDOWN_LINT_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_CONF) \
	--ignore-path $(REMARK_IGNORE) \
	--no-stdout
