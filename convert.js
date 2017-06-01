const cv = require('opencv');

cv.readImage('images/myImage.jpg', function (err, img) {  
	if (err) {
		throw err;
	}
	
	const width = img.width();
	const height = img.height();
	
	if (width < 1 || height < 1) {
		throw new Error('Image has no size');
	}
	
	// do some cool stuff with img
	
	const lowThresh = 0;
	const highThresh = 150;
	const iterations = 2;

	img.canny(lowThresh, highThresh);
	img.dilate(iterations);

	// img.convertGrayscale();
	// img.convertHSVscale();
	// save img
	img.save('tmp/myNewImage.jpg');

	const WHITE = [255, 255, 255];
	let contours = img.findContours();
	let allContoursImg = img.copy()
	allContoursImg.drawAllContours(contours, WHITE);
	img.save('tmp/allContoursImg.jpg');
});
