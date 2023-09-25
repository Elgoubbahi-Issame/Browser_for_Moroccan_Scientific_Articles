export const gridAnimated = {
    show: { transition: { staggerChildren: 0.1 } },
    hide: { transition: { staggerChildren: 0.5, staggerDirection: -1 } }
};

export const Cardanimated = {
    show: { x: [3300, 0], opacity: [0, 1] },
    hide: { x: [0, 3300], opacity: [1, 0] }
};
export const Navdanimated = {
    show: { transition: { staggerChildren: 0.3 }, y: [-300, 0] },
    hide: { transition: { staggerChildren: 0.9 }, y: [0, -300] }
};
