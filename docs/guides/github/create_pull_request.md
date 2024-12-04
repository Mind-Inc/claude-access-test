# create_pull_request

Create a new pull request in a GitHub repository.

## Parameters
```javascript
{
    owner: string,               // Repository owner (required)
    repo: string,               // Repository name (required)
    title: string,              // PR title (required)
    head: string,               // Source branch (required)
    base: string,               // Target branch (required)
    body: string,               // PR description (optional)
    draft: boolean,             // Create as draft PR (optional)
    maintainer_can_modify: boolean  // Allow maintainer edits (optional)
}
```

## Usage Example
```javascript
await create_pull_request({
    owner: "org-name",
    repo: "repo-name",
    title: "Feature: Add new functionality",
    head: "feature/new-feature",
    base: "main",
    body: "Detailed description of changes...",
    draft: false
});
```

## Known Issues
- Operation may show error but succeed:
  ```
  Error executing code: MCP error -32603: Invalid arguments: 
  merge_commit_sha: Expected string, received null
  ```
  Always verify PR creation in GitHub UI

## Notes
- Branches must exist before PR creation
- Use descriptive titles and detailed descriptions
- Consider using draft PRs for work in progress

## Error Handling
- Check branch existence
- Verify proper permissions
- Always confirm PR creation in UI