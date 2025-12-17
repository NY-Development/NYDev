const socialKeys = [
  "linkedin",
  "github",
  "instagram",
  "youtube",
  "x",
  "facebook",
  "telegram",
  "website",
];

const links = {};

socialKeys.forEach((key) => {
  if (req.body[key]) {
    links[key] = req.body[key];
  }
});

const member = await Member.create({
  name: req.body.fullName,
  role: req.body.role,
  bio: req.body.bio,
  photoUrl,
  links,
  createdByInvite: true,
});
res.status(201).json({ message: "Member enrolled successfully", member });