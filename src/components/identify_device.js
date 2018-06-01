const identification = {
  isWx() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
  },

  isQQ() {
    const ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/mqqbrowser|qzone|qqbrowser/i);
  }
};

export default identification;
