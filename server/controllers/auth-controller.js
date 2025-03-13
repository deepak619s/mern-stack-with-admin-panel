const User = require("../models/user-model");
// const bcrypt = require("bcryptjs");

// =======================
//    Home Logic
// =======================

const home = async (req, res) => {
  try {
    res.status(200).send("Hello Home Page Bro");
  } catch (error) {
    console.log(error);
  }
};

// =======================
//    Register Logic
// =======================

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    //? Hashing the password :-
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      // password: hash_password,
      password,
    });

    res.status(201).json({
      mssg: "registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("Internal Server Error");
    next(error);
  }
};

// =======================
//    User Login Logic
// =======================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials Deep" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        mssg: "login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// ==================================
//   To Send User Data - User Logic
// ==================================

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
