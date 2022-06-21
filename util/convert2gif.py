import os
from pathlib import Path
from moviepy.editor import VideoFileClip

def convert_gif(videopath=None):
    """ Converts MP4 files to GIF files.
        Input Path of MP4 Video to Convert.
        Returns Gif Version of MP4 File """

    if videopath != None:
        try:
            videoClip = VideoFileClip(videopath)
            gifpath = videopath.replace(".mp4", ".gif")
            videoClip.write_gif(gifpath)
            print("Success! MP4 to Gif Conversion Complete")
        except Error as e:
            print("Conversion Failed Due to the following Error: \n", e)




if __name__ == '__main__':
    filepath = input("Enter path of video to convert: ")
    convert_gif(videopath=filepath)
