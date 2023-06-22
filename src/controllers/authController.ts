import { Request, Response } from "express";
import { userService } from "../services/userService";
import { jwtService } from "../services/jwtService";

export const authController = {
  // POST /auth/register
  register: async (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      email,
      password,
      responsability,
      departmentId,
    } = req.body;

    try {
      const userAlreadyExists = await userService.findByEmail(email);

      if (userAlreadyExists) {
        throw new Error("Este e-mail já está em uso!");
      }

      const user = await userService.create({
        firstName,
        lastName,
        email,
        password,
        responsability,
        departmentId,
        role: "user",
      });

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await userService.findByEmail(email);

      if (!user)
        return res.status(404).json({ message: "E-mail não registrado!" });

      user.checkPassword(password, (err, isSame) => {
        if (err) return res.status(400).json({ message: err.message });

        if (!isSame)
          return res.status(401).json({ message: "Senha incorreta!" });

        // payload sao as propriedades que vao ser geradas dentro do token, OBS: nao colocar informacoes importantes dos usuarios
        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email,
        };

        const token = jwtService.signToken(payload, "7d"); // 7 dias

        return res.json({ authenticated: true, ...payload, token });
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
