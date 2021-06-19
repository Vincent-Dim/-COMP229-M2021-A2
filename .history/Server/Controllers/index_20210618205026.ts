import express, { Request, Response, NextFunction, request } from 'express';

import passport from 'passport';

//create and instance of user model
import User from '../Models/user';

// Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about'  });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects'  });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services'  });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact'  });
}

//-----------------------------------------------------------------------------------------------

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
 
    return res.redirect('/contact-list');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) =>{
        // are there server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        //are there login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
    })
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage') });
    }

    return res.redirect('/contact-list');
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{

}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    request.logout();
    return res.redirect('/login');
}
