async function testCombined() {
  const query = `
    query PortfolioStats($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          userAvatar
          ranking
          reputation
          countryName
        }
      }
      followers(userSlug: $username) {
        allNum
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
    console.log('Combined query result:', JSON.stringify(payload, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

testCombined();
