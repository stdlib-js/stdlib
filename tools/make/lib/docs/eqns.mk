# VARIABLES #

REMARK_RUNNER ?= $(BIN_DIR)/remark

# Define the path to the remark ignore file:
REMARK_IGNORE ?= $(CONFIG_DIR)/.remarkignore

# Define plugins:

PLUGIN_FOLDER ?= $(TOOLS_DIR)/remark/plugins
REMARK_HTML_EQUATIONS_PLUGIN ?= $(PLUGIN_FOLDER)/remark-html-equations
REMARK_SVG_EQUATIONS_PLUGIN ?= $(PLUGIN_FOLDER)/remark-svg-equations

# Define Markdown extensions:
REMARK_EXT ?= md

# Define the command-line options when invoking the remark executable:
GENERATE_EQUATIONS_FLAGS ?= \
		--ext $(REMARK_EXT) \
		--ignore-path $(REMARK_IGNORE) \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN)

# Define output option:
OUTPUT ?= --output

# TARGETS #

# Generate equations.
#
# This target generates SVG files for all equations in Markdown file.

generate-equations: $(NODE_MODULES)
	$(REMARK_RUNNER) $(GENERATE_EQUATIONS_FLAGS) $(MARKDOWN_FILES) $(OUTPUT)

.PHONY: generate-equations
