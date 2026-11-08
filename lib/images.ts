const shimmer = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0B2545"/><stop offset="1" stop-color="#13A3A0"/></linearGradient></defs><rect width="16" height="10" fill="url(#g)"/></svg>`;

export const BLUR_PLACEHOLDER = `data:image/svg+xml;base64,${btoa(shimmer)}`;
