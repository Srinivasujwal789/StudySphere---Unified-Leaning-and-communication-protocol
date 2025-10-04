import React, { useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const VideoCall = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    const startMedia = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
    };
    startMedia();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Video Call</h2>
      <div className="flex space-x-4">
        <video ref={localVideoRef} autoPlay muted className="w-1/2 border" />
        <video ref={remoteVideoRef} autoPlay className="w-1/2 border" />
      </div>
      <p className="mt-4 text-gray-500">WebRTC signaling via Socket.IO</p>
    </div>
  );
};

export default VideoCall;
