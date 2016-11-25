<?php 
function param($property, $default = ''){
	if (isset ($_GET[$property])) {
		return $_GET[$property];
	} else {
		return $default;
	}
}

$controls = param('controls');
$autoplay = param('autoplay');
$loop = param('loop');
$poster = param('poster');
$v = param('v');
$ext = param('ext');
// $width = param('width');
// $height = param('height');

?><!DOCTYPE html>
<html>
<head>
	<title>Video.js | HTML5 Video Player</title>
	<style type="text/css" media="screen">
		html, body {margin:0; padding:0; height:100%;}
		video {display:block; position:absolute; left:0; top:0; bottom:0; right:0; margin:auto;}
	</style>
	<!-- Chang URLs to wherever Video.js files will be hosted -->
	<link href="../assets/_js_plugins/videojs/video-js.css" rel="stylesheet" type="text/css">
	<!-- video.js must be in the <head> for older IEs to work. -->
	<script src="../assets/_js_plugins/videojs/video.js"></script>

	<!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
	<script>
	videojs.options.flash.swf = "http://vjs.zencdn.net/c/video-js.swf";
	</script>
</head>
<body>
	<video id="example_video_1" class="video-js vjs-default-skin" <?php echo $controls ? 'controls':''; ?> <?php echo $autoplay ? 'autoplay':''; ?> <?php echo $loop ? 'loop':''; ?> preload="auto" width="100%" height="100%"
	<?php echo $poster ? 'poster="'.$poster.'"':''; ?>
	data-setup="{}">
	<?php
	$types = explode(',', $ext);
	if(is_array($types)):
		foreach ($types as $value) {
			echo '<source src="'.$v.'.'.$value.'" type="video/'.$value.'" />';
		}
	endif;
	?>
	<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
	</video>

</body>
</html>
