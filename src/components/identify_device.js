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

export default identification;
