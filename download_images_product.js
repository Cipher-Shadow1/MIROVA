const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1jSUEAgUAgzCsQGFfmaoHnx-XrriKxxkWELDCR9zBLiBB4wHT9-g1tiZXfxjtfBu-xeEdmmvJoG34lumd-4-9jkQXYjTLzAePe5DSyYmW7jwcb8PpszXFJIIppDKbDZJCwfQjd-31VfCvIwlqXV6pEV6wuAbc9eJ5hHNrR7J3tfTYaw3Olbnore_wBoYL8_WUhkNYivuKNpY4eXrFyIOs_iPdTUkz5AvXqbcM3cPb7GCGPGmgdPQ1b_xIXTLjRK6sEab3Nwk7AKY', name: 'product_main.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADDt1fLUzner5uGu5wsyt_DXrkMYnxWTgzVUtx4hLtkdBMnZEQFou1Rrqv3bmPxX4znZun7JWXqT3HAjfMSgbTMvIDsbT8rcZ_rJhLZCUk_X0gTWjVjHiHvgHMjFGZU66RJeD_j7_Jv0Os34kfnW7ZkIahcpPNydiJ7dgq9q10N3nsrig8vHs19aUpPwMquanBP9yNF_7Kt2Nxd-OINsFmalHudJ7EMV0at2ijPbUqLub6M2z6Fy3ElYChLa3PvqcLb0tMjq28h6E', name: 'thumb1.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaKwPdbye6ZFJkeSwWDIRLZj63SXA0IfoSOYIesZmIUD8v9afZj2MGGxRzLe0r09lKrpxo9TR-Sf6G9CaDGqZfVncaz8HW59Ph91xm6VTc5bH-Ov305RweioC4KWd52OBSsiXAZhMbuLww_NA5ZcogThGvzdktpOav_7ARK7dLoAs0_VWlnFNt-OrFI80V9CwwHNSwVwYEQyN6nzBRHf94Vxneeh_nkKFahIQeuhirHYx6zF5_IEaVUZxwKMe5ckHjIFTxnpl9Aeg', name: 'thumb2.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR_h9cYsLa9CqnRz0ynykqind02dcxDHnvdvJ94bCFID7G_emSEzs-Rkn4ZJgi2RIZGre_k2hpZwiRxEUIdr9opN3UjjQirhSDDEcKwlmMnx86j8TjsOaEqm8cPVuFylbweU-HzD9IBrEW3TxfRVmwlakDXDx-joszeB1jDJOZq5xkUAUjHfoK7-A6nobgPFacZPCwDnHjE6oxmJoB-oHsnD20J32kva_ig05ziQFd34NX1Uu3dRAO56IoLux_S2KPO2bgffQ1FC8', name: 'thumb3.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZbUAFY0sIQYP23nSczW1ES7Q9mZRl_v7-fLO55R_JtjS2iuQG9lho8mFbaSSwhPbZdrIqDEI0yd9jNcWg65InKb_dhpWFbJihW1gfpBarQM-b-fiNgRB_8hZkkliSFDVsIC3MpuqU1s77JNtUcHIPNaGkZNF6m1NlanZyHzmJ_SylCv32nz9HXFbdz1iPW2CXLX-VsXgjBFq0gO3wsi5IY4-M0iLGc-pZSrQq6AMX96aTtZy_iAEiHfZn8sbaTz1XdD7WZ9akKQI', name: 'thumb4.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZz8Q14cr0YRwfLMtlAAK4VRMhpBI-EPCb4d6NboVr6lPUhC62s4E_6XLPephlz6gs2Kzxt3gHvQKwjsfKJza-DhNduBydLkEZkdNMHdKLmsqrOVRFMt7sr1FnsQPBU_gSL78ohfGlhscoiQSpr51Oh1UsEJklzqYZ8L9wYqZ7nw_s6ckkqS-Wg8-MFj_blXV4BGEAXX7icGsHa2bqP53651nSshNYRAe8ScSEXZm6mutSr-h4NI-pXxiBfzhx38YpXxABU74Od0', name: 'woodworking_detail.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHp2Fp3fOia_KqQ7Wf_0M35kK2UqX8t3oO-fA6mX3E5x4J8x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4', name: 'rec1.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3C8x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4', name: 'rec2.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3C8x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4', name: 'rec3.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3C8x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4P-R4R4x4', name: 'rec4.jpg' }
];

const publicDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

Promise.all(images.map(img => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(publicDir, img.name));
    https.get(img.url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(img.name);
      reject(err);
    });
  });
})).then(() => console.log('All product images downloaded successfully.')).catch(console.error);
