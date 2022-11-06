import db from "../db.js";

class UserController {
  async createUser(req, res) {
    try {
      const { name, surname } = req.body;
      const newPerson = await db.query(
        "INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *",
        [name, surname]
      );
      console.log(name, surname);
      res.json(newPerson.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req, res) {}

  async getOneUser(req, res) {}

  async updateUser(req, res) {}

  async deleteUser(req, res) {}
}

// const userController = new UserController()

export const userController = new UserController();
