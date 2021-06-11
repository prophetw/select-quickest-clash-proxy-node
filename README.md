## can select the quickest proxy node for you 
> from terminal select the quickest proxy node for you 
### [clash RESTful API](https://clash.gitbook.io/doc/restful-api)
> default api baseURL localhost:9090

```bash
yarn 
yarn build

node dist/main.js
[
  'TW-3(v2ray)',     'TW-6(v2ray)',
  'US-3(v2ray)',     'HK-3(https)',
  'HOP-HK-6(https)', 'HOP-TW-3(https)',
  'HOP-TW-6(https)', 'JP-3(https)',
  'RU-3(https)',     'TW-3(https)',
  'TW-9(https)',     'US-3(https)',
  'US-9(https)',     'HK-3(trojan)',
  'JP-3(trojan)',    'RU-3(trojan)',
  'TW-3(trojan)',    'US-3(trojan)',
  'HK-3(v2ray)',     'HOP-JP-3(v2ray)',
  'HOP-JP-6(v2ray)', 'JP-3(v2ray)',
  'RU-3(v2ray)'
]
fastest delay is: 478ms
 fastest proxy node is:  HK-3(https)
 +++++++ changeTo HK-3(https)
 ---- curProxyNode is:  HK-3(https)
```
