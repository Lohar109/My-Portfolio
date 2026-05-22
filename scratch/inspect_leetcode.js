import fs from 'fs';

async function inspect() {
  try {
    const res = await fetch('https://leetcode.com/u/VaibhavL/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    
    if (!res.ok) {
      console.log(`Failed to fetch LeetCode profile, status: ${res.status}`);
      return;
    }
    
    const html = await res.text();
    fs.writeFileSync('scratch/leetcode.html', html);
    console.log('Saved leetcode.html, length:', html.length);
    
    // Search for 23 or followers in html
    const lines = html.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('23') || line.toLowerCase().includes('follower')) {
        console.log(`Line ${idx + 1}: ${line.trim().slice(0, 300)}`);
      }
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

inspect();
