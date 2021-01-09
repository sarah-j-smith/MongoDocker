db.createUser(
    {
        user: "mernuser",
        pwd: "mernpass",
        roles: [
            {
                role: "readWrite",
                db: "mernauth"
            }
        ]
    }
);