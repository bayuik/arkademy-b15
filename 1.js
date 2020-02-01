const myFunction = (string, angka) => { 
    let bio = {
    name : string,
    age : angka,
    address : 'Rt 10 Rw 03 Mlideg Kedungadem Bojonegoro',
    hobbies : ['lari pagi', 'membaca buku self improvement', 'pencak silat'],
    is_married : false,
    list_school : [{
            sd : 'MI Nurul Islamiyah Mlideg',
        year_in : 2007,
        year_out : 2013,
        major : null
        },
        {
        smp : 'MTs Muhammadiyah 2 Kedungadem',
        year_in : 20013,
        year_out : 2016,
        major : null
        },
        {
        sma : 'SMAN 1 Kedungadem',
        year_in : 2016,
        year_out : 2019,
        major : 'IPA'
    }],
    skills : [{
        skill_name : 'msWord',
        level : 'advanced'
    },
    {
        skill_name : 'javascript',
        level : 'beginner'
    },
    {
        skill_name : 'python',
        level : 'beginner'
    }],
    interest_in_coding : true}

    return JSON.stringify(bio);
}
console.log(myFunction('Bayu Indra Kusuma', 19));