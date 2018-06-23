import $ from 'jquery'

export default {
  name: 'image-uploader',
  data() {
    return {
      imageUrl: '',
      uploading: false,
      ossInfo: {
        access_key_id: "LTAIaiyznNnx7Gvu",
        access_key_secret: "CCKn0tKD8gw8GtsXG7XmSOZICPim7w",
        oss_url: "http://linktalk-img.mmcoco.com/",
        bucket_name: "linktalk-img",
      },
    }
  },
  methods: {
    init() {
      this.imageUrl = this.ossInfo.oss_url;

      const _this = this;

      const policyText = {
        expiration: "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
        conditions: [
          ['content-length-range', 0, 1048576000], // 设置上传文件的大小限制
        ],
      };

      const policyBase64 = Base64.encode(JSON.stringify(policyText));
      const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, _this.ossInfo.access_key_secret, { asBytes: true });
      const signature = Crypto.util.bytesToBase64(bytes);


      const uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        browse_button : 'selectUploadFiles',
        container: document.getElementById('imageUploader'),
        url : 'http://' + _this.ossInfo.bucket_name + '.oss-ap-southeast-1.aliyuncs.com/',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        multipart_params: {
          Filename: '${filename}',
          key: '${filename}',
          policy: policyBase64,
          OSSAccessKeyId: _this.ossInfo.access_key_id,
          success_action_status: '200',
          signature,
        },

        init: {
          PostInit() {
            $('#uploaderFiles').html('');
          },
          FilesAdded(up, files) {
            let html = '';
            plupload.each(files, file => {
              html += `<div id="${file.id}" class="upload-info">
                      <label class="ellipsis">${file.name}(${plupload.formatSize(file.size)})</label>
                      <div class="progress-container">
                        <div class="progress">
                          <div class="progress-bar" style="width: 0%"></div>
                        </div>
                      </div>
                    </div>`;
            });
            $('#uploaderFiles').html(html);
            uploader.start();
          },
          UploadProgress(up, file) {
            const d = document.getElementById(file.id);
            const progress = $(d).find('.progress-bar');
            progress.css('width', `${file.percent}%`);
          },
          FileUploaded(up, file, info) {
            if (info.status >= 200 || info.status < 200) {
              _this.imageUrl += file.name;
              const imgSrc = _this.imageUrl;
              $('#' + file.id).html('');
              $('.preview-area').show();
              $('#imagePreview').html(`<img src="${imgSrc}"/>`);
              _this.$emit('src', imgSrc);
            } else {
              $('#' + file.id).html(info.response);
            }
          },
        },
      });

      uploader.init();
    },
  },
  mounted() {
    this.init();
  },
}
