import { useState } from 'react';

function App() {
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const [answer, setAnswer] = useState<string | null>(null);

    const moveNoButton = () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setNoButtonStyle({
            transform: `translate(${randomX}px, ${randomY}px)`,
            transition: 'transform 0.3s ease'
        });
    };

    const handleYes = () => {
        setAnswer('yes');
    };

    if (answer === 'yes') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 p-4">
                <div className="text-center">
                    <img
                        src="./cute-cat-cat-cute.gif"
                        alt="Picture not found"
                        className="mx-auto mb-6 w-64"
                    />

                    <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
                        Yay! I knew it!
                    </h1>

                    <p className="text-2xl text-rose-600">
                        Can't wait to see you! ❤️
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 p-4">
            <div className="relative">
                <div className="absolute -top-8 -left-8 text-4xl opacity-20 animate-pulse">💝</div>
                <div className="absolute -bottom-8 -right-8 text-4xl opacity-20 animate-pulse delay-75">💖</div>
                <div className="absolute top-1/2 -left-12 text-3xl opacity-20 animate-pulse delay-150">💗</div>
                <div className="absolute top-1/4 -right-12 text-3xl opacity-20 animate-pulse">💓</div>

                <div className="relative bg-white rounded-3xl shadow-2xl p-10 max-w-lg border-4 border-rose-200">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-rose-300 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-rose-300 rounded-br-3xl"></div>

                    <div className="text-center mb-6">
                        <span className="text-6xl inline-block animate-pulse">❤️</span>
                    </div>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            Hello, uhm, short question… I was wondering <span className="italic">(just to make sure)</span> if you want to be my <span className="font-bold text-rose-600">Valentine</span>?
                            Because I love you <span className="font-semibold text-rose-500">very, very much</span>.
                        </p>

                        <p className="text-lg">
                            I know, I know—I'm on a trip and I'm not there <span className="text-sm text-gray-500">(my fault)</span>,
                            but I still have some lovely things planned to do with you when I'm back, if you want to.
                        </p>
                    </div>

                    <div className="my-8 flex items-center">
                        <div className="flex-1 border-t-2 border-rose-200"></div>
                        <span className="px-4 text-2xl">💌</span>
                        <div className="flex-1 border-t-2 border-rose-200"></div>
                    </div>

                    <div className="text-center space-y-6">
                        <p className="text-xl font-semibold text-gray-800">
                            Please submit your answer:
                        </p>

                        <div className="flex gap-4 justify-center items-center relative h-20">
                            <button
                                onClick={handleYes}
                                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-10 py-4 rounded-5 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-rose-600 hover:to-pink-700"
                            >
                                Yes! 💕
                            </button>

                            <button
                                onMouseEnter={moveNoButton}
                                onClick={moveNoButton}
                                style={noButtonStyle}
                                className="bg-gray-300 text-gray-600 px-10 py-4 rounded-5 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 absolute"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;