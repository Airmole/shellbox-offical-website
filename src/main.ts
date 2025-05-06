import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Clarity from '@microsoft/clarity';

const projectId = "oyiz4arvwn"
Clarity.init(projectId);
createApp(App).mount('#app')
