const policies = require('./data/policies.json');
const users = require('./data/users.json');

function isAllowed(username, action) {
const user = users[username];

if (!user) return false;

for (let policyName of user.policies) {
const policy = policies[policyName];

```
for (let stmt of policy.Statement) {
  if (
    stmt.Effect === "Allow" &&
    (stmt.Action.includes(action) || stmt.Action.includes("s3:*"))
  ) {
    return true;
  }
}
```

}

return false;
}

module.exports = { isAllowed };
