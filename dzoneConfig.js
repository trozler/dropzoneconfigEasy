//Upload png here.
Dropzone.options.myDropzone = {
  addRemoveLinks: true,
  acceptedFiles: "image/jpeg,image/png,image/gif,image/svg+xml",
  maxFiles: 1,
  maxThumbnailFilesize: 50,

  init: function () {
    this.on("addedfile", function (file) {
      // console.log(file);
      const preview = document.getElementById("temp1");
      //const preview = new Image();
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          preview.title = file.name;
          preview.src = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    });

    this.on("complete", function (file) {
      this.removeFile(file);
    });
  },
};
