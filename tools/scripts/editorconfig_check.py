#!/usr/bin/env python3
"""
EditorConfig Checker - A Python-based EditorConfig checker that doesn't require external dependencies.

This script provides basic EditorConfig checking functionality without needing to download
binaries from GitHub or install Node.js packages, thus avoiding GitHub API rate limiting issues.

Usage:
    python editorconfig_check.py [--config CONFIG_FILE] [--ignore-defaults] [--format FORMAT] [FILES...]

Examples:
    python editorconfig_check.py ./
    python editorconfig_check.py --config .editorconfig_checker.json ./
    python editorconfig_check.py --ignore-defaults --format default ./
"""

import argparse
import configparser
import json
import os
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple


class EditorConfigChecker:
    """A basic EditorConfig checker implementation."""
    
    def __init__(self, config_file: Optional[str] = None, ignore_defaults: bool = False):
        self.config_file = config_file
        self.ignore_defaults = ignore_defaults
        self.errors: List[Tuple[str, int, str]] = []
        self.config_data = self._load_config()
        
    def _load_config(self) -> Dict:
        """Load the checker configuration file."""
        config = {
            "Exclude": [],
            "Disable": {
                "EndOfLine": False,
                "Indentation": False,
                "IndentSize": False,
                "TabWidth": False,
                "TrimTrailingWhitespace": False,
                "InsertFinalNewline": False,
                "MaxLineLength": False
            }
        }
        
        if self.config_file and os.path.exists(self.config_file):
            try:
                with open(self.config_file, 'r') as f:
                    file_config = json.load(f)
                    config.update(file_config)
            except (json.JSONDecodeError, IOError) as e:
                print(f"Warning: Could not load config file {self.config_file}: {e}", file=sys.stderr)
        
        return config
    
    def _find_editorconfig(self, file_path: str) -> Optional[configparser.ConfigParser]:
        """Find and parse the nearest .editorconfig file."""
        path = Path(file_path).parent.absolute()
        
        while True:
            editorconfig_path = path / '.editorconfig'
            if editorconfig_path.exists():
                config = configparser.ConfigParser()
                try:
                    config.read(editorconfig_path)
                    return config
                except configparser.Error:
                    pass
            
            if path.parent == path or (editorconfig_path.exists() and 
                                     config.has_option('*', 'root') and 
                                     config.getboolean('*', 'root')):
                break
            path = path.parent
        
        return None
    
    def _get_file_settings(self, file_path: str) -> Dict[str, str]:
        """Get EditorConfig settings for a specific file."""
        config = self._find_editorconfig(file_path)
        if not config:
            return {}
        
        settings = {}
        file_path_posix = Path(file_path).as_posix()
        
        # Apply settings from matching sections
        for section_name in config.sections():
            if section_name == 'DEFAULT':
                continue
                
            # Simple glob matching - this is a basic implementation
            if self._matches_glob(file_path_posix, section_name):
                for key, value in config[section_name].items():
                    settings[key] = value
        
        return settings
    
    def _matches_glob(self, file_path: str, pattern: str) -> bool:
        """Basic glob pattern matching for EditorConfig patterns."""
        # Convert EditorConfig glob to regex
        # This is a simplified implementation
        if pattern == '*':
            return True
        
        # Convert common patterns
        regex_pattern = pattern
        regex_pattern = regex_pattern.replace('.', r'\.')
        regex_pattern = regex_pattern.replace('*', '.*')
        regex_pattern = regex_pattern.replace('?', '.')
        
        try:
            return re.match(regex_pattern + '$', os.path.basename(file_path)) is not None
        except re.error:
            return False
    
    def _is_excluded(self, file_path: str) -> bool:
        """Check if a file should be excluded from checking."""
        excludes = self.config_data.get("Exclude", [])
        for exclude_pattern in excludes:
            if self._matches_glob(file_path, exclude_pattern):
                return True
        return False
    
    def _check_file_content(self, file_path: str, content: str, settings: Dict[str, str]):
        """Check file content against EditorConfig settings."""
        lines = content.splitlines(keepends=True)
        disabled = self.config_data.get("Disable", {})
        
        for line_num, line in enumerate(lines, 1):
            # Check trailing whitespace
            if not disabled.get("TrimTrailingWhitespace", False):
                if settings.get("trim_trailing_whitespace", "").lower() == "true":
                    if line.rstrip('\r\n') != line.rstrip():
                        self.errors.append((file_path, line_num, "Line has trailing whitespace"))
            
            # Check line ending
            if not disabled.get("EndOfLine", False):
                end_of_line = settings.get("end_of_line", "")
                if end_of_line and line.endswith('\n'):
                    if end_of_line == "crlf" and not line.endswith('\r\n'):
                        self.errors.append((file_path, line_num, "Expected CRLF line ending"))
                    elif end_of_line == "lf" and line.endswith('\r\n'):
                        self.errors.append((file_path, line_num, "Expected LF line ending"))
            
            # Check indentation
            if not disabled.get("Indentation", False):
                indent_style = settings.get("indent_style", "")
                if indent_style:
                    leading_whitespace = line[:len(line) - len(line.lstrip())]
                    if indent_style == "space" and '\t' in leading_whitespace:
                        self.errors.append((file_path, line_num, "Indentation should use spaces, not tabs"))
                    elif indent_style == "tab" and ' ' in leading_whitespace:
                        self.errors.append((file_path, line_num, "Indentation should use tabs, not spaces"))
            
            # Check max line length
            if not disabled.get("MaxLineLength", False):
                max_line_length = settings.get("max_line_length", "")
                if max_line_length and max_line_length.isdigit():
                    if len(line.rstrip('\r\n')) > int(max_line_length):
                        self.errors.append((file_path, line_num, f"Line exceeds maximum length of {max_line_length}"))
        
        # Check final newline
        if not disabled.get("InsertFinalNewline", False):
            if settings.get("insert_final_newline", "").lower() == "true":
                if content and not content.endswith('\n'):
                    self.errors.append((file_path, len(lines), "File should end with a newline"))
    
    def check_file(self, file_path: str) -> bool:
        """Check a single file against EditorConfig rules."""
        if self._is_excluded(file_path):
            return True
        
        if not os.path.isfile(file_path):
            return True
        
        try:
            # Try to read as text file
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            settings = self._get_file_settings(file_path)
            self._check_file_content(file_path, content, settings)
            
        except (IOError, UnicodeDecodeError):
            # Skip binary files or files that can't be read
            pass
        
        return len(self.errors) == 0
    
    def check_directory(self, directory: str) -> bool:
        """Recursively check all files in a directory."""
        success = True
        
        for root, dirs, files in os.walk(directory):
            # Skip hidden directories and common exclude patterns
            dirs[:] = [d for d in dirs if not d.startswith('.') and 
                      d not in ['node_modules', '__pycache__', '.git']]
            
            for file in files:
                if file.startswith('.'):
                    continue
                    
                file_path = os.path.join(root, file)
                if not self.check_file(file_path):
                    success = False
        
        return success
    
    def get_errors(self) -> List[Tuple[str, int, str]]:
        """Get all collected errors."""
        return self.errors
    
    def print_errors(self, format_type: str = "default"):
        """Print errors in the specified format."""
        if not self.errors:
            return
        
        for file_path, line_num, message in self.errors:
            if format_type == "gcc":
                print(f"{file_path}:{line_num}: error: {message}")
            else:
                print(f"{file_path}:{line_num}: {message}")


def main():
    """Main entry point for the EditorConfig checker."""
    parser = argparse.ArgumentParser(description="Check files against EditorConfig rules")
    parser.add_argument("paths", nargs="*", default=["."], help="Files or directories to check")
    parser.add_argument("--config", help="Path to the configuration file")
    parser.add_argument("--ignore-defaults", action="store_true", help="Ignore default settings")
    parser.add_argument("--format", choices=["default", "gcc"], default="default", help="Output format")
    
    args = parser.parse_args()
    
    checker = EditorConfigChecker(args.config, args.ignore_defaults)
    success = True
    
    for path in args.paths:
        if os.path.isfile(path):
            if not checker.check_file(path):
                success = False
        elif os.path.isdir(path):
            if not checker.check_directory(path):
                success = False
        else:
            print(f"Error: Path not found: {path}", file=sys.stderr)
            success = False
    
    checker.print_errors(args.format)
    
    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
