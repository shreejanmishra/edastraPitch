const fs = require('fs');
let b = fs.readFileSync('public/graphs/edastra_success_map.html', 'utf8');

// Replace background: #0a1410 specifically in the 5 pillars section?
// Or globally? The user said "in the 5 pillars section of success map, change bg color of each grid from #0a1410..."
// And "#0a1410" also occurs in North Star Metrics section! "border-top: 1px solid #0a1410", "background: #0a1410"
// Let's only replace it where the user means.
// Actually, looking at the code around "5 pillars":
// <div id="sl-pillars"> ... <div style="... background: #0a1410; ..."
// I'll scope it to just the 5 pillars section if possible, by slicing the string.
let slPillars = b.indexOf('<div class="sl" id="sl-pillars">');
let slMetrics = b.indexOf('<div class="sl" id="sl-metrics">');

if (slPillars !== -1 && slMetrics !== -1) {
    let part1 = b.substring(0, slPillars);
    let part2 = b.substring(slPillars, slMetrics);
    let part3 = b.substring(slMetrics);
    
    // Replace in part2
    part2 = part2.replace(/background:\s*#0a1410/ig, 'background: #EAF4FB');
    
    b = part1 + part2 + part3;
}

// "also change this text color rgba(228, 237, 234, 0.5), wherever it is occuring to #5a95b9"
// Globablly replace that.
b = b.replace(/rgba\(\s*228\s*,\s*237\s*,\s*234\s*,\s*0\.5\s*\)/g, '#5a95b9');

fs.writeFileSync('public/graphs/edastra_success_map.html', b);
console.log('done');
