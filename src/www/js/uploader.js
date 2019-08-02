var reader = new FileReader();
		const ipfs = window.IpfsHttpClient('localhost', 5001);
		var fileAddr;

		async function readURL(input) {
    		if (input.files && input.files[0]) {
      			reader.onload = function(e) {
        			$('.image-upload-wrap').hide();
        			$('.file-upload-image').attr('src', e.target.result);
        			$('.file-upload-content').show();
        			$('.image-title').html(input.files[0].name);
      	};
  
		reader.readAsDataURL(input.files[0]);
		
    	} else {
      		removeUpload();
    	}
  	}
  
  	function removeUpload() {
    	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
    	$('.file-upload-content').hide();
    	$('.image-upload-wrap').show();
  	}
  		$('.image-upload-wrap').bind('dragover', function () {
    	$('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });

  async function uploadIPFS(){
    const content = ipfs.addReadableStream(reader.readAsBinaryString)
    const results = await ipfs.add(content)
		const hash = results[0].hash
		fileAddr = hash;
    	return hash;
  }