import {useState, useEffect} from "react";


// id, size, x, y, opacity, AnimationDuration
export default function StarBackground() {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        createStars();
        createMeteors();
    }, []);


    const createStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        )
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random(),
                y: Math.random(),
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    };
    const createMeteors = () => {
        const numberOfMeteors = 4;
        const newMeterors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeterors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(newMeterors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x * 100}vw`,
                        top: `${star.y * 100}vh`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`
                    }}
                />
            ))}

            {meteors.map(meteor => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 3}px`,
                        left: `${meteor.x}vw`,
                        top: `${meteor.y}vh`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`
                    }}
                />
            ))}
            

        </div>
    );
}