//localeCompare()
let countryName = 'United state of america';
let countryNameLowerCase = countryName.toLowerCase();
let toExpectedCountryName = 'United state of america'.toLowerCase();
if (countryNameLowerCase.localeCompare(toExpectedCountryName) === 0) {
    console.log(countryName.toUpperCase());
}
else {
    console.log('You are not a USA Citizen');
}