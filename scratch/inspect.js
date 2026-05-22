import fs from 'fs';

async function test() {
  try {
    const res = await fetch('https://github.com/users/Lohar109/contributions');
    const html = await res.text();
    fs.writeFileSync('scratch/contrib.html', html);
    console.log('Saved contrib.html, length:', html.length);
    
    // Let's find some td or rect matching ContributionCalendar-day
    const matches = html.match(/<td[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g) || [];
    console.log('Number of matched td elements:', matches.length);
    if (matches.length > 0) {
      console.log('First 5 matches:');
      console.log(matches.slice(0, 5));
    }
    
    const rectMatches = html.match(/<rect[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g) || [];
    console.log('Number of matched rect elements:', rectMatches.length);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
