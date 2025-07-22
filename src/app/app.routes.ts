import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export const routes: Routes = [

    {path: '', component:Home},
    {path: 'nosotros', component:About},
    {path: 'productos', component:Products},
    {path: 'contacto', component:Contact},
    {path: 'header', component:Header},
    {path: 'footer', component:Footer},
    {path: '**', redirectTo: ''} // Redirect to home for any unknown routes
];
