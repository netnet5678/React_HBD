/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "../Components/MusicPlayer.css";
import audio from "../image/Please be true.mp3"
import song from "../image/song.png"

const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    return (
        <div className="container m-auto">
            <div className="music-player bg-red-100">
                <div className="music-info text-black">
                    <img
                        src={song}
                        alt="Album Cover"
                        className="cover-art"
                    />
                    <div className="song-details m-auto text-gray">
                        <h3>Please Be True</h3>
                        <p>LANDOKMAL</p>
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    src={audio}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                ></audio>
                <div className="controls">
                    <span className="current-time">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        className="progress-bar"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                    />
                    <span className="duration">{formatTime(duration)}</span>
                </div>
                <div className="buttons">
                    <button className="prev-button">⏮</button>
                    <button className="play-button" onClick={togglePlayPause}>
                        {isPlaying ? "⏸" : "▶️"}
                    </button>
                    <button className="next-button">⏭</button>
                </div>
            </div>
        </div>
    );
};

export default Audio;
