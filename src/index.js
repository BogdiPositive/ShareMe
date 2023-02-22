import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App.js'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<Router>
    <GoogleOAuthProvider  clientId="91285919560-u1sejok0dms0jskp3vdknovao2u4c25n.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
    </Router>)