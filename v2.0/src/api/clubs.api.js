const data = [
    { match_number: 1, location: "Ustralia", datetime: "10/5/1205" },
    { match_number: 2, location: "My", datetime: "10/5/1205" },
    { match_number: 3, location: "Phap", datetime: "10/5/1255" },
    { match_number: 4, location: "Bo dao nha", datetime: "12/5/1205" },
    { match_number: 5, location: "Y", datetime: "10/5/1202" },
    { match_number: 6, location: "Viet nam", datetime: "10/5/12023" },
    { match_number: 7, location: "Canada", datetime: "10/5/21" },
    { match_number: 8, location: "Tay ban nha", datetime: "10/5/2145" },
    { match_number: 9, location: "Myanma", datetime: "10/5/214" },
    { match_number: 10, location: "Cuba", datetime: "10/5/12" },
    { match_number: 11, location: "Thai Lan", datetime: "10/5/454" },
    { match_number: 12, location: "Thuy si", datetime: "10/5/3323" },
    { match_number: 13, location: "Ajax", datetime: "10/5/212" },
    { match_number: 14, location: "Nuoc eo co ten", datetime: "10/24/1205" },
    { match_number: 15, location: "Indo", datetime: "10/5/1205" },
];

export const fetchByName = name => {
    return new Promise((resolve, reject) => {
        const filterData = data.filter(fifa => {
            return fifa.location.toUpperCase().indexOf(name.toUpperCase()) !== -1;
        });
        setTimeout(() => {
            if (filterData.length > 0) resolve(filterData);
            else {
                reject({
                    message: "No clubs found",
                });
            }
        }, 2000);
    });
};