import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contact controller
import { DisplayAddPage, DisplaycontactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact';

/* GET /contact-list page. */
router.get('/', DisplaycontactListPage);

/* GET - display /contact-list/add page. */
router.get('/add', DisplayAddPage);

/* GET - display /contact-list/edit/:id page. */
router.get('/edit/:id', DisplayEditPage);

/* POST - process /contact-list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /contact-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);