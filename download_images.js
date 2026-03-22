const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1IOPlP2LKEh426ipxPf19BpFhrlL8-p325jqBwMUdkHh2dOTPBnedYaX3rZurat8T-GD7bFDj25f3jpC1m_U4P0giu1MetyQ6DPfvrBechMwHQPYSH_v4xvBI9v5B0Fcau29hZi7KAXSan22D226zIXjtZXnrHNLCezM1JDTI5-03ZghdhykV7Ov93zY28FhMnLFL962kLC2K2R5e-5Ve5VchE4veFYJ4OWMhd-NOtVLeD2jYS118xUo-GR-QX-YjZpgsHMeOsa0', name: 'hero.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4g78GoK8KggRNPnH8xPm6kvRg7wavCD8kHGgvFtvqIdOeKur-lQVLKWoaYtPhWEk5ZM6DtFxKo7LmnoCgSPimkTVM107pKnNfSmTKakIGzfLKu1owyvWUWzJ_-bc7BpDXbycALy8zMGJ9xFrHFOwNdWALl8744QQ5fBVZUat9-FmrLY8hWC8Eot6B70K31WoqXF3OJz8L3zI7-CDJkJcqPwMbnvN22g2KJNZiR9Z3OGqN580CaTyXx4ghdyJA6IFARqPtaWEl_pA', name: 'artisan_chair.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU3902NbZZcYNc6qkeHJVrnYm2TVkkDavPtGHc4amjVxD8q81eCHn3NJzgfeNtDIDLRLQ1k43K7FwqP29q6wkwiC_Z9gtcGbaQcELgNITaHRPTLz1s-tCuLO_17HPua5kxqLAUwMAPfj-EycHSTG0j1TWWSai6JulEVgma9vIrD0sTfmXvglW8xzX8_O14Lf3jDJJkY6wly1PX7VFva7jRHmRucWvuoOwnoKz7LB16x2ePCzsx6fFVJU26EOdwzanxudUJo739m_g', name: 'wooden_furniture.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQzP6l3cSM1C7nnVcM_iuOtFRuChb0OJe6wQ75LzGc7IRVMNKjxw3HJJBTOIsuiTRb-2QY8_Qe7az9YwPsnRfWmQ-8ekFY3JWJ8MWi4H0XHkY7ElnkQ0xDx8dnTHRV1RtEX2A58NrqbiUggPqhVJkWLjewZZY-NNzFlvWEZxcvTSE1_myh7a3pUQW4NFEo8gUUWHjm_McebYJGcT8v-7_7LK3Pn05ESTveyHVHKY08um1h5yt4ZYHzNVMoOWgqRrhkpGbKL1x_jmE', name: 'vessel_chair.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADPyLqfT-hLQhYvypYu1jb4HQ6XrauWj4cOASI1f1quzFYWXpDgAeyZTs2viR339rgmXevZwvSDR9OaauUI--ebsQIjDdQOVlNP0BI_7Q2HLHR3obyOxpAkgoE3vkRKV2meCmJ0muQqTmzGBhk3STHXSwcPLHupuiker5ugV_DX05vl9Ie1GMRPrxwknAS_1yGIm_-6xp7esHyesDg7JVb9zVoYYQjVpqyqaNIZThxZqTz_k9dWodNQl47q0DtC-MBTeWK6UzZuPU', name: 'travertine_plinth.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHUUiS8hMwz-alu68KxYW_sPk_b__h2MvIfFwF2lZWgfA6xTuVHfnwnV3BL0FwE3u8_EiuCSzliC4sG3MjZSdJPWqyxMOhUbxuflvIfcl-UNIaqPFL6iAIhmESeGPMmgmB2G10L_ilPFboC7xUCybkzV3dXwDNA-l4Rrb8-NdrJi2RWeKGebsQZoAQu5yDL-HDhurqMuc5xEFEKdB-Mv9w5FpfhtmLS_1tvW1NgLAk5rEUmcte-oM6IfqfIELQ1KbDZWSIj2Ap_yQ', name: 'lumen_arc.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM6zhq8wwS5lL5IVDkxcXPLAsf6Bw0iX31o-zQLGKDdN8o1HkO-X56XzbAXGwEPkzXR3KJEwE-aygOUQpbHUSe-UJYl2hK4lIkUraHztLro-yIbuWEZA8xgBfVCchHGwOhviFATsgFgp5lGazimIqzXCotfcxEtgaqAM5UMUQxbBe8BZy7JgFc_EhEu4119azqcdTB4IijTkPS2XWbfA8CdJNpgagKaI3djfYLRleHcpJJKktKkJpziHHy9bh1PJTvyEK-656IRso', name: 'artisan_hands.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQMcaJTzVFTIPWgu6cvHILexucxCzP1sJxQhiyMU2zeV5kk1SjgTWX_hTX0AMaHgVAWUQHHkGSmTacf9hdK_5u9bkp3A3ShxGMa4Xm89m8eFoNfIc5UtxPbYWXxHNCgv1odHyqHH6q9c2Mwk45wEB0zd4uPN6pdPIZrFrwuC5G0z7AiCP7ddhsMSLrtXqsom6SJGy2dKkbQsMkqLi26gzRBqdfuFjA1P3HWSF-OVlJq-I4ISeyUmPJGO8yEXcgpWrTEA6zDWSochg', name: 'profile1.jpg' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY_r-iA02Ibw8vKMTt7p8HWjy9pY7ebdYqS03wsaS0tWR6eVUJ_ZBmvriPRm7AsvnJJKD6JgmFcBzJSTR_HBB-pGlIW60kTu5U20sURbKGKmWlOomxqb2MSX4ZluD8BKupaQOAyRQrJpQUqXUOj8QzwEIFx03QU5hQVKL67UEuAuOSICClXoFwmkNmqVgLZGtuKIe4L3eqghE-udg_e0sM82Hk19EdwcWuuyPgZBfpvY5l6wfQNb5vcdPMdBsiDI8uR7Us3HiwUA8', name: 'profile2.jpg' }
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
})).then(() => console.log('All images downloaded successfully.')).catch(console.error);
