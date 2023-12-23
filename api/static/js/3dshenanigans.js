import {Application} from '@splinetool/runtime';

const blender = document.getElementById('blender');
const blenderApp = new Application(blender);
blenderApp.load('https://prod.spline.design/8kC6LukeLPjvsmAy/scene.splinecode');


const FlowMaster = document.getElementById('FlowMaster');
const FlowApp = new Application(FlowMaster);
FlowApp.load('https://prod.spline.design/SpkJeHkl37v2AY-9/scene.splinecode');

const DCR = document.getElementById('DCR');
const DCRApp = new Application(DCR);
DCRApp.load('https://prod.spline.design/rTg1TthgVaxRD4sO/scene.splinecode');