export class Company {
    constructor(
        public name: string,
        public websiteUrl: string,
        public description: string,
        public location: string,
        public phoneNumber: string,
        public companySize: string,
        public numberOfEmployees: number,
        public photoUrl: string,
        public fastResponse: boolean,
    ) { }
}
