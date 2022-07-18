#### Setup di local environment
- Clone dari repository.
- Install dependency: `npm install`

#### Migrasi sequelize
- Buat database dengan nama `telkom_sigma` / bisa setting di .env
- Install sequelize cli `npm install --save-dev sequelize-cli`
- Jalankan migrasi `npx sequelize-cli db:migrate`