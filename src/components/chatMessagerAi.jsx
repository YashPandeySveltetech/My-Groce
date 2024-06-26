/** @format */
'use client';
import { useEffect } from 'react';

const ChatFrame = () => {
	useEffect(() => {
		const iframe = document.createElement('iframe');

		const iframeStyles = (styleString) => {
			const style = document.createElement('style');
			style.textContent = styleString;
			document.head.append(style);
		};

		iframeStyles(`
            .chat-frame {
                position: fixed;
                bottom: 50px;
                right: 50px;
                border: none;
            }
        `);

		iframe.src = 'https://chatbot-builder-chi.vercel.app/chatbot';
		iframe.classList.add('chat-frame');
		document.body.appendChild(iframe);

		const handleIframeMessage = (e) => {
			if (e.origin !== 'https://chatbot-builder-chi.vercel.app') return null;
			let dimensions = JSON.parse(e.data);
			iframe.width = dimensions.width;
			iframe.height = dimensions.height;
			iframe.contentWindow.postMessage(
				'989ca667-2cf5-4878-820b-1c23e37b0c8e',
				'https://chatbot-builder-chi.vercel.app'
			);
		};

		window.addEventListener('message', handleIframeMessage);

		return () => {
			window.removeEventListener('message', handleIframeMessage);
			document.body.removeChild(iframe);
		};
	}, []);

	return null;
};

export default ChatFrame;
