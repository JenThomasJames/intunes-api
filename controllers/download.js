const ytdl = require("ytdl-core");
const fs = require("fs");

const getOptions = (mediaType) => {
  if (mediaType.toLowerCase() === "audio") {
    return {
      quality: "highestaudio",
      filter: "audioonly",
    };
  }
  return {
    quality: "highest",
    filter: "videoandaudio",
  };
};

exports.downloadMedia = (req, res) => {
  //Checks for proper request
  if (!req.body || req.body === null)
    res.status(400).json({ message: "Null body received!" });
  const link = req.body.link;
  if (!link || link === undefined)
    res.status(400).json({ message: "Invalid or no link received!" });
  const mediaType = req.body.mediaType;
  if (!mediaType || mediaType === undefined)
    res.status(400).json({ message: "Invalid or no media type received!" });
  const fileName = mediaType === "audio" ? "audio.mp3" : "video.mp4";
  const options = getOptions(mediaType);
  ytdl(link, options)
    .pipe(fs.createWriteStream(fileName))
    .on("finish", () => {
      res.status(201).json({ message: "Download is successful!" });
    })
    .on("error", (error) => {
      res.status(503).json({ message: "Something went wrong", error });
    });
};
