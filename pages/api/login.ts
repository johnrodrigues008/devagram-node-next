import type { NextApiRequest, NextApiResponse } from "next";

export default (
      req : NextApiRequest,
      res : NextApiResponse
) => {
      if(req.method === 'POST'){
            const {login, senha} = req.body;

            if(login === 'john.rodrigues008@gmail.com' &&
               senha === 'batman123'){
                        res.status(200).json({msg : 'Usuário autenticado com success!'})
            }
            return res.status(405).json({error : 'Usuario ou senha não encontrado!'})
      }
      return res.status(405).json({error: 'Metodo informado não é valido!'});
}