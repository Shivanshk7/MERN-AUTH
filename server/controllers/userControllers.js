import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;
    //const { userId } = req.userId;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,

        // added fields so frontend get their details
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        gender: user.gender,
        profession: user.profession,
        bio: user.bio,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// update profile
export const updateProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const { firstName, lastName, age, gender, profession, bio } = req.body;
    const updated = await userModel.findByIdAndUpdate(
      userId,
      { firstName, lastName, age, gender, profession, bio },
      { new: true }
    );
    if (!updated) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      message: "Profile updated successfully",
      userData: updated,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
