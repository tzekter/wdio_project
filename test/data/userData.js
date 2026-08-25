export const validUser = {
    firstName: 'Test',
    lastName: 'User',
    dob: '2002-03-04',
    country: 'Ukraine',
    postalCode:'01001',
    houseNumber: '10',
    street: 'Zelena',
    city: 'Lviv',
    state: 'Lvivska',
    phone: '380501234567',
    password: 'Kv7$maRuN2!',
    getUniqueEmail(){
        return `testuser_${Date.now()}@gmail.com`;
    }
}