import { error, Stack } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


function overSizeError() {
    error({
        text: 'Слишком много совпадений! Необходимо сделать запрос более специфичным',
        maxTextHeight: 50,
        delay: 1000,
        stack: new Stack({
            dir1: 'down', dir2: 'left', // Position from the top left corner.
            firstpos1: 25, firstpos2: 25 // 90px from the top, 90px from the left.
        })
    });
}

function badRequestError() {
    error({
        text: "Совпадений не найдено",
        maxTextHeight: 50,
        delay: 1000,
    }
    );
}
export { overSizeError, badRequestError };