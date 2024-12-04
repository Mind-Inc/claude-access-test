# fork_repository

Fork a GitHub repository to your account or specified organization.

## Parameters
```javascript
{
    owner: string,       // Source repository owner (required)
    repo: string,        // Source repository name (required)
    organization: string // Target organization (optional)
}
```

## Usage Example
```javascript
// Fork to personal account
await fork_repository({
    owner: "original-org",
    repo: "source-repo"
});

// Fork to organization
await fork_repository({
    owner: "original-org",
    repo: "source-repo",
    organization: "target-org"
});
```

## Notes
- Requires appropriate permissions
- Repository name will be the same in fork
- May take time for large repositories

## Error Handling
- Check organization access rights
- Handle name conflicts
- Verify fork completion