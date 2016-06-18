
# VARIABLES #

# Define the path to the [remark][1] executable.
#
# To install remark:
#     $ npm install remark-cli
#
# [1]: https://github.com/wooorm/remark/

REMARK ?= $(BIN_DIR)/remark

# Define the path to the remark ignore file:
REMARK_IGNORE ?= $(CONFIG_DIR)/.remarkignore

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_DIR)/remark/plugins

# Define paths to local plugins:
REMARK_HTML_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-html-equations
REMARK_SVG_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-svg-equations

# Define Markdown extensions:
REMARK_EXT ?= md

# Define the command-line options when invoking the remark executable:
REMARK_FLAGS ?= \
		--ext $(REMARK_EXT) \
		--ignore-path $(REMARK_IGNORE)

# Define output option:
REMARK_OUTPUT_FLAG ?= --output


# TARGETS #

# Generate HTML equation elements.
#
# This target transforms Markdown files containing equation comment markup to include HTML equation elements.

markdown-html-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-html-equations


# Generate SVG equation files.
#
# This target generates SVG equations files from Markdown equation elements.

markdown-svg-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN)

.PHONY: markdown-svg-equations


# Processes Markdown files containing equations.
#
# This target processes Markdown files in search for Markdown equation elements. Files containing equation elements are transformed to include HTML equation elements. SVG files are also generated for each equation.

markdown-equations: $(NODE_MODULES)
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-equations

