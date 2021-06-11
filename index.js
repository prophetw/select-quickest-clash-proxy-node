const axios = require("axios");
const RestFulApiBaseUrl = "http://127.0.0.1:9090";
const getAllProxies = () => {
  return axios.request({
    url: RestFulApiBaseUrl + "/proxies",
    method: "GET",
  });
};
const getCurProxyNode = async () => {
  const res = await getAllProxies();
  if (res.data && res.data.proxies && res.data.proxies["🔰 節點選擇"]) {
    const curProxyNode = res.data.proxies["🔰 節點選擇"].now;
    console.log(" ---- curProxyNode is: ", curProxyNode);
  }
};
const getQuickestNodeAndSetToIt = async () => {
  const res = await getAllProxies();
  // console.log('   res ', res.data.proxies['🔰 節點選擇'])
  if (res.data && res.data.proxies && res.data.proxies["🔰 節點選擇"]) {
    const allProxiesNameAry = res.data.proxies["🔰 節點選擇"].all;
    console.log(allProxiesNameAry);

    const re = await Promise.race(
      allProxiesNameAry.map((name) => {
        return axios.request({
          url: RestFulApiBaseUrl + "/proxies/" + name + "/delay",
          method: "get",
          params: {
            timeout: 3000,
            url: "https://www.google.com",
          },
        });
      })
    );
    if (re && re.status === 200 && re.config) {
      // url: 'http://127.0.0.1:58361/proxies/HK-3(v2ray)/delay',
      if (re.config.url) {
        const urlAry = re.config.url.split("/");
        if (re.data && re.data.delay) {
          console.log("fastest delay is: " + re.data.delay + "ms");
        }
        const proxyName = urlAry[urlAry.indexOf("proxies") + 1];
        if (proxyName) {
          console.log(" fastest proxy node is: ", proxyName);
          const ruleName = encodeURIComponent("🔰 節點選擇");
          const changeToNewProxyNodeRes = await axios.request({
            method: "PUT",
            url: RestFulApiBaseUrl + "/proxies/" + ruleName,
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              name: proxyName,
            },
          });
          if (changeToNewProxyNodeRes.status === 204) {
            console.log(" +++++++ changeTo " + proxyName);
          }
          getCurProxyNode();
        }
      }
    }
  }
};
getQuickestNodeAndSetToIt();

