import express from 'express'
const preRoute = express.Router()

import { preOrdercon,getPreOrder, updatePreOrder, deletePreOrder } from '../controller/preOrderController.js'

preRoute.post('/register',preOrdercon)
preRoute.get('/getPreorder',getPreOrder)
preRoute.put('/:id/name',updatePreOrder)
preRoute.delete('/:id', deletePreOrder);

export default preRoute;