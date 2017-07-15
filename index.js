import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreviewHolder from 'image-preview/lib/ImagePreviewHolder';

const imagePreviewConfig = {
        leftArrowIcon: <span>◀</span>,
    rightArrowIcon: <span>▶</span>,
    closeIcon: <span>&times;</span>,
    iconFontSize: '2em'
};

ReactDOM.render(<ImagePreviewHolder config={imagePreviewConfig} />, document.getElementById('imagePreview'));

