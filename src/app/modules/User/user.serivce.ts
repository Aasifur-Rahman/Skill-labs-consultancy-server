const createUser = async () => {
  const { name, email, password, role, phone } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
      phone
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};