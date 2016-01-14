import { faker } from 'ember-cli-mirage';

export default [
    {
        id: 1,
        title: 'Hostile Takeover',
        description: "It's just a game ;-)",
        image: '/stefanos.png',
        builder() { faker.random.uuid(); },
        productType: 'Business Cards'
    },
    {
        id: 2,
        title: 'Christmas',
        description: "It's the most wonderful time of year",
        image: '/christmas.png',
        builder() { faker.random.uuid(); },
        productType: 'Note Cards'
    },
    {
        id: 3,
        title: 'Love Hearts',
        description: "House warming ice breaker",
        image: '/dream_boy.png',
        builder() { faker.random.uuid(); },
        productType: 'Minicards'
    },
    {
        id: 4,
        title: 'Phoebe Algeo',
        description: "Cute baby. It's not my baby.",
        image: '/phoebe.png',
        builder() { faker.random.uuid(); },
        productType: 'Postcards'
    },
    {
        id: 5,
        title: 'Fountaine',
        image: '/fountaine.png',
        description: "Mega Unicorn Startup",
        builder() { faker.random.uuid(); },
        productType: 'Postcards'
    }
];
