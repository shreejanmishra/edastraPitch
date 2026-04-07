"""
Convert dark-themed HTML graph files to light theme matching VR Experience Overview.

Light theme reference (edastra_vr_slide.html):
- Background: var(--white) = #FAFCFF
- Text: var(--txt) = #103A5A (navy)
- Muted text: #5A8FAD
- Cards/surfaces: var(--ice) = #EAF4FB
- Borders: var(--sky) = #C8E6F7
- Accent: var(--deep) = #2A7FB5
- Rule/subtle borders: rgba(42,127,181,0.15)
- Tab active: var(--deep) = #2A7FB5
- Tab text: var(--muted) = #5A8FAD
- Font: 'Outfit', 'Cormorant Garamond', 'DM Mono'
"""

import re
import os

def convert_traction_preseed(content):
    """Convert edastra_traction_preseed_proof.html"""
    # Main container background
    content = content.replace(".deck{font-family:'Outfit',sans-serif;background:#0D1B2A;color:#F5F0E8;padding:0;}", 
                             ".deck{font-family:'Outfit',sans-serif;background:var(--white);color:var(--txt);padding:0;}")
    # Nav
    content = content.replace(".nav{display:flex;border-bottom:1px solid rgba(42,127,181,0.2);background:#0D1B2A;position:sticky;top:0;z-index:10;}",
                             ".nav{display:flex;border-bottom:1px solid var(--sky);background:var(--white);position:sticky;top:0;z-index:10;}")
    # Nav tabs
    content = content.replace(".ntab{flex:1;padding:11px 0;text-align:center;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:rgba(245,240,232,0.4);cursor:pointer;border-bottom:2px solid transparent;border-top:none;border-left:none;border-right:none;background:none;transition:all .2s;}",
                             ".ntab{flex:1;padding:11px 0;text-align:center;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;border-top:none;border-left:none;border-right:none;background:none;transition:all .2s;}")
    content = content.replace(".ntab.active{color:#2A7FB5;border-bottom-color:#2A7FB5;}",
                             ".ntab.active{color:var(--deep);border-bottom-color:var(--deep);}")
    content = content.replace(".ntab:hover:not(.active){color:rgba(245,240,232,0.7);}",
                             ".ntab:hover:not(.active){color:var(--navy);}")
    # Panel
    content = content.replace(".panel{display:none;padding:1.75rem;animation:fi .25s ease;}",
                             ".panel{display:none;padding:1.75rem;animation:fi .25s ease;}")
    # Eyebrow
    content = content.replace(".eyebrow{font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#2A7FB5;margin-bottom:5px;}",
                             ".eyebrow{font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--deep);margin-bottom:5px;}")
    # Title
    content = content.replace(".ptitle{font-family:'DM Serif Display',serif;font-size:22px;color:#F5F0E8;margin-bottom:3px;}",
                             ".ptitle{font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--navy);margin-bottom:3px;}")
    # Subtitle
    content = content.replace(".psub{font-size:12px;color:rgba(245,240,232,0.45);margin-bottom:1.25rem;}",
                             ".psub{font-size:12px;color:var(--muted);margin-bottom:1.25rem;}")
    # Gold line
    content = content.replace(".gline{width:36px;height:2px;background:#2A7FB5;margin-bottom:1.25rem;}",
                             ".gline{width:36px;height:2px;background:var(--deep);margin-bottom:1.25rem;}")
    # Hero grid cards
    content = content.replace(".hero-card{background:rgba(245,240,232,0.04);border:.5px solid rgba(245,240,232,0.12);border-radius: 12px;padding:1rem 1.1rem;text-align:center;}",
                             ".hero-card{background:var(--white);border:1px solid var(--sky);border-radius:12px;padding:1rem 1.1rem;text-align:center;box-shadow:0 2px 8px rgba(42,127,181,0.06);}")
    content = content.replace(".hero-card.gold{border-color:rgba(42,127,181,0.4);background:rgba(42,127,181,0.07);}",
                             ".hero-card.gold{border-color:var(--deep);background:rgba(42,127,181,0.07);}")
    # Hero number
    content = content.replace(".hero-num{font-family:'DM Serif Display',serif;font-size:28px;line-height:1;margin-bottom:4px;}",
                             ".hero-num{font-family:'Cormorant Garamond',serif;font-size:28px;line-height:1;margin-bottom:4px;}")
    # Hero label
    content = content.replace(".hero-label{font-size:11px;font-weight:500;margin-bottom:4px;}",
                             ".hero-label{font-size:11px;font-weight:500;margin-bottom:4px;color:var(--navy);}")
    # Hero note  
    content = content.replace(".hero-note{font-size:10px;color:rgba(245,240,232,0.45);line-height:1.4;}",
                             ".hero-note{font-size:10px;color:var(--muted);line-height:1.4;}")
    # Insights
    content = content.replace(".insight{border-radius:6px;padding:.75rem 1rem;font-size:12px;line-height:1.6;margin-bottom:1rem;}",
                             ".insight{border-radius:6px;padding:.75rem 1rem;font-size:12px;line-height:1.6;margin-bottom:1rem;}")
    content = content.replace(".i-gold{background:rgba(42,127,181,0.1);border-left:2px solid #2A7FB5;color:rgba(245,240,232,0.85);}",
                             ".i-gold{background:rgba(42,127,181,0.08);border-left:2px solid var(--deep);color:var(--navy);}")
    content = content.replace(".i-green{background:rgba(29,138,80,0.1);border-left:2px solid #059669;color:rgba(245,240,232,0.85);}",
                             ".i-green{background:rgba(29,138,80,0.08);border-left:2px solid #059669;color:var(--navy);}")
    content = content.replace(".i-blue{background:rgba(123,196,232,0.1);border-left:2px solid #0891B2;color:rgba(245,240,232,0.85);}",
                             ".i-blue{background:rgba(123,196,232,0.08);border-left:2px solid #0891B2;color:var(--navy);}")
    content = content.replace(".i-red{background:rgba(216,90,48,0.1);border-left:2px solid #DC2626;color:rgba(245,240,232,0.85);}",
                             ".i-red{background:rgba(216,90,48,0.08);border-left:2px solid #DC2626;color:var(--navy);}")
    # Legend
    content = content.replace(".legend{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:rgba(245,240,232,0.5);margin-bottom:8px;}",
                             ".legend{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:var(--muted);margin-bottom:8px;}")
    # Proof cards
    content = content.replace(".proof-card{background:rgba(245,240,232,0.04);border:.5px solid rgba(245,240,232,0.1);border-radius: 12px;padding:1rem 1.1rem;}",
                             ".proof-card{background:var(--white);border:1px solid var(--sky);border-radius:12px;padding:1rem 1.1rem;box-shadow:0 2px 8px rgba(42,127,181,0.06);}")
    content = content.replace(".proof-signal{font-size:13px;font-weight:500;color:#F5F0E8;}",
                             ".proof-signal{font-size:13px;font-weight:500;color:var(--navy);}")
    content = content.replace(".proof-proves{font-size:11px;color:rgba(245,240,232,0.6);line-height:1.5;margin-bottom:.5rem;}",
                             ".proof-proves{font-size:11px;color:var(--muted);line-height:1.5;margin-bottom:.5rem;}")
    content = content.replace(".proof-bench{font-size:10px;color:rgba(42,127,181,0.8);font-style:italic;}",
                             ".proof-bench{font-size:10px;color:var(--mid);font-style:italic;}")
    # Cap rows
    content = content.replace(".cap-label{font-size:11px;color:rgba(245,240,232,0.6);min-width:160px;}",
                             ".cap-label{font-size:11px;color:var(--muted);min-width:160px;}")
    content = content.replace(".cap-track{flex:1;height:7px;background:rgba(245,240,232,0.08);border-radius:99px;overflow:hidden;}",
                             ".cap-track{flex:1;height:7px;background:var(--ice);border-radius:99px;overflow:hidden;}")
    content = content.replace(".cap-val{font-size:11px;min-width:80px;text-align:right;}",
                             ".cap-val{font-size:11px;min-width:80px;text-align:right;color:var(--navy);}")
    # Milestone items
    content = content.replace(".ms-item{flex:1;min-width:120px;border:.5px solid rgba(245,240,232,0.08);border-right:none;padding:.75rem .875rem;position:relative;}",
                             ".ms-item{flex:1;min-width:120px;border:1px solid var(--sky);border-right:none;padding:.75rem .875rem;position:relative;}")
    content = content.replace(".ms-item:last-child{border-right:.5px solid rgba(245,240,232,0.08);}",
                             ".ms-item:last-child{border-right:1px solid var(--sky);}")
    content = content.replace(".ms-item.done{background:rgba(29,138,80,0.08);}",
                             ".ms-item.done{background:rgba(29,138,80,0.06);}")
    content = content.replace(".ms-item.active-ms{background:rgba(42,127,181,0.08);border-color:rgba(42,127,181,0.35);}",
                             ".ms-item.active-ms{background:rgba(42,127,181,0.06);border-color:var(--deep);}")
    content = content.replace(".ms-item.future{background:rgba(245,240,232,0.02);}",
                             ".ms-item.future{background:var(--ice);}")
    content = content.replace(".ms-title{font-size:11px;font-weight:500;color:#F5F0E8;margin-bottom:4px;}",
                             ".ms-title{font-size:11px;font-weight:500;color:var(--navy);margin-bottom:4px;}")
    content = content.replace(".ms-detail{font-size:10px;color:rgba(245,240,232,0.45);line-height:1.4;}",
                             ".ms-detail{font-size:10px;color:var(--muted);line-height:1.4;}")
    # Narrative blocks
    content = content.replace(".narr-quote{font-size:13px;line-height:1.7;font-style:italic;}",
                             ".narr-quote{font-size:13px;line-height:1.7;font-style:italic;color:var(--navy);}")
    # Chart axis styles - update Chart.js colors in scripts
    # Replace dark chart grid/tick colors with light theme equivalents
    content = content.replace("rgba(245,240,232,0.05)", "rgba(42,127,181,0.08)")
    content = content.replace("rgba(245,240,232,0.07)", "rgba(42,127,181,0.1)")
    content = content.replace("rgba(245,240,232,0.4)", "var(--muted)")
    content = content.replace("rgba(245,240,232,0.5)", "var(--muted)")
    content = content.replace("rgba(245,240,232,0.3)", "rgba(90,143,173,0.5)")
    content = content.replace("rgba(245,240,232,0.25)", "rgba(200,230,247,0.8)")
    content = content.replace("rgba(245,240,232,0.18)", "rgba(200,230,247,0.6)")
    content = content.replace("rgba(245,240,232,0.12)", "rgba(200,230,247,0.4)")
    
    # Inline style color fixes for hero cards label colors
    content = content.replace("style=\"color:#C8E6F7\"", "style=\"color:var(--mid)\"")
    content = content.replace("style=\"color:#FECACA\"", "style=\"color:#D85A30\"")
    content = content.replace("style=\"color:#15755A\"", "style=\"color:#1D8A50\"")
    
    # Narrative block inline colors
    content = content.replace("color:rgba(245,240,232,0.7)", "color:var(--muted)")
    content = content.replace("color:#F5F0E8", "color:var(--navy)")
    content = content.replace("color:rgba(245,240,232,0.85)", "color:var(--navy)")
    content = content.replace("color:rgba(245,240,232,0.6)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.45)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.35)", "color:rgba(90,143,173,0.6)")
    
    # Special proof card borders/backgrounds
    content = content.replace("border-color:rgba(42,127,181,0.35);background:rgba(42,127,181,0.07)", 
                             "border-color:var(--deep);background:rgba(42,127,181,0.07)")
    content = content.replace("background:rgba(42,127,181,0.25);color:#2A7FB5",
                             "background:rgba(42,127,181,0.15);color:var(--deep)")
    
    return content


def convert_success_map(content):
    """Convert edastra_success_map.html"""
    # Main container
    content = content.replace(".d{font-family:'Outfit',sans-serif;background:#050A08;color:#E4EDEA;min-height:100vh;}",
                             ".d{font-family:'Outfit',sans-serif;background:var(--white);color:var(--txt);min-height:100vh;}")
    # Nav
    content = content.replace(".nav{display:flex;background:#050A08;border-bottom:1px solid #0A1410;position:sticky;top:0;z-index:20;overflow-x:auto;}",
                             ".nav{display:flex;background:var(--white);border-bottom:1px solid var(--sky);position:sticky;top:0;z-index:20;overflow-x:auto;}")
    # Nav tabs
    content = content.replace(".nt{flex-shrink:0;padding:11px 16px;font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#102010;cursor:pointer;border-bottom:2px solid transparent;border-top:none;border-left:none;border-right:none;background:none;white-space:nowrap;transition:all .2s;}",
                             ".nt{flex-shrink:0;padding:11px 16px;font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;border-top:none;border-left:none;border-right:none;background:none;white-space:nowrap;transition:all .2s;}")
    content = content.replace(".nt.on{color:#4ADE80;border-bottom-color:#4ADE80;}",
                             ".nt.on{color:var(--deep);border-bottom-color:var(--deep);}")
    content = content.replace(".nt:hover:not(.on){color:#2A4030;}",
                             ".nt:hover:not(.on){color:var(--navy);}")
    # Eyebrow
    content = content.replace(".ey{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#4ADE80;margin-bottom:.4rem;}",
                             ".ey{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--deep);margin-bottom:.4rem;}")
    # Title
    content = content.replace(".ti{font-size:24px;font-weight:700;line-height:1.1;color:#E4EDEA;margin-bottom:.35rem;}",
                             ".ti{font-size:24px;font-weight:700;line-height:1.1;color:var(--navy);margin-bottom:.35rem;}")
    # Subtitle  
    content = content.replace(".sb{font-size:13px;color:#1A3020;margin-bottom:1.5rem;line-height:1.6;}",
                             ".sb{font-size:13px;color:var(--muted);margin-bottom:1.5rem;line-height:1.6;}")
    # Bar
    content = content.replace(".bar{width:44px;height:3px;background:#4ADE80;margin-bottom:1.5rem;}",
                             ".bar{width:44px;height:3px;background:var(--deep);margin-bottom:1.5rem;}")
    # KPI cards
    content = content.replace(".kpi{background:#0A1410;border:1px solid #102018;border-radius: 12px;padding:.875rem 1rem;text-align:center;}",
                             ".kpi{background:var(--white);border:1px solid var(--sky);border-radius:12px;padding:.875rem 1rem;text-align:center;box-shadow:0 2px 8px rgba(42,127,181,0.06);}")
    content = content.replace(".kpi.hi{border-color:#4ADE80;background:rgba(74,222,128,0.06);}",
                             ".kpi.hi{border-color:var(--deep);background:rgba(42,127,181,0.06);}")
    content = content.replace(".kpi-s{font-size:10px;color:#1A3020;line-height:1.4;}",
                             ".kpi-s{font-size:10px;color:var(--muted);line-height:1.4;}")
    # Cards
    content = content.replace(".card{background:#0A1410;border:1px solid #102018;border-radius: 12px;padding:.875rem 1rem;}",
                             ".card{background:var(--white);border:1px solid var(--sky);border-radius:12px;padding:.875rem 1rem;box-shadow:0 2px 8px rgba(42,127,181,0.06);}")
    content = content.replace(".ct{font-size:12px;font-weight:600;color:#E4EDEA;margin-bottom:.6rem;}",
                             ".ct{font-size:12px;font-weight:600;color:var(--navy);margin-bottom:.6rem;}")
    # List items
    content = content.replace(".li li{font-size:11px;color:rgba(228,237,234,0.55);display:flex;align-items:flex-start;gap:6px;line-height:1.4;}",
                             ".li li{font-size:11px;color:var(--muted);display:flex;align-items:flex-start;gap:6px;line-height:1.4;}")
    content = content.replace(".li li::before{content:'';width:5px;height:5px;border-radius:50%;background:#4ADE80;flex-shrink:0;margin-top:5px;}",
                             ".li li::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--deep);flex-shrink:0;margin-top:5px;}")
    # Insights
    content = content.replace(".ins-g{background:rgba(74,222,128,0.07);border-left:2px solid #4ADE80;color:rgba(228,237,234,0.85);}",
                             ".ins-g{background:rgba(29,138,80,0.06);border-left:2px solid #1D8A50;color:var(--navy);}")
    content = content.replace(".ins-b{background:rgba(96,165,250,0.07);border-left:2px solid #60A5FA;color:rgba(228,237,234,0.85);}",
                             ".ins-b{background:rgba(42,127,181,0.06);border-left:2px solid var(--deep);color:var(--navy);}")
    content = content.replace(".ins-y{background:rgba(239,159,39,0.07);border-left:2px solid #EF9F27;color:rgba(228,237,234,0.85);}",
                             ".ins-y{background:rgba(239,159,39,0.06);border-left:2px solid #EF9F27;color:var(--navy);}")
    content = content.replace(".ins-r{background:rgba(248,113,113,0.07);border-left:2px solid #F87171;color:rgba(228,237,234,0.85);}",
                             ".ins-r{background:rgba(248,113,113,0.06);border-left:2px solid #F87171;color:var(--navy);}")
    # Legend
    content = content.replace(".leg{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:#1A3020;margin-bottom:8px;}",
                             ".leg{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:var(--muted);margin-bottom:8px;}")
    # Flywheel items
    content = content.replace(".fw-item{flex:1;padding:.875rem 1rem;border:1px solid #102018;border-right:none;position:relative;}",
                             ".fw-item{flex:1;padding:.875rem 1rem;border:1px solid var(--sky);border-right:none;position:relative;}")
    content = content.replace(".fw-item:last-child{border-right:1px solid #102018;}",
                             ".fw-item:last-child{border-right:1px solid var(--sky);}")
    content = content.replace(".fw-title{font-size:12px;font-weight:600;color:#E4EDEA;margin-bottom:3px;}",
                             ".fw-title{font-size:12px;font-weight:600;color:var(--navy);margin-bottom:3px;}")
    content = content.replace(".fw-detail{font-size:10px;color:rgba(228,237,234,0.4);line-height:1.4;}",
                             ".fw-detail{font-size:10px;color:var(--muted);line-height:1.4;}")
    content = content.replace(".fw-arrow{display:flex;align-items:center;justify-content:center;width:20px;color:#4ADE80;font-size:14px;flex-shrink:0;}",
                             ".fw-arrow{display:flex;align-items:center;justify-content:center;width:20px;color:var(--deep);font-size:14px;flex-shrink:0;}")
    # Risk table
    content = content.replace(".risk-row{display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:9px 10px;border-bottom:1px solid #0A1410;font-size:12px;align-items:start;}",
                             ".risk-row{display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:9px 10px;border-bottom:1px solid var(--ice);font-size:12px;align-items:start;}")
    content = content.replace(".risk-hdr{background:#0A1410;font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#1A3020;border-radius:6px 6px 0 0;}",
                             ".risk-hdr{background:var(--ice);font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);border-radius:6px 6px 0 0;}")
    # Metric tracker
    content = content.replace(".m-label{font-size:11px;color:rgba(228,237,234,0.5);min-width:180px;}",
                             ".m-label{font-size:11px;color:var(--muted);min-width:180px;}")
    content = content.replace(".m-track{flex:1;height:6px;background:#0A1410;border-radius:99px;overflow:hidden;}",
                             ".m-track{flex:1;height:6px;background:var(--ice);border-radius:99px;overflow:hidden;}")
    # Callout
    content = content.replace(".callout{border-radius: 12px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;}",
                             ".callout{border-radius:12px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;}")
    
    # Inline style fixes
    content = content.replace("color:#E4EDEA", "color:var(--navy)")
    content = content.replace("color:rgba(228,237,234,0.55)", "color:var(--muted)")
    content = content.replace("color:rgba(228,237,234,0.5)", "color:var(--muted)")
    content = content.replace("color:rgba(228,237,234,0.45)", "color:var(--muted)")
    content = content.replace("color:rgba(228,237,234,0.4)", "color:rgba(90,143,173,0.6)")
    content = content.replace("color:rgba(228,237,234,0.35)", "color:rgba(90,143,173,0.5)")
    content = content.replace("color:rgba(228,237,234,0.9)", "color:var(--navy)")
    content = content.replace("color:rgba(228,237,234,0.6)", "color:var(--muted)")
    content = content.replace("color:rgba(228,237,234,0.85)", "color:var(--navy)")
    
    # Background inline fixes
    content = content.replace("background:#0A1410", "background:var(--ice)")
    content = content.replace("background:rgba(245,240,232,0.04)", "background:var(--white)")
    content = content.replace("border:1px solid #102018", "border:1px solid var(--sky)")
    content = content.replace("border:.5px solid rgba(245,240,232,0.08)", "border:1px solid var(--sky)")
    content = content.replace("border-bottom:1px solid #0A1410", "border-bottom:1px solid var(--ice)")
    content = content.replace("border-color:rgba(74,222,128,0.2)", "border-color:var(--deep)")
    content = content.replace("border-color:rgba(74,222,128,0.25)", "border-color:var(--deep)")
    content = content.replace("border-color:rgba(74,222,128,0.3)", "border-color:var(--deep)")
    
    # Flywheel item background fixes (inline)
    content = content.replace("background:rgba(74,222,128,0.06)", "background:rgba(42,127,181,0.06)")
    content = content.replace("background:rgba(96,165,250,0.05)", "background:rgba(42,127,181,0.04)")
    content = content.replace("background:rgba(239,159,39,0.05)", "background:rgba(239,159,39,0.06)")
    content = content.replace("background:rgba(248,113,113,0.05)", "background:rgba(248,113,113,0.06)")
    content = content.replace("background:rgba(83,74,183,0.05)", "background:rgba(123,196,232,0.06)")
    content = content.replace("background:rgba(74,222,128,0.07)", "background:rgba(42,127,181,0.06)")
    content = content.replace("background:rgba(74,222,128,0.08)", "background:rgba(42,127,181,0.06)")
    content = content.replace("background:rgba(74,222,128,0.04)", "background:rgba(42,127,181,0.04)")
    content = content.replace("background:rgba(248,113,113,0.04)", "background:rgba(248,113,113,0.04)")
    
    # Chart.js grid/tick colors
    content = content.replace("rgba(255,255,255,0.05)", "rgba(42,127,181,0.08)")
    content = content.replace("rgba(255,255,255,0.04)", "rgba(42,127,181,0.06)")
    content = content.replace("rgba(255,255,255,0.03)", "rgba(42,127,181,0.05)")
    content = content.replace("color:'#1A3020'", "color:'var(--muted)'")

    # Border fix
    content = content.replace("border-bottom:1px solid #0C1814", "border-bottom:1px solid var(--sky)")
    content = content.replace("border-color:rgba(96,165,250,0.2)", "border-color:rgba(42,127,181,0.3)")
    content = content.replace("border-color:rgba(239,159,39,0.2)", "border-color:rgba(239,159,39,0.3)")
    content = content.replace("border-color:rgba(83,74,183,0.2)", "border-color:rgba(123,196,232,0.3)")
    
    return content


def apply_generic_light_theme(content):
    """Apply common dark-to-light conversions that work across multiple files."""
    # These are generic replacements for common dark-theme patterns
    
    # Common dark backgrounds
    for dark_bg in ['#0F0F0F', '#060B0A', '#0D1B2A']:
        content = content.replace(f"background:{dark_bg}", "background:var(--white)")
        content = content.replace(f"background: {dark_bg}", "background: var(--white)")
    
    # Common dark card backgrounds
    for dark_card in ['#161616', '#0C1410', '#0C1814']:
        content = content.replace(f"background:{dark_card}", "background:var(--ice)")
        content = content.replace(f"background: {dark_card}", "background: var(--ice)")
    
    # Common dark borders
    for dark_border in ['#1E1E1E', '#102018', '#0C1814', '#0A1410']:
        content = content.replace(f"border-bottom:1px solid {dark_border}", f"border-bottom:1px solid var(--sky)")
        content = content.replace(f"border:1px solid {dark_border}", f"border:1px solid var(--sky)")
        content = content.replace(f"border:.5px solid {dark_border}", f"border:1px solid var(--sky)")
    
    # Common dark text colors  
    content = content.replace("color:#F0EDE8", "color:var(--navy)")
    content = content.replace("color: #F0EDE8", "color: var(--navy)")
    content = content.replace("color:#E0EDE8", "color:var(--navy)")
    content = content.replace("color: #E0EDE8", "color: var(--navy)")
    content = content.replace("color:#F5F0E8", "color:var(--navy)")
    
    # Common muted text
    content = content.replace("color:#444", "color:var(--muted)")
    content = content.replace("color:#999", "color:var(--muted)")
    content = content.replace("color:#5A8FAD", "color:var(--muted)")
    
    # Common cream-alpha text
    content = content.replace("color:rgba(240,237,232,0.85)", "color:var(--navy)")
    content = content.replace("color:rgba(240,237,232,0.8)", "color:var(--navy)")
    content = content.replace("color:rgba(240,237,232,0.7)", "color:var(--muted)")
    content = content.replace("color:rgba(240,237,232,0.45)", "color:var(--muted)")
    content = content.replace("color:rgba(224,237,232,0.55)", "color:var(--muted)")
    content = content.replace("color:rgba(224,237,232,0.5)", "color:var(--muted)")
    content = content.replace("color:rgba(224,237,232,0.45)", "color:var(--muted)")
    content = content.replace("color:rgba(224,237,232,0.4)", "color:rgba(90,143,173,0.6)")
    content = content.replace("color:rgba(224,237,232,0.35)", "color:rgba(90,143,173,0.5)")
    content = content.replace("color:rgba(224,237,232,0.85)", "color:var(--navy)")
    content = content.replace("color:rgba(224,237,232,0.9)", "color:var(--navy)")
    content = content.replace("color:rgba(224,237,232,0.6)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.55)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.45)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.4)", "color:rgba(90,143,173,0.6)")
    content = content.replace("color:rgba(245,240,232,0.5)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.6)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.7)", "color:var(--muted)")
    content = content.replace("color:rgba(245,240,232,0.75)", "color:var(--navy)")
    content = content.replace("color:rgba(245,240,232,0.8)", "color:var(--navy)")
    content = content.replace("color:rgba(245,240,232,0.85)", "color:var(--navy)")
    content = content.replace("color:rgba(245,240,232,0.35)", "color:rgba(90,143,173,0.5)")
    content = content.replace("color:rgba(245,240,232,0.3)", "color:rgba(90,143,173,0.5)")
    
    # Common dark alpha backgrounds
    content = content.replace("background:rgba(245,240,232,0.04)", "background:var(--white)")
    content = content.replace("background:rgba(245,240,232,0.08)", "background:var(--ice)")
    content = content.replace("background:rgba(245,240,232,0.1)", "background:var(--ice)")
    content = content.replace("background:rgba(245,240,232,0.02)", "background:var(--white)")
    content = content.replace("background:rgba(224,237,232,0.04)", "background:var(--white)")
    
    # Common dark alpha borders
    content = content.replace("border:.5px solid rgba(245,240,232,0.12)", "border:1px solid var(--sky)")
    content = content.replace("border:.5px solid rgba(245,240,232,0.10)", "border:1px solid var(--sky)")
    content = content.replace("border:.5px solid rgba(245,240,232,0.1)", "border:1px solid var(--sky)")
    content = content.replace("border:.5px solid rgba(245,240,232,0.08)", "border:1px solid var(--sky)")
    content = content.replace("border:1px solid rgba(245,240,232,0.1)", "border:1px solid var(--sky)")
    content = content.replace("border:1px solid rgba(245,240,232,0.08)", "border:1px solid var(--sky)")
    content = content.replace("border:1px solid rgba(245,240,232,0.07)", "border:1px solid var(--sky)")
    content = content.replace("border:1px solid rgba(245,240,232,0.12)", "border:1px solid var(--sky)")
    content = content.replace("border-bottom:1px solid rgba(245,240,232,0.08)", "border-bottom:1px solid var(--sky)")
    content = content.replace("border-bottom:1px solid rgba(245,240,232,0.06)", "border-bottom:1px solid var(--ice)")
    content = content.replace("border-bottom:.5px solid rgba(245,240,232,0.06)", "border-bottom:1px solid var(--ice)")
    content = content.replace("border-bottom:.5px solid rgba(245,240,232,0.08)", "border-bottom:1px solid var(--sky)")
    content = content.replace("border-top:1px solid rgba(245,240,232,0.08)", "border-top:1px solid var(--sky)")
    content = content.replace("border-top:1px solid rgba(42,127,181,0.3)", "border-top:1px solid var(--deep)")
    
    # Chart.js dark grid colors
    content = content.replace("'rgba(255,255,255,0.05)'", "'rgba(42,127,181,0.08)'")
    content = content.replace("'rgba(255,255,255,0.04)'", "'rgba(42,127,181,0.06)'")
    content = content.replace("'rgba(255,255,255,0.03)'", "'rgba(42,127,181,0.05)'")
    content = content.replace("'rgba(255,255,255,0.07)'", "'rgba(42,127,181,0.08)'")
    content = content.replace("'rgba(245,240,232,0.05)'", "'rgba(42,127,181,0.08)'")
    content = content.replace("'rgba(245,240,232,0.07)'", "'rgba(42,127,181,0.1)'")
    content = content.replace("'rgba(245,240,232,0.4)'", "'#5A8FAD'")
    content = content.replace("'rgba(245,240,232,0.5)'", "'#5A8FAD'")
    
    # var(--cream) and var(--gold) references → light theme equivalents
    content = content.replace("color: var(--cream)", "color: var(--navy)")
    content = content.replace("color:var(--cream)", "color:var(--navy)")
    content = content.replace("color:var(--gold-light)", "color:var(--deep)")
    content = content.replace("color:var(--gold-l)", "color:var(--deep)")
    content = content.replace("color:var(--gold)", "color:var(--deep)")
    content = content.replace("background:var(--gold)", "background:var(--deep)")
    content = content.replace("background: var(--gold)", "background: var(--deep)")
    content = content.replace("border-color:var(--gold)", "border-color:var(--deep)")
    content = content.replace("border-bottom-color:var(--gold)", "border-bottom-color:var(--deep)")
    
    # Common inline background changes
    content = content.replace("background:rgba(245,240,232,0.08)", "background:var(--ice)")
    content = content.replace("background:rgba(245,240,232,0.1)", "background:var(--ice)")
    
    # Dark inline grid background
    content = content.replace("background:rgba(245,240,232,0.3)", "background:rgba(200,230,247,0.6)")
    
    # Cap track backgrounds
    content = content.replace("background:rgba(245,240,232,0.08)", "background:var(--ice)")
    
    # Donut inner circle
    content = content.replace("fill','#0D1B2A'", "fill','#FAFCFF'")
    content = content.replace("stroke','#0D1B2A'", "stroke','#FAFCFF'")
    
    return content


# Process files
base_dir = r"d:\practice\edastraPitch\public\graphs"

files_to_convert = [
    "edastra_traction_preseed_proof.html",
    "edastra_success_map.html",
    "edastra_content_economics_visual.html",
    "edastra_content_unit_economics.html",
    "edastra_content_unit_economics-2.html",
    "edastra_vr_economics.html",
    "edastra_fund_allocation_burn.html",
]

for filename in files_to_convert:
    filepath = os.path.join(base_dir, filename)
    print(f"Processing {filename}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Apply specific converters
    if filename == "edastra_traction_preseed_proof.html":
        content = convert_traction_preseed(content)
    elif filename == "edastra_success_map.html":
        content = convert_success_map(content)
    
    # Apply generic light theme to all files
    content = apply_generic_light_theme(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  - Converted to light theme")

print("\nAll files converted successfully!")
