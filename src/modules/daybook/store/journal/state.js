
export default () =>  ({
    isLoading: true,
    entries: [{
        date: new Date().toDateString(),
        id: new Date().getTime(),
        picture: null,
        text: 'En un lugar de la mancha',
    },
    {
        date: new Date().toDateString(),
        id: new Date().getTime() + 1000,
        picture: null,
        text: 'de cuyo nombre no quiero acordarme',
    },
    {
        date: new Date().toDateString(),
        id: new Date().getTime() + 500,
        picture: null,
        text: 'Vivia un viejo hidalgo',
    },
    ]
})