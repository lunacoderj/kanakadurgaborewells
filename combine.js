const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg()
  .input('public/videos/videos.txt')
  .inputOptions(['-f concat', '-safe 0'])
  .outputOptions('-c copy')
  .save('public/videos/hero_combined.mp4')
  .on('end', () => console.log('Finished combining videos!'))
  .on('error', (err) => console.error('Error:', err));
