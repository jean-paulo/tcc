import {Router} from 'express';
import { User } from '../entities/User';

import { getRepository } from 'typeorm';

const routes = Router();

//Rota de criação de usuário
routes.post('/create', async(req , res) => {
  const {id, name, email, password} = req.body;

  let user = new User();

  user = {
    id,
    name,
    email,
    password
  }

  let usersRepository = getRepository(User);
  try{
    await usersRepository.save(user);
  }
  catch (error) {
    console.log(error);
  }

  res.json(user);

})

export default routes;