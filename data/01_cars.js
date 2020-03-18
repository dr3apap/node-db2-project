exports.seed = async function (knex) {



    const dummyData = [
        {
            VIN: 87903,
            mileage: 23098,
            make: 'BMW',
            model: '2013'
                },
        {
            VIN: 90476,
            mileage: 14780,
            make: 'TOYOTA',
            model: '2017'
                },
        {
            VIN: 90836,
            mileage: 10822,
            make: 'HONDA',
            model: '2020'
                }

      ];


    // Deletes ALL existing entries
    await knex('cars').del();

    return knex('cars').insert(dummyData);
};
