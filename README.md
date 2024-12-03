# claude-access-test

Test repository for GitHub API integration and investigation patterns via Model Context Protocol (MCP).

## Repository Purpose

This repository serves as a controlled test environment for:
- GitHub API integration testing through MCP
- PR investigation patterns
- GitHub operation verification
- Private repository access patterns

## Verified Access Patterns

### Public Repository Operations
```javascript
// Repository access pattern
get_file_contents({
  owner: "org-name",
  repo: "repo-name",
  path: "file/path",
  branch: "branch-name"  // Optional for public repos
});
```

### Private Repository Operations
```javascript
// Private repo access - branch required
get_file_contents({
  owner: "org-name",
  repo: "private-repo",
  path: "file/path",
  branch: "branch-name"  // Required for private repos
});
```

### PR Investigation Pattern
1. Identify modified files
2. Use get_file_contents with exact paths
3. Specify branch name (required for private repos)
4. Handle base64 encoded content in responses

## Implementation Guidelines

### API Operations
Verified working:
- ✓ search_repositories
- ✓ get_file_contents
- ✓ create_branch
- ✓ push_files
- ✓ create_issue
- ✓ create_pull_request

Requires manual operation:
- Repository creation
- Repository forking

### Error Handling
- PR creation may show errors despite success
- Private repo "Not Found" often means missing branch
- Organization names are case-sensitive

## Testing Guidelines

1. Test patterns here before production use
2. Document all successful patterns
3. Use feature branches for testing
4. Keep examples up to date
5. Clean up test artifacts

## Repository Structure

### Core Components
- `/src/examples/` - Implementation examples
- `/docs/` - Pattern documentation
- `/tests/` - Test patterns and results

## Best Practices

1. **File Operations**
   - Always use push_files for multiple files
   - Include branch for private repos
   - Verify actual repository state after operations

2. **Path Handling**
   - Use exact file paths including directories
   - Maintain consistent path structures
   - Test paths before bulk operations

3. **Content Processing**
   - Handle base64 encoded content properly
   - Verify content after operations
   - Use appropriate error handling

## Current Status

### Verified (as of December 2024)
- ✓ Private repository access patterns
- ✓ PR content investigation flows
- ✓ Multi-file operations
- ✓ Branch management

### Under Investigation
- Alternative PR investigation patterns
- Enhanced error handling strategies
- Performance optimization patterns

## Usage

This repository should be used for:
1. Testing new GitHub integration patterns
2. Validating access approaches
3. Documenting working implementations
4. Training and reference

Verify all patterns here before applying to production repositories.

## Version Information
- Last Updated: December 3, 2024
- Tested with: Claude 3.5 Sonnet GitHub Integration
- Environment: Claude Desktop MCP