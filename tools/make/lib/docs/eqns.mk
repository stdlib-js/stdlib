# VARIABLES #

REMARK_RUNNER ?= $(BIN_DIR)/remark

# Define the path to the remark ignore file:
REMARK_IGNORE ?= $(CONFIG_DIR)/.remarkignore

# Define plugins:

PLUGIN_FOLDER ?= $(TOOLS_DIR)/remark/plugins
REMARK_HTML_EQUATIONS_PLUGIN ?= $(PLUGIN_FOLDER)/remark-html-equations
REMARK_SVG_EQUATIONS_PLUGIN ?= $(PLUGIN_FOLDER)/remark-svg-equations
REMARK_SRC_URLS_PLUGIN ?= $(PLUGIN_FOLDER)/remark-html-equation-src-urls


# Define Markdown extensions:
REMARK_EXT ?= md

# Define the command-line options when invoking the remark executable:
REMARK_FLAGS ?= \
		--ext $(REMARK_EXT) \
		--ignore-path $(REMARK_IGNORE)

# Use plugins:
GENERATE_EQUATIONS_FLAGS ?= \
		--use $(REMARK_HTML_EQUATIONS_PLUGIN) \
		--use $(REMARK_SVG_EQUATIONS_PLUGIN)

INSERT_SRC_URLS_FLAGS ?= \
		--use $(REMARK_SRC_URLS_PLUGIN)

# Define output option:
OUTPUT ?= --output

# TARGETS #

# Generate equations.
#
# This target generates SVG files for all equations in Markdown files.

generate-equations: $(NODE_MODULES)
	$(REMARK_RUNNER) $(REMARK_FLAGS) $(GENERATE_EQUATIONS_FLAGS) $(MARKDOWN_FILES) $(OUTPUT)

.PHONY: generate-equations


# Insert rawgit source URLS.
#
# This target inserts rawgit source URLs for all equations in Markdown files. 

insert-equation-src-urls: $(NODE_MODULES)
	$(REMARK_RUNNER) $(REMARK_FLAGS) $(INSERT_SRC_URLS_FLAGS) $(MARKDOWN_FILES) $(OUTPUT)

.PHONY: insert-equation-src-urls
