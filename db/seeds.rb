u = User.find_or_initialize_by(email: "user@test.com")
u.password = "123456"
u.save
