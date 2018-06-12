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
};

export const androidUrl = 'https://onex-file.oss-ap-southeast-1.aliyuncs.com/ONEX-ONEXGoldWebRelease-1.22-2018-06-01.apk';
export const iosUrl = 'https://www.pgyer.com/onex';

export function downloadApp() {
  if (identification.isAndroid() || identification.isIphone()) {
    window.open(identification.isIphone() ? iosUrl: androidUrl);
  }
}

export default identification;
