# GitHub MCP Functions Guide

Comprehensive documentation of GitHub integration functions available through MCP.

## Available Functions

### Repository Management
- [create_repository](./create_repository.md) - Create new repositories
- [fork_repository](./fork_repository.md) - Fork existing repositories
- [search_repositories](./search_repositories.md) - Search GitHub repositories

### Content Management
- [get_file_contents](./get_file_contents.md) - Get file/directory contents
- [create_or_update_file](./create_or_update_file.md) - Update single files
- [push_files](./push_files.md) - Push multiple files

### Branch Operations
- [create_branch](./create_branch.md) - Create new branches

### Collaboration
- [create_issue](./create_issue.md) - Create repository issues
- [create_pull_request](./create_pull_request.md) - Create pull requests

## Common Patterns

### Error Handling
- Always verify operations in GitHub UI
- Handle base64 encoding for file contents
- Check repository state after operations

### Best Practices
- Use bulk operations when possible
- Include branch names for private repos
- Maintain consistent commit messages
- Verify content after updates

## Known Issues
- PR creation shows errors despite success
- See working-pipeline/tasks for details