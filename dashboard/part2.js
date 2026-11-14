/* Intent Signals to Pipeline: the What happens next tab and the guided tour. Built by Nazia Hossain. */
(function(){
if(window.__imsP2)return;window.__imsP2=1;
const CSS="#p2,.p2-tabs,.p2-tour,.p2-toast,.p2-replay,.p2-tour-hole{\n  --paper:#0F1B20;--raised:#16242A;--raised-2:#1B2C33;--line:#2A3A40;--ink:#E9EFED;--muted:#9DAEB4;--spruce:#5CC0AE;--on-spruce:#0F1B20;--mist:#16332F;--signal:#F5B52E;--on-signal:#0F1B20;--warn:#E8836B;\n  --display:\"Schibsted Grotesk\",\"Helvetica Neue\",Arial,sans-serif;--sans:\"IBM Plex Sans\",\"Segoe UI\",system-ui,sans-serif;--mono:\"IBM Plex Mono\",ui-monospace,Menlo,monospace;\n}\n#p2{color:var(--ink);font:15px/1.55 var(--sans);margin-top:4px}\n#p2 *,.p2-tour *{box-sizing:border-box}\n#p2 :focus-visible,.p2-tabs :focus-visible,.p2-tour :focus-visible,.p2-replay:focus-visible{outline:none;box-shadow:0 0 0 2px var(--paper),0 0 0 4px var(--spruce)}\n.p2-tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin:4px 0 20px;overflow-x:auto;font-family:var(--sans)}\n.p2-tab{background:none;border:0;border-bottom:2px solid transparent;padding:12px 14px;font:600 15px var(--sans);color:var(--muted);display:flex;gap:8px;align-items:center;white-space:nowrap;cursor:pointer}\n.p2-tab[aria-selected=\"true\"]{color:var(--ink);border-bottom-color:var(--spruce)}\n.p2-tab .p2-count{font:500 12px/1 var(--mono);background:var(--mist);color:var(--spruce);padding:4px 6px;border-radius:2px}\n.p2-replay{display:inline-flex;align-items:center;gap:6px;margin-left:auto;align-self:center;background:transparent;border:1px solid var(--line);color:var(--ink);border-radius:2px;padding:6px 10px;font:600 13px var(--sans);cursor:pointer;white-space:nowrap}\n.p2-replay:hover{background:var(--raised-2)}\n.p2-hidden{display:none!important}\n/* reset dashboard rules that share class names with this tab */\n#p2 .bar{flex:none;height:auto;background:none;border-radius:0;overflow:visible}\n#p2 .bar span{display:inline;height:auto;background:none;border-radius:0}\n#p2 .seg{margin:0;grid-template-columns:none}\n#p2 .seg button{min-height:0}\n#p2 .row{border-bottom:0}\n#p2 .detail{padding:0;background:none}\n#p2 .label{margin:0}\n#p2 .arrow{margin:0}\n#p2 .chip{min-height:0;border:0}\n.p2-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(20px + env(safe-area-inset-bottom,0px));background:var(--ink);color:var(--paper);padding:10px 16px;border-radius:4px;font:14px var(--sans);box-shadow:0 8px 24px -8px #000a;max-width:calc(100% - 32px);z-index:1001}\n/* tour */\n.p2-tour-hole{position:fixed;z-index:1000;border-radius:4px;box-shadow:0 0 0 2px var(--spruce),0 0 0 9999px rgba(6,12,15,.72);pointer-events:none;transition:all .2s ease}\n.p2-tour-block{position:fixed;inset:0;z-index:999}\n.p2-tour{position:fixed;z-index:1002;width:min(360px,calc(100vw - 32px));background:var(--raised);border:1px solid var(--spruce);border-radius:4px;box-shadow:0 8px 24px -8px #000a;padding:18px 18px 14px;color:var(--ink);font:15px/1.5 var(--sans);display:grid;gap:10px}\n.p2-tour h3{font:700 18px/1.25 var(--display);margin:0}\n.p2-tour p{margin:0;color:var(--ink)}\n.p2-tour .p2-tour-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:4px}\n.p2-tour .p2-step{font:500 12px var(--mono);color:var(--muted)}\n.p2-tour .p2-tb{display:flex;gap:6px}\n.p2-tour button{font:600 13px var(--sans);border-radius:2px;padding:7px 12px;cursor:pointer;border:1px solid var(--line);background:transparent;color:var(--ink)}\n.p2-tour button.p2-next{background:var(--spruce);border-color:var(--spruce);color:var(--on-spruce)}\n.p2-tour button.p2-skip{border:0;padding:7px 4px;color:var(--muted);text-decoration:underline;text-underline-offset:3px}\n@media (max-width:640px){.p2-tour{left:16px!important;right:16px;width:auto;top:auto!important;bottom:calc(16px + env(safe-area-inset-bottom,0px))!important}}\n@media (prefers-reduced-motion:reduce){.p2-tour-hole{transition:none}}\n#p2 [hidden]{display:none!important}#p2 h2,#p2 h3{font-family:var(--display);margin:0;text-wrap:balance}#p2 p{margin:0}#p2 .mono{font-family:var(--mono)}#p2 .muted{color:var(--muted)}#p2 .num{font-variant-numeric:tabular-nums}#p2 button{font:inherit;color:inherit;cursor:pointer}#p2 .chip{font:500 12px/1 var(--mono);padding:5px 8px;border-radius:2px;background:var(--mist);color:var(--spruce);white-space:nowrap}#p2 .btn{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--spruce);color:var(--spruce);background:transparent;border-radius:2px;padding:9px 14px;font-weight:600;font-size:14px;text-decoration:none;white-space:nowrap}#p2 .btn:hover{background:var(--mist)}#p2 .btn.solid{background:var(--spruce);color:var(--on-spruce)}#p2 .btn.solid:hover{background:#74cdbd}#p2 .btn.ghost{border-color:var(--line);color:var(--ink)}#p2 .btn.ghost:hover{background:var(--raised-2)}#p2 .btn.small{padding:6px 10px;font-size:13px}#p2 .panel{background:var(--raised);border:1px solid var(--line);border-radius:4px}#p2 .panel-h{padding:16px 20px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}#p2 .panel-h h2{font-size:19px}#p2 .panel-b{padding:18px 20px}#p2 .label{font:500 12px/16px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}#p2 .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}#p2 .demo-note{font-size:14px;color:var(--muted);margin-bottom:16px;max-width:90ch}#p2 .flow{display:grid;grid-template-columns:1fr auto 1fr 1fr;gap:12px;align-items:stretch;margin-bottom:20px}#p2 .flow .card{background:var(--raised);border:1px solid var(--line);border-radius:4px;padding:16px 18px;display:flex;flex-direction:column;gap:10px}#p2 .flow .card h3{font-size:16px}#p2 .flow .arrow{display:grid;place-items:center;color:var(--muted)}#p2 .stats{display:flex;gap:22px;flex-wrap:wrap}#p2 .stat .n{font:500 26px/1 var(--mono)}#p2 .stat .t{font-size:13px;color:var(--muted);margin-top:4px}#p2 .flow .card p{font-size:14px;color:var(--muted)}#p2 .seg{display:inline-flex;border:1px solid var(--line);border-radius:2px;padding:3px;background:var(--paper);gap:3px}#p2 .seg button{border:0;background:none;padding:8px 14px;border-radius:2px;font-weight:600;font-size:14px;color:var(--muted)}#p2 .seg button[aria-pressed=\"true\"]{background:var(--spruce);color:var(--on-spruce)}#p2 .bar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}#p2 .mode{display:flex;gap:14px;align-items:center;flex-wrap:wrap;font-size:14px}#p2 .switch{position:relative;width:44px;height:24px;border-radius:12px;border:1px solid var(--line);background:var(--paper);padding:0;flex:none}#p2 .switch::after{content:\"\";position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:var(--muted);transition:left .15s}#p2 .switch[aria-checked=\"true\"]{background:var(--spruce);border-color:var(--spruce)}#p2 .switch[aria-checked=\"true\"]::after{left:23px;background:var(--on-spruce)}#p2 .confirm{margin-bottom:16px;border:1px solid var(--spruce);background:var(--mist);border-radius:4px;padding:16px 18px;display:grid;gap:12px}#p2 .confirm ul{margin:0;padding-left:18px;display:grid;gap:4px;font-size:14px}#p2 .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}#p2 .ob{display:grid;grid-template-columns:330px minmax(0,1fr);gap:16px;align-items:start}#p2 .alist{display:grid;gap:8px}#p2 .acard{text-align:left;background:var(--raised);border:1px solid var(--line);border-radius:4px;padding:14px 16px;display:grid;gap:6px;width:100%}#p2 .acard:hover{border-color:#3d5158}#p2 .acard[aria-current=\"true\"]{border-color:var(--spruce);background:var(--raised-2)}#p2 .acard .top{display:flex;justify-content:space-between;gap:10px;align-items:baseline}#p2 .acard .co{font-weight:600}#p2 .acard .score{font:500 15px var(--mono);color:var(--spruce)}#p2 .acard .meta{font-size:13px;color:var(--muted)}#p2 .acard .q{display:flex;gap:6px;flex-wrap:wrap}#p2 .pill{font:500 11.5px/1 var(--mono);padding:4px 7px;border-radius:2px;border:1px solid var(--line);color:var(--muted);white-space:nowrap}#p2 .pill.go{border-color:#2f6b62;color:var(--spruce)}#p2 .pill.done{background:var(--spruce);border-color:var(--spruce);color:var(--on-spruce)}#p2 .pill.skip{border-style:dashed}#p2 .detail{display:grid;gap:16px;min-width:0}#p2 .alert-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;flex-wrap:wrap}#p2 .alert-top h2{font-size:22px}#p2 .why{font-size:16px;line-height:1.6;max-width:68ch}#p2 .signals{display:flex;gap:6px;flex-wrap:wrap}#p2 .sig{font-size:13px;background:var(--paper);border:1px solid var(--line);padding:5px 9px;border-radius:2px}#p2 .sig b{font-family:var(--mono);font-weight:500;color:var(--spruce);margin-left:4px}#p2 .next{background:var(--mist);border-radius:4px;padding:12px 14px;display:grid;gap:4px}#p2 .routed{display:flex;gap:18px;flex-wrap:wrap;font-size:13px;color:var(--muted)}#p2 .routed span{display:inline-flex;gap:6px;align-items:center}#p2 .grid2{display:grid;gap:12px}#p2 .contacts{display:grid}#p2 .contact{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:12px 20px;border-top:1px solid var(--line);text-align:left;background:none;border-left:0;border-right:0;border-bottom:0;width:100%}#p2 .contact:first-child{border-top:0}#p2 .contact:hover{background:var(--raised-2)}#p2 .contact[aria-current=\"true\"]{background:var(--raised-2);box-shadow:inset 3px 0 0 var(--spruce)}#p2 .contact .nm{font-weight:600}#p2 .contact .rl{font-size:13px;color:var(--muted)}#p2 .email{display:grid;gap:0}#p2 .ef{display:grid;grid-template-columns:70px minmax(0,1fr);gap:10px;padding:10px 20px;border-bottom:1px solid var(--line);font-size:14px;align-items:center}#p2 .ef .k{color:var(--muted)}#p2 .ef input{width:100%;background:transparent;border:0;color:var(--ink);font:inherit;padding:2px 0}#p2 .ef input:focus{outline:none;box-shadow:0 1px 0 var(--spruce)}#p2 .email textarea{width:100%;min-height:250px;resize:vertical;background:transparent;border:0;color:var(--ink);font:15px/1.6 var(--sans);padding:14px 20px}#p2 .email textarea:focus{outline:none;box-shadow:inset 0 0 0 1px var(--spruce)}#p2 .built{padding:12px 20px;border-top:1px solid var(--line);background:var(--paper);font-size:13px;color:var(--muted);display:grid;gap:6px}#p2 .built .signals .sig{font-size:12px}#p2 .actions{padding:14px 20px;border-top:1px solid var(--line);display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:space-between}#p2 .status-line{font-size:13px;color:var(--muted)}#p2 .segs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:16px}#p2 .scard{text-align:left;background:var(--raised);border:1px solid var(--line);border-radius:4px;padding:16px 18px;display:grid;gap:8px;width:100%}#p2 .scard[aria-current=\"true\"]{border-color:var(--spruce);background:var(--raised-2)}#p2 .scard h3{font-size:17px}#p2 .scard .accts{font-size:13px;color:var(--muted)}#p2 .ib{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start}#p2 .files{display:grid}#p2 .file{padding:14px 20px;border-top:1px solid var(--line);display:grid;gap:10px}#p2 .file:first-child{border-top:0}#p2 .file .fh{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap}#p2 .file .fn{font:500 13.5px var(--mono);word-break:break-all}#p2 .tbl{overflow-x:auto;border:1px solid var(--line);border-radius:2px}#p2 table{border-collapse:collapse;width:100%;font:12.5px/1.4 var(--mono)}#p2 th,#p2 td{padding:7px 10px;text-align:left;border-bottom:1px solid var(--line);white-space:nowrap}#p2 th{color:var(--muted);font-weight:500;background:var(--paper)}#p2 tr:last-child td{border-bottom:0}#p2 .ads{display:grid}#p2 .ad{padding:16px 20px;border-top:1px solid var(--line);display:grid;gap:10px}#p2 .ad:first-child{border-top:0}#p2 .ad .ah{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap}#p2 .li-preview{background:#1F2D33;border:1px solid var(--line);border-radius:4px;overflow:hidden;max-width:460px}#p2 .li-preview .pt{padding:12px 14px;font-size:14px;display:grid;gap:8px}#p2 .li-preview .who{display:flex;gap:8px;align-items:center;font-size:13px}#p2 .li-preview .av{width:28px;height:28px;border-radius:2px;background:var(--mist);display:grid;place-items:center;font:600 12px var(--display);color:var(--spruce)}#p2 .li-preview .img{aspect-ratio:1.91/1;max-width:100%;background:linear-gradient(135deg,#16332F,#0F1B20);display:grid;place-items:center;font:700 20px/1.2 var(--display);padding:18px;text-align:center;color:var(--ink)}#p2 .li-preview .foot{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 14px;border-top:1px solid var(--line);font-size:13px}#p2 .li-preview .cta{border:1px solid var(--spruce);color:var(--spruce);padding:4px 10px;border-radius:12px;font-weight:600;font-size:12px;white-space:nowrap}#p2 .rsa{display:grid;gap:6px}#p2 .rsa .ln{display:flex;justify-content:space-between;gap:10px;font-size:14px;padding:6px 10px;background:var(--paper);border:1px solid var(--line);border-radius:2px}#p2 .rsa .ln .c{font:500 12px var(--mono);color:var(--muted);white-space:nowrap}#p2 .rsa .ln .c.over{color:var(--warn)}#p2 .live{display:grid;gap:0}#p2 .lv{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;padding:12px 20px;border-top:1px solid var(--line);align-items:center;font-size:14px}#p2 .lv:first-child{border-top:0}#p2 .lv .s{font-size:13px;color:var(--muted)}#p2 .pill.need{border-color:#6b4f2a;color:#E9C27A}#p2 .note{font-size:13.5px;color:var(--muted);max-width:75ch}#p2 .reqs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:20px}#p2 .req{padding:16px 20px;display:grid;gap:10px}#p2 .req h3{font-size:16px}#p2 .req ul{list-style:none;margin:0;padding:0;display:grid;gap:8px;font-size:14px}#p2 .req li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:start}@media (max-width:980px){#p2 .flow{grid-template-columns:1fr}#p2 .flow .arrow{transform:rotate(90deg);height:18px}#p2 .ob,#p2 .ib{grid-template-columns:minmax(0,1fr)}#p2 .segs{grid-template-columns:minmax(0,1fr)}#p2 .reqs{grid-template-columns:minmax(0,1fr)}\n}@media (max-width:640px){#p2 .ef{grid-template-columns:56px minmax(0,1fr);padding:10px 14px}#p2 .panel-h,#p2 .panel-b,#p2 .contact,#p2 .file,#p2 .ad,#p2 .lv,#p2 .actions,#p2 .built{padding-left:14px;padding-right:14px}#p2 .email textarea{padding:12px 14px}\n}";
const HTML="<section id=\"p2\" role=\"tabpanel\" aria-labelledby=\"p2tab-next\" hidden>\n<p class=\"demo-note\">A demo of what could happen next with today\u2019s in-market companies, using the default ICP. The contacts, sales reps and ads are invented, and nothing here sends emails or uploads files.</p>\n    <div class=\"flow\">\n      <div class=\"card\">\n        <h3>From today's signals</h3>\n        <div class=\"stats\"><div class=\"stat\"><div class=\"n num\" id=\"p2fAccounts\"></div><div class=\"t\">accounts in market</div></div><div class=\"stat\"><div class=\"n num\" id=\"p2fContacts\"></div><div class=\"t\">contacts found</div></div></div>\n        <p>Every weekday at 6am the same job that scores accounts now builds the follow-up for each one.</p>\n      </div>\n      <div class=\"arrow\" aria-hidden=\"true\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg></div>\n      <div class=\"card\">\n        <h3>Outbound, for sales</h3>\n        <div class=\"stats\"><div class=\"stat\"><div class=\"n num\" id=\"p2fAlerts\"></div><div class=\"t\">sales alerts</div></div><div class=\"stat\"><div class=\"n num\" id=\"p2fEmails\"></div><div class=\"t\">emails to approve</div></div></div>\n        <p>Each rep gets a HubSpot task saying why the account is hot now, with a personal email ready for every contact.</p>\n      </div>\n      <div class=\"card\">\n        <h3>Inbound, for ads</h3>\n        <div class=\"stats\"><div class=\"stat\"><div class=\"n num\" id=\"p2fAud\"></div><div class=\"t\">audiences</div></div><div class=\"stat\"><div class=\"n num\" id=\"p2fAds\"></div><div class=\"t\">ads written</div></div></div>\n        <p>Accounts are grouped by what they are researching, with upload-ready LinkedIn and Google lists and ads to match.</p>\n      </div>\n    </div>\n\n    <div class=\"bar\">\n      <div class=\"seg\" role=\"group\" aria-label=\"Choose a view\">\n        <button id=\"p2segOut\" aria-pressed=\"true\">Outbound</button>\n        <button id=\"p2segIn\" aria-pressed=\"false\">Inbound</button>\n      </div>\n      <div class=\"mode\" id=\"p2modeBox\">\n        <span>Auto-send emails</span>\n        <button class=\"switch\" id=\"p2autoSwitch\" role=\"switch\" aria-checked=\"false\" aria-label=\"Auto-send emails\"></button>\n        <span class=\"muted\" id=\"p2modeText\">Off. A rep approves every email.</span>\n      </div>\n    </div>\n\n    <div class=\"confirm\" id=\"p2autoConfirm\" hidden>\n      <strong>Turn on auto-send?</strong>\n      <p style=\"font-size:14px\">Emails would go out without a rep reading them first, but only when all of these are true:</p>\n      <ul>\n        <li>The account scores 90 or more.</li>\n        <li>The contact hasn't been emailed by anyone in the last 30 days.</li>\n        <li>The account has no open deal in HubSpot.</li>\n        <li>No more than 20 emails a day, sent from the account owner's inbox with them copied in.</li>\n        <li>Any reply stops the sequence and hands the contact back to the rep.</li>\n      </ul>\n      <p style=\"font-size:14px\" id=\"p2autoImpact\"></p>\n      <div class=\"row\"><button class=\"btn solid small\" id=\"p2autoYes\">Turn on auto-send</button><button class=\"btn ghost small\" id=\"p2autoNo\">Keep reviewing</button></div>\n    </div>\n\n    <!-- OUTBOUND -->\n    <div id=\"p2outView\" class=\"ob\">\n      <div class=\"alist\" id=\"p2alertList\" aria-label=\"Sales alerts\"></div>\n      <div class=\"detail\" id=\"p2alertDetail\"></div>\n    </div>\n\n    <!-- INBOUND -->\n    <div id=\"p2inView\" hidden>\n      <div class=\"segs\" id=\"p2segList\"></div>\n      <div class=\"ib\">\n        <div class=\"grid2\">\n          <div class=\"panel\">\n            <div class=\"panel-h\"><h2>Audience files</h2><span class=\"pill go\">Upload-ready</span></div>\n            <div class=\"files\" id=\"p2fileList\"></div>\n          </div>\n          <div class=\"panel\">\n            <div class=\"panel-h\"><h2>Going live</h2></div>\n            <div class=\"live\">\n              <div class=\"lv\"><div>LinkedIn Campaign Manager<div class=\"s\">Upload the company list as a matched audience. Takes about five minutes.</div></div><span class=\"pill go\">Works today</span></div>\n              <div class=\"lv\"><div>Google Ads<div class=\"s\">Upload the Customer Match list to the segment's audience. Takes about five minutes.</div></div><span class=\"pill go\">Works today</span></div>\n              <div class=\"lv\"><div>Push lists and ads to LinkedIn automatically<div class=\"s\">Needs approved access to LinkedIn's Advertising API.</div></div><span class=\"pill need\">Needs access</span></div>\n              <div class=\"lv\"><div>Push lists and ads to Google automatically<div class=\"s\">Needs a Google Ads API developer token with Basic access.</div></div><span class=\"pill need\">Needs access</span></div>\n            </div>\n            <div class=\"panel-b\" style=\"border-top:1px solid var(--line)\"><p class=\"note\">Accounts stay in an audience for 30 days, so lists stay above each platform's minimum size. An account leaves its audience as soon as its signals go cold or HubSpot shows an open deal, at which point sales owns it.</p></div>\n          </div>\n        </div>\n        <div class=\"panel\">\n          <div class=\"panel-h\"><h2 id=\"p2adsTitle\">Ads</h2><span class=\"muted\" style=\"font-size:13px\">Written by Claude from the segment's intent topics</span></div>\n          <div class=\"ads\" id=\"p2adList\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"reqs\">\n      <div class=\"panel req\">\n        <h3>To run outbound for real</h3>\n        <ul>\n          <li><span>HubSpot, for owners, tasks, email drafts and logging</span><span class=\"pill go\">Already connected</span></li>\n          <li><span>Claude API, for alerts and emails</span><span class=\"pill go\">Already connected</span></li>\n          <li><span>A contact data source such as Apollo or Cognism, to find the right people at each account</span><span class=\"pill need\">Needed</span></li>\n        </ul>\n      </div>\n      <div class=\"panel req\">\n        <h3>To run inbound for real</h3>\n        <ul>\n          <li><span>Daily audience files and ad copy</span><span class=\"pill go\">Ready to build</span></li>\n          <li><span>LinkedIn Advertising API, for automatic pushes</span><span class=\"pill need\">Apply for access</span></li>\n          <li><span>Google Ads API developer token, for automatic pushes</span><span class=\"pill need\">Apply for access</span></li>\n        </ul>\n      </div>\n    </div>\n  ";
function init(){
const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
const $=id=>document.getElementById(id)||(typeof sec!=='undefined'&&sec.querySelector('#'+id))||(typeof tabs!=='undefined'&&tabs.querySelector('#'+id));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// ---- tabs, placement and guided tour ----
// The dashboard redraws #app on every change, so these elements are created once and put back after each redraw.
const app=document.getElementById('app')||document.body;
const tabs=document.createElement('div');
tabs.className='p2-tabs';tabs.setAttribute('role','tablist');
tabs.innerHTML='<button class="p2-tab" role="tab" id="p2tab-signals" aria-selected="true">Signals</button><button class="p2-tab" role="tab" id="p2tab-next" aria-selected="false">What happens next <span class="p2-count" id="p2queueCount"></span></button>';
const wrapP2=document.createElement('div');wrapP2.innerHTML=HTML;const sec=wrapP2.firstElementChild;
const toastEl=document.createElement('div');toastEl.className='p2-toast';toastEl.setAttribute('role','status');toastEl.hidden=true;document.body.appendChild(toastEl);
const replay=document.createElement('button');replay.className='p2-replay';replay.type='button';replay.textContent='Take the tour';
tabs.appendChild(replay);
let current='signals';
function mount(){
  const cols=app.querySelector('.cols');
  if(!cols)return false;
  if(tabs.parentNode!==cols.parentNode||tabs.nextElementSibling!==cols)cols.insertAdjacentElement('beforebegin',tabs);
  if(sec.previousElementSibling!==cols)cols.insertAdjacentElement('afterend',sec);
  cols.classList.toggle('p2-hidden',current==='next');
  return true;
}
new MutationObserver(()=>{if(!tabs.isConnected||!sec.isConnected||!replay.isConnected||(current==='next'&&app.querySelector('.cols:not(.p2-hidden)')))mount();}).observe(app,{childList:true});
const kpisEl=()=>app.querySelector('.kpis');
function setTab(t,noHash){
  const next=t==='next';
  $('p2tab-signals').setAttribute('aria-selected',!next);
  $('p2tab-next').setAttribute('aria-selected',next);
  current=next?'next':'signals';
  const cols=app.querySelector('.cols');if(cols)cols.classList.toggle('p2-hidden',next);
  sec.hidden=!next;
  if(!noHash){try{history.replaceState(null,'',next?'#next':location.pathname);}catch(e){}}
}
tabs.addEventListener('click',e=>{const b=e.target.closest('.p2-tab');if(!b)return;setTab(b.id==='p2tab-next'?'next':'signals');});
addEventListener('hashchange',()=>setTab(location.hash==='#next'?'next':'signals',true));


const plural=(n,one,many)=>n+' '+(n===1?one:(many||one+'s'));

const REPS={sam:{name:'Sam Reid',first:'Sam',email:'sam.reid'},jo:{name:'Jo Campbell',first:'Jo',email:'jo.campbell'},ali:{name:'Ali Hassan',first:'Ali',email:'ali.hassan'}};
const TOPIC={pay:'Payroll Software',hris:'HRIS (Human Resource Information Systems)',ta:'Time and Attendance'};

const ACCOUNTS=[
 {id:'northbridge',co:'Northbridge Logistics',ind:'Logistics',staff:850,city:'Daventry',domain:'northbridge-logistics.example',score:100,visits:6,pages:7,last:'Thu 12 Nov',rep:'sam',
  topics:[['pay',81],['hris',72]],
  why:'Northbridge Logistics came back six times this week, moving from the payroll integrations page to pricing and then the contact page. Away from our site it is researching payroll software and HR systems more than usual. This looks like a team building a shortlist to replace payroll, and possibly HR, at the same time.',
  next:'Call Helen Marsh today. Lead with payroll and HR running from one system, and offer the logistics case study.',
  signals:['Contact page','Pricing','Payroll integrations','Logistics case study'],
  contacts:[
   {first:'Helen',last:'Marsh',title:'Finance Director',role:'Signs off the budget',crm:'Not contacted before',
    subject:'Payroll across sites and shift patterns',
    body:'Hi Helen,\n\nAt Northbridge’s size, payroll often ends up spread across sites, shift patterns and spreadsheets, with month end depending on one or two people.\n\nWe helped another UK logistics firm bring payroll in-house and connect it to their HR system, so changes flow through without anyone re-keying them. I can send you the short case study if it would help.\n\nWould 20 minutes next week be useful to see whether the same approach fits Northbridge?\n\nBest,\nSam',
    built:['Pricing and integrations pages','Logistics case study','Payroll Software surge 81']},
   {first:'Daniel',last:'Okafor',title:'Head of People',role:'Likely champion',crm:'Attended a webinar in June',
    subject:'One system for payroll and HR',
    body:'Hi Daniel,\n\nThanks for joining our webinar back in June. Since then a few logistics businesses have asked us the same question: can payroll and HR live in one system without a long project?\n\nThe short answer is yes. Changes to contracts, shifts and starters flow straight into payroll, so your team stops chasing data between systems.\n\nIf you are looking at this now, I’d be glad to show you how it works for a business with around 850 people. Would a short call next week suit?\n\nBest,\nSam',
    built:['HRIS surge 72','Payroll integrations page','June webinar in HubSpot']},
   {first:'Priya',last:'Nair',title:'Payroll Manager',role:'Day-to-day user',crm:'Not contacted before',
    subject:'Month end without the spreadsheets',
    body:'Hi Priya,\n\nWhen payroll covers several depots and shift patterns, the hard part is usually collecting hours and changes before the cut-off, not running the payroll itself.\n\nOur payroll software pulls those changes in automatically and flags anything unusual before you run. I can share a two-minute walkthrough if that would be useful.\n\nBest,\nSam',
    built:['Payroll integrations page','Payroll Software surge 81']}
  ]},
 {id:'kestrel',co:'Kestrel Fintech',ind:'Financial Services',staff:450,city:'Edinburgh',domain:'kestrel-fintech.example',score:95,visits:5,pages:5,last:'Thu 12 Nov',rep:'jo',
  topics:[['ta',83],['pay',82]],
  why:'Kestrel Fintech visited five times this week and spent most of that time on security and compliance, ISO 27001 and pricing. It is also researching time and attendance and payroll software strongly. Security questions this early usually mean someone will have to get a new supplier through a risk review.',
  next:'Send the security pack before they ask for it, and offer a call with your compliance lead.',
  signals:['Security and compliance','ISO 27001','Pricing','Two-country payroll case study'],
  contacts:[
   {first:'Tom',last:'Ellery',title:'Chief Financial Officer',role:'Signs off the budget',crm:'Not contacted before',
    subject:'Payroll and time tracking a risk team will approve',
    body:'Hi Tom,\n\nFor regulated firms, choosing payroll software is often the easy part. Getting it through the risk review is what takes the time.\n\nWe work with fintechs running payroll across more than one country, and we keep our security pack, ISO 27001 certificate and data processing terms ready to share from day one.\n\nShall I send the pack over so your team has it early?\n\nBest,\nJo',
    built:['Security and ISO 27001 pages','Two-country payroll case study','Payroll Software surge 82']},
   {first:'Aisha',last:'Rahman',title:'Head of People Operations',role:'Likely champion',crm:'Downloaded a guide in March',
    subject:'Time tracking and payroll in one place',
    body:'Hi Aisha,\n\nYou downloaded our guide to flexible working policies back in March, so I thought this might be relevant.\n\nMany growing fintechs track time in one tool and run payroll in another, then reconcile the two by hand. We bring time and attendance and payroll together, so approved hours go straight into the pay run.\n\nWould a short demo be useful?\n\nBest,\nJo',
    built:['Time and Attendance surge 83','Guide download in HubSpot']},
   {first:'Mark',last:'Doyle',title:'Information Security Lead',role:'Will review the supplier',crm:'Not contacted before',
    subject:'Our security pack, ready when you need it',
    body:'Hi Mark,\n\nIf your team is reviewing HR and payroll suppliers, our security pack covers ISO 27001, where data is hosted, penetration testing and our sub-processors.\n\nI’m happy to send it over, or set up a call with our compliance lead to go through your questionnaire.\n\nBest,\nJo',
    built:['Security and ISO 27001 pages']}
  ]},
 {id:'fenwick',co:'Fenwick Health Group',ind:'Healthcare',staff:1200,city:'Newcastle upon Tyne',domain:'fenwick-health.example',score:80,visits:3,pages:5,last:'Wed 11 Nov',rep:'sam',
  topics:[['pay',66]],
  why:'Fenwick Health Group read about payroll, pension auto-enrolment and pricing, then visited the contact page. Its research into payroll software is moderate rather than strong, so this looks like an early project, with pensions as the likely reason.',
  next:'Email first rather than call. Lead with pension auto-enrolment and the hospital group case study.',
  signals:['Contact page','Pricing','Pension auto-enrolment','Hospital group case study'],
  contacts:[
   {first:'Claire',last:'Benson',title:'HR Director',role:'Signs off the budget',crm:'Not contacted before',
    subject:'Pensions and payroll for clinical staff',
    body:'Hi Claire,\n\nHealthcare groups tell us pension auto-enrolment is where payroll gets hardest, especially with bank staff and changing hours.\n\nWe recently helped a private hospital group move its payroll over, with auto-enrolment handled automatically for every pay run. I can send you the case study if it would be useful.\n\nBest,\nSam',
    built:['Pension auto-enrolment page','Hospital group case study']},
   {first:'Gareth',last:'Lloyd',title:'Payroll and Pensions Manager',role:'Day-to-day user',crm:'Not contacted before',
    subject:'Auto-enrolment without the manual checks',
    body:'Hi Gareth,\n\nWith bank and part-time staff, checking who should be auto-enrolled each pay period can take hours.\n\nOur payroll software assesses everyone automatically and sends the files to your pension provider. Would a short walkthrough be helpful?\n\nBest,\nSam',
    built:['Pension auto-enrolment page','Payroll Software surge 66']}
  ]},
 {id:'forthbank',co:'Forthbank Precision',ind:'Manufacturing',staff:600,city:'Falkirk',domain:'forthbank-precision.example',score:80,visits:4,pages:4,last:'Thu 12 Nov',rep:'ali',
  topics:[['hris',78]],
  why:'Forthbank Precision looked at HR software, how implementation works and a case study about replacing a legacy HR system, then visited the contact page. It is also researching HR systems strongly. Reading about implementation suggests the team has decided to move and is now working out how.',
  next:'Call Fiona Grant. Lead with how long implementation takes and how records move across from the old system.',
  signals:['Contact page','Implementation','Legacy HR replacement case study'],
  contacts:[
   {first:'Fiona',last:'Grant',title:'HR Director',role:'Signs off the budget',crm:'Not contacted before',
    subject:'Moving off an old HR system',
    body:'Hi Fiona,\n\nWhen manufacturers replace an older HR system, the worry is rarely the new software. It is moving years of records across without losing anything.\n\nWe recently helped a UK manufacturer do exactly that, with a fixed plan and a named lead for the move. I can share how the plan was laid out if that would help.\n\nWould a short call next week work?\n\nBest,\nAli',
    built:['Implementation page','Legacy HR replacement case study','HRIS surge 78']},
   {first:'Euan',last:'McLeod',title:'Operations Director',role:'Affected by the change',crm:'Not contacted before',
    subject:'HR that works for the shop floor',
    body:'Hi Euan,\n\nOn a production site, HR software is only useful if supervisors can approve leave and swap shifts from the floor.\n\nOurs works on any phone, so changes reach HR and payroll straight away. Happy to show you how other manufacturers use it if that would be helpful.\n\nBest,\nAli',
    built:['HR software page','HRIS surge 78']}
  ]},
 {id:'caledon',co:'Caledon Retail Group',ind:'Retail',staff:2400,city:'Glasgow',domain:'caledon-retail.example',score:70,visits:3,pages:3,last:'Thu 12 Nov',rep:'jo',
  topics:[['ta',74]],
  why:'Caledon Retail Group came back three times this week to look at time and attendance, shift scheduling and pricing. It is also researching time and attendance. It only just crossed the threshold, so a light touch will work better than a hard push.',
  next:'Send one short email to each contact, and let the ads carry the account this week.',
  signals:['Pricing','Time and attendance','Shift scheduling'],
  contacts:[
   {first:'Laura',last:'Kerr',title:'Head of Workforce Planning',role:'Likely champion',crm:'Not contacted before',
    subject:'Rotas that follow footfall',
    body:'Hi Laura,\n\nPlanning shifts across stores gets harder when footfall changes week to week and rotas still live in spreadsheets.\n\nOur scheduling tool builds rotas around demand, lets staff swap shifts on their phones, and sends approved hours straight to payroll. Would a quick look be useful?\n\nBest,\nJo',
    built:['Shift scheduling page','Time and Attendance surge 74']},
   {first:'Ross',last:'Paterson',title:'Retail Operations Director',role:'Signs off the budget',crm:'Not contacted before',
    subject:'Fewer hours lost between the rota and payroll',
    body:'Hi Ross,\n\nIn retail, small gaps between the rota, clock-ins and payroll add up across many stores.\n\nWe close that gap by recording hours against the rota and sending them to payroll automatically. I can share how other retailers have set it up if that would help.\n\nBest,\nJo',
    built:['Time and attendance page','Pricing page']}
  ]}
];

// Each account goes to the segment of its strongest topic.
const SEGMENTS=[
 {key:'pay',name:'Payroll Software',
  li:[{intro:'Pension auto-enrolment, holiday pay and shift premiums, worked out in one place. See how a UK logistics firm brought payroll in-house.',head:'Bring payroll in-house without the month-end rush',cta:'Download',img:'Payroll in-house, without the month-end rush'},
      {intro:'Built for UK employers with 200 to 5,000 staff across several sites. Every change flows into the pay run automatically.',head:'UK payroll software for multi-site teams',cta:'Learn more',img:'Every change flows into the pay run'}],
  rsaH:['UK Payroll Software','Payroll Across Every Site','Auto-Enrolment Built In','See Pricing Online','Book a 20-Minute Demo'],
  rsaD:['Run payroll for shift workers across sites, with pension auto-enrolment built in.','See how a UK logistics firm brought payroll in-house. Book a short demo today.']},
 {key:'hris',name:'HRIS (Human Resource Information Systems)',
  li:[{intro:'Replacing an old HR system is mostly about the move. Here is how one UK manufacturer did it without losing a single record.',head:'Replace your old HR system with a clear plan',cta:'Download',img:'Replace your old HR system with a clear plan'},
      {intro:'Leave, shift swaps and contract changes approved from any phone, and passed straight to payroll.',head:'HR software that works on the shop floor',cta:'Learn more',img:'HR that works on the shop floor'}],
  rsaH:['HR Software for Manufacturers','Replace Your Old HR System','Clear Implementation Plan','Payroll and HR in One','Book a 20-Minute Demo'],
  rsaD:['Move every record from your old HR system with a fixed plan and a named lead.','Leave, shifts and contract changes approved on any phone and passed to payroll.']},
 {key:'ta',name:'Time and Attendance',
  li:[{intro:'Clock-ins, rotas and overtime go straight into payroll, so nobody re-keys hours at month end.',head:'Time and attendance that feeds payroll',cta:'Learn more',img:'Approved hours go straight to payroll'},
      {intro:'Plan shifts around demand rather than spreadsheets. Staff swap shifts on their phones and managers approve in one tap.',head:'Shift scheduling your managers will use',cta:'Request demo',img:'Rotas built around demand'}],
  rsaH:['Time and Attendance Software','Shift Scheduling Made Simple','Hours Flow Into Payroll','ISO 27001 Certified','Book a 20-Minute Demo'],
  rsaD:['Record hours against the rota and send them to payroll automatically.','Staff swap shifts on their phones. Managers approve in one tap. Payroll stays right.']}
];
ACCOUNTS.forEach(a=>{a.seg=a.topics.slice().sort((x,y)=>y[1]-x[1])[0][0];a.contacts.forEach(c=>{c.status='pending';c.email=(c.first+'.'+c.last).toLowerCase()+'@'+a.domain;});});
SEGMENTS.forEach(s=>{s.accounts=ACCOUNTS.filter(a=>a.seg===s.key);});
const activeSegs=SEGMENTS.filter(s=>s.accounts.length);

const state={tab:'next',view:'out',acct:ACCOUNTS[0].id,contact:0,seg:activeSegs[0].key,auto:false,preview:{},adOk:{}};

let toastT;
function toast(msg){const t=toastEl;t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,3200);}

function allContacts(){return ACCOUNTS.flatMap(a=>a.contacts.map(c=>({a,c})));}
function pendingCount(){return allContacts().filter(x=>x.c.status==='pending').length;}
function autoEligible(){return allContacts().filter(x=>x.a.score>=90&&x.c.status==='pending'&&/Not contacted/.test(x.c.crm));}

function summary(){
  const all=allContacts();
  $('p2fAccounts').textContent=ACCOUNTS.length;
  $('p2fContacts').textContent=all.length;
  $('p2fAlerts').textContent=ACCOUNTS.length;
  $('p2fEmails').textContent=pendingCount();
  $('p2fAud').textContent=activeSegs.length;
  $('p2fAds').textContent=activeSegs.length*3;
  const p=pendingCount();
  $('p2queueCount').textContent=p?plural(p,'to approve','to approve').replace(/^(\d+) /,'$1 '):'All done';
}

function topicChips(a){return a.topics.map(([k,v])=>`<span class="sig">${esc(TOPIC[k])}<b>${v}</b></span>`).join('');}

function statusPill(c){
  if(c.status==='sent')return '<span class="pill done">Sent</span>';
  if(c.status==='draft')return '<span class="pill go">In HubSpot drafts</span>';
  if(c.status==='skipped')return '<span class="pill skip">Skipped</span>';
  if(c.status==='queued')return '<span class="pill go">Auto-send queued</span>';
  return '<span class="pill">To approve</span>';
}

function renderAlerts(){
  $('p2alertList').innerHTML=ACCOUNTS.map(a=>{
    const p=a.contacts.filter(c=>c.status==='pending').length;
    const done=a.contacts.length-p;
    return `<button class="acard" data-acct="${a.id}" aria-current="${a.id===state.acct}">
      <div class="top"><span class="co">${esc(a.co)}</span><span class="score num">${a.score}</span></div>
      <div class="meta">${esc(a.ind)}, ${a.staff.toLocaleString('en-GB')} staff. Owner ${esc(REPS[a.rep].name)}</div>
      <div class="q">${p?`<span class="pill">${plural(p,'email')} to approve</span>`:''}${done?`<span class="pill go">${done} handled</span>`:''}</div>
    </button>`;}).join('');
}

function renderDetail(){
  const a=ACCOUNTS.find(x=>x.id===state.acct);
  const rep=REPS[a.rep];
  if(state.contact>=a.contacts.length)state.contact=0;
  const c=a.contacts[state.contact];
  const locked=c.status!=='pending';
  $('p2alertDetail').innerHTML=`
  <div class="panel">
    <div class="panel-b grid2" style="gap:14px">
      <div class="alert-top">
        <div><h2>${esc(a.co)} is in market now</h2><div class="muted" style="font-size:14px;margin-top:4px">Score ${a.score} of 100. ${plural(a.visits,'visit')} this week, last on ${esc(a.last)}.</div></div>
        <span class="chip">Sales alert</span>
      </div>
      <p class="why">${esc(a.why)}</p>
      <div class="signals">${a.signals.map(s=>`<span class="sig">${esc(s)}</span>`).join('')}${topicChips(a)}</div>
      <div class="next"><span><strong>Next step.</strong> ${esc(a.next)}</span></div>
      <div class="routed">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>HubSpot task for ${esc(rep.name)}, due today</span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v12H5l-1 4z"/></svg>Posted to the sales channel in Slack</span>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-h"><h2>Contacts and emails</h2><span class="muted" style="font-size:13px">${plural(a.contacts.length,'contact')}, sample people</span></div>
    <div class="contacts">${a.contacts.map((x,i)=>`<button class="contact" data-contact="${i}" aria-current="${i===state.contact}">
       <div><div class="nm">${esc(x.first+' '+x.last)}</div><div class="rl">${esc(x.title)}. ${esc(x.role)}. ${esc(x.crm)}.</div></div>${statusPill(x)}</button>`).join('')}</div>
  </div>
  <div class="panel email">
    <div class="ef"><span class="k">From</span><span>${esc(rep.name)} &lt;${rep.email}@yourhrsoftware.example&gt;</span></div>
    <div class="ef"><span class="k">To</span><span>${esc(c.first+' '+c.last)} &lt;${esc(c.email)}&gt;</span></div>
    <div class="ef"><label class="k" for="p2subj">Subject</label><input id="p2subj" value="${esc(c.subject)}" ${locked?'disabled':''}></div>
    <label for="p2bodyTxt" style="position:absolute;left:-9999px">Email body</label>
    <textarea id="p2bodyTxt" ${locked?'disabled':''}>${esc(c.body)}</textarea>
    <div class="built">
      <span>Claude picked the angle from these signals. The email never mentions website visits or intent data.</span>
      <div class="signals">${c.built.map(s=>`<span class="sig">${esc(s)}</span>`).join('')}</div>
    </div>
    <div class="actions">
      ${locked?`<span class="status-line">${statusLine(c,rep)}</span><button class="btn ghost small" data-act="undo">Undo</button>`:
      `<div class="row"><button class="btn solid small" data-act="send">Approve and send</button><button class="btn small" data-act="draft">Save to HubSpot drafts</button><button class="btn ghost small" data-act="skip">Skip</button></div>
       <span class="status-line">Sends from ${esc(rep.first)}'s inbox and logs to HubSpot</span>`}
    </div>
  </div>`;
}
function statusLine(c,rep){
  return {sent:`Sent from ${esc(rep.first)}'s inbox and logged in HubSpot. This is a demo, so nothing was actually sent.`,
          draft:`Saved to ${esc(rep.first)}'s drafts in HubSpot for later.`,
          skipped:'Skipped. The contact stays on the account for next time.',
          queued:'Queued for auto-send at 9am, from '+esc(rep.first)+"'s inbox."}[c.status];
}

function renderSegs(){
  $('p2segList').innerHTML=activeSegs.map(s=>`<button class="scard" data-seg="${s.key}" aria-current="${s.key===state.seg}">
     <h3>${esc(s.name)}</h3>
     <span class="accts">${plural(s.accounts.length,'account')}: ${s.accounts.map(a=>esc(a.co)).join(', ')}</span>
     <span class="row"><span class="pill go">${plural(s.accounts.reduce((n,a)=>n+a.contacts.length,0),'contact')} matched</span><span class="pill">3 ads</span></span>
  </button>`).join('');
}

function slug(s){return s.toLowerCase().replace(/\(.*?\)/g,'').trim().replace(/[^a-z0-9]+/g,'-').replace(/-$/,'');}
async function sha(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s.trim().toLowerCase()));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}catch(e){return '(hashed on upload)';}}

function liRows(s){return s.accounts.map(a=>[a.co,'https://www.'+a.domain,a.domain,'https://www.linkedin.com/company/'+a.id,a.ind,'GB']);}
function gRows(s){return s.accounts.flatMap(a=>a.contacts.map(c=>[c.email,c.first,c.last,'GB']));}
const LIH=['companyname','companywebsite','companyemaildomain','linkedincompanypageurl','industry','companycountry'];
const GH=['Email','First Name','Last Name','Country'];
function csv(h,rows){return [h,...rows].map(r=>r.map(v=>/[",]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v).join(',')).join('\n');}

async function renderFiles(){
  const s=SEGMENTS.find(x=>x.key===state.seg);
  const sl=slug(s.name);
  const li=liRows(s), g=gRows(s);
  const gh=await Promise.all(g.map(async r=>[await sha(r[0]),r[1],r[2],r[3]]));
  const files=[
    {id:'li',name:`linkedin-companies-${sl}-2026-11-13.csv`,what:`LinkedIn matched audience, ${plural(li.length,'company','companies')}`,h:LIH,rows:li},
    {id:'g',name:`google-customer-match-${sl}-2026-11-13.csv`,what:`Google Customer Match, ${plural(g.length,'contact')}, emails hashed with SHA-256`,h:GH,rows:gh}
  ];
  $('p2fileList').innerHTML=files.map(f=>{
    const open=state.preview[f.id];
    return `<div class="file">
      <div class="fh"><div><div class="fn">${esc(f.name)}</div><div class="muted" style="font-size:13px">${esc(f.what)}</div></div>
      <div class="row"><button class="btn ghost small" data-prev="${f.id}" aria-expanded="${!!open}">${open?'Hide':'Preview'}</button><button class="btn small" data-copy="${f.id}">Copy CSV</button></div></div>
      ${open?`<div class="tbl"><table><thead><tr>${f.h.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${f.rows.map(r=>`<tr>${r.map(v=>`<td>${esc(v.length>28&&f.id==='g'?v.slice(0,20)+'…':v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}
    </div>`;}).join('');
  renderFiles.cache=files;
}

function renderAds(){
  const s=SEGMENTS.find(x=>x.key===state.seg);
  $('p2adsTitle').textContent='Ads for '+(s.name.length>24?s.name.replace(/ \(.*\)/,''):s.name);
  const ok=k=>state.adOk[s.key+k];
  const btn=k=>`<button class="btn ${ok(k)?'':'solid'} small" data-ad="${k}">${ok(k)?'Approved':'Approve'}</button>`;
  const li=s.li.map((v,i)=>`<div class="ad">
     <div class="ah"><strong>LinkedIn ad ${String.fromCharCode(65+i)}</strong>${btn('li'+i)}</div>
     <div class="li-preview">
       <div class="pt"><div class="who"><span class="av">Y</span><div><div style="font-weight:600">Your company</div><div class="muted" style="font-size:12px">Promoted</div></div></div><div>${esc(v.intro)}</div></div>
       <div class="img">${esc(v.img)}</div>
       <div class="foot"><strong style="font-size:14px">${esc(v.head)}</strong><span class="cta">${esc(v.cta)}</span></div>
     </div>
     <div class="muted" style="font-size:12.5px" class="mono">Intro ${v.intro.length} of 150 recommended characters. Headline ${v.head.length} of 70.</div>
  </div>`).join('');
  const rsa=`<div class="ad"><div class="ah"><strong>Google responsive search ad</strong>${btn('rsa')}</div>
     <div class="rsa"><span class="label">Headlines</span>${s.rsaH.map(h=>`<div class="ln"><span>${esc(h)}</span><span class="c ${h.length>30?'over':''}">${h.length}/30</span></div>`).join('')}
     <span class="label" style="margin-top:6px">Descriptions</span>${s.rsaD.map(h=>`<div class="ln"><span>${esc(h)}</span><span class="c ${h.length>90?'over':''}">${h.length}/90</span></div>`).join('')}</div>
     <p class="note">Shown to the matched contacts when they search for ${esc(s.name.replace(/ \(.*\)/,'').toLowerCase())} terms.</p></div>`;
  $('p2adList').innerHTML=li+rsa;
}

function setView(v){
  state.view=v;
  $('p2segOut').setAttribute('aria-pressed',v==='out');
  $('p2segIn').setAttribute('aria-pressed',v==='in');
  $('p2outView').hidden=v!=='out';
  $('p2inView').hidden=v!=='in';
  $('p2modeBox').hidden=v!=='out';
  if(v!=='out')$('p2autoConfirm').hidden=true;
  if(v==='in'){renderSegs();renderFiles();renderAds();}
}
function renderAuto(){
  $('p2autoSwitch').setAttribute('aria-checked',state.auto);
  const q=allContacts().filter(x=>x.c.status==='queued').length;
  $('p2modeText').textContent=state.auto?`On. ${plural(q,'email')} queued, the rest still need a rep.`:'Off. A rep approves every email.';
}
function refresh(){summary();renderAlerts();renderDetail();renderAuto();}

document.addEventListener('click',e=>{
  const t=e.target.closest('button');if(!t||!t.closest('#p2'))return;
  if(t.id==='p2segOut')return setView('out');
  if(t.id==='p2segIn')return setView('in');
  if(t.dataset.acct){state.acct=t.dataset.acct;state.contact=0;refresh();if(innerWidth<980)$('p2alertDetail').scrollIntoView({block:'start'});return;}
  if(t.dataset.contact){state.contact=+t.dataset.contact;renderDetail();return;}
  if(t.dataset.act){
    const a=ACCOUNTS.find(x=>x.id===state.acct),c=a.contacts[state.contact];
    if(t.dataset.act==='undo'){c.status='pending';}
    else{
      const s=$('p2subj'),b=$('p2bodyTxt');if(s)c.subject=s.value;if(b)c.body=b.value;
      c.status={send:'sent',draft:'draft',skip:'skipped'}[t.dataset.act];
      if(c.status==='sent')toast('This is a demo, so nothing was sent.');
      const nxt=a.contacts.findIndex(x=>x.status==='pending');if(nxt>=0)state.contact=nxt;
    }
    refresh();return;
  }
  if(t.id==='p2autoSwitch'){
    if(state.auto){state.auto=false;allContacts().forEach(x=>{if(x.c.status==='queued')x.c.status='pending';});refresh();return;}
    const n=autoEligible().length;
    $('p2autoImpact').textContent=n?`Today that would cover ${plural(n,'email')}. The rest would still wait for a rep.`:'Today no emails meet these rules, so nothing would change.';
    $('p2autoConfirm').hidden=false;return;
  }
  if(t.id==='p2autoYes'){state.auto=true;autoEligible().forEach(x=>x.c.status='queued');$('p2autoConfirm').hidden=true;refresh();return;}
  if(t.id==='p2autoNo'){$('p2autoConfirm').hidden=true;return;}
  if(t.dataset.seg){state.seg=t.dataset.seg;state.preview={};renderSegs();renderFiles();renderAds();return;}
  if(t.dataset.prev){state.preview[t.dataset.prev]=!state.preview[t.dataset.prev];renderFiles();return;}
  if(t.dataset.copy){
    const f=(renderFiles.cache||[]).find(x=>x.id===t.dataset.copy);if(!f)return;
    const text=csv(f.h,f.rows);
    const p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(text):Promise.reject();
    p.then(()=>toast('Copied '+f.name),()=>toast('Copy did not work in this browser. Use Preview to see the file instead.'));return;
  }
  if(t.dataset.ad){const s=state.seg;state.adOk[s+t.dataset.ad]=!state.adOk[s+t.dataset.ad];renderAds();return;}
});


// guided tour
const STEPS=[
 {t:null,h:'Take a quick tour?',b:'This dashboard finds companies that look ready to buy, then shows what sales and marketing could do next. The tour takes about a minute.',next:'Start the tour',back:'Not now'},
 {t:kpisEl,h:'Today’s numbers',b:'How many companies visited the website, how many are researching your topics elsewhere, and how many are doing both. Those doing both are in market.',go:()=>setTab('signals')},
 {t:()=>app.querySelector('main .rowbtn')||app.querySelector('main'),h:'In market today',b:'Each company is scored with fixed rules. Click a company to see why it is in market and how its score adds up.',go:()=>setTab('signals')},
 {t:()=>app.querySelectorAll('aside > .rel')[1],h:'Your ideal customer profile',b:'Change the industries or topics and the list updates straight away. Companies the change adds are tagged New with this ICP.',go:()=>setTab('signals')},
 {t:()=>$('p2tab-next'),h:'What happens next',b:'This tab turns the list into action, for sales and for paid media.',go:()=>setTab('signals')},
 {t:()=>sec.querySelector('.flow'),h:'Today’s follow-up',b:'Every in-market company gets a sales alert, an email for each contact and a place in a targeted ad audience.',go:()=>{setTab('next');setView('out');}},
 {t:()=>$('p2alertList'),h:'Sales alerts',b:'The account owner gets a HubSpot task saying why the company is hot now and what to do next. Pick a company to see its alert.',go:()=>{setTab('next');setView('out');}},
 {t:()=>sec.querySelector('.email .actions'),h:'Emails to approve',b:'Claude writes an email for each contact and uses the signals to choose the angle. The rep can edit it, then send it, save it as a draft or skip it.',go:()=>{setTab('next');setView('out');}},
 {t:()=>$('p2modeBox'),h:'Auto-send, if you want it',b:'Turn this on to send without a rep checking first. It only covers emails that meet strict rules, and it shows those rules before it turns on.',go:()=>{setTab('next');setView('out');}},
 {t:()=>$('p2segList'),h:'Ad audiences',b:'Companies are grouped by the topic they are researching most, so each one sees ads about what it is actually looking into.',go:()=>{setTab('next');setView('in');}},
 {t:()=>$('p2fileList')&&$('p2fileList').closest('.panel'),h:'Ready to upload',b:'LinkedIn company lists and Google Customer Match files are built every day. Uploading them takes a few minutes. Sending them automatically needs access to each platform’s ads API.',go:()=>{setTab('next');setView('in');}},
 {t:()=>$('p2adList')&&$('p2adList').closest('.panel'),h:'Ads for each group',b:'Two LinkedIn ads and a Google search ad for each group, written from its intent topics and checked against each platform’s character limits.',go:()=>{setTab('next');setView('in');}},
 {t:()=>replay,h:'That’s the tour',b:'You can take it again any time from here.',next:'Finish',go:()=>{setView('out');}}
];
const TOUR_KEY='ims-tour-v1';
let tour=null;
function tourEls(){
  const block=document.createElement('div');block.className='p2-tour-block';
  const hole=document.createElement('div');hole.className='p2-tour-hole';
  const pop=document.createElement('div');pop.className='p2-tour';pop.setAttribute('role','dialog');pop.setAttribute('aria-modal','true');pop.setAttribute('aria-labelledby','p2tourH');pop.tabIndex=-1;
  document.body.append(block,hole,pop);
  return {block,hole,pop};
}
function place(){
  if(!tour)return;
  const s=STEPS[tour.i],el=s.t&&s.t(),{hole,pop}=tour.els;
  const vw=innerWidth,vh=innerHeight,pw=pop.offsetWidth,ph=pop.offsetHeight;
  if(!el){hole.style.cssText='left:50%;top:50%;width:0;height:0;box-shadow:0 0 0 9999px rgba(6,12,15,.72)';pop.style.left=Math.max(16,(vw-pw)/2)+'px';pop.style.top=Math.max(16,(vh-ph)/2)+'px';return;}
  const r=el.getBoundingClientRect(),pad=6;
  hole.style.cssText=`left:${r.left-pad}px;top:${r.top-pad}px;width:${r.width+pad*2}px;height:${r.height+pad*2}px`;
  let top,left;
  const clampL=x=>Math.min(Math.max(16,x),vw-pw-16),clampT=y=>Math.min(Math.max(12,y),vh-ph-12);
  if(r.bottom+14+ph<=vh-12){top=r.bottom+14;left=clampL(r.left);}
  else if(r.top-14-ph>=12){top=r.top-14-ph;left=clampL(r.left);}
  else if(r.left-14-pw>=16){left=r.left-14-pw;top=clampT(r.top);}
  else if(r.right+14+pw<=vw-16){left=r.right+14;top=clampT(r.top);}
  else{top=vh-ph-16;left=clampL(r.right-pw);}
  pop.style.left=left+'px';pop.style.top=top+'px';
}
function show(i){
  tour.i=i;const s=STEPS[i];
  if(s.go)s.go();
  const {pop}=tour.els;
  const last=i===STEPS.length-1;
  pop.innerHTML=`<h3 id="p2tourH">${esc(s.h)}</h3><p>${esc(s.b)}</p>
   <div class="p2-tour-foot"><span class="p2-step">${i?`${i} of ${STEPS.length-1}`:''}</span>
   <span class="p2-tb">${i===0?`<button class="p2-skip" data-t="end">${esc(s.back)}</button>`:`${last?'':'<button class="p2-skip" data-t="end">Skip</button>'}<button data-t="back">Back</button>`}<button class="p2-next" data-t="next">${esc(s.next||'Next')}</button></span></div>`;
  const el=s.t&&s.t();
  if(el){const r=el.getBoundingClientRect();if(r.top<70||r.bottom>innerHeight-(innerWidth<=640?ph():40))el.scrollIntoView({block:innerWidth<=640?'start':'center'});if(innerWidth<=640)scrollBy(0,-16);}
  requestAnimationFrame(()=>{place();pop.focus({preventScroll:true});});
  setTimeout(place,250);
}
function ph(){return tour?tour.els.pop.offsetHeight+40:240;}
function startTour(){
  if(tour)return;
  try{localStorage.setItem(TOUR_KEY,'seen');}catch(e){}
  tour={i:0,els:tourEls(),prev:document.activeElement};
  tour.els.pop.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const a=b.dataset.t;
    if(a==='end')return endTour();
    if(a==='back')return show(Math.max(0,tour.i-1));
    if(a==='next')return tour.i>=STEPS.length-1?endTour():show(tour.i+1);});
  show(0);
}
function endTour(){
  if(!tour)return;
  const {block,hole,pop}=tour.els;block.remove();hole.remove();pop.remove();
  const prev=tour.prev;tour=null;
  if(prev&&prev.focus)prev.focus({preventScroll:true});
}
addEventListener('resize',place);
addEventListener('scroll',place,{passive:true});
addEventListener('keydown',e=>{if(!tour)return;
  if(e.key==='Escape'){e.preventDefault();endTour();}
  else if(e.key==='ArrowRight'){e.preventDefault();tour.i>=STEPS.length-1?endTour():show(tour.i+1);}
  else if(e.key==='ArrowLeft'){e.preventDefault();show(Math.max(0,tour.i-1));}
  else if(e.key==='Tab'){const f=[...tour.els.pop.querySelectorAll('button')];if(!f.length)return;const a=f.indexOf(document.activeElement);e.preventDefault();f[(a+(e.shiftKey?-1:1)+f.length)%f.length].focus();}
});
replay.addEventListener('click',()=>startTour());
window.imsStartTour=startTour;

let seen=false;try{seen=!!localStorage.getItem(TOUR_KEY);}catch(e){seen=true;}
const params=new URLSearchParams(location.search);
if(params.has('tour')||(!seen&&!navigator.webdriver)){
  let tries=0;const wait=setInterval(()=>{tries++;const ready=app.querySelector('main .listwrap')&&app.querySelector('main').innerText.length>200;if(ready||tries>30){clearInterval(wait);setTimeout(startTour,500);}},150);
}

current=location.hash==='#next'?'next':'signals';mount();refresh();setView('out');setTab(current,true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
