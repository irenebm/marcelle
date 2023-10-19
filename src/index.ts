import '@marcellejs/core/dist/marcelle.css';
import * as marcelle from '@marcellejs/core';

const input = marcelle.sketchPad();

const myDashboard = marcelle.dashboard({
    title: 'My First Tutorial',
    author: 'Myself',
  });

myDashboard.page('Data Management').sidebar(input);

myDashboard.show();
