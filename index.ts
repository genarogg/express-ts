// Limpia la consola
import clear from "console-clear";
clear();

import express from 'express';

const app = express();

import middlewareBasicos from "@config/middlewareBasicos";
middlewareBasicos(app);

import viewEngine from "@config/viewEngine";
viewEngine(app);

import router from "@config/router";
router(app);

import startServer from "@config/startServer";
startServer(app);