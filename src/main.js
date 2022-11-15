import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@ui-kit/styles/dist/style.css';
import '@ui-kit/components/styles.css';
import { 
    CnsComponentButton, 
    CnsComponentInput, 
    CnsComponentAlert,
    CnsComponentHeading,
  } from '@ui-kit/components/vue';
const app = createApp(App)
app.use(CnsComponentHeading)
app.use(CnsComponentInput)
app.use(CnsComponentAlert)
app.use(CnsComponentButton)
app.mount('#app')