const mongoose = require("mongoose");
const Role = require("../models/role.model");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database!");

    // Seed roles
    const roles = ["user", "admin", "moderator"];
    for (let roleName of roles) {
      const existingRole = await Role.findOne({ name: roleName });
      if (!existingRole) {
        await new Role({ name: roleName }).save();
        console.log(`Role '${roleName}' added.`);
      }
    }

    // Seed admin user
    const adminUser = await User.findOne({ username: "admin" });
    if (!adminUser) {
      const password = bcrypt.hashSync("adminpassword", 8);
      const user = new User({
        username: "admin",
        email: "admin@example.com",
        password,
      });

      const adminRole = await Role.findOne({ name: "admin" });
      user.roles = [adminRole._id];
      await user.save();

      console.log("Admin user added: username 'admin', password 'adminpassword'.");
    }

    mongoose.disconnect();
    console.log("Seeding completed. Disconnected from the database.");
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedDatabase();
