const ua = navigator.userAgent;

const identification = {
  isWx() {
    return ua.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
  },

  isQQ() {
    return !!ua.toLowerCase().match(/mqqbrowser|qzone|qqbrowser/i);
  },

  isIphone() {
    return ua.includes('iPad') || ua.includes('iPhone');
  },

  isAndroid() {
    return ua.includes('Android');
  },
  isMobile() {
    return ua.includes('Android') || ua.includes('iPad') || ua.includes('iPhone');
  },
};

export const androidUrl = 'https://www.pgyer.com/onexx';
export const iosUrl = 'https://fir.im/iosonex';

export function downloadApp() {
  if (identification.isMobile()) {
    window.open(identification.isIphone() ? iosUrl: androidUrl);
  }
}

export default identification;
