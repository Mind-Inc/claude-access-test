# GitHub Integration Patterns

## Verified Access Patterns

### Private Repository Access
- Always include branch name
- Use exact file paths
- Handle case-sensitive organization names
- Expect base64 encoded content

### PR Investigation
1. Identify modified files
2. Use get_file_contents for each file
3. Process content appropriately
4. Verify actual repository state

## Common Pitfalls

### Private Repositories
1. Missing branch specification
2. Incorrect organization casing
3. Incomplete file paths
4. Unhandled base64 content

### PR Operations
1. Ignoring success despite errors
2. Missing file path validation
3. Incomplete error handling
4. Lack of state verification

## Best Practices

### File Operations
- Use push_files for multiple files
- Verify content after operations
- Maintain consistent paths
- Handle errors appropriately

### Branch Management
- Create feature branches for tests
- Verify branch existence
- Clean up test branches
- Document branch purposes

## Implementation Examples

### Private Repo Access
```javascript
const fileContent = await get_file_contents({
    owner: "Org-Name",      // Case sensitive
    repo: "private-repo",
    path: "full/file/path", // Complete path
    branch: "feature"       // Required
});
```

### Multiple File Update
```javascript
await push_files({
    owner: "org",
    repo: "repo",
    branch: "feature",
    files: [
        { path: "file1", content: "content1" },
        { path: "file2", content: "content2" }
    ],
    message: "Update multiple files"
});
```

## Testing Guidelines

1. Use this repository for initial testing
2. Document successful patterns
3. Verify before production use
4. Maintain test cleanliness
5. Update documentation regularly
