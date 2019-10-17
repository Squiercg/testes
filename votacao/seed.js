window.Seed = (function () {
    const cervejas = [
        {
            id: 1,
            title: 'Pilsen',
            description: 'Padrao',
            url: '#',
            votes: 16,
            avatar: 'public/images/avatars/daniel.jpg',
            submissionImage: 'public/images/submissions/image-yellow.png',
        },
        {
            id: 2,
            title: 'IPA',
            description: 'Indian Pale Ale',
            url: '#',
            votes: 11,
            avatar: 'public/images/avatars/kristy.png',
            submissionImage: 'public/images/submissions/image-rose.png',
        },
        {
            id: 3,
            title: 'APA',
            description: 'American Pale Ale',
            url: '#',
            votes: 17,
            avatar: 'public/images/avatars/veronika.jpg',
            submissionImage: 'public/images/submissions/image-steel.png',
        },
        {
            id: 4,
            title: 'Weiss',
            description: 'Cerveja de Trigo',
            url: '#',
            votes: 9,
            avatar: 'public/images/avatars/molly.png',
            submissionImage: 'public/images/submissions/image-aqua.png',
        }
    ];

    return { cervejas: cervejas };
}());