async function testFields() {
  const fieldsToTest = [
    'followers',
    'following',
    'social',
    'socialStats',
    'followerCount',
    'followersCount',
    'followersNum',
    'followingNum',
    'hideFollowers',
    'hideFollowing'
  ];
  
  for (const field of fieldsToTest) {
    const query = `
      query Test($username: String!) {
        matchedUser(username: $username) {
          ${field}
        }
      }
    `;
    
    try {
      const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: 'https://leetcode.com',
          referer: 'https://leetcode.com',
          'x-requested-with': 'XMLHttpRequest'
        },
        body: JSON.stringify({ query, variables: { username: 'VaibhavL' } })
      });
      
      const payload = await response.json();
      if (payload.errors) {
        console.log(`Root Field "${field}" failed:`, payload.errors[0].message);
      } else {
        console.log(`Root Field "${field}" SUCCEEDED! Value:`, payload.data?.matchedUser?.[field]);
      }
    } catch (err) {
      console.log(`Root Field "${field}" error:`, err.message);
    }
  }
}

testFields();
